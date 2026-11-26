# 04 — Run with Docker Compose

Build and start the full stack (frontend, backend, and MongoDB) with a single command.

## Get the Project onto the Server

For a manual deployment, clone the repository on the EC2 instance and move into it:

```bash
git clone https://github.com/FeralSatyam/devops_project.git
cd devops_project
```

> Git comes preinstalled on the Ubuntu AMI. If `git` is not found, install it with `sudo apt install git`.

The GitHub Actions deployment transfers the checked-out project to EC2 automatically, so cloning is not needed for workflow deployments.

## Start Everything

From the project root (where `docker-compose.yml` is located):

```bash
docker compose up -d --build
```

| Option | Meaning |
|---|---|
| `up` | Creates and starts all services defined in `docker-compose.yml` |
| `-d` | Detached mode: runs the containers in the background |
| `--build` | Builds the `momo-frontend` and `momo-backend` images first, so code changes are included |

## Open the App

- **Locally:** `http://localhost`
- **On EC2:** `http://<instance-public-ip>`

The panipuri storefront is served at the root URL. The review API runs as a separate backend service.

## Check Status and Logs

```bash
docker compose ps                # status of the three containers
docker compose logs backend      # backend logs (e.g. "Connected to MongoDB")
```

## Inspect the Data in MongoDB

```bash
docker exec -it momo-mongo mongosh momo
```

Then, inside the MongoDB shell:

```js
db.reviews.find()
exit
```

---

**Previous:** [03 — Project Overview](03-project-overview.md) · **Next:** [05 — Manage Containers](05-manage-containers.md)
