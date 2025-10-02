package com.ljjmk94.japanese_dictionary_n1.dao;

import java.util.List;

import com.ljjmk94.japanese_dictionary_n1.model.Word;
import com.ljjmk94.japanese_dictionary_n1.request.WordRequest;

public interface DaoInterface {
    
    // Basic CRUD 
    // CREATE 
    public Integer saveData(WordRequest wordRequest);
    // READ 
    public Word getDataById(Integer wordId);
    // UPDATE 
    public void updateDataById(Integer wordId, WordRequest wordRequest);
    // DELETE 
    public void deleteDataById(Integer wordId);
    
    // Others CRUD
    public List<Word> getAllData();

    public List<Word> searchAllDataByKeywords(String word, String kana, String romaji);

}
