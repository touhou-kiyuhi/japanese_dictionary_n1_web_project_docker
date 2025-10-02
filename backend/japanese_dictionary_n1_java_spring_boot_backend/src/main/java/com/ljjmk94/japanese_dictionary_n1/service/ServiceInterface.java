package com.ljjmk94.japanese_dictionary_n1.service;

import java.util.List;

import com.ljjmk94.japanese_dictionary_n1.model.Word;
import com.ljjmk94.japanese_dictionary_n1.request.WordRequest;

public interface ServiceInterface {
    
    // Basic CRUD 
    public Integer saveData(WordRequest wordRequest);

    public Word getDataById(Integer wordId);

    public void updateData(Integer wordId, WordRequest wordRequest);

    public void deleteDataById(Integer wordId);

    // Others CRUD
    public List<Word> getAllData();

    public List<Word> searchAllDataByKeywords(String word, String kana, String romaji);

    public Word searchDataByKeywords(String word, String kana, String romaji);

}
