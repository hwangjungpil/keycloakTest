docker run -d --name keycloak -p 8080:8080        \
	 -e KEYCLOAK_ADMIN=admin -e KEYCLOAK_ADMIN_PASSWORD=admin        \
	 -v /Users/mac/Documents/workspace/keycloakTest/data:/opt/keycloak/data \
	 -v "/Users/mac/Documents/workspace/keycloakTest/theme/keycloakify-starter/dist_keycloak/target/keycloakify-starter-keycloak-theme-6.1.9.jar":"/opt/keycloak/providers/keycloakify-starter-keycloak-theme-6.1.9.jar" \
   	 -v "/Users/mac/Documents/workspace/keycloakTest/theme/keycloakify-starter/dist_keycloak/src/main/resources/theme/account-v1":"/opt/keycloak/themes/account-v1":rw \
   	 -v "/Users/mac/Documents/workspace/keycloakTest/theme/keycloakify-starter/dist_keycloak/src/main/resources/theme/keycloakify-starter":"/opt/keycloak/themes/keycloakify-starter":rw \
   	 -v "/Users/mac/Documents/workspace/keycloakTest/theme/keycloakify-starter/dist_keycloak/src/main/resources/theme/keycloakify-starter_retrocompat":"/opt/keycloak/themes/keycloakify-starter_retrocompat":rw \
	--restart=unless-stopped  quay.io/keycloak/keycloak:latest         start-dev
