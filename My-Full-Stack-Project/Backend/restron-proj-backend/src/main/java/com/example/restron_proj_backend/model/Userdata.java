package com.example.restron_proj_backend.model;

import jakarta.persistence.*;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;

@Entity
@Table(name = "user")
public class Userdata {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String username;

    private String useremail;

    private LocalDateTime userdate;

    private int usercount;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getUseremail() {
        return useremail;
    }

    public void setUseremail(String useremail) {
        this.useremail = useremail;
    }


    public int getUsercount() {
        return usercount;
    }

    public LocalDateTime getUserdate() {
        return userdate;
    }

    public void setUserdate(LocalDateTime userdate) {
        this.userdate = userdate;
    }

    public void setUsercount(int usercount) {
        this.usercount = usercount;
    }
}
