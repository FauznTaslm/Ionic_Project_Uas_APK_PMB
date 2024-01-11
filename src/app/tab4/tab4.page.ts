import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  public allData: any = [];
  public inputCari: string = '';
  public cari: any = [];
  public totalFee: number = 0;
  public formattedTotalFee: string = '';

  constructor() {
    this.GetData();
  }

  async handleRefresh(event: any) {
    setTimeout(() => {
      event.target.complete();
      this.GetData();
    }, 2000);
  }

  ngOnInit() {}

  async handleInput(event: any) {
    this.inputCari = event.target.value.toLowerCase();
    this.filterItems();
  }

  async GetData() {
    //lokal
    // const res: any = await axios.get('http://localhost/api_uas/get_data_pendaftaran.php');
    //cpanel
    const res: any = await axios.get('https://praktikum-cpanel-unbin.com/api_fzn/get_data_pendaftaran.php');

    this.cari = res.data.result;
    this.allData = this.cari;

    this.totalFee = this.calculateTotalFee();
    this.formattedTotalFee = this.formatRupiah(this.totalFee);

    console.log(res.totalFee);
    console.log(res.allData);
  }

  filterItems() {
    if (this.inputCari !== '') {
      this.allData = this.cari.filter((item: any) => {
        return item.nama.toLowerCase().includes(this.inputCari);
      });
    } else {
      this.allData = this.cari;
    }

    this.totalFee = this.calculateTotalFee();
    this.formattedTotalFee = this.formatRupiah(this.totalFee);
  }

  ionViewDidEnter() {
    this.GetData();
  }

  calculateTotalFee(): number {
    return this.allData.reduce((acc: number, data: any) => {
      return data.status === '1' ? acc + 50000 : acc;
    }, 0);
  }

  formatRupiah(value: number): string {
    const formatter = new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    });

    return formatter.format(value);
  }
}
