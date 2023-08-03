package com.example.exam_backend.controller;

import com.example.exam_backend.model.Music;
import com.example.exam_backend.service.IMusicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/music")
public class MusicController {
    @Autowired
    private IMusicService musicService;

//    @GetMapping("")
//    public ResponseEntity<List<Music>> getListMusic() {
//        return new ResponseEntity<>(musicService.getListMusic(), HttpStatus.OK);
//    }

    @GetMapping("/{page}/{size}")
    public ResponseEntity<Page<Music>> getListMusic(@PathVariable int page,@PathVariable int size) {
        Pageable pageable = PageRequest.of(page, size);
        return new ResponseEntity<>(musicService.showListMusic(pageable), HttpStatus.OK);
    }

    @PostMapping("")
    public ResponseEntity<?> addMusic(@RequestBody Music music) {
        musicService.addMusic(music);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Music> getMusicById(@PathVariable int id) {
        return new ResponseEntity<>(musicService.getMusicById(id), HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> editMusic(@PathVariable int id, @RequestBody Music music) {
        music.setId(id);
        musicService.editMusic(music);
        return new ResponseEntity<>(HttpStatus.OK);
    }

//    @GetMapping("/search/{name}")
//    public ResponseEntity<List<Music>> search(@PathVariable String name) {
//        return new ResponseEntity<>(musicService.searchMusicByName(name), HttpStatus.OK);
//    }

    @DeleteMapping("/{id}")
    public  ResponseEntity<?> deleteMusic (@PathVariable int id){
        musicService.deleteMusic(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/search/{name}/{page}/{size}")
    public ResponseEntity<Page<Music>> search(@PathVariable String name,@PathVariable int page,@PathVariable int size) {
        Pageable pageable = PageRequest.of(page, size);
        return new ResponseEntity<>(musicService.searchMusicByName(name,pageable), HttpStatus.OK);
    }

}
