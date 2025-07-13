package com.example.jwtauth.controller;

import com.example.jwtauth.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import jakarta.servlet.http.HttpServletRequest;
import java.util.Base64;

@RestController
public class AuthController {

    @Autowired
    private JwtUtil jwtUtil;

    @GetMapping("/authenticate")
    public ResponseEntity<?> authenticate(HttpServletRequest request) {
        String authHeader = request.getHeader("Authorization");

        System.out.println("Received Authorization header: " + authHeader); // ✅ log header

        if (authHeader != null && authHeader.startsWith("Basic ")) {
            String base64Credentials = authHeader.substring("Basic ".length());
            String credentials = new String(Base64.getDecoder().decode(base64Credentials));
            String[] values = credentials.split(":", 2);

            String username = values[0];
            String password = values[1];

            System.out.println("Decoded credentials => user: " + username + ", pwd: " + password); // ✅ log values

            if ("user".equals(username) && "pwd".equals(password)) {
                String token = jwtUtil.generateToken(username);
                System.out.println("Generated token: " + token); // ✅ log token
                return ResponseEntity.ok("{\"token\":\"" + token + "\"}");
            }
        }

        System.out.println("Authentication failed"); // ✅ log failure
        return ResponseEntity.status(401).body("Unauthorized");
    }
}
