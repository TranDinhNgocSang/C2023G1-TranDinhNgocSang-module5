package com.example.exam_backend.repository;

import com.example.exam_backend.model.Music;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface IMusicRepository extends JpaRepository<Music,Integer> {

    @Query(value = "select * from music", nativeQuery = true)
    List<Music> getListMusic ();

    @Query(value = "select * from music", nativeQuery = true)
    Page<Music> showListMusic (Pageable pageable);

    @Transactional
    @Modifying
    @Query(value = "INSERT INTO music (nhacsi, ca_si, luot_thich, ten_bai, thoi_gian, trang_thai) VALUES (:#{#music.nhacsi}, :#{#music.caSi}, :#{#music.luotThich}, :#{#music.tenBai}, :#{#music.thoiGian}, :#{#music.trangThai})",nativeQuery = true)
    void addMusic(@Param("music") Music music);

    @Query (value = "SELECT * FROM kho_nhac.music where id = :id", nativeQuery = true)
    Music getMusicById (@Param("id") int id);

    @Query (value = "SELECT * FROM kho_nhac.music where ten_bai like concat('%',:name,'%')", nativeQuery = true)
    List<Music> getMusicByName (@Param("name") String name);
    @Transactional
    @Modifying
    @Query (value = "UPDATE music SET nhacsi =:#{#music.nhacsi}, ca_si = :#{#music.caSi}, `luot_thich` =:#{#music.luotThich}, ten_bai =:#{#music.tenBai}, thoi_gian =:#{#music.thoiGian}, trang_thai =:#{#music.trangThai} WHERE id =:#{#music.id}",nativeQuery = true)
    void editMusic (@Param("music") Music music);

    @Transactional
    @Modifying
    @Query (value = "DELETE FROM music WHERE id = :id",nativeQuery = true)
    void  deleteMusic(@Param("id")int id);

    @Query (value = "SELECT * FROM kho_nhac.music where ten_bai like concat('%',:name,'%')", nativeQuery = true)
    Page<Music> searchMusicByName (@Param("name") String name, Pageable pageable);

}
