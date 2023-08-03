package com.example.exam_backend.model;

import javax.persistence.*;

@Entity
public class Music {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String tenBai;
    private String caSi;
    private String nhacsi;
    private String thoiGian;
    private Long luotThich;
    private String trangThai;

    public Music() {
    }

    public Music(int id, String tenBai, String caSi, String nhacsi, String thoiGian, Long luotThich, String trangThai) {
        this.id = id;
        this.tenBai = tenBai;
        this.caSi = caSi;
        this.nhacsi = nhacsi;
        this.thoiGian = thoiGian;
        this.luotThich = luotThich;
        this.trangThai = trangThai;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTenBai() {
        return tenBai;
    }

    public void setTenBai(String tenBai) {
        this.tenBai = tenBai;
    }

    public String getCaSi() {
        return caSi;
    }

    public void setCaSi(String caSi) {
        this.caSi = caSi;
    }

    public String getNhacsi() {
        return nhacsi;
    }

    public void setNhacsi(String nhacsi) {
        this.nhacsi = nhacsi;
    }

    public String getThoiGian() {
        return thoiGian;
    }

    public void setThoiGian(String thoiGian) {
        this.thoiGian = thoiGian;
    }

    public Long getLuotThich() {
        return luotThich;
    }

    public void setLuotThich(Long luotThich) {
        this.luotThich = luotThich;
    }

    public String getTrangThai() {
        return trangThai;
    }

    public void setTrangThai(String trangThai) {
        this.trangThai = trangThai;
    }
}