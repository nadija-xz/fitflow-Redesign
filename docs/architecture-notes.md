# Architecture Notes — FitFlow Redesign

_IT3060 HCI, Lab Exercise 05 — Activity 4_

See [architecture-diagram.png](architecture-diagram.png) for the full diagram.

## Key Components

- **Client layer**: React Native mobile app (iOS/Android) and React Native for Web, sharing UI
  code and business logic.
- **API Gateway / Backend**: Node.js + Express, handling authentication checks, rate limiting
  and routing to domain services.
- **Core services**: Workout Service (AI-generated plans, drag-and-drop builder), Social Service
  (feed, challenges, private circles), Nutrition Service (camera-based logging, dashboards).
- **AI Microservice**: TensorFlow Lite for on-device personalization plus a cloud ML service for
  heavier models; computer vision for food recognition uses accessible ML Kit-style pipelines,
  isolated from the main API for independent scaling.
- **Real-time layer**: Firebase Realtime Database / WebSockets powering the live social feed and
  challenge updates, feeding Firebase Cloud Messaging for push notifications.
- **Caching**: Redis, reducing repeated load on Firestore/PostgreSQL for frequently accessed
  workout and nutrition data.
- **Data layer**: Firestore for social/activity data, PostgreSQL for users, workouts and
  health-sensitive records, Cloud Storage for meal photos and media.
- **Supporting infrastructure**: GitHub Actions for CI/CD, Firebase/Mixpanel/Sentry for
  monitoring and analytics, a CDN for static web assets.

## Data Flows for Critical Features

### Personalized Workout Plans
Mobile/Web client → API Gateway → Workout Service reads the user profile from PostgreSQL and
forwards it to the AI Microservice → on-device TFLite model (or cloud model for complex cases)
returns an adaptive plan → Workout Service caches it in Redis and returns it to the client,
which renders it on the "Daily Flow" card.

### Social Sharing
Client posts an update via the Social Service → written to Firestore → propagated through the
Real-time Layer to subscribed clients (private circle members) → Push Notifications (FCM) alert
relevant users, keeping the flow low-latency and privacy-scoped to each circle.

### Nutrition Tracking
Client captures a meal photo → Nutrition Service uploads the image to Cloud Storage and forwards
it to the AI Microservice's computer-vision pipeline → recognized food items and estimated
nutrition values are returned → Nutrition Service writes the structured log to PostgreSQL
(health-adjacent data) and updates the dashboard, replacing FitFlow's previously tedious manual
entry.

## Security, Scalability & Integration Considerations

- **Security**: All communications use TLS; access controlled by Firestore security rules as
  well as row- and field-level access controls on PostgreSQL; health-related fields are
  encrypted and logged for audit purposes per GDPR/CCPA compliance; Firebase Auth provides
  short-lived tokens via the API Gateway.
- **Scalability**: Stateless Node.js microservices scale horizontally at the gateway; Firestore
  and Redis handle real-time/read-heavy traffic; the AI microservice scales independently as
  inference is the most resource-consuming task.
- **Integration**: The AI Microservice exposes a narrow internal API so backend and AI teams can
  iterate independently; CI/CD via GitHub Actions runs tests and deploys each service (frontend,
  backend, ai-service) on its own pipeline, matching the repository structure in Activity 5.
