package com.ktds.KeycloakTest.controller;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:8082/")
public class HelloController {
    @GetMapping("/")
    @PreAuthorize("hasRole('user_role')")
    public String index(@AuthenticationPrincipal Jwt jwt){
        return jwt.getClaimAsString("preferred_username");
    }

    @GetMapping("/protected/premium")
    @PreAuthorize("hasRole('admin_role')")
    public String premium(@AuthenticationPrincipal Jwt jwt){
        return "premium "+jwt.getClaimAsString("preferred_username");
    }
}
