package com.example.restron_proj_backend.controller;

import com.example.restron_proj_backend.Userservice.Servicelayer;
import com.example.restron_proj_backend.model.Userdata;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class Usercontroller {
    @Autowired
    private Servicelayer servicelayer;

    @PostMapping("/register")
    public Userdata saveuser(@RequestBody Userdata userdata){
        return servicelayer.register(userdata);
    }
}
