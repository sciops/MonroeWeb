package com.websystique.springmvc.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping("/")
public class IndexController {

    //this returns the UserManagement.jsp page from WEB-INF/views
    @RequestMapping(method = RequestMethod.GET)
    public String getIndexPage() {
        return "UserManagement";
    }

}
