package com.example.restron_proj_backend.repository;

import com.example.restron_proj_backend.model.Userdata;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;

@Repository
public interface Userrepository extends JpaRepository<Userdata,Long> {
    @Query("SELECT COUNT(u) > 0 FROM Userdata u WHERE u.userdate BETWEEN :starttime AND :endtime")
    boolean isslotexist(LocalDateTime starttime, LocalDateTime endtime);
}
