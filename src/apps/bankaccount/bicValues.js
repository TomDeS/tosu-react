const bicValues = [
  {
    countryCode: 'NL',
    values: [
      {
        identifier: 'ABNA',
        bic: 'ABNANL2A',
        institution: 'ABN AMRO BANK ',
      },
      {
        identifier: 'ABNC',
        bic: 'ABNCNL2A',
        institution: 'ABN AMRO Clearing Bank N.V.',
      },
      {
        identifier: 'ADYB',
        bic: 'ADYBNL2A',
        institution: 'ADYEN',
      },
      {
        identifier: 'AEGO',
        bic: 'AEGONL2U',
        institution: 'AEGON BANK ',
      },
      {
        identifier: 'ANDL',
        bic: 'ANDLNL2A',
        institution: 'ANADOLUBANK',
      },
      {
        identifier: 'ARBN',
        bic: 'ARBNNL22',
        institution: 'ACHMEA BANK ',
      },
      {
        identifier: 'ARSN',
        bic: 'ARSNNL21',
        institution: 'ARGENTA SPAARBANK ',
      },
      {
        identifier: 'ASNB',
        bic: 'ASNBNL21',
        institution: 'ASN BANK',
      },
      {
        identifier: 'ATBA',
        bic: 'ATBANL2A',
        institution: 'AMSTERDAM TRADE BANK',
      },
      {
        identifier: 'BARC',
        bic: 'BARCNL22',
        institution: 'BARCLAYS BANK',
      },
      {
        identifier: 'BCIT',
        bic: 'BCITNL2A',
        institution: 'INTESA SANPAOLO',
      },
      {
        identifier: 'bicK',
        bic: 'bicKNL2A',
        institution: 'BINCKBANK ',
      },
      {
        identifier: 'BINK',
        bic: 'BINKNL21',
        institution: 'BINCKBANK, PROF',
      },
      {
        identifier: 'BITS',
        bic: 'BITSNL2A',
        institution: 'BITSAFE PAYMENTS',
      },
      {
        identifier: 'BKCH',
        bic: 'BKCHNL2R',
        institution: 'BANK OF CHINA',
      },
      {
        identifier: 'BKMG',
        bic: 'BKMGNL2A',
        institution: 'BANK MENDES GANS',
      },
      {
        identifier: 'BLGW',
        bic: 'BLGWNL21',
        institution: 'BLG WONEN',
      },
      {
        identifier: 'BNDA',
        bic: 'BNDANL2A',
        institution: 'BRAND NEW DAY BANK',
      },
      {
        identifier: 'BNGH',
        bic: 'BNGHNL2G',
        institution: 'BANK NEDERLANDSE GEMEENTEN',
      },
      {
        identifier: 'BNPA',
        bic: 'BNPANL2A',
        institution: 'BNP PARIBAS',
      },
      {
        identifier: 'BOFA',
        bic: 'BOFANLNX',
        institution: 'BANK OF AMERICA',
      },
      {
        identifier: 'BOFS',
        bic: 'BOFSNL21002',
        institution: 'BANK OF SCOTLAND, AMSTERDAM',
      },
      {
        identifier: 'BOTK',
        bic: 'BOTKNL2X',
        institution: 'MUFG BANK',
      },
      {
        identifier: 'BUNQ',
        bic: 'BUNQNL2A',
        institution: 'BUNQ',
      },
      {
        identifier: 'CHAS',
        bic: 'CHASNL2X',
        institution: 'JPMORGAN CHASE',
      },
      {
        identifier: 'CITC',
        bic: 'CITCNL2A',
        institution: 'CITCO BANK',
      },
      {
        identifier: 'CITI',
        bic: 'CITINL2X',
        institution: 'CITIBANK INTERNATIONAL',
      },
      {
        identifier: 'COBA',
        bic: 'COBANL2X',
        institution: 'COMMERZBANK',
      },
      {
        identifier: 'DELE',
        bic: 'DELENL22',
        institution: 'OYENS & VAN EEGHEN - part of Delen Private Bank',
      },
      {
        identifier: 'DEUT',
        bic: 'DEUTNL2A',
        institution: 'DEUTSCHE BANK',
      },
      {
        identifier: 'DHBN',
        bic: 'DHBNNL2R',
        institution: 'DEMIR-HALK BANK',
      },
      {
        identifier: 'DLBK',
        bic: 'DLBKNL2A',
        institution: 'DELTA LLOYD BANK',
      },
      {
        identifier: 'DNIB',
        bic: 'DNIBNL2G',
        institution: 'NIBC',
      },
      {
        identifier: 'EBPB',
        bic: 'EBPBNL22',
        institution: 'EBURY NETHERLANDS (Brussel entiteit)',
      },
      {
        identifier: 'EBUR',
        bic: 'EBURNL21',
        institution: 'EBURY NETHERLANDS (Londen entiteit)',
      },
      {
        identifier: 'FBHL',
        bic: 'FBHLNL2A',
        institution: 'CREDIT EUROPE BANK',
      },
      {
        identifier: 'FLOR',
        bic: 'FLORNL2A',
        institution: 'DE NEDERLANDSCHE BANK',
      },
      {
        identifier: 'FRNX',
        bic: 'FRNXNL2A',
        institution: 'FRANX',
      },
      {
        identifier: 'FVLB',
        bic: 'FVLBNL22',
        institution: 'VAN LANSCHOT ',
      },
      {
        identifier: 'FXBB',
        bic: 'FXBBNL22',
        institution: 'IBANFIRST',
      },
      {
        identifier: 'GILL',
        bic: 'GILLNL2A',
        institution: 'INSINGERGILISSEN ',
      },
      {
        identifier: 'HAND',
        bic: 'HANDNL2A',
        institution: 'SVENSKA HANDELSBANKEN',
      },
      {
        identifier: 'HHBA',
        bic: 'HHBANL22',
        institution: 'HOF HOORNEMAN BANKIERS',
      },
      {
        identifier: 'HSBC',
        bic: 'HSBCNL2A',
        institution: 'HSBC BANK',
      },
      {
        identifier: 'ICBC',
        bic: 'ICBCNL2A',
        institution: 'MEGA INTERNATIONAL COMMERCIAL BANK',
      },
      {
        identifier: 'ICBK',
        bic: 'ICBKNL2A',
        institution: 'INDUSTRIAL & COMMERCIAL BANK OF CHINA',
      },
      {
        identifier: 'ICEP',
        bic: 'ICEPNL21',
        institution: 'ICEPAY',
      },
      {
        identifier: 'INGB',
        bic: 'INGBNL2A',
        institution: 'ING',
      },
      {
        identifier: 'ISAE',
        bic: 'ISAENL2A',
        institution: 'CACEIS BANK, Netherlands Branch',
      },
      {
        identifier: 'ISBK',
        bic: 'ISBKNL2A',
        institution: 'ISBANK',
      },
      {
        identifier: 'KABA',
        bic: 'KABANL2A',
        institution: 'YAPI KREDI BANK',
      },
      {
        identifier: 'KNAB',
        bic: 'KNABNL2H',
        institution: 'KNAB',
      },
      {
        identifier: 'KOEX',
        bic: 'KOEXNL2A',
        institution: 'KEB HANA BANK',
      },
      {
        identifier: 'KRED',
        bic: 'KREDNL2X',
        institution: 'KBC BANK',
      },
      {
        identifier: 'LOYD',
        bic: 'LOYDNL2A',
        institution: 'LLOYDS TSB BANK ',
      },
      {
        identifier: 'LPLN',
        bic: 'LPLNNL2F',
        institution: 'LEASEPLAN CORPORATION ',
      },
      {
        identifier: 'MHCB',
        bic: 'MHCBNL2A',
        institution: 'MIZUHO BANK EUROPE NV',
      },
      {
        identifier: 'NNBA',
        bic: 'NNBANL2G',
        institution: 'NATIONALE-NEDERLANDEN BANK',
      },
      {
        identifier: 'NWAB',
        bic: 'NWABNL2G',
        institution: 'NEDERLANDSE WATERSCHAPSBANK',
      },
      {
        identifier: 'PCBC',
        bic: 'PCBCNL2A',
        institution: 'CHINA CONSTRUCTION BANK, AMSTERDAM BRANCH',
      },
      {
        identifier: 'RABO',
        bic: 'RABONL2U',
        institution: 'RABOBANK',
      },
      {
        identifier: 'RBRB',
        bic: 'RBRBNL21',
        institution: 'REGIOBANK',
      },
      {
        identifier: 'SNSB',
        bic: 'SNSBNL2A',
        institution: 'SNS',
      },
      {
        identifier: 'SOGE',
        bic: 'SOGENL2A',
        institution: 'SOCIETE GENERALE',
      },
      {
        identifier: 'TRIO',
        bic: 'TRIONL2U',
        institution: 'TRIODOS BANK',
      },
      {
        identifier: 'UGBI',
        bic: 'UGBINL2A',
        institution: 'GARANTIBANK INTERNATIONAL ',
      },
      {
        identifier: 'VOWA',
        bic: 'VOWANL21',
        institution: 'VOLKSWAGEN BANK',
      },
      {
        identifier: 'VPAY',
        bic: 'VPAYNL22',
        institution: 'VIVA PAYMENT SERVICES S.A.',
      },
      {
        identifier: 'VTPS',
        bic: 'VTPSNL2R',
        institution: 'Vitesse PSP',
      },
      {
        identifier: 'ZWLB',
        bic: 'ZWLBNL21',
        institution: 'SNS ( ex ZWITSERLEVENBANK)',
      },
    ],
  },
  {
    countryCode: 'BE',
    values: [
      {
        identifier: '000',
        bic: 'BPOT BE B1',
        institution: 'bpost bank',
      },
      {
        identifier: '001',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '002',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '003',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '004',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '005',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '006',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '007',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '008',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '009',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '010',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '011',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '012',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '013',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '014',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '015',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '016',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '017',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '018',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '019',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '020',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '021',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '022',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '023',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '024',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '025',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '026',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '027',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '028',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '029',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '030',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '031',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '032',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '033',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '034',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '035',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '036',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '037',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '038',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '039',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '040',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '041',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '042',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '043',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '044',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '045',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '046',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '047',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '048',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '049',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '050',
        bic: 'GKCC BE BB',
        institution: 'BELFIUS BANK',
      },
      {
        identifier: '051',
        bic: 'GKCC BE BB',
        institution: 'BELFIUS BANK',
      },
      {
        identifier: '052',
        bic: 'GKCC BE BB',
        institution: 'BELFIUS BANK',
      },
      {
        identifier: '053',
        bic: 'GKCC BE BB',
        institution: 'BELFIUS BANK',
      },
      {
        identifier: '054',
        bic: 'GKCC BE BB',
        institution: 'BELFIUS BANK',
      },
      {
        identifier: '055',
        bic: 'GKCC BE BB',
        institution: 'BELFIUS BANK',
      },
      {
        identifier: '056',
        bic: 'GKCC BE BB',
        institution: 'BELFIUS BANK',
      },
      {
        identifier: '057',
        bic: 'GKCC BE BB',
        institution: 'BELFIUS BANK',
      },
      {
        identifier: '058',
        bic: 'GKCC BE BB',
        institution: 'BELFIUS BANK',
      },
      {
        identifier: '059',
        bic: 'GKCC BE BB',
        institution: 'BELFIUS BANK',
      },
      {
        identifier: '060',
        bic: 'GKCC BE BB',
        institution: 'BELFIUS BANK',
      },
      {
        identifier: '061',
        bic: 'GKCC BE BB',
        institution: 'BELFIUS BANK',
      },
      {
        identifier: '062',
        bic: 'GKCC BE BB',
        institution: 'BELFIUS BANK',
      },
      {
        identifier: '063',
        bic: 'GKCC BE BB',
        institution: 'BELFIUS BANK',
      },
      {
        identifier: '064',
        bic: 'GKCC BE BB',
        institution: 'BELFIUS BANK',
      },
      {
        identifier: '065',
        bic: 'GKCC BE BB',
        institution: 'BELFIUS BANK',
      },
      {
        identifier: '066',
        bic: 'GKCC BE BB',
        institution: 'BELFIUS BANK',
      },
      {
        identifier: '067',
        bic: 'GKCC BE BB',
        institution: 'BELFIUS BANK',
      },
      {
        identifier: '068',
        bic: 'GKCC BE BB',
        institution: 'BELFIUS BANK',
      },
      {
        identifier: '069',
        bic: 'GKCC BE BB',
        institution: 'BELFIUS BANK',
      },
      {
        identifier: '070',
        bic: 'GKCC BE BB',
        institution: 'BELFIUS BANK',
      },
      {
        identifier: '071',
        bic: 'GKCC BE BB',
        institution: 'BELFIUS BANK',
      },
      {
        identifier: '072',
        bic: 'GKCC BE BB',
        institution: 'BELFIUS BANK',
      },
      {
        identifier: '073',
        bic: 'GKCC BE BB',
        institution: 'BELFIUS BANK',
      },
      {
        identifier: '074',
        bic: 'GKCC BE BB',
        institution: 'BELFIUS BANK',
      },
      {
        identifier: '075',
        bic: 'GKCC BE BB',
        institution: 'BELFIUS BANK',
      },
      {
        identifier: '076',
        bic: 'GKCC BE BB',
        institution: 'BELFIUS BANK',
      },
      {
        identifier: '077',
        bic: 'GKCC BE BB',
        institution: 'BELFIUS BANK',
      },
      {
        identifier: '078',
        bic: 'GKCC BE BB',
        institution: 'BELFIUS BANK',
      },
      {
        identifier: '079',
        bic: 'GKCC BE BB',
        institution: 'BELFIUS BANK',
      },
      {
        identifier: '080',
        bic: 'GKCC BE BB',
        institution: 'BELFIUS BANK',
      },
      {
        identifier: '081',
        bic: 'GKCC BE BB',
        institution: 'BELFIUS BANK',
      },
      {
        identifier: '082',
        bic: 'GKCC BE BB',
        institution: 'BELFIUS BANK',
      },
      {
        identifier: '083',
        bic: 'GKCC BE BB',
        institution: 'BELFIUS BANK',
      },
      {
        identifier: '084',
        bic: 'GKCC BE BB',
        institution: 'BELFIUS BANK',
      },
      {
        identifier: '085',
        bic: 'GKCC BE BB',
        institution: 'BELFIUS BANK',
      },
      {
        identifier: '086',
        bic: 'GKCC BE BB',
        institution: 'BELFIUS BANK',
      },
      {
        identifier: '087',
        bic: 'GKCC BE BB',
        institution: 'BELFIUS BANK',
      },
      {
        identifier: '088',
        bic: 'GKCC BE BB',
        institution: 'BELFIUS BANK',
      },
      {
        identifier: '089',
        bic: 'GKCC BE BB',
        institution: 'BELFIUS BANK',
      },
      {
        identifier: '090',
        bic: 'GKCC BE BB',
        institution: 'BELFIUS BANK',
      },
      {
        identifier: '091',
        bic: 'GKCC BE BB',
        institution: 'BELFIUS BANK',
      },
      {
        identifier: '092',
        bic: 'GKCC BE BB',
        institution: 'BELFIUS BANK',
      },
      {
        identifier: '093',
        bic: 'GKCC BE BB',
        institution: 'BELFIUS BANK',
      },
      {
        identifier: '094',
        bic: 'GKCC BE BB',
        institution: 'BELFIUS BANK',
      },
      {
        identifier: '095',
        bic: 'GKCC BE BB',
        institution: 'BELFIUS BANK',
      },
      {
        identifier: '096',
        bic: 'GKCC BE BB',
        institution: 'BELFIUS BANK',
      },
      {
        identifier: '097',
        bic: 'GKCC BE BB',
        institution: 'BELFIUS BANK',
      },
      {
        identifier: '098',
        bic: 'GKCC BE BB',
        institution: 'BELFIUS BANK',
      },
      {
        identifier: '099',
        bic: 'GKCC BE BB',
        institution: 'BELFIUS BANK',
      },
      {
        identifier: '100',
        bic: 'NBBE BE BB 203',
        institution: 'Nationale Bank van België',
      },
      {
        identifier: '101',
        bic: 'NBBE BE BB HCC',
        institution: 'Nationale Bank van België (Hoofdkas)',
      },
      {
        identifier: '103',
        bic: 'NICA BE BB',
        institution: 'Crelan',
      },
      {
        identifier: '104',
        bic: 'NICA BE BB',
        institution: 'Crelan',
      },
      {
        identifier: '105',
        bic: 'NICA BE BB',
        institution: 'Crelan',
      },
      {
        identifier: '106',
        bic: 'NICA BE BB',
        institution: 'Crelan',
      },
      {
        identifier: '107',
        bic: 'NICA BE BB',
        institution: 'Crelan',
      },
      {
        identifier: '108',
        bic: 'NICA BE BB',
        institution: 'Crelan',
      },
      {
        identifier: '109',
        bic: 'CTBK BE BX',
        institution: 'Beobank',
      },
      {
        identifier: '110',
        bic: 'CTBK BE BX',
        institution: 'Beobank',
      },
      {
        identifier: '111',
        bic: 'ABER BE 22',
        institution: 'Bank J. Van Breda & C°',
      },
      {
        identifier: '113',
        bic: 'CTBK BE BX',
        institution: 'Beobank',
      },
      {
        identifier: '114',
        bic: 'CTBK BE BX',
        institution: 'Beobank',
      },
      {
        identifier: '119',
        bic: 'CTBK BE BX',
        institution: 'Beobank',
      },
      {
        identifier: '120',
        bic: 'CTBK BE BX',
        institution: 'Beobank',
      },
      {
        identifier: '121',
        bic: 'CTBK BE BX',
        institution: 'Beobank',
      },
      {
        identifier: '122',
        bic: 'CTBK BE BX',
        institution: 'Beobank',
      },
      {
        identifier: '123',
        bic: 'CTBK BE BX',
        institution: 'Beobank',
      },
      {
        identifier: '124',
        bic: 'CTBK BE BX',
        institution: 'Beobank',
      },
      {
        identifier: '125',
        bic: 'CPHB BE 75',
        institution: 'Banque CPH',
      },
      {
        identifier: '126',
        bic: 'CPHB BE 75',
        institution: 'Banque CPH',
      },
      {
        identifier: '127',
        bic: 'CTBK BE BX',
        institution: 'Beobank',
      },
      {
        identifier: '129',
        bic: 'CTBK BE BX',
        institution: 'Beobank',
      },
      {
        identifier: '131',
        bic: 'CTBK BE BX',
        institution: 'Beobank',
      },
      {
        identifier: '132',
        bic: 'BNAG BE BB',
        institution: 'Bank Nagelmackers',
      },
      {
        identifier: '133',
        bic: 'CTBK BE BX',
        institution: 'Beobank',
      },
      {
        identifier: '134',
        bic: 'CTBK BE BX',
        institution: 'Beobank',
      },
      {
        identifier: '137',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '140',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '141',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '142',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '143',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '144',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '145',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '146',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '147',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '148',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '149',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '150',
        bic: 'BCMC BE BB',
        institution: 'Bancontact Payconiq Company',
      },
      {
        identifier: '171',
        bic: 'CPHB BE 75',
        institution: 'Banque CPH',
      },
      {
        identifier: '172',
        bic: 'RABO BE 23',
        institution: 'Coöperatieve Rabobank U.A.',
      },
      {
        identifier: '173',
        bic: 'RABO BE 23',
        institution: 'Coöperatieve Rabobank U.A.',
      },
      {
        identifier: '176',
        bic: 'BSCH BE BB RET',
        institution:
          'Santander Consumer Finance – Succursale en Belgique/Bijkantoor in België',
      },
      {
        identifier: '178',
        bic: 'COBA BE BX',
        institution: 'Commerzbank',
      },
      {
        identifier: '179',
        bic: 'COBA BE BX',
        institution: 'Commerzbank',
      },
      {
        identifier: '183',
        bic: 'BARB BE BB',
        institution: 'Bank of Baroda',
      },
      {
        identifier: '185',
        bic: 'BBRU BE BB',
        institution: 'ING België',
      },
      {
        identifier: '189',
        bic: 'SMBC BE BB',
        institution: 'Sumitomo Mitsui Banking Corporation (SMBC)',
      },
      {
        identifier: '190',
        bic: 'CREG BE BB',
        institution: 'CBC Banque et Assurances',
      },
      {
        identifier: '191',
        bic: 'CREG BE BB',
        institution: 'CBC Banque et Assurances',
      },
      {
        identifier: '192',
        bic: 'CREG BE BB',
        institution: 'CBC Banque et Assurances',
      },
      {
        identifier: '193',
        bic: 'CREG BE BB',
        institution: 'CBC Banque et Assurances',
      },
      {
        identifier: '194',
        bic: 'CREG BE BB',
        institution: 'CBC Banque et Assurances',
      },
      {
        identifier: '195',
        bic: 'CREG BE BB',
        institution: 'CBC Banque et Assurances',
      },
      {
        identifier: '196',
        bic: 'CREG BE BB',
        institution: 'CBC Banque et Assurances',
      },
      {
        identifier: '197',
        bic: 'CREG BE BB',
        institution: 'CBC Banque et Assurances',
      },
      {
        identifier: '198',
        bic: 'CREG BE BB',
        institution: 'CBC Banque et Assurances',
      },
      {
        identifier: '199',
        bic: 'CREG BE BB',
        institution: 'CBC Banque et Assurances',
      },
      {
        identifier: '200',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '201',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '202',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '203',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '204',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '205',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '206',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '207',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '208',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '209',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '210',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '211',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '212',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '213',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '214',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '220',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '221',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '222',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '223',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '224',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '225',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '226',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '227',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '228',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '229',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '230',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '231',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '232',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '233',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '234',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '235',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '236',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '237',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '238',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '239',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '240',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '241',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '242',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '243',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '244',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '245',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '246',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '247',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '248',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '249',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '250',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '251',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '252',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '253',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '254',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '255',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '256',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '257',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '258',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '259',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '260',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '261',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '262',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '263',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '264',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '265',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '266',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '267',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '268',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '269',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '270',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '271',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '272',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '273',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '274',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '275',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '276',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '277',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '278',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '279',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '280',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '281',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '282',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '283',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '284',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '285',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '286',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '287',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '288',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '289',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '290',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '291',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '292',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '293',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '294',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '295',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '296',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '297',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '298',
        bic: 'GEBA BE BB',
        institution: 'BNP Paribas Fortis',
      },
      {
        identifier: '299',
        bic: 'BPOT BE B1',
        institution: 'bpost bank',
      },
      {
        identifier: '300',
        bic: 'BBRU BE BB',
        institution: 'ING België',
      },
      {
        identifier: '301',
        bic: 'BBRU BE BB',
        institution: 'ING België',
      },
      {
        identifier: '302',
        bic: 'BBRU BE BB',
        institution: 'ING België',
      },
      {
        identifier: '303',
        bic: 'BBRU BE BB',
        institution: 'ING België',
      },
      {
        identifier: '304',
        bic: 'BBRU BE BB',
        institution: 'ING België',
      },
      {
        identifier: '305',
        bic: 'BBRU BE BB',
        institution: 'ING België',
      },
      {
        identifier: '306',
        bic: 'BBRU BE BB',
        institution: 'ING België',
      },
      {
        identifier: '307',
        bic: 'BBRU BE BB',
        institution: 'ING België',
      },
      {
        identifier: '308',
        bic: 'BBRU BE BB',
        institution: 'ING België',
      },
      {
        identifier: '309',
        bic: 'BBRU BE BB',
        institution: 'ING België',
      },
      {
        identifier: '310',
        bic: 'BBRU BE BB',
        institution: 'ING België',
      },
      {
        identifier: '311',
        bic: 'BBRU BE BB',
        institution: 'ING België',
      },
      {
        identifier: '312',
        bic: 'BBRU BE BB',
        institution: 'ING België',
      },
      {
        identifier: '313',
        bic: 'BBRU BE BB',
        institution: 'ING België',
      },
      {
        identifier: '314',
        bic: 'BBRU BE BB',
        institution: 'ING België',
      },
      {
        identifier: '315',
        bic: 'BBRU BE BB',
        institution: 'ING België',
      },
      {
        identifier: '316',
        bic: 'BBRU BE BB',
        institution: 'ING België',
      },
      {
        identifier: '317',
        bic: 'BBRU BE BB',
        institution: 'ING België',
      },
      {
        identifier: '318',
        bic: 'BBRU BE BB',
        institution: 'ING België',
      },
      {
        identifier: '319',
        bic: 'BBRU BE BB',
        institution: 'ING België',
      },
      {
        identifier: '320',
        bic: 'BBRU BE BB',
        institution: 'ING België',
      },
      {
        identifier: '321',
        bic: 'BBRU BE BB',
        institution: 'ING België',
      },
      {
        identifier: '322',
        bic: 'BBRU BE BB',
        institution: 'ING België',
      },
      {
        identifier: '323',
        bic: 'BBRU BE BB',
        institution: 'ING België',
      },
      {
        identifier: '324',
        bic: 'BBRU BE BB',
        institution: 'ING België',
      },
      {
        identifier: '325',
        bic: 'BBRU BE BB',
        institution: 'ING België',
      },
      {
        identifier: '326',
        bic: 'BBRU BE BB',
        institution: 'ING België',
      },
      {
        identifier: '327',
        bic: 'BBRU BE BB',
        institution: 'ING België',
      },
      {
        identifier: '328',
        bic: 'BBRU BE BB',
        institution: 'ING België',
      },
      {
        identifier: '329',
        bic: 'BBRU BE BB',
        institution: 'ING België',
      },
      {
        identifier: '330',
        bic: 'BBRU BE BB',
        institution: 'ING België',
      },
      {
        identifier: '331',
        bic: 'BBRU BE BB',
        institution: 'ING België',
      },
      {
        identifier: '332',
        bic: 'BBRU BE BB',
        institution: 'ING België',
      },
      {
        identifier: '333',
        bic: 'BBRU BE BB',
        institution: 'ING België',
      },
      {
        identifier: '334',
        bic: 'BBRU BE BB',
        institution: 'ING België',
      },
      {
        identifier: '335',
        bic: 'BBRU BE BB',
        institution: 'ING België',
      },
      {
        identifier: '336',
        bic: 'BBRU BE BB',
        institution: 'ING België',
      },
      {
        identifier: '337',
        bic: 'BBRU BE BB',
        institution: 'ING België',
      },
      {
        identifier: '338',
        bic: 'BBRU BE BB',
        institution: 'ING België',
      },
      {
        identifier: '339',
        bic: 'BBRU BE BB',
        institution: 'ING België',
      },
      {
        identifier: '340',
        bic: 'BBRU BE BB',
        institution: 'ING België',
      },
      {
        identifier: '341',
        bic: 'BBRU BE BB',
        institution: 'ING België',
      },
      {
        identifier: '342',
        bic: 'BBRU BE BB',
        institution: 'ING België',
      },
      {
        identifier: '343',
        bic: 'BBRU BE BB',
        institution: 'ING België',
      },
      {
        identifier: '344',
        bic: 'BBRU BE BB',
        institution: 'ING België',
      },
      {
        identifier: '345',
        bic: 'BBRU BE BB',
        institution: 'ING België',
      },
      {
        identifier: '346',
        bic: 'BBRU BE BB',
        institution: 'ING België',
      },
      {
        identifier: '347',
        bic: 'BBRU BE BB',
        institution: 'ING België',
      },
      {
        identifier: '348',
        bic: 'BBRU BE BB',
        institution: 'ING België',
      },
      {
        identifier: '349',
        bic: 'BBRU BE BB',
        institution: 'ING België',
      },
      {
        identifier: '350',
        bic: 'BBRU BE BB',
        institution: 'ING België',
      },
      {
        identifier: '351',
        bic: 'BBRU BE BB',
        institution: 'ING België',
      },
      {
        identifier: '352',
        bic: 'BBRU BE BB',
        institution: 'ING België',
      },
      {
        identifier: '353',
        bic: 'BBRU BE BB',
        institution: 'ING België',
      },
      {
        identifier: '354',
        bic: 'BBRU BE BB',
        institution: 'ING België',
      },
      {
        identifier: '355',
        bic: 'BBRU BE BB',
        institution: 'ING België',
      },
      {
        identifier: '356',
        bic: 'BBRU BE BB',
        institution: 'ING België',
      },
      {
        identifier: '357',
        bic: 'BBRU BE BB',
        institution: 'ING België',
      },
      {
        identifier: '358',
        bic: 'BBRU BE BB',
        institution: 'ING België',
      },
      {
        identifier: '359',
        bic: 'BBRU BE BB',
        institution: 'ING België',
      },
      {
        identifier: '360',
        bic: 'BBRU BE BB',
        institution: 'ING België',
      },
      {
        identifier: '361',
        bic: 'BBRU BE BB',
        institution: 'ING België',
      },
      {
        identifier: '362',
        bic: 'BBRU BE BB',
        institution: 'ING België',
      },
      {
        identifier: '363',
        bic: 'BBRU BE BB',
        institution: 'ING België',
      },
      {
        identifier: '364',
        bic: 'BBRU BE BB',
        institution: 'ING België',
      },
      {
        identifier: '365',
        bic: 'BBRU BE BB',
        institution: 'ING België',
      },
      {
        identifier: '366',
        bic: 'BBRU BE BB',
        institution: 'ING België',
      },
      {
        identifier: '367',
        bic: 'BBRU BE BB',
        institution: 'ING België',
      },
      {
        identifier: '368',
        bic: 'BBRU BE BB',
        institution: 'ING België',
      },
      {
        identifier: '369',
        bic: 'BBRU BE BB',
        institution: 'ING België',
      },
      {
        identifier: '370',
        bic: 'BBRU BE BB',
        institution: 'ING België',
      },
      {
        identifier: '371',
        bic: 'BBRU BE BB',
        institution: 'ING België',
      },
      {
        identifier: '372',
        bic: 'BBRU BE BB',
        institution: 'ING België',
      },
      {
        identifier: '373',
        bic: 'BBRU BE BB',
        institution: 'ING België',
      },
      {
        identifier: '374',
        bic: 'BBRU BE BB',
        institution: 'ING België',
      },
      {
        identifier: '375',
        bic: 'BBRU BE BB',
        institution: 'ING België',
      },
      {
        identifier: '376',
        bic: 'BBRU BE BB',
        institution: 'ING België',
      },
      {
        identifier: '377',
        bic: 'BBRU BE BB',
        institution: 'ING België',
      },
      {
        identifier: '378',
        bic: 'BBRU BE BB',
        institution: 'ING België',
      },
      {
        identifier: '379',
        bic: 'BBRU BE BB',
        institution: 'ING België',
      },
      {
        identifier: '380',
        bic: 'BBRU BE BB',
        institution: 'ING België',
      },
      {
        identifier: '381',
        bic: 'BBRU BE BB',
        institution: 'ING België',
      },
      {
        identifier: '382',
        bic: 'BBRU BE BB',
        institution: 'ING België',
      },
      {
        identifier: '383',
        bic: 'BBRU BE BB',
        institution: 'ING België',
      },
      {
        identifier: '384',
        bic: 'BBRU BE BB',
        institution: 'ING België',
      },
      {
        identifier: '385',
        bic: 'BBRU BE BB',
        institution: 'ING België',
      },
      {
        identifier: '386',
        bic: 'BBRU BE BB',
        institution: 'ING België',
      },
      {
        identifier: '387',
        bic: 'BBRU BE BB',
        institution: 'ING België',
      },
      {
        identifier: '388',
        bic: 'BBRU BE BB',
        institution: 'ING België',
      },
      {
        identifier: '389',
        bic: 'BBRU BE BB',
        institution: 'ING België',
      },
      {
        identifier: '390',
        bic: 'BBRU BE BB',
        institution: 'ING België',
      },
      {
        identifier: '391',
        bic: 'BBRU BE BB',
        institution: 'ING België',
      },
      {
        identifier: '392',
        bic: 'BBRU BE BB',
        institution: 'ING België',
      },
      {
        identifier: '393',
        bic: 'BBRU BE BB',
        institution: 'ING België',
      },
      {
        identifier: '394',
        bic: 'BBRU BE BB',
        institution: 'ING België',
      },
      {
        identifier: '395',
        bic: 'BBRU BE BB',
        institution: 'ING België',
      },
      {
        identifier: '396',
        bic: 'BBRU BE BB',
        institution: 'ING België',
      },
      {
        identifier: '397',
        bic: 'BBRU BE BB',
        institution: 'ING België',
      },
      {
        identifier: '398',
        bic: 'BBRU BE BB',
        institution: 'ING België',
      },
      {
        identifier: '399',
        bic: 'BBRU BE BB',
        institution: 'ING België',
      },
      {
        identifier: '400',
        bic: 'KRED BE BB',
        institution: 'KBC Bank',
      },
      {
        identifier: '401',
        bic: 'KRED BE BB',
        institution: 'KBC Bank',
      },
      {
        identifier: '402',
        bic: 'KRED BE BB',
        institution: 'KBC Bank',
      },
      {
        identifier: '403',
        bic: 'KRED BE BB',
        institution: 'KBC Bank',
      },
      {
        identifier: '404',
        bic: 'KRED BE BB',
        institution: 'KBC Bank',
      },
      {
        identifier: '405',
        bic: 'KRED BE BB',
        institution: 'KBC Bank',
      },
      {
        identifier: '406',
        bic: 'KRED BE BB',
        institution: 'KBC Bank',
      },
      {
        identifier: '407',
        bic: 'KRED BE BB',
        institution: 'KBC Bank',
      },
      {
        identifier: '408',
        bic: 'KRED BE BB',
        institution: 'KBC Bank',
      },
      {
        identifier: '409',
        bic: 'KRED BE BB',
        institution: 'KBC Bank',
      },
      {
        identifier: '410',
        bic: 'KRED BE BB',
        institution: 'KBC Bank',
      },
      {
        identifier: '411',
        bic: 'KRED BE BB',
        institution: 'KBC Bank',
      },
      {
        identifier: '412',
        bic: 'KRED BE BB',
        institution: 'KBC Bank',
      },
      {
        identifier: '413',
        bic: 'KRED BE BB',
        institution: 'KBC Bank',
      },
      {
        identifier: '414',
        bic: 'KRED BE BB',
        institution: 'KBC Bank',
      },
      {
        identifier: '415',
        bic: 'KRED BE BB',
        institution: 'KBC Bank',
      },
      {
        identifier: '416',
        bic: 'KRED BE BB',
        institution: 'KBC Bank',
      },
      {
        identifier: '417',
        bic: 'KRED BE BB',
        institution: 'KBC Bank',
      },
      {
        identifier: '418',
        bic: 'KRED BE BB',
        institution: 'KBC Bank',
      },
      {
        identifier: '419',
        bic: 'KRED BE BB',
        institution: 'KBC Bank',
      },
      {
        identifier: '420',
        bic: 'KRED BE BB',
        institution: 'KBC Bank',
      },
      {
        identifier: '421',
        bic: 'KRED BE BB',
        institution: 'KBC Bank',
      },
      {
        identifier: '422',
        bic: 'KRED BE BB',
        institution: 'KBC Bank',
      },
      {
        identifier: '423',
        bic: 'KRED BE BB',
        institution: 'KBC Bank',
      },
      {
        identifier: '424',
        bic: 'KRED BE BB',
        institution: 'KBC Bank',
      },
      {
        identifier: '425',
        bic: 'KRED BE BB',
        institution: 'KBC Bank',
      },
      {
        identifier: '426',
        bic: 'KRED BE BB',
        institution: 'KBC Bank',
      },
      {
        identifier: '427',
        bic: 'KRED BE BB',
        institution: 'KBC Bank',
      },
      {
        identifier: '428',
        bic: 'KRED BE BB',
        institution: 'KBC Bank',
      },
      {
        identifier: '429',
        bic: 'KRED BE BB',
        institution: 'KBC Bank',
      },
      {
        identifier: '430',
        bic: 'KRED BE BB',
        institution: 'KBC Bank',
      },
      {
        identifier: '431',
        bic: 'KRED BE BB',
        institution: 'KBC Bank',
      },
      {
        identifier: '432',
        bic: 'KRED BE BB',
        institution: 'KBC Bank',
      },
      {
        identifier: '433',
        bic: 'KRED BE BB',
        institution: 'KBC Bank',
      },
      {
        identifier: '434',
        bic: 'KRED BE BB',
        institution: 'KBC Bank',
      },
      {
        identifier: '435',
        bic: 'KRED BE BB',
        institution: 'KBC Bank',
      },
      {
        identifier: '436',
        bic: 'KRED BE BB',
        institution: 'KBC Bank',
      },
      {
        identifier: '437',
        bic: 'KRED BE BB',
        institution: 'KBC Bank',
      },
      {
        identifier: '438',
        bic: 'KRED BE BB',
        institution: 'KBC Bank',
      },
      {
        identifier: '439',
        bic: 'KRED BE BB',
        institution: 'KBC Bank',
      },
      {
        identifier: '440',
        bic: 'KRED BE BB',
        institution: 'KBC Bank',
      },
      {
        identifier: '441',
        bic: 'KRED BE BB',
        institution: 'KBC Bank',
      },
      {
        identifier: '442',
        bic: 'KRED BE BB',
        institution: 'KBC Bank',
      },
      {
        identifier: '443',
        bic: 'KRED BE BB',
        institution: 'KBC Bank',
      },
      {
        identifier: '444',
        bic: 'KRED BE BB',
        institution: 'KBC Bank',
      },
      {
        identifier: '445',
        bic: 'KRED BE BB',
        institution: 'KBC Bank',
      },
      {
        identifier: '446',
        bic: 'KRED BE BB',
        institution: 'KBC Bank',
      },
      {
        identifier: '447',
        bic: 'KRED BE BB',
        institution: 'KBC Bank',
      },
      {
        identifier: '448',
        bic: 'KRED BE BB',
        institution: 'KBC Bank',
      },
      {
        identifier: '449',
        bic: 'KRED BE BB',
        institution: 'KBC Bank',
      },
      {
        identifier: '450',
        bic: 'KRED BE BB',
        institution: 'KBC Bank',
      },
      {
        identifier: '451',
        bic: 'KRED BE BB',
        institution: 'KBC Bank',
      },
      {
        identifier: '452',
        bic: 'KRED BE BB',
        institution: 'KBC Bank',
      },
      {
        identifier: '453',
        bic: 'KRED BE BB',
        institution: 'KBC Bank',
      },
      {
        identifier: '454',
        bic: 'KRED BE BB',
        institution: 'KBC Bank',
      },
      {
        identifier: '455',
        bic: 'KRED BE BB',
        institution: 'KBC Bank',
      },
      {
        identifier: '456',
        bic: 'KRED BE BB',
        institution: 'KBC Bank',
      },
      {
        identifier: '457',
        bic: 'KRED BE BB',
        institution: 'KBC Bank',
      },
      {
        identifier: '458',
        bic: 'KRED BE BB',
        institution: 'KBC Bank',
      },
      {
        identifier: '459',
        bic: 'KRED BE BB',
        institution: 'KBC Bank',
      },
      {
        identifier: '460',
        bic: 'KRED BE BB',
        institution: 'KBC Bank',
      },
      {
        identifier: '461',
        bic: 'KRED BE BB',
        institution: 'KBC Bank',
      },
      {
        identifier: '462',
        bic: 'KRED BE BB',
        institution: 'KBC Bank',
      },
      {
        identifier: '463',
        bic: 'KRED BE BB',
        institution: 'KBC Bank',
      },
      {
        identifier: '464',
        bic: 'KRED BE BB',
        institution: 'KBC Bank',
      },
      {
        identifier: '465',
        bic: 'KRED BE BB',
        institution: 'KBC Bank',
      },
      {
        identifier: '466',
        bic: 'KRED BE BB',
        institution: 'KBC Bank',
      },
      {
        identifier: '467',
        bic: 'KRED BE BB',
        institution: 'KBC Bank',
      },
      {
        identifier: '468',
        bic: 'KRED BE BB',
        institution: 'KBC Bank',
      },
      {
        identifier: '469',
        bic: 'KRED BE BB',
        institution: 'KBC Bank',
      },
      {
        identifier: '470',
        bic: 'KRED BE BB',
        institution: 'KBC Bank',
      },
      {
        identifier: '471',
        bic: 'KRED BE BB',
        institution: 'KBC Bank',
      },
      {
        identifier: '472',
        bic: 'KRED BE BB',
        institution: 'KBC Bank',
      },
      {
        identifier: '473',
        bic: 'KRED BE BB',
        institution: 'KBC Bank',
      },
      {
        identifier: '474',
        bic: 'KRED BE BB',
        institution: 'KBC Bank',
      },
      {
        identifier: '475',
        bic: 'KRED BE BB',
        institution: 'KBC Bank',
      },
      {
        identifier: '476',
        bic: 'KRED BE BB',
        institution: 'KBC Bank',
      },
      {
        identifier: '477',
        bic: 'KRED BE BB',
        institution: 'KBC Bank',
      },
      {
        identifier: '478',
        bic: 'KRED BE BB',
        institution: 'KBC Bank',
      },
      {
        identifier: '479',
        bic: 'KRED BE BB',
        institution: 'KBC Bank',
      },
      {
        identifier: '480',
        bic: 'KRED BE BB',
        institution: 'KBC Bank',
      },
      {
        identifier: '481',
        bic: 'KRED BE BB',
        institution: 'KBC Bank',
      },
      {
        identifier: '482',
        bic: 'KRED BE BB',
        institution: 'KBC Bank',
      },
      {
        identifier: '483',
        bic: 'KRED BE BB',
        institution: 'KBC Bank',
      },
      {
        identifier: '484',
        bic: 'KRED BE BB',
        institution: 'KBC Bank',
      },
      {
        identifier: '485',
        bic: 'KRED BE BB',
        institution: 'KBC Bank',
      },
      {
        identifier: '486',
        bic: 'KRED BE BB',
        institution: 'KBC Bank',
      },
      {
        identifier: '487',
        bic: 'KRED BE BB',
        institution: 'KBC Bank',
      },
      {
        identifier: '488',
        bic: 'KRED BE BB',
        institution: 'KBC Bank',
      },
      {
        identifier: '489',
        bic: 'KRED BE BB',
        institution: 'KBC Bank',
      },
      {
        identifier: '490',
        bic: 'KRED BE BB',
        institution: 'KBC Bank',
      },
      {
        identifier: '491',
        bic: 'KRED BE BB',
        institution: 'KBC Bank',
      },
      {
        identifier: '492',
        bic: 'KRED BE BB',
        institution: 'KBC Bank',
      },
      {
        identifier: '493',
        bic: 'KRED BE BB',
        institution: 'KBC Bank',
      },
      {
        identifier: '494',
        bic: 'KRED BE BB',
        institution: 'KBC Bank',
      },
      {
        identifier: '495',
        bic: 'KRED BE BB',
        institution: 'KBC Bank',
      },
      {
        identifier: '496',
        bic: 'KRED BE BB',
        institution: 'KBC Bank',
      },
      {
        identifier: '497',
        bic: 'KRED BE BB',
        institution: 'KBC Bank',
      },
      {
        identifier: '498',
        bic: 'KRED BE BB',
        institution: 'KBC Bank',
      },
      {
        identifier: '499',
        bic: 'KRED BE BB',
        institution: 'KBC Bank',
      },
      {
        identifier: '500',
        bic: 'MTPS BE BB',
        institution: 'Moneytrans Payment Services',
      },
      {
        identifier: '501',
        bic: 'DHBN BE BB',
        institution: 'Demir-Halk Bank (Nederland) (DHB)',
      },
      {
        identifier: '504',
        bic: 'PANX BE B1',
        institution: 'Unifiedpost Payments',
      },
      {
        identifier: '507',
        bic: 'DIER BE 21',
        institution: 'Dierickx, Leys & Cie Effectenbank',
      },
      {
        identifier: '508',
        bic: 'PARB BE BZ MDC',
        institution: 'BNP Paribas Securities Services',
      },
      {
        identifier: '509',
        bic: 'ABNA BE 2A IPC',
        institution: 'ABN AMRO Bank N.V.',
      },
      {
        identifier: '510',
        bic: 'VAPE BE 22',
        institution: 'VAN DE PUT & CO Privaatbankiers',
      },
      {
        identifier: '512',
        bic: 'DNIB BE 21',
        institution: 'NIBC BANK',
      },
      {
        identifier: '513',
        bic: 'ABNA BE 2A IPC',
        institution: 'ABN AMRO Bank N.V.',
      },
      {
        identifier: '514',
        bic: 'PUIL BE BB',
        institution: 'Puilaetco Branch of Quintet Private Bank SA',
      },
      {
        identifier: '515',
        bic: 'IRVT BE BB',
        institution: 'The Bank of New York Mellon NV/SA',
      },
      {
        identifier: '521',
        bic: 'FVLB BE 22',
        institution: 'F. van Lanschot Bankiers',
      },
      {
        identifier: '522',
        bic: 'UTWB BE BB',
        institution: 'United Taiwan Bank',
      },
      {
        identifier: '523',
        bic: 'TRIO BE BB',
        institution: 'Triodos Bank',
      },
      {
        identifier: '524',
        bic: 'WAFA BE BB',
        institution: 'Attijariwafa bank Europe',
      },
      {
        identifier: '525',
        bic: 'FVLB BE 22',
        institution: 'F. van Lanschot Bankiers',
      },
      {
        identifier: '530',
        bic: 'SHIZ BE BB',
        institution: 'Shizuoka Bank (Europe)',
      },
      {
        identifier: '541',
        bic: 'BKID BE 22',
        institution: 'BANK OF INDIA',
      },
      {
        identifier: '546',
        bic: 'WAFA BE BB',
        institution: 'Attijariwafa bank Europe',
      },
      {
        identifier: '548',
        bic: 'LOCY BE BB',
        institution: 'Lombard Odier (Europe)',
      },
      {
        identifier: '549',
        bic: 'CHAS BE BX',
        institution: 'JP Morgan Chase Bank',
      },
      {
        identifier: '550',
        bic: 'GKCC BE BB',
        institution: 'BELFIUS BANK',
      },
      {
        identifier: '551',
        bic: 'GKCC BE BB',
        institution: 'BELFIUS BANK',
      },
      {
        identifier: '552',
        bic: 'GKCC BE BB',
        institution: 'BELFIUS BANK',
      },
      {
        identifier: '553',
        bic: 'GKCC BE BB',
        institution: 'BELFIUS BANK',
      },
      {
        identifier: '554',
        bic: 'GKCC BE BB',
        institution: 'BELFIUS BANK',
      },
      {
        identifier: '555',
        bic: 'GKCC BE BB',
        institution: 'BELFIUS BANK',
      },
      {
        identifier: '556',
        bic: 'GKCC BE BB',
        institution: 'BELFIUS BANK',
      },
      {
        identifier: '557',
        bic: 'GKCC BE BB',
        institution: 'BELFIUS BANK',
      },
      {
        identifier: '558',
        bic: 'GKCC BE BB',
        institution: 'BELFIUS BANK',
      },
      {
        identifier: '559',
        bic: 'GKCC BE BB',
        institution: 'BELFIUS BANK',
      },
      {
        identifier: '560',
        bic: 'GKCC BE BB',
        institution: 'BELFIUS BANK',
      },
      {
        identifier: '562',
        bic: 'GKCC BE BB',
        institution: 'BELFIUS BANK',
      },
      {
        identifier: '563',
        bic: 'GKCC BE BB',
        institution: 'BELFIUS BANK',
      },
      {
        identifier: '564',
        bic: 'GKCC BE BB',
        institution: 'BELFIUS BANK',
      },
      {
        identifier: '565',
        bic: 'GKCC BE BB',
        institution: 'BELFIUS BANK',
      },
      {
        identifier: '566',
        bic: 'GKCC BE BB',
        institution: 'BELFIUS BANK',
      },
      {
        identifier: '567',
        bic: 'GKCC BE BB',
        institution: 'BELFIUS BANK',
      },
      {
        identifier: '568',
        bic: 'GKCC BE BB',
        institution: 'BELFIUS BANK',
      },
      {
        identifier: '569',
        bic: 'GKCC BE BB',
        institution: 'BELFIUS BANK',
      },
      {
        identifier: '570',
        bic: 'CITI BE BX',
        institution: 'Citibank Europe Plc - Belgium Branch',
      },
      {
        identifier: '571',
        bic: 'CITI BE BX',
        institution: 'Citibank Europe Plc - Belgium Branch',
      },
      {
        identifier: '572',
        bic: 'CITI BE BX',
        institution: 'Citibank Europe Plc - Belgium Branch',
      },
      {
        identifier: '573',
        bic: 'CITI BE BX',
        institution: 'Citibank Europe Plc - Belgium Branch',
      },
      {
        identifier: '574',
        bic: 'CITI BE BX',
        institution: 'Citibank Europe Plc - Belgium Branch',
      },
      {
        identifier: '575',
        bic: 'CITI BE BX',
        institution: 'Citibank Europe Plc - Belgium Branch',
      },
      {
        identifier: '576',
        bic: 'CITI BE BX',
        institution: 'Citibank Europe Plc - Belgium Branch',
      },
      {
        identifier: '577',
        bic: 'CITI BE BX',
        institution: 'Citibank Europe Plc - Belgium Branch',
      },
      {
        identifier: '578',
        bic: 'CITI BE BX',
        institution: 'Citibank Europe Plc - Belgium Branch',
      },
      {
        identifier: '579',
        bic: 'CITI BE BX',
        institution: 'Citibank Europe Plc - Belgium Branch',
      },
      {
        identifier: '581',
        bic: 'MHCB BE BB',
        institution: 'Mizuho Bank Europe N.V. Brussels Branch',
      },
      {
        identifier: '583',
        bic: 'DEGR BE BB',
        institution: 'Banque Degroof Petercam Luxembourg',
      },
      {
        identifier: '585',
        bic: 'RCBP BE BB',
        institution: 'Rothschild Belgique Succursale Rothschild Martin Maurel',
      },
      {
        identifier: '586',
        bic: 'CFFR BE B1',
        institution: 'Crédit Foncier de France',
      },
      {
        identifier: '587',
        bic: 'BIBL BE 21',
        institution: 'BinckBank',
      },
      {
        identifier: '588',
        bic: 'CMCI BE B1 BTB',
        institution: 'Banque Transatlantique Belgium',
      },
      {
        identifier: '590',
        bic: 'BSCH BE BB',
        institution:
          'Santander Consumer Finance – Succursale en Belgique/Bijkantoor in België',
      },
      {
        identifier: '591',
        bic: 'BSCH BE BB',
        institution:
          'Santander Consumer Finance – Succursale en Belgique/Bijkantoor in België',
      },
      {
        identifier: '592',
        bic: 'BSCH BE BB',
        institution:
          'Santander Consumer Finance – Succursale en Belgique/Bijkantoor in België',
      },
      {
        identifier: '593',
        bic: 'BSCH BE BB',
        institution:
          'Santander Consumer Finance – Succursale en Belgique/Bijkantoor in België',
      },
      {
        identifier: '594',
        bic: 'BSCH BE BB',
        institution:
          'Santander Consumer Finance – Succursale en Belgique/Bijkantoor in België',
      },
      {
        identifier: '595',
        bic: 'CTBK BE BX',
        institution: 'Beobank',
      },
      {
        identifier: '596',
        bic: 'CTBK BE BX',
        institution: 'Beobank',
      },
      {
        identifier: '597',
        bic: 'CTBK BE BX',
        institution: 'Beobank',
      },
      {
        identifier: '598',
        bic: 'CTBK BE BX',
        institution: 'Beobank',
      },
      {
        identifier: '599',
        bic: 'CTBK BE BX',
        institution: 'Beobank',
      },
      {
        identifier: '600',
        bic: 'CTBK BE BX',
        institution: 'Beobank',
      },
      {
        identifier: '601',
        bic: 'CTBK BE BX',
        institution: 'Beobank',
      },
      {
        identifier: '605',
        bic: 'BKCH BE BB',
        institution: 'Bank of China (Luxembourg) S.A., Brussels Branch',
      },
      {
        identifier: '607',
        bic: 'ICBK BE BB',
        institution: 'Industrial and Commercial Bank of China (Europe)',
      },
      {
        identifier: '610',
        bic: 'DEUT BE BE',
        institution: 'Deutsche Bank AG',
      },
      {
        identifier: '611',
        bic: 'DEUT BE BE',
        institution: 'Deutsche Bank AG',
      },
      {
        identifier: '612',
        bic: 'DEUT BE BE',
        institution: 'Deutsche Bank AG',
      },
      {
        identifier: '613',
        bic: 'DEUT BE BE',
        institution: 'Deutsche Bank AG',
      },
      {
        identifier: '624',
        bic: 'GKCC BE BB',
        institution: 'BELFIUS BANK',
      },
      {
        identifier: '625',
        bic: 'GKCC BE BB',
        institution: 'BELFIUS BANK',
      },
      {
        identifier: '630',
        bic: 'BBRU BE BB',
        institution: 'ING België',
      },
      {
        identifier: '631',
        bic: 'BBRU BE BB',
        institution: 'ING België',
      },
      {
        identifier: '634',
        bic: 'BNAG BE BB',
        institution: 'Bank Nagelmackers',
      },
      {
        identifier: '635',
        bic: 'BNAG BE BB',
        institution: 'Bank Nagelmackers',
      },
      {
        identifier: '636',
        bic: 'BNAG BE BB',
        institution: 'Bank Nagelmackers',
      },
      {
        identifier: '638',
        bic: 'GKCC BE BB',
        institution: 'BELFIUS BANK',
      },
      {
        identifier: '640',
        bic: 'ADIA BE 22',
        institution: 'KBC Bank N.V. Business Center Diamant',
      },
      {
        identifier: '642',
        bic: 'BBVA BE BB',
        institution: 'Banco Bilbao Vizcaya Argentaria',
      },
      {
        identifier: '643',
        bic: 'BMPB BE BB',
        institution: 'Aion',
      },
      {
        identifier: '645',
        bic: 'JVBA BE 22',
        institution: 'Bank J. Van Breda & C°',
      },
      {
        identifier: '646',
        bic: 'BNAG BE BB',
        institution: 'Bank Nagelmackers',
      },
      {
        identifier: '647',
        bic: 'BNAG BE BB',
        institution: 'Bank Nagelmackers',
      },
      {
        identifier: '648',
        bic: 'BMPB BE BB VOD',
        institution: 'Aion',
      },
      {
        identifier: '649',
        bic: 'CEPA BE B2',
        institution: 'Caisse d\'Epargne et de Prévoyance Hauts de France',
      },
      {
        identifier: '651',
        bic: 'KEYT BE BB',
        institution:
          'Arkéa Direct Bank (nom commercial / commerciële naam: Keytrade Bank)',
      },
      {
        identifier: '652',
        bic: 'BBRU BE BB',
        institution: 'ING België',
      },
      {
        identifier: '653',
        bic: 'BARC BE BB',
        institution: 'Barclays Bank Ireland Plc Brussels Branch',
      },
      {
        identifier: '657',
        bic: 'GKCC BE BB',
        institution: 'BELFIUS BANK',
      },
      {
        identifier: '658',
        bic: 'HABB BE BB',
        institution: 'Habib Bank',
      },
      {
        identifier: '663',
        bic: 'BMEU BE B1',
        institution: 'BMCE Euro Services',
      },
      {
        identifier: '664',
        bic: 'BCDM BE BB',
        institution: 'Banque Chaabi du Maroc',
      },
      {
        identifier: '667',
        bic: 'CMCI BE B1 CIC',
        institution:
          'Crédit Industriel et Commercial - Succursale de Bruxelles',
      },
      {
        identifier: '668',
        bic: 'SBIN BE 2X',
        institution: 'State Bank of India',
      },
      {
        identifier: '670',
        bic: 'NYA',
        institution: 'CNH Industrial Capital EUROPE',
      },
      {
        identifier: '671',
        bic: 'EURB BE 99',
        institution: 'Europabank',
      },
      {
        identifier: '672',
        bic: 'GKCC BE BB',
        institution: 'BELFIUS BANK',
      },
      {
        identifier: '673',
        bic: 'BBRU BE BB',
        institution: 'ING België',
      },
      {
        identifier: '674',
        bic: 'ABNA BE 2A IDJ',
        institution: 'ABN AMRO Bank N.V.',
      },
      {
        identifier: '675',
        bic: 'BYBB BE BB',
        institution: 'Byblos Bank Europe',
      },
      {
        identifier: '676',
        bic: 'DEGR BE BB',
        institution: 'Bank Degroof Petercam',
      },
      {
        identifier: '677',
        bic: 'CBPX BE 99',
        institution: 'Compagnie de Banque Privée Quilvest',
      },
      {
        identifier: '678',
        bic: 'DELE BE 22',
        institution: 'Delen Private Bank',
      },
      {
        identifier: '679',
        bic: 'PCHQ BE BB',
        institution: 'bpost',
      },
      {
        identifier: '680',
        bic: 'GKCC BE BB',
        institution: 'BELFIUS BANK',
      },
      {
        identifier: '682',
        bic: 'GKCC BE BB',
        institution: 'BELFIUS BANK',
      },
      {
        identifier: '683',
        bic: 'GKCC BE BB',
        institution: 'BELFIUS BANK',
      },
      {
        identifier: '684',
        bic: 'SGAB BE B2',
        institution: 'Société Générale',
      },
      {
        identifier: '685',
        bic: 'BOFA BE 3X',
        institution: 'Bank of America Europe DAC - Brussels Branch',
      },
      {
        identifier: '686',
        bic: 'BOFA BE 3X',
        institution: 'Bank of America Europe DAC - Brussels Branch',
      },
      {
        identifier: '687',
        bic: 'MGTC BE BE',
        institution: 'Euroclear Bank',
      },
      {
        identifier: '688',
        bic: 'SGAB BE B2',
        institution: 'Société Générale',
      },
      {
        identifier: '693',
        bic: 'BOTK BE BX',
        institution: 'MUFG Bank (Europe)',
      },
      {
        identifier: '694',
        bic: 'DEUT BE BE',
        institution: 'Deutsche Bank AG',
      },
      {
        identifier: '696',
        bic: 'CRLY BE BB',
        institution: 'Crédit Agricole Corporate & Investment Bank',
      },
      {
        identifier: '700',
        bic: 'AXAB BE 22',
        institution: 'AXA Bank Belgium',
      },
      {
        identifier: '701',
        bic: 'AXAB BE 22',
        institution: 'AXA Bank Belgium',
      },
      {
        identifier: '702',
        bic: 'AXAB BE 22',
        institution: 'AXA Bank Belgium',
      },
      {
        identifier: '703',
        bic: 'AXAB BE 22',
        institution: 'AXA Bank Belgium',
      },
      {
        identifier: '704',
        bic: 'AXAB BE 22',
        institution: 'AXA Bank Belgium',
      },
      {
        identifier: '705',
        bic: 'AXAB BE 22',
        institution: 'AXA Bank Belgium',
      },
      {
        identifier: '706',
        bic: 'AXAB BE 22',
        institution: 'AXA Bank Belgium',
      },
      {
        identifier: '707',
        bic: 'AXAB BE 22',
        institution: 'AXA Bank Belgium',
      },
      {
        identifier: '708',
        bic: 'AXAB BE 22',
        institution: 'AXA Bank Belgium',
      },
      {
        identifier: '709',
        bic: 'AXAB BE 22',
        institution: 'AXA Bank Belgium',
      },
      {
        identifier: '719',
        bic: 'ABNA BE 2A XXX',
        institution: 'ABN AMRO Bank N.V.',
      },
      {
        identifier: '722',
        bic: 'ABNA BE 2A IPC',
        institution: 'ABN AMRO Bank N.V.',
      },
      {
        identifier: '725',
        bic: 'KRED BE BB',
        institution: 'KBC Bank',
      },
      {
        identifier: '726',
        bic: 'KRED BE BB',
        institution: 'KBC Bank',
      },
      {
        identifier: '727',
        bic: 'KRED BE BB',
        institution: 'KBC Bank',
      },
      {
        identifier: '728',
        bic: 'CREG BE BB',
        institution: 'CBC Banque et Assurances',
      },
      {
        identifier: '729',
        bic: 'CREG BE BB',
        institution: 'CBC Banque et Assurances',
      },
      {
        identifier: '730',
        bic: 'KRED BE BB',
        institution: 'KBC Bank',
      },
      {
        identifier: '731',
        bic: 'KRED BE BB',
        institution: 'KBC Bank',
      },
      {
        identifier: '732',
        bic: 'CREG BE BB',
        institution: 'CBC Banque et Assurances',
      },
      {
        identifier: '733',
        bic: 'KRED BE BB',
        institution: 'KBC Bank',
      },
      {
        identifier: '734',
        bic: 'KRED BE BB',
        institution: 'KBC Bank',
      },
      {
        identifier: '735',
        bic: 'KRED BE BB',
        institution: 'KBC Bank',
      },
      {
        identifier: '736',
        bic: 'KRED BE BB',
        institution: 'KBC Bank',
      },
      {
        identifier: '737',
        bic: 'KRED BE BB',
        institution: 'KBC Bank',
      },
      {
        identifier: '738',
        bic: 'KRED BE BB',
        institution: 'KBC Bank',
      },
      {
        identifier: '739',
        bic: 'KRED BE BB',
        institution: 'KBC Bank',
      },
      {
        identifier: '740',
        bic: 'KRED BE BB',
        institution: 'KBC Bank',
      },
      {
        identifier: '741',
        bic: 'KRED BE BB',
        institution: 'KBC Bank',
      },
      {
        identifier: '742',
        bic: 'CREG BE BB',
        institution: 'KBC Bank',
      },
      {
        identifier: '743',
        bic: 'KRED BE BB',
        institution: 'KBC Bank',
      },
      {
        identifier: '744',
        bic: 'KRED BE BB',
        institution: 'KBC Bank',
      },
      {
        identifier: '745',
        bic: 'KRED BE BB',
        institution: 'KBC Bank',
      },
      {
        identifier: '746',
        bic: 'KRED BE BB',
        institution: 'KBC Bank',
      },
      {
        identifier: '747',
        bic: 'KRED BE BB',
        institution: 'KBC Bank',
      },
      {
        identifier: '748',
        bic: 'KRED BE BB',
        institution: 'KBC Bank',
      },
      {
        identifier: '749',
        bic: 'KRED BE BB',
        institution: 'KBC Bank',
      },
      {
        identifier: '750',
        bic: 'AXAB BE 22',
        institution: 'AXA Bank Belgium',
      },
      {
        identifier: '751',
        bic: 'AXAB BE 22',
        institution: 'AXA Bank Belgium',
      },
      {
        identifier: '752',
        bic: 'AXAB BE 22',
        institution: 'AXA Bank Belgium',
      },
      {
        identifier: '753',
        bic: 'AXAB BE 22',
        institution: 'AXA Bank Belgium',
      },
      {
        identifier: '754',
        bic: 'AXAB BE 22',
        institution: 'AXA Bank Belgium',
      },
      {
        identifier: '755',
        bic: 'AXAB BE 22',
        institution: 'AXA Bank Belgium',
      },
      {
        identifier: '756',
        bic: 'AXAB BE 22',
        institution: 'AXA Bank Belgium',
      },
      {
        identifier: '757',
        bic: 'AXAB BE 22',
        institution: 'AXA Bank Belgium',
      },
      {
        identifier: '758',
        bic: 'AXAB BE 22',
        institution: 'AXA Bank Belgium',
      },
      {
        identifier: '759',
        bic: 'AXAB BE 22',
        institution: 'AXA Bank Belgium',
      },
      {
        identifier: '760',
        bic: 'AXAB BE 22',
        institution: 'AXA Bank Belgium',
      },
      {
        identifier: '761',
        bic: 'AXAB BE 22',
        institution: 'AXA Bank Belgium',
      },
      {
        identifier: '762',
        bic: 'AXAB BE 22',
        institution: 'AXA Bank Belgium',
      },
      {
        identifier: '763',
        bic: 'AXAB BE 22',
        institution: 'AXA Bank Belgium',
      },
      {
        identifier: '764',
        bic: 'AXAB BE 22',
        institution: 'AXA Bank Belgium',
      },
      {
        identifier: '765',
        bic: 'AXAB BE 22',
        institution: 'AXA Bank Belgium',
      },
      {
        identifier: '766',
        bic: 'AXAB BE 22',
        institution: 'AXA Bank Belgium',
      },
      {
        identifier: '767',
        bic: 'AXAB BE 22',
        institution: 'AXA Bank Belgium',
      },
      {
        identifier: '768',
        bic: 'AXAB BE 22',
        institution: 'AXA Bank Belgium',
      },
      {
        identifier: '769',
        bic: 'AXAB BE 22',
        institution: 'AXA Bank Belgium',
      },
      {
        identifier: '770',
        bic: 'AXAB BE 22',
        institution: 'AXA Bank Belgium',
      },
      {
        identifier: '771',
        bic: 'AXAB BE 22',
        institution: 'AXA Bank Belgium',
      },
      {
        identifier: '772',
        bic: 'AXAB BE 22',
        institution: 'AXA Bank Belgium',
      },
      {
        identifier: '773',
        bic: 'AXAB BE 22',
        institution: 'AXA Bank Belgium',
      },
      {
        identifier: '774',
        bic: 'AXAB BE 22',
        institution: 'AXA Bank Belgium',
      },
      {
        identifier: '775',
        bic: 'GKCC BE BB',
        institution: 'BELFIUS BANK',
      },
      {
        identifier: '776',
        bic: 'GKCC BE BB',
        institution: 'BELFIUS BANK',
      },
      {
        identifier: '777',
        bic: 'GKCC BE BB',
        institution: 'BELFIUS BANK',
      },
      {
        identifier: '778',
        bic: 'GKCC BE BB',
        institution: 'BELFIUS BANK',
      },
      {
        identifier: '779',
        bic: 'GKCC BE BB',
        institution: 'BELFIUS BANK',
      },
      {
        identifier: '780',
        bic: 'GKCC BE BB',
        institution: 'BELFIUS BANK',
      },
      {
        identifier: '781',
        bic: 'GKCC BE BB',
        institution: 'BELFIUS BANK',
      },
      {
        identifier: '782',
        bic: 'GKCC BE BB',
        institution: 'BELFIUS BANK',
      },
      {
        identifier: '783',
        bic: 'GKCC BE BB',
        institution: 'BELFIUS BANK',
      },
      {
        identifier: '784',
        bic: 'GKCC BE BB',
        institution: 'BELFIUS BANK',
      },
      {
        identifier: '785',
        bic: 'GKCC BE BB',
        institution: 'BELFIUS BANK',
      },
      {
        identifier: '786',
        bic: 'GKCC BE BB',
        institution: 'BELFIUS BANK',
      },
      {
        identifier: '787',
        bic: 'GKCC BE BB',
        institution: 'BELFIUS BANK',
      },
      {
        identifier: '788',
        bic: 'GKCC BE BB',
        institution: 'BELFIUS BANK',
      },
      {
        identifier: '789',
        bic: 'GKCC BE BB',
        institution: 'BELFIUS BANK',
      },
      {
        identifier: '790',
        bic: 'GKCC BE BB',
        institution: 'BELFIUS BANK',
      },
      {
        identifier: '791',
        bic: 'GKCC BE BB',
        institution: 'BELFIUS BANK',
      },
      {
        identifier: '792',
        bic: 'GKCC BE BB',
        institution: 'BELFIUS BANK',
      },
      {
        identifier: '793',
        bic: 'GKCC BE BB',
        institution: 'BELFIUS BANK',
      },
      {
        identifier: '794',
        bic: 'GKCC BE BB',
        institution: 'BELFIUS BANK',
      },
      {
        identifier: '795',
        bic: 'GKCC BE BB',
        institution: 'BELFIUS BANK',
      },
      {
        identifier: '796',
        bic: 'GKCC BE BB',
        institution: 'BELFIUS BANK',
      },
      {
        identifier: '797',
        bic: 'GKCC BE BB',
        institution: 'BELFIUS BANK',
      },
      {
        identifier: '798',
        bic: 'GKCC BE BB',
        institution: 'BELFIUS BANK',
      },
      {
        identifier: '799',
        bic: 'GKCC BE BB',
        institution: 'BELFIUS BANK',
      },
      {
        identifier: '800',
        bic: 'AXAB BE 22',
        institution: 'AXA Bank Belgium',
      },
      {
        identifier: '801',
        bic: 'AXAB BE 22',
        institution: 'AXA Bank Belgium',
      },
      {
        identifier: '802',
        bic: 'AXAB BE 22',
        institution: 'AXA Bank Belgium',
      },
      {
        identifier: '803',
        bic: 'AXAB BE 22',
        institution: 'AXA Bank Belgium',
      },
      {
        identifier: '804',
        bic: 'AXAB BE 22',
        institution: 'AXA Bank Belgium',
      },
      {
        identifier: '805',
        bic: 'AXAB BE 22',
        institution: 'AXA Bank Belgium',
      },
      {
        identifier: '806',
        bic: 'AXAB BE 22',
        institution: 'AXA Bank Belgium',
      },
      {
        identifier: '807',
        bic: 'AXAB BE 22',
        institution: 'AXA Bank Belgium',
      },
      {
        identifier: '808',
        bic: 'AXAB BE 22',
        institution: 'AXA Bank Belgium',
      },
      {
        identifier: '809',
        bic: 'AXAB BE 22',
        institution: 'AXA Bank Belgium',
      },
      {
        identifier: '810',
        bic: 'AXAB BE 22',
        institution: 'AXA Bank Belgium',
      },
      {
        identifier: '811',
        bic: 'AXAB BE 22',
        institution: 'AXA Bank Belgium',
      },
      {
        identifier: '812',
        bic: 'AXAB BE 22',
        institution: 'AXA Bank Belgium',
      },
      {
        identifier: '813',
        bic: 'AXAB BE 22',
        institution: 'AXA Bank Belgium',
      },
      {
        identifier: '814',
        bic: 'AXAB BE 22',
        institution: 'AXA Bank Belgium',
      },
      {
        identifier: '815',
        bic: 'AXAB BE 22',
        institution: 'AXA Bank Belgium',
      },
      {
        identifier: '816',
        bic: 'AXAB BE 22',
        institution: 'AXA Bank Belgium',
      },
      {
        identifier: '817',
        bic: 'ISAE BE BB',
        institution: 'CACEIS Bank Belgian Branch',
      },
      {
        identifier: '823',
        bic: 'BLUX BE BB',
        institution: 'Banque de Luxembourg',
      },
      {
        identifier: '825',
        bic: 'DEUT BE BE',
        institution: 'Deutsche Bank AG',
      },
      {
        identifier: '826',
        bic: 'DEUT BE BE',
        institution: 'Deutsche Bank AG',
      },
      {
        identifier: '828',
        bic: 'BBRU BE BB',
        institution: 'ING België',
      },
      {
        identifier: '830',
        bic: 'GKCC BE BB',
        institution: 'BELFIUS BANK',
      },
      {
        identifier: '831',
        bic: 'GKCC BE BB',
        institution: 'BELFIUS BANK',
      },
      {
        identifier: '832',
        bic: 'GKCC BE BB',
        institution: 'BELFIUS BANK',
      },
      {
        identifier: '833',
        bic: 'GKCC BE BB',
        institution: 'BELFIUS BANK',
      },
      {
        identifier: '834',
        bic: 'GKCC BE BB',
        institution: 'BELFIUS BANK',
      },
      {
        identifier: '835',
        bic: 'GKCC BE BB',
        institution: 'BELFIUS BANK',
      },
      {
        identifier: '836',
        bic: 'GKCC BE BB',
        institution: 'BELFIUS BANK',
      },
      {
        identifier: '837',
        bic: 'GKCC BE BB',
        institution: 'BELFIUS BANK',
      },
      {
        identifier: '838',
        bic: 'GKCC BE BB',
        institution: 'BELFIUS BANK',
      },
      {
        identifier: '839',
        bic: 'GKCC BE BB',
        institution: 'BELFIUS BANK',
      },
      {
        identifier: '840',
        bic: 'PRIB BE BB',
        institution: 'Edmond de Rothschild (Europe)',
      },
      {
        identifier: '844',
        bic: 'RABO BE 22',
        institution: 'Rabobank.be',
      },
      {
        identifier: '845',
        bic: 'DEGR BE BB',
        institution: 'Bank Degroof Petercam',
      },
      {
        identifier: '850',
        bic: 'NICA BE BB',
        institution: 'Crelan',
      },
      {
        identifier: '851',
        bic: 'NICA BE BB',
        institution: 'Crelan',
      },
      {
        identifier: '852',
        bic: 'NICA BE BB',
        institution: 'Crelan',
      },
      {
        identifier: '853',
        bic: 'NICA BE BB',
        institution: 'Crelan',
      },
      {
        identifier: '859',
        bic: 'NICA BE BB',
        institution: 'Crelan',
      },
      {
        identifier: '860',
        bic: 'NICA BE BB',
        institution: 'Crelan',
      },
      {
        identifier: '862',
        bic: 'NICA BE BB',
        institution: 'Crelan',
      },
      {
        identifier: '863',
        bic: 'NICA BE BB',
        institution: 'Crelan',
      },
      {
        identifier: '865',
        bic: 'NICA BE BB',
        institution: 'Crelan',
      },
      {
        identifier: '866',
        bic: 'NICA BE BB',
        institution: 'Crelan',
      },
      {
        identifier: '868',
        bic: 'KRED BE BB',
        institution: 'KBC Bank',
      },
      {
        identifier: '871',
        bic: 'BNAG BE BB',
        institution: 'Bank Nagelmackers',
      },
      {
        identifier: '873',
        bic: 'PCHQ BE BB',
        institution: 'bpost',
      },
      {
        identifier: '876',
        bic: 'MBWM BE BB',
        institution: 'MeDirect Bank S.A.',
      },
      {
        identifier: '877',
        bic: 'BNAG BE BB',
        institution: 'Bank Nagelmackers',
      },
      {
        identifier: '878',
        bic: 'BNAG BE BB',
        institution: 'Bank Nagelmackers',
      },
      {
        identifier: '879',
        bic: 'BNAG BE BB',
        institution: 'Bank Nagelmackers',
      },
      {
        identifier: '880',
        bic: 'BBRU BE BB',
        institution: 'ING België',
      },
      {
        identifier: '881',
        bic: 'BBRU BE BB',
        institution: 'ING België',
      },
      {
        identifier: '883',
        bic: 'BBRU BE BB',
        institution: 'ING België',
      },
      {
        identifier: '884',
        bic: 'BBRU BE BB',
        institution: 'ING België',
      },
      {
        identifier: '887',
        bic: 'BBRU BE BB',
        institution: 'ING België',
      },
      {
        identifier: '888',
        bic: 'BBRU BE BB',
        institution: 'ING België',
      },
      {
        identifier: '890',
        bic: 'VDSP BE 91',
        institution: 'vdk bank',
      },
      {
        identifier: '891',
        bic: 'VDSP BE 91',
        institution: 'vdk bank',
      },
      {
        identifier: '892',
        bic: 'VDSP BE 91',
        institution: 'vdk bank',
      },
      {
        identifier: '893',
        bic: 'VDSP BE 91',
        institution: 'vdk bank',
      },
      {
        identifier: '894',
        bic: 'VDSP BE 91',
        institution: 'vdk bank',
      },
      {
        identifier: '895',
        bic: 'VDSP BE 91',
        institution: 'vdk bank',
      },
      {
        identifier: '896',
        bic: 'VDSP BE 91',
        institution: 'vdk bank',
      },
      {
        identifier: '897',
        bic: 'VDSP BE 91',
        institution: 'vdk bank',
      },
      {
        identifier: '898',
        bic: 'VDSP BE 91',
        institution: 'vdk bank',
      },
      {
        identifier: '899',
        bic: 'VDSP BE 91',
        institution: 'vdk bank',
      },
      {
        identifier: '906',
        bic: 'CEKV BE 88',
        institution: 'Centrale Kredietverlening (C.K.V.)',
      },
      {
        identifier: '908',
        bic: 'CEKV BE 88',
        institution: 'Centrale Kredietverlening (C.K.V.)',
      },
      {
        identifier: '910',
        bic: 'BBRU BE BB',
        institution: 'ING België',
      },
      {
        identifier: '911',
        bic: 'TUNZ BE B1',
        institution: 'Ingenico Financial Solutions',
      },
      {
        identifier: '913',
        bic: 'EPBF BE BB',
        institution: 'EPBF',
      },
      {
        identifier: '914',
        bic: 'FXBBBEBB',
        institution: 'FX4BIZ',
      },
      {
        identifier: '915',
        bic: 'OONX BE BB',
        institution: 'Oonex',
      },
      {
        identifier: '916',
        bic: 'GOCF BE B1',
        institution: 'GOLD COMMODITIES FOREX (G.C.F.)',
      },
      {
        identifier: '920',
        bic: 'BBRU BE BB',
        institution: 'ING België',
      },
      {
        identifier: '922',
        bic: 'BBRU BE BB',
        institution: 'ING België',
      },
      {
        identifier: '923',
        bic: 'BBRU BE BB',
        institution: 'ING België',
      },
      {
        identifier: '924',
        bic: 'FMMS BE B1',
        institution: 'Fimaser',
      },
      {
        identifier: '926',
        bic: 'EBPB BE B1',
        institution: 'Ebury Partners Belgium',
      },
      {
        identifier: '927',
        bic: 'PAGO BE BB',
        institution: 'PagoFX Europe',
      },
      {
        identifier: '928',
        bic: 'VPAY BE 21',
        institution: 'VIVA Payment Services',
      },
      {
        identifier: '929',
        bic: 'BBRU BE BB',
        institution: 'ING België',
      },
      {
        identifier: '930',
        bic: 'BBRU BE BB',
        institution: 'ING België',
      },
      {
        identifier: '931',
        bic: 'BBRU BE BB',
        institution: 'ING België',
      },
      {
        identifier: '934',
        bic: 'BBRU BE BB',
        institution: 'ING België',
      },
      {
        identifier: '936',
        bic: 'BBRU BE BB',
        institution: 'ING België',
      },
      {
        identifier: '939',
        bic: 'BBRU BE BB',
        institution: 'ING België',
      },
      {
        identifier: '940',
        bic: 'CLIQ BE B1',
        institution: 'Banque Centrale de Compensation (Clearnet)',
      },
      {
        identifier: '941',
        bic: 'CVMC BE BB',
        institution: 'C A Indosuez Wealth (Europe)',
      },
      {
        identifier: '942',
        bic: 'PUIL BE BB',
        institution: 'Puilaetco Branch of Quintet Private Bank SA',
      },
      {
        identifier: '945',
        bic: 'JPMG BE BB',
        institution: 'J.P. Morgan Bank Luxembourg - Brussels Branch',
      },
      {
        identifier: '948',
        bic: 'NYA',
        institution: 'HomeSend',
      },
      {
        identifier: '949',
        bic: 'HSBC BE BB',
        institution: 'HSBC Continental Europe Belgium',
      },
      {
        identifier: '950',
        bic: 'CTBK BE BX',
        institution: 'Beobank',
      },
      {
        identifier: '951',
        bic: 'CTBK BE BX',
        institution: 'Beobank',
      },
      {
        identifier: '952',
        bic: 'CTBK BE BX',
        institution: 'Beobank',
      },
      {
        identifier: '953',
        bic: 'CTBK BE BX',
        institution: 'Beobank',
      },
      {
        identifier: '954',
        bic: 'CTBK BE BX',
        institution: 'Beobank',
      },
      {
        identifier: '955',
        bic: 'CTBK BE BX',
        institution: 'Beobank',
      },
      {
        identifier: '956',
        bic: 'CTBK BE BX',
        institution: 'Beobank',
      },
      {
        identifier: '957',
        bic: 'CTBK BE BX',
        institution: 'Beobank',
      },
      {
        identifier: '958',
        bic: 'CTBK BE BX',
        institution: 'Beobank',
      },
      {
        identifier: '959',
        bic: 'CTBK BE BX',
        institution: 'Beobank',
      },
      {
        identifier: '960',
        bic: 'ABNA BE 2A IPC',
        institution: 'ABN AMRO Bank N.V.',
      },
      {
        identifier: '961',
        bic: 'BBRU BE BB',
        institution: 'ING België',
      },
      {
        identifier: '963',
        bic: 'AXAB BE 22',
        institution: 'AXA Bank Belgium',
      },
      {
        identifier: '966',
        bic: 'NEEC BE B2',
        institution: 'NewB',
      },
      {
        identifier: '967',
        bic: 'TRWI BE B1',
        institution: 'TransferWise',
      },
      {
        identifier: '968',
        bic: 'ENIB BE BB',
        institution: 'Banque Eni',
      },
      {
        identifier: '969',
        bic: 'PUIL BE BB',
        institution: 'Puilaetco Branch of Quintet Private Bank SA',
      },
      {
        identifier: '971',
        bic: 'BBRU BE BB',
        institution: 'ING België',
      },
      {
        identifier: '973',
        bic: 'ARSP BE 22',
        institution: 'Argenta Spaarbank (ASPA)',
      },
      {
        identifier: '974',
        bic: 'PESO BE B1',
        institution: 'PPS EU SA',
      },
      {
        identifier: '975',
        bic: 'AXAB BE 22',
        institution: 'AXA Bank Belgium',
      },
      {
        identifier: '976',
        bic: 'BBRU BE BB',
        institution: 'ING België',
      },
      {
        identifier: '978',
        bic: 'ARSP BE 22',
        institution: 'Argenta Spaarbank (ASPA)',
      },
      {
        identifier: '979',
        bic: 'ARSP BE 22',
        institution: 'Argenta Spaarbank (ASPA)',
      },
      {
        identifier: '980',
        bic: 'ARSP BE 22',
        institution: 'Argenta Spaarbank (ASPA)',
      },
      {
        identifier: '981',
        bic: 'PCHQ BE BB',
        institution: 'bpost',
      },
      {
        identifier: '982',
        bic: 'PCHQ BE BB',
        institution: 'bpost',
      },
      {
        identifier: '983',
        bic: 'PCHQ BE BB',
        institution: 'bpost',
      },
      {
        identifier: '984',
        bic: 'PCHQ BE BB',
        institution: 'bpost',
      },
      {
        identifier: '985',
        bic: 'BPOT BE B1',
        institution: 'bpost bank',
      },
      {
        identifier: '986',
        bic: 'BPOT BE B1',
        institution: 'bpost bank',
      },
      {
        identifier: '987',
        bic: 'BPOT BE B1',
        institution: 'bpost bank',
      },
      {
        identifier: '988',
        bic: 'BPOT BE B1',
        institution: 'bpost bank',
      },
    ],
  },
]

export default bicValues
