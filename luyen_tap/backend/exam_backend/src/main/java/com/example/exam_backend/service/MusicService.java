package com.example.exam_backend.service;

import com.example.exam_backend.model.Music;
import com.example.exam_backend.repository.IMusicRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MusicService implements IMusicService {

    @Autowired
    public IMusicRepository musicRepository;

    @Override
    public List<Music> getListMusic() {
        return musicRepository.getListMusic();
    }

    @Override
    public Page<Music> showListMusic(Pageable pageable) {
        return musicRepository.showListMusic(pageable);
    }

    @Override
    public void addMusic(Music music) {
        musicRepository.addMusic(music);
    }

    @Override
    public void addMusic2(Music music) {
        musicRepository.save(music);
    }

    @Override
    public Music getMusicById(int id) {
        return musicRepository.getMusicById(id);
    }

    @Override
    public void editMusic(Music music) {
        musicRepository.editMusic(music);
    }

//    @Override
//    public List<Music> searchMusicByName(String name) {
//        return musicRepository.getMusicByName(name);
//    }

    @Override
    public void deleteMusic(int id) {
        musicRepository.deleteMusic(id);
    }

    @Override
    public Page<Music> searchMusicByName(String name ,Pageable pageable) {
        return musicRepository.searchMusicByName(name,pageable);
    }
}
