package com.hammy.jwt.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
public class SignUpDto {

    // registration dto

    private String firstName;
    private String lastName;
    private String login;
    private char[] password;
}
