package com.nicholas.spring.test.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
@CrossOrigin
@RestController
public class HomeController {
    @GetMapping("/hello")
    public String hello(){
        return "<h1>Hello!</h1>";
    }
}
