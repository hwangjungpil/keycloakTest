package com.ktds.KeycloakTest;

import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:8082/")
public class Controller {
    @GetMapping("/")
    public String index(@AuthenticationPrincipal Jwt jwt){
        return jwt.getClaimAsString("preferred_username");
    }

    @GetMapping("/protected/premium")
    public String premium(@AuthenticationPrincipal Jwt jwt){
        return "premium "+jwt.getClaimAsString("preferred_username");
    }

}
