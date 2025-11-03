import { Component } from '@angular/core';
import { Prodotto } from '../models/prodotto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-elenco-prodotti',
  imports: [CommonModule],
  templateUrl: './elenco-prodotti.html',
  styleUrl: './elenco-prodotti.css',
})
export class ElencoProdotti {

  elenco: Prodotto[] = [
    {
      id: 1,
      name: "Auricolari Wireless Bluetooth X100",
      description: "Auricolari in ear con cancellazione del rumore, autonomia 8h + custodia ricarica.",
      price: 59.99,
      category: "Elettronica",
      imageUrl: 'https://supersimple.dev/projects/amazon/images/products/athletic-cotton-socks-6-pairs.jpg',
      inStock: 120,
      rating: 4.2
    },
    {
      id: 1,
      name: "Auricolari Wireless Bluetooth X100",
      description: "Auricolari in ear con cancellazione del rumore, autonomia 8h + custodia ricarica.",
      price: 59.99,
      category: "Elettronica",
      imageUrl: 'https://supersimple.dev/projects/amazon/images/products/athletic-cotton-socks-6-pairs.jpg',
      inStock: 120,
      rating: 4.2
    },{
      id: 1,
      name: "Auricolari Wireless Bluetooth X100",
      description: "Auricolari in ear con cancellazione del rumore, autonomia 8h + custodia ricarica.",
      price: 59.99,
      category: "Elettronica",
      imageUrl: 'https://supersimple.dev/projects/amazon/images/products/athletic-cotton-socks-6-pairs.jpg',
      inStock: 120,
      rating: 4.2
    },{
      id: 1,
      name: "Auricolari Wireless Bluetooth X100",
      description: "Auricolari in ear con cancellazione del rumore, autonomia 8h + custodia ricarica.",
      price: 59.99,
      category: "Elettronica",
      imageUrl: 'https://supersimple.dev/projects/amazon/images/products/athletic-cotton-socks-6-pairs.jpg',
      inStock: 120,
      rating: 4.2
    },{
      id: 1,
      name: "Auricolari Wireless Bluetooth X100",
      description: "Auricolari in ear con cancellazione del rumore, autonomia 8h + custodia ricarica.",
      price: 59.99,
      category: "Elettronica",
      imageUrl: 'https://supersimple.dev/projects/amazon/images/products/athletic-cotton-socks-6-pairs.jpg',
      inStock: 120,
      rating: 4.2
    },{
      id: 1,
      name: "Auricolari Wireless Bluetooth X100",
      description: "Auricolari in ear con cancellazione del rumore, autonomia 8h + custodia ricarica.",
      price: 59.99,
      category: "Elettronica",
      imageUrl: 'https://supersimple.dev/projects/amazon/images/products/athletic-cotton-socks-6-pairs.jpg',
      inStock: 120,
      rating: 4.2
    },{
      id: 1,
      name: "Auricolari Wireless Bluetooth X100",
      description: "Auricolari in ear con cancellazione del rumore, autonomia 8h + custodia ricarica.",
      price: 59.99,
      category: "Elettronica",
      imageUrl: 'https://supersimple.dev/projects/amazon/images/products/athletic-cotton-socks-6-pairs.jpg',
      inStock: 120,
      rating: 4.2
    },{
      id: 1,
      name: "Auricolari Wireless Bluetooth X100",
      description: "Auricolari in ear con cancellazione del rumore, autonomia 8h + custodia ricarica.",
      price: 59.99,
      category: "Elettronica",
      imageUrl: 'https://supersimple.dev/projects/amazon/images/products/athletic-cotton-socks-6-pairs.jpg',
      inStock: 120,
      rating: 4.2
    },{
      id: 1,
      name: "Auricolari Wireless Bluetooth X100",
      description: "Auricolari in ear con cancellazione del rumore, autonomia 8h + custodia ricarica.",
      price: 59.99,
      category: "Elettronica",
      imageUrl: 'https://supersimple.dev/projects/amazon/images/products/athletic-cotton-socks-6-pairs.jpg',
      inStock: 120,
      rating: 4.2
    },{
      id: 1,
      name: "Auricolari Wireless Bluetooth X100",
      description: "Auricolari in ear con cancellazione del rumore, autonomia 8h + custodia ricarica.",
      price: 59.99,
      category: "Elettronica",
      imageUrl: 'https://supersimple.dev/projects/amazon/images/products/athletic-cotton-socks-6-pairs.jpg',
      inStock: 120,
      rating: 4.2
    },{
      id: 1,
      name: "Auricolari Wireless Bluetooth X100",
      description: "Auricolari in ear con cancellazione del rumore, autonomia 8h + custodia ricarica.",
      price: 59.99,
      category: "Elettronica",
      imageUrl: 'https://supersimple.dev/projects/amazon/images/products/athletic-cotton-socks-6-pairs.jpg',
      inStock: 120,
      rating: 4.2
    },{
      id: 1,
      name: "Auricolari Wireless Bluetooth X100",
      description: "Auricolari in ear con cancellazione del rumore, autonomia 8h + custodia ricarica.",
      price: 59.99,
      category: "Elettronica",
      imageUrl: 'https://supersimple.dev/projects/amazon/images/products/athletic-cotton-socks-6-pairs.jpg',
      inStock: 120,
      rating: 4.2
    },{
      id: 1,
      name: "Auricolari Wireless Bluetooth X100",
      description: "Auricolari in ear con cancellazione del rumore, autonomia 8h + custodia ricarica.",
      price: 59.99,
      category: "Elettronica",
      imageUrl: 'https://supersimple.dev/projects/amazon/images/products/athletic-cotton-socks-6-pairs.jpg',
      inStock: 120,
      rating: 4.2
    },{
      id: 1,
      name: "Auricolari Wireless Bluetooth X100",
      description: "Auricolari in ear con cancellazione del rumore, autonomia 8h + custodia ricarica.",
      price: 59.99,
      category: "Elettronica",
      imageUrl: 'https://supersimple.dev/projects/amazon/images/products/athletic-cotton-socks-6-pairs.jpg',
      inStock: 120,
      rating: 4.2
    },{
      id: 1,
      name: "Auricolari Wireless Bluetooth X100",
      description: "Auricolari in ear con cancellazione del rumore, autonomia 8h + custodia ricarica.",
      price: 59.99,
      category: "Elettronica",
      imageUrl: 'https://supersimple.dev/projects/amazon/images/products/athletic-cotton-socks-6-pairs.jpg',
      inStock: 120,
      rating: 4.2
    },{
      id: 1,
      name: "Auricolari Wireless Bluetooth X100",
      description: "Auricolari in ear con cancellazione del rumore, autonomia 8h + custodia ricarica.",
      price: 59.99,
      category: "Elettronica",
      imageUrl: 'https://supersimple.dev/projects/amazon/images/products/athletic-cotton-socks-6-pairs.jpg',
      inStock: 120,
      rating: 4.2
    },{
      id: 1,
      name: "Auricolari Wireless Bluetooth X100",
      description: "Auricolari in ear con cancellazione del rumore, autonomia 8h + custodia ricarica.",
      price: 59.99,
      category: "Elettronica",
      imageUrl: 'https://supersimple.dev/projects/amazon/images/products/athletic-cotton-socks-6-pairs.jpg',
      inStock: 120,
      rating: 4.2
    },{
      id: 1,
      name: "Auricolari Wireless Bluetooth X100",
      description: "Auricolari in ear con cancellazione del rumore, autonomia 8h + custodia ricarica.",
      price: 59.99,
      category: "Elettronica",
      imageUrl: 'https://supersimple.dev/projects/amazon/images/products/athletic-cotton-socks-6-pairs.jpg',
      inStock: 120,
      rating: 4.2
    },{
      id: 1,
      name: "Auricolari Wireless Bluetooth X100",
      description: "Auricolari in ear con cancellazione del rumore, autonomia 8h + custodia ricarica.",
      price: 59.99,
      category: "Elettronica",
      imageUrl: 'https://supersimple.dev/projects/amazon/images/products/athletic-cotton-socks-6-pairs.jpg',
      inStock: 120,
      rating: 4.2
    },{
      id: 1,
      name: "Auricolari Wireless Bluetooth X100",
      description: "Auricolari in ear con cancellazione del rumore, autonomia 8h + custodia ricarica.",
      price: 59.99,
      category: "Elettronica",
      imageUrl: 'https://supersimple.dev/projects/amazon/images/products/athletic-cotton-socks-6-pairs.jpg',
      inStock: 120,
      rating: 4.2
    }
  ]
}