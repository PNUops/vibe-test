# Build stage
FROM amazoncorretto:17-alpine as build

WORKDIR /app

# Copy gradle wrapper
COPY gradlew .
COPY gradle gradle/

# Make gradlew executable
RUN chmod +x ./gradlew

# Copy build files
COPY build.gradle .
COPY settings.gradle .

# Download dependencies
RUN ./gradlew dependencies --no-daemon

# Copy source code
COPY src src/

# Build the application
RUN ./gradlew build --no-daemon -x test

# Runtime stage
FROM amazoncorretto:17-alpine

# Install wget for health check
RUN apk add --no-cache wget

WORKDIR /app

# Copy built jar from build stage
COPY --from=build /app/build/libs/*.jar app.jar

# Expose port 8080
EXPOSE 8080

# Set the startup command
ENTRYPOINT ["java", "-jar", "app.jar"]