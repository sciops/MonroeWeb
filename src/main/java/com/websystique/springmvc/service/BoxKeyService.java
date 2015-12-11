/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.websystique.springmvc.service;

import com.websystique.springmvc.model.BoxKey;
import java.util.List;

/**
 *
 * @author stephen.williams@monco.info
 */
public interface BoxKeyService {
    
    	BoxKey findById(long id);
	
	BoxKey findBySerial(String serial);
	
	void saveBoxKey(BoxKey key);
	
	void updateBoxKey(BoxKey key);
	
	void deleteBoxKeyById(long id);

	List<BoxKey> findAllBoxKeys(); 
	
	void deleteAllBoxKeys();
	
	public boolean isBoxKeyExist(BoxKey key);
	
}
