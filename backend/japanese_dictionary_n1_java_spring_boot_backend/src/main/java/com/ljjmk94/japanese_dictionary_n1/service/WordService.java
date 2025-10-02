package com.ljjmk94.japanese_dictionary_n1.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ljjmk94.japanese_dictionary_n1.dao.WordDao;
import com.ljjmk94.japanese_dictionary_n1.model.Word;
import com.ljjmk94.japanese_dictionary_n1.request.WordRequest;

@Service
public class WordService implements ServiceInterface {

    @Autowired
    private WordDao wordDao;

    // Basic CRUD 
    @Override
    public Integer saveData(WordRequest wordRequest) {
        return wordDao.saveData(wordRequest);
    }

    @Override
    public Word getDataById(Integer wordId) {
        return wordDao.getDataById(wordId);
    }

    @Override
    public void updateData(Integer wordId, WordRequest wordRequest) {
        wordDao.updateDataById(wordId, wordRequest);
    }

    @Override
    public void deleteDataById(Integer wordId) {
        wordDao.deleteDataById(wordId);
    }

    // Others CRUD
    @Override
    public List<Word> getAllData() {
        return wordDao.getAllData();
    }

    @Override
    public List<Word> searchAllDataByKeywords(String word, String kana, String romaji) {
        return wordDao.searchAllDataByKeywords(word, kana, romaji);
    }

    @Override
    public Word searchDataByKeywords(String word, String kana, String romaji) {
        List<Word> wordList = wordDao.searchAllDataByKeywords(word, kana, romaji);
        return wordList.size() > 0? wordList.get(0):null;
    }
    
}
