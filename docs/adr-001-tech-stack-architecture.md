# ADR-001: Technology Stack & Architecture for the FitFlow Redesign

**Status:** Accepted

## Context

FitFlow lost users due to a personalization gap, social isolation, and tedious manual nutrition
logging (68% onboarding drop-off). The redesign must ship AI-personalized plans, private social
circles, and camera-based nutrition tracking across iOS, Android, and web, by a mid-sized team,
under GDPR/CCPA constraints, on a startup timeline.

## Decision

Adopt React Native (+ React Native Web) for the client; Node.js/Express as the API
gateway/backend; a hybrid Firestore (real-time/social) + PostgreSQL (core/health-sensitive)
data layer; Firebase Auth hardened with security rules and encryption; a dedicated TensorFlow
Lite + cloud AI microservice; Redis caching; and GitHub Actions CI/CD.

## Consequences (Positive)

- Single JS/TS codebase across platforms and most of the stack.
- Fastest realistic path to the Minimum Lovable Product.
- Native real-time support pairs directly with the social/community features.
- Independent scaling of the AI workload.

## Consequences (Trade-offs)

- Firebase alone is not HIPAA-eligible by default, requiring the added PostgreSQL/encryption
  layer.
- The JS bridge in React Native requires native modules for the heaviest computer-vision work.
- Running both a Node service and a Python AI service adds modest operational/polyglot
  complexity.

## Alternatives Considered

- **Frontend**: Flutter (4.05/5), Kotlin Multiplatform (3.35/5), Swift/SwiftUI (3.05/5) — all
  scored lower than React Native (4.45/5) in the weighted decision matrix.
- **Backend/DB/Auth**: Node+Firebase alone (4.15/5), FastAPI+PostgreSQL+Auth0 (4.20/5),
  Go+DynamoDB+Cognito (3.80/5) — all scored lower than the recommended hybrid stack (4.35/5).

See [comparison-matrix.md](comparison-matrix.md) for full scoring.
