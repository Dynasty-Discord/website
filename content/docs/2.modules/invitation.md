---
title: Invites
description: Module permettant de gérer les invitations
---

Permet de gérer l'ensemble des invitations d'un ou de plusieurs serveurs (les invitations sont comptés de façon séparés sur chacun des serveurs où est présent le bot). Permet aussi d'envoyer un message de bienvenue à l'intérieur d'un channel spécifié dans la configuration disponible [ici](./config.yml).

Les messages sont très configurable. Les messages d'erreurs et de succès respectent la structure présente [ici]("../general/config.yml").

## Commandes disponibles

- `invites leaderboard <page?: number> <ephemeral?: boolean> <updatable?: boolean>`
  Permet d'afficher le leaderboard selon une certaine page. Il est aussi possible de générer un message permanent qui va s'update automatiquement.

- `invites show <member?: GuildMember>`
  Permet d'afficher les invitations d'un membre, soit même si aucun membre spécifié.

- `invites add <member: GuildMember> <amount: number>`
  Permet d'ajouter des invitations à un membre.

- `invites remove <member: GuildMember> <amount: number>`
  Permet de retirer des invitations à un membre.

- `invites reset <member?: GuildMember> <all?: boolean>`
  Permet de réinitialiser les invitations d'un membre ou toutes les invitations du serveur.

## Configuration

Globalement, tout est assez simple pour la configuration. Petit fait spécial, dans le `leaderboard.message`, il est possible d'utiliser `{leaderboard}` qui sera remplacé par `leaderboard.rank` dans l'ordre jusqu'à atteindre la fin de la liste. Une fois la fin atteinte, il va récupérer le dernier élément comme élément par défaut. Il est ainsi possible de faire une configuration spéciale en fonction des rangs. Un exemple est présent sur la configuration de base.
