package com.example.exam_backend.service;

import com.example.exam_backend.model.Music;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface IMusicService {
    List<Music> getListMusic ();

    Page<Music> showListMusic (Pageable pageable);

    void addMusic (Music music);

    void addMusic2(Music music);

    Music getMusicById (int id);

    void editMusic (Music music);

//    List<Music> searchMusicByName (String name);

    void deleteMusic(int id);

    Page<Music> searchMusicByName(String name ,Pageable pageable);
}
