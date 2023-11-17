# README pour le Projet Kanban
![Apperçu de l'app](/tableauKanban.png)
## Description du Projet

Ce projet est une application de tableau Kanban développée avec Vue.js et Pinia. Elle permet de créer et de gérer des colonnes de tâches, d'ajouter, de modifier, et de supprimer des tâches dans ces colonnes. L'interface utilisateur est conçue pour être simple et intuitive, offrant une expérience fluide pour la gestion des tâches.

## Prérequis

- Node.js
- npm

## Installation

1. **Cloner le dépôt git :**
    
    `git clone [URL_DU_DEPOT]`
    
2. **Installer les dépendances :**
    
    `npm install`

## Lancement du Projet

Pour lancer l'application en mode développement, exécutez :

`npm run serve`

L'application sera accessible à l'adresse [http://localhost:8080].

## Structure du Projet

- `kanbanBoard.vue` : Composant principal de l'application. Il gère l'affichage des colonnes de tâches et la création de nouvelles colonnes.
- `KanbanColumn.vue` : Composant représentant une colonne individuelle dans le tableau Kanban. Il gère l'ajout et l'affichage des tâches.
- `KanbanTask.vue` : Composant représentant une tâche individuelle. Il permet l'édition et la suppression de tâches.
- `kanbanStore.js` : Store Pinia qui gère l'état global de l'application, y compris les colonnes et les tâches.

## Directives pour les Développeur.euses

- **Ajout de nouvelles fonctionnalités :** Pour ajouter de nouvelles fonctionnalités, créez un nouveau composant ou modifiez les composants existants, selon les besoins.
- **Modification de l'état :** Utilisez le store `kanbanStore` pour gérer les modifications d'état liées aux colonnes et aux tâches.
- **Styles et mise en page :** Les styles sont principalement gérés via Bootstrap. Modifiez les classes CSS si nécessaire pour personnaliser l'apparence.

## Contribution

Pour contribuer au projet, veuillez suivre les étapes suivantes :

1. Créez une branche pour votre fonctionnalité ou correction de bug.
2. Développez et testez vos modifications.
3. Soumettez une Pull Request avec une description détaillée de vos changements.

## Support

Pour toute question ou problème, veuillez ouvrir une issue sur le dépôt du projet.

---

