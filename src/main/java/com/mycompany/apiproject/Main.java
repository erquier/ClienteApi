package com.mycompany.apiproject;
import static spark.Spark.*;
import com.google.gson.Gson;
import java.util.ArrayList;
import java.util.Date;
import static spark.Spark.*;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Random;
import spark.ModelAndView;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;
import spark.Filter;
public class Main {
    
    public static void main(String[] args) {
        
        port(1234);
        staticFiles.location("/public");
        
        get("/hello", (req, res) -> "Hello World");
        
        
        get("/cliente", (req, res)->{
            res.redirect("index.html");
            return null;
        
        });
        
        
                 get("/form", (req, res)->{
                 res.redirect("crear.html");
                return null;
            });
                    
                    
              get("/reserva", (req, res)->{
              res.redirect("form.html");
              return null;
              });
    }
}