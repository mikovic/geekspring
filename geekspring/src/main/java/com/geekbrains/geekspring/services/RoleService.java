package com.geekbrains.geekspring.services;

import com.geekbrains.geekspring.entities.Role;
import com.geekbrains.geekspring.repositories.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class RoleService {
    @Autowired
    private RoleRepository roleRepository;

    public List<Role> findAll() {
       return (List<Role>) roleRepository.findAll();
    }
    public Role findOneByName(String theRoleName){
        return roleRepository.findOneByName(theRoleName);
    }
}
