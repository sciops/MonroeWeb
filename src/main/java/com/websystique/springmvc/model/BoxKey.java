/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.websystique.springmvc.model;

import java.util.List;

/**
 *
 * @author stephen.williams@monco.info
 */
public class BoxKey {
    private long id;
    private String serial;
    private String opnum;
    private String datetime;
    private String currtype;
    private String denom;
    private boolean denomone;
    private boolean denomtwo;
    private boolean denomfive;
    private boolean denomten;
    private boolean denomtwenty;
    private boolean denomfifty;
    private boolean denomhundred;
    
    public BoxKey() {
        id=0;
    }

    public BoxKey(long id, String serial, String opnum, String datetime, String currtype, String denom, boolean denomone, boolean denomtwo, boolean denomfive, boolean denomten, boolean denomtwenty, boolean denomfifty, boolean denomhundred) {
        this.id = id;
        this.serial = serial;
        this.opnum = opnum;
        this.datetime = datetime;
        this.currtype = currtype;
        this.denom = denom;
        this.denomone = denomone;
        this.denomtwo = denomtwo;
        this.denomfive = denomfive;
        this.denomten = denomten;
        this.denomtwenty = denomtwenty;
        this.denomfifty = denomfifty;
        this.denomhundred = denomhundred;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getSerial() {
        return serial;
    }

    public void setSerial(String serial) {
        this.serial = serial;
    }

    public String getOpnum() {
        return opnum;
    }

    public void setOpnum(String opnum) {
        this.opnum = opnum;
    }

    public String getDatetime() {
        return datetime;
    }

    public void setDatetime(String datetime) {
        this.datetime = datetime;
    }

    public String getCurrtype() {
        return currtype;
    }

    public void setCurrtype(String currtype) {
        this.currtype = currtype;
    }

    public String getDenom() {
        return denom;
    }

    public void setDenom(String denom) {
        this.denom = denom;
    }

    public boolean isDenomone() {
        return denomone;
    }

    public void setDenomone(boolean denomone) {
        this.denomone = denomone;
    }

    public boolean isDenomtwo() {
        return denomtwo;
    }

    public void setDenomtwo(boolean denomtwo) {
        this.denomtwo = denomtwo;
    }

    public boolean isDenomfive() {
        return denomfive;
    }

    public void setDenomfive(boolean denomfive) {
        this.denomfive = denomfive;
    }

    public boolean isDenomten() {
        return denomten;
    }

    public void setDenomten(boolean denomten) {
        this.denomten = denomten;
    }

    public boolean isDenomtwenty() {
        return denomtwenty;
    }

    public void setDenomtwenty(boolean denomtwenty) {
        this.denomtwenty = denomtwenty;
    }

    public boolean isDenomfifty() {
        return denomfifty;
    }

    public void setDenomfifty(boolean denomfifty) {
        this.denomfifty = denomfifty;
    }

    public boolean isDenomhundred() {
        return denomhundred;
    }

    public void setDenomhundred(boolean denomhundred) {
        this.denomhundred = denomhundred;
    }

    @Override
    public int hashCode() {
        int hash = 7;
        hash = 19 * hash + (int) (this.id ^ (this.id >>> 32));
        return hash;
    }

    @Override
    public boolean equals(Object obj) {
        if (obj == null) {
            return false;
        }
        if (getClass() != obj.getClass()) {
            return false;
        }
        final BoxKey other = (BoxKey) obj;
        if (this.id != other.id) {
            return false;
        }
        return true;
    }
    
    
    
}
