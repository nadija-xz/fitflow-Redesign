# Technology Comparison Matrix — FitFlow Redesign

_IT3060 HCI, Lab Exercise 05 — Activity 3_
Each option scored 1 (poor) – 5 (excellent) per criterion. Weighted score = score × weight.

## 3.1 Frontend Decision Matrix

| Criteria (Weight)            | Flutter | React Native | Kotlin MP | Swift/SwiftUI |
|-------------------------------|:-------:|:------------:|:---------:|:--------------:|
| Performance (15%)             | 4       | 4            | 5         | 5              |
| Ecosystem (10%)                | 4       | 5            | 3         | 2              |
| Dev. Speed (20%)               | 5       | 5            | 3         | 2              |
| Security (10%)                 | 4       | 4            | 5         | 5              |
| Cost / Maintainability (15%)   | 4       | 4            | 3         | 2              |
| AI/ML Support (15%)            | 3       | 4            | 3         | 5              |
| Cross-platform Reach (15%)     | 4       | 5            | 2         | 1              |
| **Weighted Total**             | **4.05**| **4.45**     | **3.35**  | **3.05**       |

**Winner: React Native (4.45/5)**

## 3.2 Backend + Database + Auth Stack Decision Matrix

| Criteria (Weight)          | A: Node+Firebase | B: FastAPI+PG+Auth0 | C: Go+DynamoDB+Cognito | D: Hybrid (Recommended) |
|------------------------------|:----------------:|:--------------------:|:------------------------:|:-------------------------:|
| Performance (15%)            | 4                 | 4                     | 5                         | 4                          |
| Scalability (15%)            | 5                 | 4                     | 5                         | 5                          |
| Dev. Speed (20%)             | 5                 | 4                     | 2                         | 5                          |
| Security/Compliance (20%)    | 3                 | 5                     | 5                         | 4                          |
| Cost (10%)                   | 4                 | 3                     | 4                         | 4                          |
| AI/ML Support (10%)          | 4                 | 5                     | 2                         | 4                          |
| Maintainability (10%)        | 4                 | 4                     | 3                         | 4                          |
| **Weighted Total**           | **4.15**          | **4.20**              | **3.80**                 | **4.35**                  |

**Winner: Hybrid stack — Node.js/Express + Firestore/Realtime DB + PostgreSQL + Firebase Auth (4.35/5)**

## Recommended Technology Stack

- **Frontend**: React Native (+ React Native Web) — 4.45/5
- **Backend**: Node.js / Express
- **Databases**: Firestore/Realtime Database (social, real-time) + PostgreSQL (core, health-sensitive)
- **Authentication**: Firebase Auth, hardened with Firestore security rules and field-level encryption
- **AI**: TensorFlow Lite (on-device) + cloud ML service for heavier models and computer vision
