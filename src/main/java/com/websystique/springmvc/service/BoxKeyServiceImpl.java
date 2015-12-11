package com.websystique.springmvc.service;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.websystique.springmvc.model.BoxKey;

@Service("boxkeyService")
@Transactional
public class BoxKeyServiceImpl implements BoxKeyService {

    private static final AtomicLong counter = new AtomicLong();

    private static List<BoxKey> keys;

    static {
        keys = populateDummyBoxKeys();
    }

    public List<BoxKey> findAllBoxKeys() {
        return keys;
    }

    public BoxKey findById(long id) {
        for (BoxKey key : keys) {
            if (key.getId() == id) {
                return key;
            }
        }
        return null;
    }

    public BoxKey findBySerial(String serial) {
        for (BoxKey key : keys) {
            if (key.getSerial().equalsIgnoreCase(serial)) {
                return key;
            }
        }
        return null;
    }

    public void saveBoxKey(BoxKey key) {
        key.setId(counter.incrementAndGet());
        keys.add(key);
    }

    public void updateBoxKey(BoxKey key) {
        int index = keys.indexOf(key);
        keys.set(index, key);
    }

    public void deleteBoxKeyById(long id) {

        for (Iterator<BoxKey> iterator = keys.iterator(); iterator.hasNext();) {
            BoxKey key = iterator.next();
            if (key.getId() == id) {
                iterator.remove();
            }
        }
    }

    public boolean isBoxKeyExist(BoxKey key) {
        return findBySerial(key.getSerial()) != null;
    }

    public void deleteAllBoxKeys() {
        keys.clear();
    }

    private static List<BoxKey> populateDummyBoxKeys() {
        List<BoxKey> users = new ArrayList<BoxKey>();
        keys.add(new BoxKey(counter.incrementAndGet(), "HWzj4eCP", "kg3Wr5cN", "1449864824", "US Dollars", null,
                true, false, false, false, false, false, false));
        keys.add(new BoxKey(counter.incrementAndGet(), "S7AyQck9", "SLDwGajJ", "1449868424", "Mexican Pesos", null,
                false, false, true, false, false, false, false));
        keys.add(new BoxKey(counter.incrementAndGet(), "tZ4UX9Ak", "s5Q5DBJQ", "1449951224", "British Pounds", "quid",
                false, false, false, false, false, false, false));
        return users;
    }

}
