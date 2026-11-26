
# Pani Puri House — Dockerized Shop

A panipuri shop landing page built with Vite + React and served by nginx. Docker Compose also starts the existing Node/Express review API and MongoDB services. The storefront is static; the API is available for future review features.

## Guides

Follow these in order:

| # | Guide | What it covers |
|---|---|---|
| 01 | [Create an EC2 Instance](docs/01-create-ec2-instance.md) | Launch an Ubuntu server on AWS and open port 80 (HTTP) |
| 02 | [SSH and Install Docker](docs/02-ssh-and-install-docker.md) | Connect to the server, install Docker and Compose, run Docker without `sudo` |
| 03 | [Project Overview](docs/03-project-overview.md) | Architecture, folder structure, and why the app uses multiple containers |
| 04 | [Run with Docker Compose](docs/04-run-with-docker-compose.md) | Build and start the stack, check logs, inspect MongoDB |
| 05 | [Manage Containers](docs/05-manage-containers.md) | Stop, start, remove, and rebuild containers |
| 06 | [Docker Hub](docs/06-docker-hub.md) | Push images to Docker Hub and pull them on another machine |
| 07 | [Data Persistence with Volumes](docs/07-volumes.md) | How the `mongo-data` volume keeps reviews safe |

## Quick Start

```bash
docker compose up -d --build
```

Then open `http://localhost` (or `http://<instance-public-ip>` on EC2).

Run the frontend checks locally with `cd frontend && npm ci && npm test && npm run build`. The GitHub Actions workflow runs those checks and builds the Docker images.

## Deploy to EC2 with GitHub Actions

Add these repository secrets under **Settings → Secrets and variables → Actions**:

- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`

The AWS credentials must be allowed to create/update the CloudFormation stack and its EC2 networking and instance resources, manage the instance security-group SSH rule, and read the generated private key from SSM Parameter Store. Optionally add an `AWS_REGION` repository variable; it defaults to `us-east-1`.

Push changes to `main` or run **Deploy Panipuri shop to EC2** from the Actions tab. The workflow tests and builds the app, creates or updates the `panipuri-shop-stack` CloudFormation stack, transfers the project, and starts it with Docker Compose. The EC2 instance stays running after deployment; the workflow summary contains the live URL. SSH is allowed only from the active GitHub runner during deployment, then revoked.

The stack creates billable AWS resources. Delete `panipuri-shop-stack` in CloudFormation when you no longer need the deployment; deleting it also deletes the instance and its MongoDB data.

## Command Cheat Sheet

| Task | Command |
|---|---|
| Build and start everything | `docker compose up -d --build` |
| Show container status | `docker compose ps` |
| View backend logs | `docker compose logs backend` |
| Stop containers | `docker compose stop` |
| Start stopped containers | `docker compose start` |
| Remove containers (keep data) | `docker compose down` |
| Remove containers and data | `docker compose down -v` |
| Open the MongoDB shell | `docker exec -it momo-mongo mongosh momo` |
| List running containers | `docker ps` |
| List all containers | `docker ps -a` |
| List images | `docker images` |
