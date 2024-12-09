
==== LES CONCEPTS CLÉS 🔑 ====

1. Repository (Dépôt)
C'est comme un dossier de projet qui contient tous vos fichiers
Peut être public ou privé
Stocke l'historique complet des modifications

2. Fonctionnalités principales
✷Commit: Une sauvegarde de vos modifications

✷ Branch (Branche):
Version parallèle de votre code
Permet de travailler sur des fonctionnalités sans affecter le code principal

✷ Pull Request:
Demande d'intégration de vos modifications
Permet la revue de code par d'autres développeurs

✷ Fork:
Copie personnelle d'un projet
Permet de contribuer à des projets open source


                                        ==== COMMANDES GIT ESSENTIELLES 💻 ====



==== GIT =====
    @

# Cloner un repository
git clone https://github.com/utilisateur/projet.git



                                ==== BRANCHE GIT ==== 🌲🌲  



Voici une explication des différentes branches dans Git :

1. Branche principale (main/master) :
C'est la branche par défaut dans un dépôt Git. Traditionnellement, elle s'appelait master, mais de nombreux projets utilisent maintenant main. C'est généralement la branche stable où le code est prêt pour la production.

2. Branches de développement (feature branches) :
Ces branches sont créées pour développer de nouvelles fonctionnalités. Elles sont souvent nommées selon la fonctionnalité en cours de développement, par exemple feature/nouvelle-fonctionnalité. Une fois la fonctionnalité terminée, elle est fusionnée dans la branche principale.

3. Branches de correction de bogues (bugfix branches) :
Similaires aux branches de fonctionnalités, mais elles sont spécifiquement utilisées pour corriger des bogues. Elles peuvent être nommées bugfix/nom-du-bogue.

4 . Branches de version (release branches) :
Ces branches sont utilisées pour préparer une nouvelle version du logiciel. Elles permettent de stabiliser le code avant la publication. Par exemple, une branche pourrait être nommée release/1.0.0.

5. Branches de maintenance (hotfix branches) :
Utilisées pour des corrections urgentes sur la branche principale. Elles permettent de résoudre rapidement des problèmes critiques sans attendre la prochaine version. Par exemple, hotfix/urgent-fix.

6 .Branches expérimentales :
Ces branches sont utilisées pour tester de nouvelles idées ou des changements majeurs qui ne sont pas encore prêts à être fusionnés dans la branche principale. Elles peuvent être supprimées après les tests.


Les branches permettent de travailler sur différentes fonctionnalités ou corrections de manière isolée, facilitant ainsi la collaboration et la gestion des versions dans un projet. Si vous avez besoin de plus de détails sur un aspect particulier, n'hésitez pas à demander !


Gestion des branches : 

# Créer une nouvelle branche 🌲
git checkout -b ma-nouvelle-branche

# Travailler sur la branche 🔨
git add .
git commit -m "Ajout nouvelle feature"

# Basculer vers la branche main
git checkout main

# Fusionner avec main quand c'est prêt 🔄
git merge votre-branche    

# Récupérer les changements du remote
git pull origin main



# Supprimer une branche
git branch -d votre-branche




                                    ==== CHECKOUT ☀⥹ ==== 🔄



# 1. Revenir à la branche main locale 🔄
git checkout main

# 2. Récupérer les changements du remote 🔄
git fetch origin main

# 3. Réinitialiser votre branche main locale pour qu'elle corresponde exactement à origin/main
git reset --hard origin/main

# Revenir à une version précédente 🔄
git checkout ma-branche-precedente





# Ajouter des modifications
git add .

# Créer un commit
git commit -m "Description des modifications"

# Envoyer les modifications sur GitHub
git push origin ma-nouvelle-branche