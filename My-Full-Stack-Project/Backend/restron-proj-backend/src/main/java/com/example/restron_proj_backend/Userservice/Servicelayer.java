package com.example.restron_proj_backend.Userservice;

import com.example.restron_proj_backend.model.Userdata;
import com.example.restron_proj_backend.repository.Userrepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Service
public class Servicelayer {
    @Autowired
    private Userrepository userrepository;
    public Userdata register(Userdata userdata) {
        if(isresveration(userdata.getUserdate())){
//            System.out.println("This Slot already booked");
            throw new IllegalArgumentException("This Slot already booked");
        }
        return userrepository.save(userdata);
    }

    public boolean isresveration(LocalDateTime userdate) {
        LocalDateTime starttime = userdate.minusMinutes(3);
        LocalDateTime endtime = userdate.plusMinutes(3);
        return userrepository.isslotexist(starttime,endtime);
    }
}
