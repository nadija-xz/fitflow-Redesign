# Technology Stack Summary — FitFlow Redesign

_IT3060 HCI, Lab Exercise 05 — Activity 1 & 2 summary_

## Frontend: React Native (+ React Native Web)

Recommended over Flutter, Kotlin Multiplatform, and Swift/SwiftUI.

- Fastest realistic path to a single codebase covering iOS, Android and web — critical for the
  Minimum Lovable Product timeline.
- Largest ecosystem of production-ready libraries for Firebase, real-time sockets, and
  on-device ML (TensorFlow Lite via `react-native-fast-tflite` / ML Kit bindings).
- Proven support for complex, gesture-rich animations needed for the AI recommendation card,
  drag-and-drop workout builder, and social feed.
- Native modules used for the performance-critical computer-vision food-recognition path.

Swift/SwiftUI was excluded for being iOS-only. Kotlin Multiplatform was excluded because its
UI is not shared (two UI implementations still needed) and its web story (Compose Multiplatform
for Web) is still experimental.

## Backend: Node.js / Express

Recommended over Python/FastAPI and Go.

- Shares a language/stack (JS/TS) with the React Native frontend — fastest onboarding, no
  context switching.
- Excellent real-time capability (Socket.io, native WebSockets) for the social feed and live
  challenge updates.
- Large ecosystem (npm) and gentle learning curve for JS-fluent teams.

## Databases: Hybrid — Firestore/Realtime DB + PostgreSQL

- **Firestore / Realtime Database**: social feed, activity data, real-time/semi-structured data —
  best-in-class native real-time support.
- **PostgreSQL**: users, workouts, and health-sensitive records — relational integrity, ACID
  guarantees, audit-friendly, required because Firebase alone is not HIPAA-eligible by default.

## Authentication: Firebase Auth

- Quickest, closest integration with the real-time Firebase/React Native stack.
- Hardened with Firestore security rules, field-level encryption, and regulated health
  information kept only in the protected PostgreSQL database to satisfy GDPR/CCPA.

## AI: TensorFlow Lite (on-device) + Cloud ML

- On-device TensorFlow Lite for adaptive workout personalization (low latency, offline-capable).
- Cloud ML service for heavier models and computer-vision food recognition, isolated from the
  main API for independent scaling.

Full scoring tables: see [comparison-matrix.md](comparison-matrix.md).
