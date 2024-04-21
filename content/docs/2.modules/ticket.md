---
title: Ticket
description: Module permettant la gestion de plusieurs catégories contenant plusieurs types de tickets
---

## Commande

`/ticket setup <category>` permet d'envoyer le message où les utilisateurs pourront ouvrir leurs tickets.
`/ticket close` permet de fermer un ticket*
`/ticket add <member>` permet d'ajouter un utilisateur au ticket*
`/ticket remove <member>` permet de retirer un utilisateur du ticket*
`/ticket rename <name>` permet de renommer le ticket (salon)*

\*Ces commandes doivent être effectuées à l'intérieur d'un ticket.

## Informations sur la configuration

Vous pouvez ajouter un bouton avec le customId="ticket_close_button" pour faire en sorte de fermer un ticket avec un bouton. L'utilisateur qui clique doit quand même avoir la permission d'effectuer la commande /ticket close.

Voici un exemple d'un ticket avec un bouton pour le fermer :

```yml
# Message envoyé lors de la création du ticket
# C'est un CustomMessage avec la possibilité d'utiliser les variables member
message:
  embeds:
    - title: "Welcome to your Questions Ticket"
      description: "Ask our your questions here."
  components:
    - type: 1
      components:
        - type: 2
          custom_id: "ticket_close_button"
          style: 4
          label: "Close Ticket"
          emoji: "🔒"
```
