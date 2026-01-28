.PHONY: dev prod down logs shell build clean rebuild help

# Variables
COMPOSE = docker compose
DEV_PROFILE = --profile dev
PROD_PROFILE = --profile prod

# Couleurs pour l'affichage
CYAN = \033[0;36m
GREEN = \033[0;32m
YELLOW = \033[0;33m
NC = \033[0m # No Color

## help: Affiche l'aide
help:
	@echo ""
	@echo "$(CYAN)Quantum Computing - Commandes disponibles$(NC)"
	@echo ""
	@echo "$(GREEN)Développement:$(NC)"
	@echo "  make dev          Lance le serveur de développement (hot-reload)"
	@echo "  make dev-build    Rebuild et lance en développement"
	@echo ""
	@echo "$(GREEN)Production:$(NC)"
	@echo "  make prod         Lance le serveur de production"
	@echo "  make prod-build   Rebuild et lance en production"
	@echo "  make build        Build l'image de production uniquement"
	@echo ""
	@echo "$(GREEN)Gestion:$(NC)"
	@echo "  make down         Arrête tous les conteneurs"
	@echo "  make logs         Affiche les logs (tous les conteneurs)"
	@echo "  make logs-dev     Affiche les logs du conteneur dev"
	@echo "  make logs-prod    Affiche les logs du conteneur prod"
	@echo "  make shell        Ouvre un shell dans le conteneur dev"
	@echo "  make shell-prod   Ouvre un shell dans le conteneur prod"
	@echo ""
	@echo "$(GREEN)Nettoyage:$(NC)"
	@echo "  make clean        Supprime conteneurs, images et volumes"
	@echo "  make prune        Nettoie les ressources Docker inutilisées"
	@echo ""

## dev: Lance le serveur de développement
dev:
	@echo "$(CYAN)Lancement en mode développement...$(NC)"
	$(COMPOSE) $(DEV_PROFILE) up

## dev-build: Rebuild et lance en développement
dev-build:
	@echo "$(CYAN)Rebuild et lancement en mode développement...$(NC)"
	$(COMPOSE) $(DEV_PROFILE) up --build

## dev-detach: Lance le serveur de développement en arrière-plan
dev-detach:
	@echo "$(CYAN)Lancement en mode développement (détaché)...$(NC)"
	$(COMPOSE) $(DEV_PROFILE) up -d

## prod: Lance le serveur de production
prod:
	@echo "$(GREEN)Lancement en mode production...$(NC)"
	$(COMPOSE) $(PROD_PROFILE) up -d
	@echo "$(GREEN)Serveur lancé sur http://localhost:3000$(NC)"

## prod-build: Rebuild et lance en production
prod-build:
	@echo "$(GREEN)Rebuild et lancement en mode production...$(NC)"
	$(COMPOSE) $(PROD_PROFILE) up --build -d
	@echo "$(GREEN)Serveur lancé sur http://localhost:3000$(NC)"

## build: Build l'image de production
build:
	@echo "$(CYAN)Build de l'image de production...$(NC)"
	$(COMPOSE) $(PROD_PROFILE) build

## down: Arrête tous les conteneurs
down:
	@echo "$(YELLOW)Arrêt des conteneurs...$(NC)"
	$(COMPOSE) $(DEV_PROFILE) $(PROD_PROFILE) down

## logs: Affiche les logs de tous les conteneurs
logs:
	$(COMPOSE) $(DEV_PROFILE) $(PROD_PROFILE) logs -f

## logs-dev: Affiche les logs du conteneur dev
logs-dev:
	$(COMPOSE) $(DEV_PROFILE) logs -f quantum-dev

## logs-prod: Affiche les logs du conteneur prod
logs-prod:
	$(COMPOSE) $(PROD_PROFILE) logs -f quantum-prod

## shell: Ouvre un shell dans le conteneur dev
shell:
	docker exec -it quantum-computing-dev sh

## shell-prod: Ouvre un shell dans le conteneur prod
shell-prod:
	docker exec -it quantum-computing-prod sh

## clean: Supprime conteneurs, images et volumes
clean:
	@echo "$(YELLOW)Nettoyage complet...$(NC)"
	$(COMPOSE) $(DEV_PROFILE) $(PROD_PROFILE) down -v --rmi local
	@echo "$(GREEN)Nettoyage terminé$(NC)"

## prune: Nettoie les ressources Docker inutilisées
prune:
	@echo "$(YELLOW)Nettoyage des ressources Docker inutilisées...$(NC)"
	docker system prune -f
	@echo "$(GREEN)Nettoyage terminé$(NC)"

## restart-dev: Redémarre le conteneur dev
restart-dev:
	@echo "$(CYAN)Redémarrage du conteneur dev...$(NC)"
	$(COMPOSE) $(DEV_PROFILE) restart

## restart-prod: Redémarre le conteneur prod
restart-prod:
	@echo "$(GREEN)Redémarrage du conteneur prod...$(NC)"
	$(COMPOSE) $(PROD_PROFILE) restart

## status: Affiche le statut des conteneurs
status:
	$(COMPOSE) $(DEV_PROFILE) $(PROD_PROFILE) ps

# Commande par défaut
.DEFAULT_GOAL := help
