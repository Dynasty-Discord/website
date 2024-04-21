---
title: "Documentation"
---

# DynastyCore

Le projet DynastyCore est un framework de développement de bot discords développé par Gabriel Landry aka Sportek.

## Installation

Pour faire l'installation du bot, voici les différentes étapes:

1. Récupérer l'ensemble des fichiers, s'assurer que tous les modules nécessaires ont été ajoutés dans le `src/modules/`.
2. Installer les différentes dépendances:

   - Installer [NodeJS](https://nodejs.org/en/learn/getting-started/how-to-install-nodejs) dans une version récente (testé et fonctionnel avec la v18.19.0)
   - Exécuter `npm ci` pour installer les autres dépendances (à la base de l'application).

3. Renommer le `.env.exemple` en `.env`
4. Créer votre bot sur le site de [Discord](https://discord.com/developers/applications) et mettre le token dans le `.env`
5. Exécuter les commandes : `npm run build` et `npm run prod`, le bot sera alors lancé en production.

Lors d'une modification d'une configuration, vous devez à chaque fois exécuter le `npm run build` afin que les configurations soient recopier dans le bon emplacement et ensuite vous pouvez soit redémarrer le bot, soit exécuter la commande `/core reload` sur discord ce qui va reload les configurations.

## Utilisation

Une fois le framework installé, vous pouvez commencer à développer votre application utilisant les fonctionnalités fournies par DynastyCore. Consultez la documentation pour plus d'informations sur l'utilisation du framework et les bonnes pratiques de développement.

## Fonctionnalités

### Modules

Basé sur un système de module qui ont la capacité d'être ajoutés/retirés sans aucune autre configuration. Chaque module **doit** avoir son fichier `module.json` à la base du module (`/src/modules/*/module.json`) et il est obligatoire d'avoir un `author`, un `name`, une `version`, une `description` et `emoji`.

Les dépendances seront automatiquement ajoutées dans le package.json lors du premier démarrage du bot, ne garantie pas la version si une autre version est déjà installée.

Au démarrage du bot, à la connection à Discord ("ready"), le fichier `/src/modules/*/Main.ts` sera exécuté s'il est présent.

#### Exemple de `module.json`

```json
{
  "name": "foo",
  "version": "1.0.0",
  "description": "bar",
  "author": "Sportek",
  "emoji": "📦",
  "dependencies": {
    "discord.js": "^14.14.1"
  }
}
```

### Fichiers de configuration

Le fichier `ConfigFile.ts` permet de récupérer les configurations yml et de récupérer d'en récupérer un objet JS. Cependant, lorsque vous mettez un fichier de configuration `yml` à l'intérieur d'un module, le client va automatiquement le récupérer (peu importe à quel profondeur il se trouve dans votre organisation).

De plus, dans les configuration, on retrouve la possibilité d'ajouter des "CustomMessage", c'est un type spécial qui permet de créer facilement des messages completement configurable (qui inclut les embeds et les messages normaux).

#### Voici un exemple d'utilisation à partir d'un module :

```ts
import { ExtendedClient } from "../../structure/Client";
import { Module } from "../../structure/Module";

interface Bar {
  foo: string;
}

export default new Module(async (client: ExtendedClient) => {
  const config = client.configs.getConfig<Bar>("invites.config");
  console.log(config.foo);
});
```

#### Exemple de récupération d'un CustomMessage

```ts
{...}
const configuration = client.configs
.getConfig<InviteConfig>("invites.config");
interaction.reply(
  convertCustomMessage(configuration.messages.show, {
            displayname,
            nickname,
            tag,
            username,
            invite_count: invite.invite_count.toString(),
          })
```

#### Exemple dans la configuration d'un CustomMessage

Vous pouvez vous référez [ici](https://discordjs.guide/popular-topics/embeds.html#using-an-embed-object) pour avoir davantage d'informations, mais tout est normalement possible à mettre dans les embeds, le format **JSON** doit simplement être converti en **YML**.

```yml
# CustomMessage
foo:
  content: "Petit message"
  embeds:
    - title: "Premier embed"
      description: "Description"
      # Pour mettre le title clickable et qu'il ouvre une page
      url: "url"
      # Couleur sous forme décimale (en gros il faut convertir de l'hexadécimal vers le décimal)
      timestamp: "{timestamp}"
      color: 65000
      footer:
        icon_url: "icon url"
        proxy_icon_url: "proxy icon url"
        text: "texte"
      image:
        url: "url de l'image de l'embed"
        proxy_url: "proxy url"
        height: 500
        width: 500
      thumbnail:
        url: "url"
      author:
        name: "hello"
        url: "url pour le rendre clickable"
        icon_url: "icon de sa pp"
    - title: "Deuxième embed"
      description: "Hello"
```

Dans la configuration, lorsqu'il est indiqué que: `# {member: prefix="member"} est disponible`, ça signifie que vous avez accès aux éléments suivants, avec le prefix "member".

```ts
[`${prefix}.displayname`]: member.displayName,
[`${prefix}.nickname`]: member.nickname,
[`${prefix}.tag`]: member.user.tag,
[`${prefix}.username`]: member.user.username,
[`${prefix}.mention`]: member.toString(),
[`${prefix}.id`]: member.id,
[`${prefix}.avatarURL`]: member.user.avatarURL(),
```

### Traductions

Un système de langage (traduction) est disponible dans le framework. En effet, vous pouvez facilement inclure des traductions dans des fichiers langs `src/modules/*/langs/{Langage}.yml`.

Ce système utilise le système de fichiers de configuration et va stocker le tout au même endroit. Donc, rien ne vous empêche de les récupérer grâce au système de fichiers de configuration.

```ts
import { ExtendedClient } from "../../structure/Client";
import { Module } from "../../structure/Module";
import { translate } from "../../utils/Translate";

export default new Module(async (client: ExtendedClient) => {
  // message sera alors : "bar foo" dans le cas où le fichier
  // lang contient (à l'emplacement spécifié) : "{foo} {bar}"
  const message = await translate("invites.message.bar", {
    foo: "bar",
    bar: "foo",
  });
});
```

### Base de données

Il est possible d'utiliser une base de données, Knex est installé, cependant le CLI de Knex n'est pas fonctionnel. Pour vos migrations, vous devez les créer à l'intérieur de `src/modules/*/database/migrations/{VotreMigration}.ts` Vous devez aussi typer avec un schemas (une interface quelconque) préférablement mis dans `src/modules/*/database/schemas/{VotreSchema}.ts`

### Commandes

Lorsque vous voulez rajouter des commandes à l'intérieur d'un module, vous devez le faire selon cette structure `src/modules/*/commands/{VotreFichier}.ts`. Vous pouvez utiliser les slashCommands entièrement (subcommands inclues).

#### Voici un exemple d'utilisation :

```ts
import { Command } from "../../../structure/Command";

export default new Command({
  name: "foo",
  description: "foo command",
  run: async ({ client, interaction }) => {
    interaction.followUp("Foo command");
  },
});
```

### Events

Lorsque vous voulez rajouter des commandes à l'intérieur d'un module, vous devez le faire selon cette structure `src/modules/*/events/{VotreFichier}.ts`. Vous pouvez utiliser tous les events de Discord.

#### Voici un exemple d'utilisation :

```ts
import { Event } from "../../../structure/Event";
export default new Event("ready", async (client, interaction) => {
  console.log("Bot connecté!");
});
```

### Quelques utils intéressants

#### Permission

Permet de vérifier facilement si un utilisateur a un accès (simple à mettre en configuration).

Vérifications via :

- Rôles de l'utilisateur
- Boolean pour savoir si on accepte les rôles higher ou pas
- Permissions discord (Ex: "Administrator")

#### Logger

Permet de logger facilement dans toute l'application selon divers utilisations.

```ts
Logger.custom("CUSTOM", "Foo"); // [CUSTOM] DD/MM/YYYY HH:MM:SS Foo
Logger.error("Foo"); // [ERROR] DD/MM/YYYY HH:MM:SS Foo
```

## Inspiration

Structure originalement basée sur le système d'[Alexmdz77](https://github.com/Alexmdz77) retrouvable [ici](https://github.com/Alexmdz77/DiscordBotTSV14/tree/master) et amplement amélioré.
