const vinValues = [
  {
    Country: 'Argentina',
    Manufacturer: 'Agrale Argentina S.A',
    WMI: '8BB',
  },
  {
    Country: 'Argentina',
    Manufacturer: 'Citroën',
    WMI: '8BC',
  },
  {
    Country: 'Argentina',
    Manufacturer: 'Fiat',
    WMI: '8AP',
  },
  {
    Country: 'Argentina',
    Manufacturer: 'Ford',
    WMI: '8AF',
  },
  {
    Country: 'Argentina',
    Manufacturer: 'General Motors',
    WMI: '8AG',
  },
  {
    Country: 'Argentina',
    Manufacturer: 'Honda',
    WMI: '8C3',
  },
  {
    Country: 'Argentina',
    Manufacturer: 'Iveco',
    WMI: '8AT',
  },
  {
    Country: 'Argentina',
    Manufacturer: 'Mercedes Benz',
    WMI: '8AC',
  },
  {
    Country: 'Argentina',
    Manufacturer: 'Nissan',
    WMI: '8AN',
  },
  {
    Country: 'Argentina',
    Manufacturer: 'Peugeot',
    WMI: '8AD',
  },
  {
    Country: 'Argentina',
    Manufacturer: 'Renault',
    WMI: '8A1',
  },
  {
    Country: 'Argentina',
    Manufacturer: 'Toyota',
    WMI: '8AJ',
  },
  {
    Country: 'Argentina',
    Manufacturer: 'Volkswagen',
    WMI: '8AW',
  },
  {
    Country: 'Australia',
    Manufacturer: 'Chevrolet',
    WMI: '6G1',
  },
  {
    Country: 'Australia',
    Manufacturer: 'Ford',
    WMI: '6F',
  },
  {
    Country: 'Australia',
    Manufacturer: 'General Motors',
    WMI: '6G',
  },
  {
    Country: 'Australia',
    Manufacturer: 'Holden',
    WMI: '6H',
  },
  {
    Country: 'Australia',
    Manufacturer: 'Mitsubishi',
    WMI: '6MM',
  },
  {
    Country: 'Australia',
    Manufacturer: 'Pontiac',
    WMI: '6G2',
  },
  {
    Country: 'Australia',
    Manufacturer: 'Toyota',
    WMI: '6T1',
  },
  {
    Country: 'Australia',
    Manufacturer: 'Trailer',
    WMI: '6T9',
  },
  {
    Country: 'Austria',
    Manufacturer: 'KTM',
    WMI: 'VBK',
  },
  {
    Country: 'Austria',
    Manufacturer: 'ÖAF',
    WMI: 'VA0',
  },
  {
    Country: 'Bolivia',
    Manufacturer: 'Quantum',
    WMI: 829,
  },
  {
    Country: 'Brazil',
    Manufacturer: 'Agrale S/A',
    WMI: '9BY',
  },
  {
    Country: 'Brazil',
    Manufacturer: 'Audi',
    WMI: '99A',
  },
  {
    Country: 'Brazil',
    Manufacturer: 'BMW',
    WMI: '98M',
  },
  {
    Country: 'Brazil',
    Manufacturer: 'BYD',
    WMI: '99L',
  },
  {
    Country: 'Brazil',
    Manufacturer: 'CAOA / Hyundai',
    WMI: '95P',
  },
  {
    Country: 'Brazil',
    Manufacturer: 'Chery',
    WMI: '98R',
  },
  {
    Country: 'Brazil',
    Manufacturer: 'Citroën',
    WMI: 935,
  },
  {
    Country: 'Brazil',
    Manufacturer: 'Fiat Automóveis',
    WMI: '9BD',
  },
  {
    Country: 'Brazil',
    Manufacturer: 'Fiat Professional',
    WMI: '93W',
  },
  {
    Country: 'Brazil',
    Manufacturer: 'Ford',
    WMI: '9BF',
  },
  {
    Country: 'Brazil',
    Manufacturer: 'General Motors',
    WMI: '9BG',
  },
  {
    Country: 'Brazil',
    Manufacturer: 'Honda',
    WMI: '93H',
  },
  {
    Country: 'Brazil',
    Manufacturer: 'Honda Motorcycles',
    WMI: '9C2',
  },
  {
    Country: 'Brazil',
    Manufacturer: 'HVR-Busscar',
    WMI: '94M',
  },
  {
    Country: 'Brazil',
    Manufacturer: 'Hyundai',
    WMI: '9BH',
  },
  {
    Country: 'Brazil',
    Manufacturer: 'Indabra',
    WMI: '94G',
  },
  {
    Country: 'Brazil',
    Manufacturer: 'International Navistar',
    WMI: '93V',
  },
  {
    Country: 'Brazil',
    Manufacturer: 'Iveco',
    WMI: '93Z',
  },
  {
    Country: 'Brazil',
    Manufacturer: 'Jaguar Land Rover',
    WMI: '99J',
  },
  {
    Country: 'Brazil',
    Manufacturer: 'Jeep',
    WMI: 988,
  },
  {
    Country: 'Brazil',
    Manufacturer: 'Mafersa',
    WMI: '9BN',
  },
  {
    Country: 'Brazil',
    Manufacturer: 'Massari',
    WMI: '9AM',
  },
  {
    Country: 'Brazil',
    Manufacturer: 'Mercedes-Benz',
    WMI: '9BM',
  },
  {
    Country: 'Brazil',
    Manufacturer: 'Nissan',
    WMI: '94D',
  },
  {
    Country: 'Brazil',
    Manufacturer: 'Peugeot',
    WMI: 936,
  },
  {
    Country: 'Brazil',
    Manufacturer: 'Renault',
    WMI: '93Y',
  },
  {
    Country: 'Brazil',
    Manufacturer: 'RWM Brazil',
    WMI: '94N',
  },
  {
    Country: 'Brazil',
    Manufacturer: 'Scania',
    WMI: '9BS',
  },
  {
    Country: 'Brazil',
    Manufacturer: 'Souza Ramos - Mitsubishi / Suzuki',
    WMI: '93X',
  },
  {
    Country: 'Brazil',
    Manufacturer: 'Suzuki (motorcycles)',
    WMI: '9CD',
  },
  {
    Country: 'Brazil',
    Manufacturer: 'Toyota',
    WMI: '9BR',
  },
  {
    Country: 'Brazil',
    Manufacturer: 'Volare',
    WMI: '93P',
  },
  {
    Country: 'Brazil',
    Manufacturer: 'Volkswagen',
    WMI: '9BW',
  },
  {
    Country: 'Brazil',
    Manufacturer: 'Volvo Trucks',
    WMI: '9BV',
  },
  {
    Country: 'Brazil',
    Manufacturer: 'VW Trucks / MAN',
    WMI: 953,
  },
  {
    Country: 'Brazil',
    Manufacturer: 'Yamaha',
    WMI: '9C6',
  },
  {
    Country: 'Canada',
    Manufacturer: 'Acura',
    WMI: '2HH',
  },
  {
    Country: 'Canada',
    Manufacturer: 'Chevrolet',
    WMI: '2G1',
  },
  {
    Country: 'Canada',
    Manufacturer: 'Ford',
    WMI: '2F',
  },
  {
    Country: 'Canada',
    Manufacturer: 'General Motors',
    WMI: '2Gx',
  },
  {
    Country: 'Canada',
    Manufacturer: 'Gnome Homes',
    WMI: '2G9',
  },
  {
    Country: 'Canada',
    Manufacturer: 'Honda',
    WMI: '2HG',
  },
  {
    Country: 'Canada',
    Manufacturer: 'Honda',
    WMI: '2HJ',
  },
  {
    Country: 'Canada',
    Manufacturer: 'Honda',
    WMI: '2HK',
  },
  {
    Country: 'Canada',
    Manufacturer: 'Hyundai',
    WMI: '2HM',
  },
  {
    Country: 'Canada',
    Manufacturer: 'Les Contenants Durabac',
    WMI: '2L9',
  },
  {
    Country: 'Canada',
    Manufacturer: 'Lincoln',
    WMI: '2LN',
  },
  {
    Country: 'Canada',
    Manufacturer: 'Mercury',
    WMI: '2M',
  },
  {
    Country: 'Canada',
    Manufacturer: 'Ontario Drive & Gear',
    WMI: '2DG',
  },
  {
    Country: 'Canada',
    Manufacturer: 'Pontiac',
    WMI: '2G2',
  },
  {
    Country: 'Canada',
    Manufacturer: 'Toyota',
    WMI: '2T',
  },
  {
    Country: 'Chile',
    Manufacturer: 'Automotores Franco Chilena S.A',
    WMI: '8G1 8GD',
  },
  {
    Country: 'Chile',
    Manufacturer: 'General Motors Chile S.A',
    WMI: '8GG',
  },
  {
    Country: 'China',
    Manufacturer: 'Beijing Benz',
    WMI: 'LE4',
  },
  {
    Country: 'China',
    Manufacturer: 'Beijing Hyundai',
    WMI: 'LBE',
  },
  {
    Country: 'China',
    Manufacturer: 'BMW Brilliance',
    WMI: 'LBV',
  },
  {
    Country: 'China',
    Manufacturer: 'BYD Auto',
    WMI: 'LGX',
  },
  {
    Country: 'China',
    Manufacturer: 'BYD Industry',
    WMI: 'LC0',
  },
  {
    Country: 'China',
    Manufacturer: 'Changan Ford',
    WMI: 'LVS',
  },
  {
    Country: 'China',
    Manufacturer: 'Changan Mazda',
    WMI: 'LVR',
  },
  {
    Country: 'China',
    Manufacturer: 'Changan PSA (DS Automobiles)',
    WMI: 'LPA',
  },
  {
    Country: 'China',
    Manufacturer: 'Changan Suzuki',
    WMI: 'LS5',
  },
  {
    Country: 'China',
    Manufacturer: 'Chery',
    WMI: 'LVV',
  },
  {
    Country: 'China',
    Manufacturer: 'Chery Jaguar Land Rover',
    WMI: 'L2C',
  },
  {
    Country: 'China',
    Manufacturer: 'Dongfeng Fengshen',
    WMI: 'LGJ',
  },
  {
    Country: 'China',
    Manufacturer: 'Dongfeng Honda',
    WMI: 'LVH',
  },
  {
    Country: 'China',
    Manufacturer: 'Dongfeng Nissan',
    WMI: 'LGB',
  },
  {
    Country: 'China',
    Manufacturer: 'Dongfeng Peugeot-Citroën',
    WMI: 'LDC',
  },
  {
    Country: 'China',
    Manufacturer: 'Dongfeng Yueda Kia',
    WMI: 'LJD',
  },
  {
    Country: 'China',
    Manufacturer: 'Dongfeng Yulon Motor Co. Ltd',
    WMI: 'LUX',
  },
  {
    Country: 'China',
    Manufacturer: 'FAW Car',
    WMI: 'LFP',
  },
  {
    Country: 'China',
    Manufacturer: 'FAW Haima',
    WMI: 'LH1',
  },
  {
    Country: 'China',
    Manufacturer: 'FAW Toyota',
    WMI: 'LFM',
  },
  {
    Country: 'China',
    Manufacturer: 'FAW Toyota (Tianjin)',
    WMI: 'LTV',
  },
  {
    Country: 'China',
    Manufacturer: 'FAW-Volkswagen',
    WMI: 'LFV',
  },
  {
    Country: 'China',
    Manufacturer: 'Ford Lio Ho Motor Co Ltd',
    WMI: 'LFA',
  },
  {
    Country: 'China',
    Manufacturer: 'GAC Fiat',
    WMI: 'LWV',
  },
  {
    Country: 'China',
    Manufacturer: 'GAC Toyota',
    WMI: 'LVG',
  },
  {
    Country: 'China',
    Manufacturer: 'GAC Trumpchi',
    WMI: 'LMG',
  },
  {
    Country: 'China',
    Manufacturer: 'Geely',
    WMI: 'L6T',
  },
  {
    Country: 'China',
    Manufacturer: 'Geely',
    WMI: 'LB3',
  },
  {
    Country: 'China',
    Manufacturer: 'Great Wall (Havel)',
    WMI: 'LGW',
  },
  {
    Country: 'China',
    Manufacturer: 'Guangzhou Honda',
    WMI: 'LHG',
  },
  {
    Country: 'China',
    Manufacturer: 'Hubei Huawei Special-Purpose Automobile',
    WMI: 'L1C',
  },
  {
    Country: 'China',
    Manufacturer: 'JAC',
    WMI: 'LJ1',
  },
  {
    Country: 'China',
    Manufacturer: 'King Long',
    WMI: 'LA6',
  },
  {
    Country: 'China',
    Manufacturer: 'Lifan',
    WMI: 'LLV',
  },
  {
    Country: 'China',
    Manufacturer: 'Polestar',
    WMI: 'LPS',
  },
  {
    Country: 'China',
    Manufacturer: 'SAIC General Motors',
    WMI: 'LSG',
  },
  {
    Country: 'China',
    Manufacturer: 'SAIC GM Wuling',
    WMI: 'LZW',
  },
  {
    Country: 'China',
    Manufacturer: 'SAIC Maxus',
    WMI: 'LSF',
  },
  {
    Country: 'China',
    Manufacturer: 'SAIC MG',
    WMI: 'LSJ',
  },
  {
    Country: 'China',
    Manufacturer: 'SAIC Volkswagen',
    WMI: 'LSV',
  },
  {
    Country: 'China',
    Manufacturer: 'Shanghai Maple Automobile Co.',
    WMI: 'LJU',
  },
  {
    Country: 'China',
    Manufacturer: 'South East Motor Co Ltd',
    WMI: 'LDN',
  },
  {
    Country: 'China',
    Manufacturer: 'Tesla',
    WMI: 'LRW',
  },
  {
    Country: 'China',
    Manufacturer: 'Yutong',
    WMI: 'LZY',
  },
  {
    Country: 'Colombia',
    Manufacturer: 'Compañía Colombiana Automotriz S.A',
    WMI: '9FC',
  },
  {
    Country: 'Colombia',
    Manufacturer: 'General Motors Colmotores S.A',
    WMI: '9GC',
  },
  {
    Country: 'Colombia',
    Manufacturer: 'Renault',
    WMI: '9FB',
  },
  {
    Country: 'Czech Republic',
    Manufacturer: 'Hyundai',
    WMI: 'TMA',
  },
  {
    Country: 'Czech Republic',
    Manufacturer: 'Škoda',
    WMI: 'TMB',
  },
  {
    Country: 'Ecuador',
    Manufacturer: 'Aymesa',
    WMI: '8LG',
  },
  {
    Country: 'Ecuador',
    Manufacturer: 'General Motors OBB',
    WMI: '8LB',
  },
  {
    Country: 'Ecuador',
    Manufacturer: 'Maresa',
    WMI: '8LF',
  },
  {
    Country: 'Egypt',
    Manufacturer: 'Arab American Vehicles Company',
    WMI: 'DA1 DA4',
  },
  {
    Country: 'Egypt',
    Manufacturer: 'BMW Egypt SKD',
    WMI: 'DAB',
  },
  {
    Country: 'Egypt',
    Manufacturer: 'Fiat Auto Egypt Industrial Co',
    WMI: 'DAA',
  },
  {
    Country: 'Finland',
    Manufacturer: 'Saab',
    WMI: 'YK1',
  },
  {
    Country: 'France',
    Manufacturer: 'Bugatti',
    WMI: 'VF9',
  },
  {
    Country: 'France',
    Manufacturer: 'Citroën',
    WMI: 'VF7',
  },
  {
    Country: 'France',
    Manufacturer: 'DS Automobiles',
    WMI: 'VR1',
  },
  {
    Country: 'France',
    Manufacturer: 'Iveco Unic SA',
    WMI: 'VF5',
  },
  {
    Country: 'France',
    Manufacturer: 'IvecoBus',
    WMI: 'VFE',
  },
  {
    Country: 'France',
    Manufacturer: 'Matra/Talbot/Simca',
    WMI: 'VF8',
  },
  {
    Country: 'France',
    Manufacturer: 'Peugeot',
    WMI: 'VF3',
  },
  {
    Country: 'France',
    Manufacturer: 'Renault Trucks/Volvo',
    WMI: 'VF6',
  },
  {
    Country: 'France',
    Manufacturer: 'Renault',
    WMI: 'VF1',
  },
  {
    Country: 'France',
    Manufacturer: 'Renault',
    WMI: 'VF2',
  },
  {
    Country: 'France',
    Manufacturer: 'Talbot',
    WMI: 'VF4',
  },
  {
    Country: 'France',
    Manufacturer: 'Toyota',
    WMI: 'VNK',
  },
  {
    Country: 'Germany',
    Manufacturer: 'Adam Opel AG Belgium',
    WMI: 'W08',
  },
  {
    Country: 'Germany',
    Manufacturer: 'Alpina',
    WMI: 'WAP',
  },
  {
    Country: 'Germany',
    Manufacturer: 'Audi',
    WMI: 'WAU',
  },
  {
    Country: 'Germany',
    Manufacturer: 'BMW M',
    WMI: 'WBS',
  },
  {
    Country: 'Germany',
    Manufacturer: 'BMW',
    WMI: 'WBA',
  },
  {
    Country: 'Germany',
    Manufacturer: 'BMW',
    WMI: 'WBX',
  },
  {
    Country: 'Germany',
    Manufacturer: 'DaimlerChrysler AG/Daimler AG',
    WMI: 'WDC',
  },
  {
    Country: 'Germany',
    Manufacturer: 'EvoBus',
    WMI: 'WEB',
  },
  {
    Country: 'Germany',
    Manufacturer: 'Ford of Europe',
    WMI: 'WF0',
  },
  {
    Country: 'Germany',
    Manufacturer: 'Irmscher',
    WMI: 'WJR',
  },
  {
    Country: 'Germany',
    Manufacturer: 'Iveco',
    WMI: 'WJM',
  },
  {
    Country: 'Germany',
    Manufacturer: 'Karl Kässbohrer Fahrzeugwerke',
    WMI: 'WKK',
  },
  {
    Country: 'Germany',
    Manufacturer: 'MAN',
    WMI: 'WMA',
  },
  {
    Country: 'Germany',
    Manufacturer: 'Mercedes-Benz',
    WMI: 'WDB',
  },
  {
    Country: 'Germany',
    Manufacturer: 'Mini',
    WMI: 'WMW',
  },
  {
    Country: 'Germany',
    Manufacturer: 'Neoplan',
    WMI: 'WAG',
  },
  {
    Country: 'Germany',
    Manufacturer: 'Opel Special Vehicles',
    WMI: 'W0SV',
  },
  {
    Country: 'Germany',
    Manufacturer: 'Opel/Vauxhall',
    WMI: 'W0L',
  },
  {
    Country: 'Germany',
    Manufacturer: 'Porsche car',
    WMI: 'WP0',
  },
  {
    Country: 'Germany',
    Manufacturer: 'Quattro',
    WMI: 'WUA',
  },
  {
    Country: 'Germany',
    Manufacturer: 'Ruf Automobile',
    WMI: 'W09',
  },
  {
    Country: 'Germany',
    Manufacturer: 'Smart',
    WMI: 'WME',
  },
  {
    Country: 'Germany',
    Manufacturer: 'Volkswagen Commercial Vehicles',
    WMI: 'WV1',
  },
  {
    Country: 'Germany',
    Manufacturer: 'Volkswagen Commercial Vehicles',
    WMI: 'WV2',
  },
  {
    Country: 'Germany',
    Manufacturer: 'Volkswagen',
    WMI: 'WVG',
  },
  {
    Country: 'Germany',
    Manufacturer: 'Volkswagen',
    WMI: 'WVW',
  },
  {
    Country: 'Germany',
    Manufacturer: 'Porsche SUV',
    WMI: 'WP1',
  },
  {
    Country: 'Hungary',
    Manufacturer: 'Audi',
    WMI: 'TRU',
  },
  {
    Country: 'Hungary',
    Manufacturer: 'Suzuki',
    WMI: 'TSM',
  },
  {
    Country: 'India',
    Manufacturer: 'Ashok Leyland Ltd',
    WMI: 'MB1',
  },
  {
    Country: 'India',
    Manufacturer: 'Asia Motor Works good vehicle Ltd',
    WMI: 'MBY',
  },
  {
    Country: 'India',
    Manufacturer: 'Bajaj Auto Ltd',
    WMI: 'MD2',
  },
  {
    Country: 'India',
    Manufacturer: 'Daimler India Commercial Vehicles Pvt. Ltd.',
    WMI: 'MEC',
  },
  {
    Country: 'India',
    Manufacturer: 'Dilip chhabria design pvt ltd',
    WMI: 'MC4',
  },
  {
    Country: 'India',
    Manufacturer: 'Eicher Motors Limited',
    WMI: 'MC2',
  },
  {
    Country: 'India',
    Manufacturer: 'FCA India Automobiles Pvt. Ltd',
    WMI: 'MCA',
  },
  {
    Country: 'India',
    Manufacturer: 'Force Motors Limited',
    WMI: 'MC1',
  },
  {
    Country: 'India',
    Manufacturer: 'Ford India Ltd.',
    WMI: 'MAJ',
  },
  {
    Country: 'India',
    Manufacturer: 'General Motors India Pvt. Ltd.',
    WMI: 'MA6',
  },
  {
    Country: 'India',
    Manufacturer: 'General Motors India Pvt. Ltd.',
    WMI: 'MCB',
  },
  {
    Country: 'India',
    Manufacturer: 'Hindustan Motors Ltd',
    WMI: 'MA7',
  },
  {
    Country: 'India',
    Manufacturer: 'Honda Motor India Pvt. Ltd.',
    WMI: 'MAK',
  },
  {
    Country: 'India',
    Manufacturer: 'Hyundai Motors India Ltd',
    WMI: 'MAL',
  },
  {
    Country: 'India',
    Manufacturer: 'International Cars And Motors Ltd',
    WMI: 'MCL',
  },
  {
    Country: 'India',
    Manufacturer: 'Mahindra',
    WMI: 'MA1',
  },
  {
    Country: 'India',
    Manufacturer: 'MAN Truck & Bus India Pvt. Ltd',
    WMI: 'MBK',
  },
  {
    Country: 'India',
    Manufacturer: 'Maruti Suzuki Automobiles India Limited',
    WMI: 'MBH',
  },
  {
    Country: 'India',
    Manufacturer: 'Maruti Suzuki India Limited|Maruti|Suzuki',
    WMI: 'MA3',
  },
  {
    Country: 'India',
    Manufacturer: 'Nissan Motor India Pvt Ltd',
    WMI: 'MDH',
  },
  {
    Country: 'India',
    Manufacturer: 'Premier Car World Pvt. Ltd',
    WMI: 'MBV',
  },
  {
    Country: 'India',
    Manufacturer: 'Renault Nissan Automobiles Pvt Ltd',
    WMI: 'MEE',
  },
  {
    Country: 'India',
    Manufacturer: 'Swaraj Vehicles Limited',
    WMI: 'MBU',
  },
  {
    Country: 'India',
    Manufacturer: 'Tata Engineering & Locomotive Co',
    WMI: 'MAT',
  },
  {
    Country: 'India',
    Manufacturer: 'Toyota Kirloskar Motor Pvt Ltd',
    WMI: 'MBJ',
  },
  {
    Country: 'Indonesia',
    Manufacturer: 'PT Astra Honda Motor',
    WMI: 'MH1',
  },
  {
    Country: 'Iran',
    Manufacturer: 'Bahman Industrial Group',
    WMI: 'NAG',
  },
  {
    Country: 'Iran',
    Manufacturer: 'Irankhodro Company',
    WMI: 'NAA',
  },
  {
    Country: 'Iran',
    Manufacturer: 'Pars Khodro',
    WMI: 'NAP',
  },
  {
    Country: 'Iran',
    Manufacturer: 'Saipa Diesel',
    WMI: 'NAD',
  },
  {
    Country: 'Italy',
    Manufacturer: 'Alfa Romeo',
    WMI: 'ZAR',
  },
  {
    Country: 'Italy',
    Manufacturer: 'Autobianchi',
    WMI: 'ZAA',
  },
  {
    Country: 'Italy',
    Manufacturer: 'Bugatti Automobili S.p.A',
    WMI: 'ZA9',
  },
  {
    Country: 'Italy',
    Manufacturer: 'Ferrari',
    WMI: 'ZFF',
  },
  {
    Country: 'Italy',
    Manufacturer: 'Fiat',
    WMI: 'ZFA',
  },
  {
    Country: 'Italy',
    Manufacturer: 'Iveco',
    WMI: 'ZCF',
  },
  {
    Country: 'Italy',
    Manufacturer: 'IvecoBus',
    WMI: 'ZGA',
  },
  {
    Country: 'Italy',
    Manufacturer: 'Lamborghini',
    WMI: 'ZHW',
  },
  {
    Country: 'Italy',
    Manufacturer: 'Lancia',
    WMI: 'ZLA',
  },
  {
    Country: 'Italy',
    Manufacturer: 'Maserati',
    WMI: 'ZAM',
  },
  {
    Country: 'Italy',
    Manufacturer: 'Piaggio',
    WMI: 'ZAP',
  },
  {
    Country: 'Japan',
    Manufacturer: 'Daihatsu Motor Co. Ltd.',
    WMI: 'JDA JD1',
  },
  {
    Country: 'Japan',
    Manufacturer: 'Fiat Automobiles/Mazda',
    WMI: 'JC1',
  },
  {
    Country: 'Japan',
    Manufacturer: 'Hino',
    WMI: 'JHD',
  },
  {
    Country: 'Japan',
    Manufacturer: 'Honda',
    WMI: 'JHL',
  },
  {
    Country: 'Japan',
    Manufacturer: 'Honda',
    WMI: 'JHM',
  },
  {
    Country: 'Japan',
    Manufacturer: 'Isuzu',
    WMI: 'JAA JAL JAM',
  },
  {
    Country: 'Japan',
    Manufacturer: 'Isuzu Motor Co/Chevrolet',
    WMI: 'J8B',
  },
  {
    Country: 'Japan',
    Manufacturer: 'Mazda',
    WMI: 'JM1',
  },
  {
    Country: 'Japan',
    Manufacturer: 'Mazda for Oceania export',
    WMI: 'JM0',
  },
  {
    Country: 'Japan',
    Manufacturer: 'Mazda',
    WMI: 'JM6',
  },
  {
    Country: 'Japan',
    Manufacturer: 'Mitsubishi',
    WMI: 'JA4',
  },
  {
    Country: 'Japan',
    Manufacturer: 'Mitsubishi FUSO Truck & Bus Corp',
    WMI: 'JL5',
  },
  {
    Country: 'Japan',
    Manufacturer: 'Mitsubishi',
    WMI: 'JMB',
  },
  {
    Country: 'Japan',
    Manufacturer: 'Nissan',
    WMI: 'JN',
  },
  {
    Country: 'Japan',
    Manufacturer: 'Pontiac',
    WMI: 'JF5',
  },
  {
    Country: 'Japan',
    Manufacturer: 'SAAB',
    WMI: 'JF4',
  },
  {
    Country: 'Japan',
    Manufacturer: 'Subaru - Fuji Heavy Industries',
    WMI: 'JF1-JF3',
  },
  {
    Country: 'Japan',
    Manufacturer: 'Suzuki',
    WMI: 'JS',
  },
  {
    Country: 'Japan',
    Manufacturer: 'Toyota/Lexus',
    WMI: 'JT',
  },
  {
    Country: 'Japan',
    Manufacturer: 'Yamaha',
    WMI: 'JY',
  },
  {
    Country: 'Kenya',
    Manufacturer: 'KIBO Motorcycles',
    WMI: 'BF9',
  },
  {
    Country: 'Malaysia',
    Manufacturer: 'BMW',
    WMI: 'PM1',
  },
  {
    Country: 'Malaysia',
    Manufacturer: 'Bufori',
    WMI: 'PM9',
  },
  {
    Country: 'Malaysia',
    Manufacturer: 'Chery',
    WMI: 'PRH',
  },
  {
    Country: 'Malaysia',
    Manufacturer: 'Ford',
    WMI: 'PR8',
  },
  {
    Country: 'Malaysia',
    Manufacturer: 'Hicom',
    WMI: 'PML',
  },
  {
    Country: 'Malaysia',
    Manufacturer: 'Honda',
    WMI: 'PMH',
  },
  {
    Country: 'Malaysia',
    Manufacturer: 'Honda Boon Siew',
    WMI: 'PMK',
  },
  {
    Country: 'Malaysia',
    Manufacturer: 'Hyundai',
    WMI: 'PP3',
  },
  {
    Country: 'Malaysia',
    Manufacturer: 'Hyundai/Inokom',
    WMI: 'PL8',
  },
  {
    Country: 'Malaysia',
    Manufacturer: 'ISUZU',
    WMI: 'PLZ',
  },
  {
    Country: 'Malaysia',
    Manufacturer: 'Mazda',
    WMI: 'PP1',
  },
  {
    Country: 'Malaysia',
    Manufacturer: 'Modenas',
    WMI: 'PMN',
  },
  {
    Country: 'Malaysia',
    Manufacturer: 'Naza/Kia/Peugeot',
    WMI: 'PNA',
  },
  {
    Country: 'Malaysia',
    Manufacturer: 'Nissan',
    WMI: 'PN8',
  },
  {
    Country: 'Malaysia',
    Manufacturer: 'Perodua',
    WMI: 'PM2',
  },
  {
    Country: 'Malaysia',
    Manufacturer: 'Peugeot',
    WMI: 'PNA',
  },
  {
    Country: 'Malaysia',
    Manufacturer: 'Proton',
    WMI: 'PL1',
  },
  {
    Country: 'Malaysia',
    Manufacturer: 'Sinotruk',
    WMI: 'PRA',
  },
  {
    Country: 'Malaysia',
    Manufacturer: 'Subaru',
    WMI: 'PLP',
  },
  {
    Country: 'Malaysia',
    Manufacturer: 'Suzuki',
    WMI: 'PPP',
  },
  {
    Country: 'Malaysia',
    Manufacturer: 'Toyota',
    WMI: 'PN1/PN2',
  },
  {
    Country: 'Malaysia',
    Manufacturer: 'Volkswagen',
    WMI: 'PPV',
  },
  {
    Country: 'Malaysia',
    Manufacturer: 'Volvo Cars',
    WMI: 'PNV',
  },
  {
    Country: 'Malaysia',
    Manufacturer: 'Yamaha Hong Leong',
    WMI: 'PMV',
  },
  {
    Country: 'Mexico',
    Manufacturer: 'Ford',
    WMI: '3F',
  },
  {
    Country: 'Mexico',
    Manufacturer: 'General Motors',
    WMI: '3G',
  },
  {
    Country: 'Mexico',
    Manufacturer: 'Honda',
    WMI: '3HM',
  },
  {
    Country: 'Mexico',
    Manufacturer: 'Honda',
    WMI: '3HG',
  },
  {
    Country: 'Mexico',
    Manufacturer: 'Kia',
    WMI: '3KP',
  },
  {
    Country: 'Mexico',
    Manufacturer: 'Nissan',
    WMI: '3N',
  },
  {
    Country: 'Mexico',
    Manufacturer: 'Volkswagen',
    WMI: '3VW',
  },
  {
    Country: 'Myanmar',
    Manufacturer: 'Kia',
    WMI: 'MS0',
  },
  {
    Country: 'Netherlands',
    Manufacturer: 'DAF Trucks',
    WMI: 'XLR',
  },
  {
    Country: 'New Zealand',
    Manufacturer: 'Ford',
    WMI: '7A5',
  },
  {
    Country: 'New Zealand',
    Manufacturer: 'Honda',
    WMI: '7A3',
  },
  {
    Country: 'New Zealand',
    Manufacturer: 'Mitsubishi',
    WMI: '7A1',
  },
  {
    Country: 'New Zealand',
    Manufacturer: 'NZ Transport Agency (post-2009)',
    WMI: '7AT',
  },
  {
    Country: 'New Zealand',
    Manufacturer: 'NZ Transport Agency (pre-2009)',
    WMI: '7A8',
  },
  {
    Country: 'New Zealand',
    Manufacturer: 'Toyota',
    WMI: '7A4',
  },
  {
    Country: 'Pakistan',
    Manufacturer: 'Honda Atlas Cars Pakistan Ltd',
    WMI: 'NFB',
  },
  {
    Country: 'Philippines',
    Manufacturer: 'Isuzu Philippines Corporation',
    WMI: 'PAB',
  },
  {
    Country: 'Poland',
    Manufacturer: 'Fabryka Samochodow Osobowych',
    WMI: 'SUP',
  },
  {
    Country: 'Poland',
    Manufacturer: 'Wielton',
    WMI: 'SUD',
  },
  {
    Country: 'Portugal',
    Manufacturer: 'General Motors De Portugal Lda',
    WMI: 'TW8',
  },
  {
    Country: 'Romania',
    Manufacturer: 'Dacia',
    WMI: 'UU',
  },
  {
    Country: 'Russia',
    Manufacturer: 'AvtoVAZ',
    WMI: 'XTA',
  },
  {
    Country: 'Russia',
    Manufacturer: 'AZLK',
    WMI: 'XTB',
  },
  {
    Country: 'Russia',
    Manufacturer: 'General Motors Auto',
    WMI: 'XUF',
  },
  {
    Country: 'Russia',
    Manufacturer: 'UAZ Special Purpose Vehicles Ltd',
    WMI: 'XU1',
  },
  {
    Country: 'Serbia',
    Manufacturer: 'Sour Zavodi',
    WMI: 'VX1',
  },
  {
    Country: 'Slovakia',
    Manufacturer: 'Kia',
    WMI: 'U5Y',
  },
  {
    Country: 'South Africa',
    Manufacturer: 'Ford',
    WMI: 'AFA',
  },
  {
    Country: 'South Africa',
    Manufacturer: 'General Motors South Africa',
    WMI: 'ADM',
  },
  {
    Country: 'South Africa',
    Manufacturer: 'Nissan South Africa (Pty) Ltd',
    WMI: 'ADN',
  },
  {
    Country: 'South Africa',
    Manufacturer: 'Toyota',
    WMI: 'AHT',
  },
  {
    Country: 'South Africa',
    Manufacturer: 'Volkswagen',
    WMI: 'AAV',
  },
  {
    Country: 'South Korea',
    Manufacturer: 'Asia Motors Co Inc',
    WMI: 'KMA',
  },
  {
    Country: 'South Korea',
    Manufacturer: 'Daewoo/GM Korea',
    WMI: 'KL1/KL2/KLA',
  },
  {
    Country: 'South Korea',
    Manufacturer: 'Hyundai',
    WMI: 'KMH',
  },
  {
    Country: 'South Korea',
    Manufacturer: 'Kia',
    WMI: 'KNA/KNC/KNE',
  },
  {
    Country: 'South Korea',
    Manufacturer: 'Samsung Motors Inc',
    WMI: 'KNM',
  },
  {
    Country: 'South Korea',
    Manufacturer: 'SsangYong',
    WMI: 'KPT',
  },
  {
    Country: 'Spain',
    Manufacturer: 'Citroën',
    WMI: 'VS7',
  },
  {
    Country: 'Spain',
    Manufacturer: 'Nissan Motor Iberica SA',
    WMI: 'Nissan Passenger & Multi-Purpose Vehicle',
  },
  {
    Country: 'Spain',
    Manufacturer: 'Opel Automobile Espana',
    WMI: 'SA',
  },
  {
    Country: 'Spain',
    Manufacturer: 'Santana Motor SA',
    WMI: 'VSE',
  },
  {
    Country: 'Spain',
    Manufacturer: 'SEAT',
    WMI: 'VSS',
  },
  {
    Country: 'Spain',
    Manufacturer: 'Tauro Sport Auto',
    WMI: 'VV9',
  },
  {
    Country: 'Sweden',
    Manufacturer: 'Koenigsegg Automotive AB',
    WMI: 'YT9',
  },
  {
    Country: 'Sweden',
    Manufacturer: 'Saab NEVS',
    WMI: 'YTN',
  },
  {
    Country: 'Sweden',
    Manufacturer: 'Saab',
    WMI: 'YS3',
  },
  {
    Country: 'Sweden',
    Manufacturer: 'Scania',
    WMI: 'Katrineholm',
  },
  {
    Country: 'Sweden',
    Manufacturer: 'Scania',
    WMI: 'Södertälje',
  },
  {
    Country: 'Sweden',
    Manufacturer: 'Volvo Buses',
    WMI: 'YV3',
  },
  {
    Country: 'Sweden',
    Manufacturer: 'Volvo Cars',
    WMI: 'YV1',
  },
  {
    Country: 'Sweden',
    Manufacturer: 'Volvo Trucks',
    WMI: 'YV2',
  },
  {
    Country: 'Switzerland',
    Manufacturer: 'Micro Compact Car',
    WMI: 'TCC',
  },
  {
    Country: 'Taiwan',
    Manufacturer: 'Ford Lio Ho Motor Co Ltd',
    WMI: 'RHA',
  },
  {
    Country: 'Taiwan',
    Manufacturer: 'Tai Ling Motor Co Ltd',
    WMI: 'RFD',
  },
  {
    Country: 'Taiwan',
    Manufacturer: 'Toyota Taiwán',
    WMI: 'RKL',
  },
  {
    Country: 'Taiwan',
    Manufacturer: 'Yulon Motor Co Ltd',
    WMI: 'RF5',
  },
  {
    Country: 'Thailand',
    Manufacturer: 'BMW',
    WMI: 'MMF',
  },
  {
    Country: 'Thailand',
    Manufacturer: 'Chevrolet',
    WMI: 'MMM',
  },
  {
    Country: 'Thailand',
    Manufacturer: 'Ford (Ford-Mazda AAT plant)',
    WMI: 'MNB',
  },
  {
    Country: 'Thailand',
    Manufacturer: 'Ford (FTM plant)',
    WMI: 'MPB',
  },
  {
    Country: 'Thailand',
    Manufacturer: 'Foton',
    WMI: 'MP5',
  },
  {
    Country: 'Thailand',
    Manufacturer: 'Hino Motors Manufacturing Thailand Co Ltd',
    WMI: 'MNK',
  },
  {
    Country: 'Thailand',
    Manufacturer: 'Honda',
    WMI: 'MLH',
  },
  {
    Country: 'Thailand',
    Manufacturer: 'Honda',
    WMI: 'MRH',
  },
  {
    Country: 'Thailand',
    Manufacturer: 'IMCT Isuzu Motors Company Thailand',
    WMI: 'MPA',
  },
  {
    Country: 'Thailand',
    Manufacturer: 'Mazda',
    WMI: 'MM0',
  },
  {
    Country: 'Thailand',
    Manufacturer: 'Mazda (Ford-Mazda AAT plant)',
    WMI: 'MM8',
  },
  {
    Country: 'Thailand',
    Manufacturer: 'MG',
    WMI: 'MML',
  },
  {
    Country: 'Thailand',
    Manufacturer: 'Mitsubishi',
    WMI: 'MMB',
  },
  {
    Country: 'Thailand',
    Manufacturer: 'Mitsubishi',
    WMI: 'MMT',
  },
  {
    Country: 'Thailand',
    Manufacturer: 'Nissan',
    WMI: 'MNT',
  },
  {
    Country: 'Thailand',
    Manufacturer: 'Subaru',
    WMI: 'MMR',
  },
  {
    Country: 'Thailand',
    Manufacturer: 'Suzuki',
    WMI: 'MMS',
  },
  {
    Country: 'Thailand',
    Manufacturer: 'Tata',
    WMI: 'MMH',
  },
  {
    Country: 'Thailand',
    Manufacturer: 'Toyota (Auto Works plant)',
    WMI: 'MMK',
  },
  {
    Country: 'Thailand',
    Manufacturer: 'Toyota (Ban Pho and Samrong plant)',
    WMI: 'MR0',
  },
  {
    Country: 'Thailand',
    Manufacturer: 'Toyota (Gateway plant)',
    WMI: 'MR2',
  },
  {
    Country: 'Tunisia',
    Manufacturer: 'Wallyscar',
    WMI: 'CL9',
  },
  {
    Country: 'Turkey',
    Manufacturer: 'Askam Kamyon Imalat Ve Tic.A.S.',
    WMI: 'NLC',
  },
  {
    Country: 'Turkey',
    Manufacturer: 'Ford Otosan',
    WMI: 'NM0',
  },
  {
    Country: 'Turkey',
    Manufacturer: 'MAN',
    WMI: 'NMA',
  },
  {
    Country: 'Turkey',
    Manufacturer: 'Oyak-Renault Oto Fab AS',
    WMI: 'NM1',
  },
  {
    Country: 'Turkey',
    Manufacturer: 'Tofas Turk Otomobil Fabrikasi AS',
    WMI: 'NM4',
  },
  {
    Country: 'Turkey',
    Manufacturer: 'Toyota',
    WMI: 'NMT',
  },
  {
    Country: 'UK/Switzerland',
    Manufacturer: 'Johnston sweeper (Bucher)',
    WMI: 'TEB',
  },
  {
    Country: 'Ukraine',
    Manufacturer: 'Zaporiz\'kyi avtozavod',
    WMI: 'Y6D',
  },
  {
    Country: 'United Kingdom',
    Manufacturer: 'Alexander Dennis',
    WMI: 'SFD',
  },
  {
    Country: 'United Kingdom',
    Manufacturer: 'Alexander Dennis (North America)',
    WMI: 'SFE',
  },
  {
    Country: 'United Kingdom',
    Manufacturer: 'Aston Martin Lagonda Limited',
    WMI: 'SCF',
  },
  {
    Country: 'United Kingdom',
    Manufacturer: 'DeLorean',
    WMI: 'SCE',
  },
  {
    Country: 'United Kingdom',
    Manufacturer: 'Honda',
    WMI: 'SHH',
  },
  {
    Country: 'United Kingdom',
    Manufacturer: 'Honda',
    WMI: 'SHS',
  },
  {
    Country: 'United Kingdom',
    Manufacturer: 'Ifor Williams Trailers',
    WMI: 'SCK',
  },
  {
    Country: 'United Kingdom',
    Manufacturer: 'Jaguar',
    WMI: 'SAJ',
  },
  {
    Country: 'United Kingdom',
    Manufacturer: 'Land Rover',
    WMI: 'SAL',
  },
  {
    Country: 'United Kingdom',
    Manufacturer: 'Lotus Cars',
    WMI: 'SCC',
  },
  {
    Country: 'United Kingdom',
    Manufacturer: 'McLaren Automotive',
    WMI: 'SBM',
  },
  {
    Country: 'United Kingdom',
    Manufacturer: 'Nissan',
    WMI: 'SJK SJN',
  },
  {
    Country: 'United Kingdom',
    Manufacturer: 'Optare',
    WMI: 'SAB',
  },
  {
    Country: 'United Kingdom',
    Manufacturer: 'Rover',
    WMI: 'SAR',
  },
  {
    Country: 'United Kingdom',
    Manufacturer: 'Talbot Motor Co Ltd',
    WMI: 'SDB',
  },
  {
    Country: 'United Kingdom',
    Manufacturer: 'Toyota',
    WMI: 'SB1',
  },
  {
    Country: 'United Kingdom',
    Manufacturer: 'Triumph',
    WMI: 'SAT',
  },
  {
    Country: 'United States',
    Manufacturer: 'BMW',
    WMI: '4US',
  },
  {
    Country: 'United States',
    Manufacturer: 'BMW',
    WMI: '5U',
  },
  {
    Country: 'United States',
    Manufacturer: 'Buick',
    WMI: '1G4',
  },
  {
    Country: 'United States',
    Manufacturer: 'Chevrolet',
    WMI: '1G1',
  },
  {
    Country: 'United States',
    Manufacturer: 'Chevrolet',
    WMI: '1GC',
  },
  {
    Country: 'United States',
    Manufacturer: 'Chevrolet incomplete vehicles',
    WMI: '1GB',
  },
  {
    Country: 'United States',
    Manufacturer: 'Chrysler',
    WMI: '1C',
  },
  {
    Country: 'United States',
    Manufacturer: 'Continental',
    WMI: '1MR',
  },
  {
    Country: 'United States',
    Manufacturer: 'Dodge',
    WMI: '1B',
  },
  {
    Country: 'United States',
    Manufacturer: 'Ford',
    WMI: '1ZV',
  },
  {
    Country: 'United States',
    Manufacturer: 'Ford',
    WMI: '1F',
  },
  {
    Country: 'United States',
    Manufacturer: 'General Motors',
    WMI: '1G',
  },
  {
    Country: 'United States',
    Manufacturer: 'GMC incomplete vehicles',
    WMI: '1GD',
  },
  {
    Country: 'United States',
    Manufacturer: 'Google',
    WMI: '1G9',
  },
  {
    Country: 'United States',
    Manufacturer: 'Honda',
    WMI: '4S6',
  },
  {
    Country: 'United States',
    Manufacturer: 'Honda',
    WMI: '7FA',
  },
  {
    Country: 'United States',
    Manufacturer: 'Honda',
    WMI: '1HG',
  },
  {
    Country: 'United States',
    Manufacturer: 'Honda',
    WMI: '19U',
  },
  {
    Country: 'United States',
    Manufacturer: 'Honda',
    WMI: '5FN',
  },
  {
    Country: 'United States',
    Manufacturer: 'Honda',
    WMI: '5FR',
  },
  {
    Country: 'United States',
    Manufacturer: 'Honda',
    WMI: '5J6',
  },
  {
    Country: 'United States',
    Manufacturer: 'Hyundai',
    WMI: '5NM',
  },
  {
    Country: 'United States',
    Manufacturer: 'Hyundai',
    WMI: '5NP',
  },
  {
    Country: 'United States',
    Manufacturer: 'Hyundai/Kia',
    WMI: '5X',
  },
  {
    Country: 'United States',
    Manufacturer: 'Isuzu Motors America Inc',
    WMI: '4S2',
  },
  {
    Country: 'United States',
    Manufacturer: 'Jeep',
    WMI: '1J',
  },
  {
    Country: 'United States',
    Manufacturer: 'Lincoln',
    WMI: '5L',
  },
  {
    Country: 'United States',
    Manufacturer: 'Lincoln',
    WMI: '1L',
  },
  {
    Country: 'United States',
    Manufacturer: 'Mazda',
    WMI: '1YV',
  },
  {
    Country: 'United States',
    Manufacturer: 'Mazda',
    WMI: '4F',
  },
  {
    Country: 'United States',
    Manufacturer: 'Mercedes-Benz',
    WMI: '4J',
  },
  {
    Country: 'United States',
    Manufacturer: 'Mercedes-Benz',
    WMI: 55,
  },
  {
    Country: 'United States',
    Manufacturer: 'Mercury',
    WMI: '4M',
  },
  {
    Country: 'United States',
    Manufacturer: 'Mercury',
    WMI: '1M',
  },
  {
    Country: 'United States',
    Manufacturer: 'Nissan',
    WMI: '1N',
  },
  {
    Country: 'United States',
    Manufacturer: 'Nissan',
    WMI: '5N1',
  },
  {
    Country: 'United States',
    Manufacturer: 'Oldsmobile',
    WMI: '1G3',
  },
  {
    Country: 'United States',
    Manufacturer: 'Pontiac',
    WMI: '1GM',
  },
  {
    Country: 'United States',
    Manufacturer: 'Subaru',
    WMI: '4S3',
  },
  {
    Country: 'United States',
    Manufacturer: 'Subaru',
    WMI: '4S4',
  },
  {
    Country: 'United States',
    Manufacturer: 'Tesla',
    WMI: '5YJ',
  },
  {
    Country: 'United States',
    Manufacturer: 'Toyota',
    WMI: '4T',
  },
  {
    Country: 'United States',
    Manufacturer: 'Toyota',
    WMI: '5T',
  },
  {
    Country: 'United States',
    Manufacturer: 'Volkswagen',
    WMI: '1VW',
  },
  {
    Country: 'United States',
    Manufacturer: 'Volvo',
    WMI: '7JR',
  },
  {
    Country: 'Uruguay',
    Manufacturer: 'Chery',
    WMI: '9UJ',
  },
  {
    Country: 'Uruguay',
    Manufacturer: 'Kia',
    WMI: '9UW',
  },
  {
    Country: 'Uruguay',
    Manufacturer: 'Lifan',
    WMI: '9UK',
  },
  {
    Country: 'Uzbekistán',
    Manufacturer: 'Daewoo GM Uzbekistán',
    WMI: 'XWB',
  },
  {
    Country: 'Venezuela',
    Manufacturer: 'General Motors Venezolana C.A.',
    WMI: '8Z1',
  },
  {
    Country: 'Vietnam',
    Manufacturer: 'Isuzu Vietnam Co Ltd',
    WMI: 'RLE',
  },
]

export default vinValues
