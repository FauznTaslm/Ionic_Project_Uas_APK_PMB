import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import axios from 'axios';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  public nama_lengkap:any = "";
  public jenis_kelamin:any = "";
  public no_hp:any = "";
  public email:any = "";
  public asal_sekolah:any = "";
  public prodi:any = "";
  public jenjang_studi:any = "";
  public kelas:any = "";
  public info_kampus:any = "";
  constructor(public toastCtrl:ToastController,) {} 

  async addData() {

    const formData = new FormData();
  
    formData.append('nama_lengkap', this.nama_lengkap);
    formData.append('jenis_kelamin', this.jenis_kelamin);
    formData.append('no_hp', this.no_hp);
    formData.append('email', this.email);
    formData.append('asal_sekolah', this.asal_sekolah);
    formData.append('prodi', this.prodi);
    formData.append('jenjang_studi', this.jenjang_studi);
    formData.append('kelas', this.kelas);
    formData.append('info_kampus', this.info_kampus);
    console.log(formData);
  if(this.nama_lengkap === "" || this.jenis_kelamin === ""|| this.no_hp === ""|| this.email === ""|| this.asal_sekolah === ""|| this.prodi === ""|| this.jenjang_studi === ""|| this.kelas === ""|| this.info_kampus === ""){
    const toast = await this.toastCtrl.create({
      message : 'Lengkapi Data Pendaftaran',
      duration : 2000,
      color:'danger'
    });
    toast.present();
    
  }else{
    try{
      //lokal
      // const res = await axios.post('http://localhost/api_uas/tambah_pendaftaran.php', formData);
      //cpanel
      const res = await axios.post('https://praktikum-cpanel-unbin.com/api_fzn/tambah_pendaftaran.php', formData);
      console.log(res.data);
  
      if(res.data.error == false){
        const toast = await this.toastCtrl.create({
          message : 'Data berhasil ditambahkan',
          duration : 2000,
          color:'success'
        });
        toast.present();
        this.nama_lengkap = "";
        this.jenis_kelamin = "";
        this.no_hp = "";
        this.email = "";
        this.asal_sekolah = "";
        this.prodi = "";
        this.jenjang_studi = "";
        this.kelas = "";
        this.info_kampus = "";
      }else{
        const toast = await this.toastCtrl.create({
          message : 'Data gagal ditambahkan',
          duration : 2000,
          color:'danger'
      });
      toast.present();
    }

  }catch(err){
    console.log(err);
  }
  }

  }

}
