document.addEventListener('DOMContentLoaded', function () {
  const tableSelector = document.getElementById('tableSelector');
  const tableContainer = document.getElementById('tableContainer');
  const descriptionContainer = document.getElementById('descriptionContainer');

  const options = [
    {
      value: 'table1',
      name: 'KEYCER MONO',
      description: 'Description: MONOCROTOPHOS 36%',
    },
    {
      value: 'table2',
      name: 'KEYCER THOATE',
      description: 'Description: DIMETHOATE 30% EC',
    },
    {
      value: 'table3',
      name: 'KEYCER CHOLOR',
      description: 'Description: CHILORPHRIPHOS 20%EC',
    },
    {
      value: 'table4',
      name: 'KEYCER CYPER',
      description: 'Description: CYPERMETHRIN 10% EC',
    },
    {
      value: 'table5',
      name: 'KEYCER THANE',
      description: 'Description: ACEPHATE 75% WP',
    },
    {
      value: 'table6',
      name: 'KEYCER LAM',
      description: 'Description: LAMBADA 5% EC',
    },
    {
      value: 'table7',
      name: 'KEYCER GLY',
      description: 'Description: GLYPHOSATE 41% SL ',
    },
    {
      value: 'table8',
      name: 'RECLAIM',
      description: 'Description: EMAMACTIN 5% G',
    },
    {
      value: 'table9',
      name: 'PROFENOPHS',
      description: 'Description: PROFENOPHOS 40% EC',
    },
    {
      value: 'table10',
      name: 'PROFENO + CYPER',
      description: 'Description: PROFENO + CYPER',
    },
    {
      value: 'table11',
      name: 'CPP + CYPER',
      description: 'Description: CPP + CYPER 50 + 5%',
    },
    {
      value: 'table12',
      name: 'PARA QUAT',
      description: 'Description: PARA QUAT',
    },
    {
      value: 'table13',
      name: 'CYBERMETHRIN 0.25% DP',
      description: 'Description: CYBERMETHRIN 0.25% DP',
    },
    {
      value: 'table14',
      name: 'CHILOROPYRIPHOS 15 DP',
      description: 'Description: CHILOROPYRIPHOS 15 DP',
    },
    {
      value: 'table15',
      name: 'CRATAP 4% QR',
      description: 'Description: CRATAP 4% QR',
    },
    {
      value: 'table16',
      name: 'NEEM OIL',
      description: 'Description: NEEM OIL',
    },
    {
      value: 'table17',
      name: 'NEEM CAKE POWDER',
      description: 'Description: NEEM CAKE POWDER',
    },
  ];
  options.forEach((option) => {
    const optionElement = document.createElement('option');
    optionElement.value = option.value;
    optionElement.textContent = option.name;
    tableSelector.appendChild(optionElement);
  });
  // Define your tables as HTML strings
  const descriptions = {};
  options.forEach((option) => {
    descriptions[option.value] = `<p>${option.description}</p>`;
  });

  const generateTable = (selectedTable) => {
    const productsData = getProductData(selectedTable); // Get product data based on the selected option

    // Create the table HTML dynamically
    let tableHTML = `
        <table>
            <tr>
                <th>Pack</th>
                <th colspan=3>Price</th>
            </tr>
            <tr>
                <th></th>
                <th>Unit</th>
                <th>Per Case</th>
                <th>MRP</th>
            </tr>
    `;

    // Loop through the product data and generate rows dynamically
    productsData.forEach((product) => {
      tableHTML += `
            <tr>
                <td>${product.name}</td>
                <td>${product.unit}</td>
                <td>${product.perCase}</td>
                <td>${product.mrp}</td>
            </tr>
        `;
    });

    tableHTML += `</table>`;
    return tableHTML;
  };

  const getProductData = (selectedTable) => {
    if (selectedTable === 'table1') {
      return [
        { name: '2 x 5 LTR', unit: '2,220.00', perCase: '4,440.00', mrp: '' },
        {
          name: '10 x 1 LTR',
          unit: '440.00',
          perCase: '4,440.00',
          mrp: '900.00',
        },
        {
          name: '20 x 500 ML',
          unit: '240.00',
          perCase: '4,800.00',
          mrp: '470.00',
        },
        {
          name: '40 x 250 ML',
          unit: '140.00',
          perCase: '5,600.00',
          mrp: '300.00',
        },
        {
          name: '100 x 100 ML',
          unit: '50.00',
          perCase: '5,000.00',
          mrp: '100.00',
        },
      ];
    } else if (selectedTable === 'table2') {
      return [
        {
          name: '10 x 1 LTR',
          unit: '400.00',
          perCase: '4,000.00',
          mrp: '1100.00',
        },
        {
          name: '20 x 500 ML',
          unit: '220.00',
          perCase: '4,400.00',
          mrp: '550.00',
        },
        {
          name: '40 x 250 ML',
          unit: '130.00',
          perCase: '5,200.00',
          mrp: '260.00',
        },
        {
          name: '100 x 100 ML',
          unit: '46.00',
          perCase: '4,600.00',
          mrp: '100.00',
        },
      ];
    } else if (selectedTable === 'table3') {
      return [
        {
          name: 'PET 10 x 1 LTR',
          unit: '230.00',
          perCase: '2,300.00',
          mrp: '850.00',
        },
        {
          name: 'PET 20 x 500 ML',
          unit: '135.00',
          perCase: '2,700.00',
          mrp: '425.00',
        },
        {
          name: 'PET 40 x 250 ML',
          unit: '88.00',
          perCase: '3,520.00',
          mrp: '200.00',
        },
        {
          name: 'PET 100 x 100 ML',
          unit: '30.00',
          perCase: '3,000.00',
          mrp: '80.00',
        },
      ];
    } else if (selectedTable === 'table4') {
      return [
        {
          name: 'PET 10 x 1 LTR',
          unit: '260.00',
          perCase: '2,600.00',
          mrp: '650.00',
        },
        {
          name: 'PET 20 x 500 ML',
          unit: '150.00',
          perCase: '3,000.00',
          mrp: '325.00',
        },
        {
          name: 'PET 40 x 250 ML',
          unit: '95.00',
          perCase: '3,800.00',
          mrp: '200.00',
        },
        {
          name: 'PET 100 x 100 ML',
          unit: '35.00',
          perCase: '3,500.00',
          mrp: '90.00',
        },
      ];
    } else if (selectedTable === 'table5') {
      return [
        {
          name: '10 x 1 KG',
          unit: '780.00',
          perCase: '7,800.00',
          mrp: '1,600.00',
        },
        {
          name: '20 x 500 GMS',
          unit: '400.00',
          perCase: '8,000.00',
          mrp: '800.00',
        },
        {
          name: '40 x 250 GMS',
          unit: '210.00',
          perCase: '8,400.00',
          mrp: '400.00',
        },
        {
          name: '100 x 100 GMS',
          unit: '90.00',
          perCase: '9,000.00',
          mrp: '200.00',
        },
        {
          name: '50 x 50 GMS',
          unit: '50.00',
          perCase: '2,500.00',
          mrp: '100.00',
        },
      ];
    } else if (selectedTable === 'table6') {
      return [
        {
          name: 'PET 10 x 1 LTR',
          unit: '310.00',
          perCase: '3,100.00',
          mrp: '950.00',
        },
        {
          name: 'PET 20 x 500 ML',
          unit: '175.00',
          perCase: '3,500.00',
          mrp: '475.00',
        },
        {
          name: 'PET 40 x 250 ML',
          unit: '110.00',
          perCase: '4,400.00',
          mrp: '220.00',
        },
        {
          name: 'PET 100 x 100 ML',
          unit: '40.00',
          perCase: '4,000.00',
          mrp: '80.00',
        },
      ];
    } else if (selectedTable === 'table7') {
      return [
        {
          name: '10 x 1 LTR',
          unit: '315.00',
          perCase: '3,150.00',
          mrp: '800.00',
        },
        {
          name: '20 x 500 ML',
          unit: '180.00',
          perCase: '3,600.00',
          mrp: '400.00',
        },
        {
          name: '40 x 250 ML',
          unit: '100.00',
          perCase: '4,000.00',
          mrp: '200.00',
        },
      ];
    } else if (selectedTable === 'table8') {
      return [
        {
          name: '5 x 1 KG',
          unit: '1,250.00',
          perCase: '6,250.00',
          mrp: '3,900.00',
        },
        {
          name: '10 x 500 GMS',
          unit: '630.00',
          perCase: '6,300.00',
          mrp: '2,000.00',
        },
        {
          name: '20 x 250 GMS',
          unit: '330.00',
          perCase: '6,600.00',
          mrp: '1,000.00',
        },
        {
          name: '40 x 50 GMS',
          unit: '95.00',
          perCase: '3,800.00',
          mrp: '200.00',
        },
        {
          name: '50 x 100 GMS',
          unit: '150.00',
          perCase: '7,500.00',
          mrp: '400.00',
        },
      ];
    } else if (selectedTable === 'table9') {
      return [
        {
          name: 'PET 10 x 1 LTR',
          unit: '560.00',
          perCase: '5,600.00',
          mrp: '1,300.00',
        },
        {
          name: 'PET 20 x 500 ML',
          unit: '300.00',
          perCase: '6,000.00',
          mrp: '650.00',
        },
        {
          name: 'PET 40 x 250 ML',
          unit: '170.00',
          perCase: '6,800.00',
          mrp: '350.00',
        },
        {
          name: 'PET 100 x 100 ML',
          unit: '65.00',
          perCase: '6,500.00',
          mrp: '175.00',
        },
      ];
    } else if (selectedTable === 'table10') {
      return [
        {
          name: 'PET 10 x 1 LTR',
          unit: '490.00',
          perCase: '4,900.00',
          mrp: '1,000.00',
        },
        {
          name: 'PET 20 x 500 ML',
          unit: '265.00',
          perCase: '5,300.00',
          mrp: '500.00',
        },
        {
          name: 'PET 40 x 250 ML',
          unit: '150.00',
          perCase: '6,000.00',
          mrp: '250.00',
        },
        {
          name: 'PET 100 x 100 ML',
          unit: '60.00',
          perCase: '6,000.00',
          mrp: '125.00',
        },
      ];
    } else if (selectedTable === 'table11') {
      return [
        {
          name: '10 x 1 LTR',
          unit: '520.00',
          perCase: '5,200.00',
          mrp: '1,300.00',
        },
        {
          name: '20 x 500 ML',
          unit: '280.00',
          perCase: '5,600.00',
          mrp: '650.00',
        },
        {
          name: '40 x 250 ML',
          unit: '160.00',
          perCase: '6,400.00',
          mrp: '325.00',
        },
        {
          name: '60 x 100 ML',
          unit: '60.00',
          perCase: '6,000.00',
          mrp: '150.00',
        },
      ];
    } else if (selectedTable === 'table12') {
      return [
        {
          name: '10 x 1 LTR',
          unit: '240.00',
          perCase: '2,400.00',
          mrp: '550.00',
        },
        {
          name: '20 x 500 ML',
          unit: '140.00',
          perCase: '2,800.00',
          mrp: '275.00',
        },
        {
          name: '40 x 250 ML',
          unit: '90.00',
          perCase: '3,600.00',
          mrp: '140.00',
        },
      ];
    } else if (selectedTable === 'table13') {
      return [
        {
          name: '200 GM / MT',
          unit: '',
          perCase: '20,000.00',
          mrp: '25.00',
        },
        {
          name: '500 GM / MT',
          unit: '',
          perCase: '18,000.00',
          mrp: '30.00',
        },
        {
          name: '1 KGS',
          unit: '',
          perCase: '17,000.00',
          mrp: '50.00',
        },
        {
          name: '5 KGS',
          unit: '',
          perCase: '16,000.00',
          mrp: '250.00',
        },
        {
          name: '10 KGS',
          unit: '',
          perCase: '15,500.00',
          mrp: '450.00',
        },
        {
          name: '25 KGS',
          unit: '',
          perCase: '15,000.00',
          mrp: '700.00',
        },
      ];
    } else if (selectedTable === 'table14') {
      return [
        {
          name: '200 GM ',
          unit: '',
          perCase: '24,000.00',
          mrp: '30.00',
        },
        {
          name: '500 GM',
          unit: '',
          perCase: '23,000.00',
          mrp: '40.00',
        },
        {
          name: '1 KGS',
          unit: '',
          perCase: '22,000.00',
          mrp: '75.00',
        },
        {
          name: '5 KGS',
          unit: '',
          perCase: '21,000.00',
          mrp: '350.00',
        },
        {
          name: '10 KGS',
          unit: '',
          perCase: '20,500.00',
          mrp: '650.00',
        },
        {
          name: '25 KGS',
          unit: '',
          perCase: '20,000.00',
          mrp: '950.00',
        },
      ];
    } else if (selectedTable === 'table15') {
      return [
        {
          name: '1 KGS',
          unit: '',
          perCase: '70.00',
          mrp: '150.00',
        },
        {
          name: '5 KGS',
          unit: '',
          perCase: '450.00',
          mrp: '750.00',
        },
      ];
    } else if (selectedTable === 'table16') {
      return [
        {
          name: '1 KGS',
          unit: '',
          perCase: '450.00',
          mrp: '750.00',
        },
      ];
    } else if (selectedTable === 'table17') {
      return [
        {
          name: '1 KGS',
          unit: '',
          perCase: '25.00',
          mrp: '60.00',
        },
      ];
    }
    // Add more conditions for other options as needed
  };

  // Function to update the displayed table and description
  function updateTable() {
    const selectedTable = tableSelector.value;
    const tableHTML = generateTable(selectedTable);
    tableContainer.innerHTML = tableHTML;
    const tableDescription = descriptions[selectedTable];
    descriptionContainer.innerHTML = tableDescription; // Corrected this line
  }

  // Initially update the table based on the default selection
  updateTable();

  // Listen for changes in the select element
  tableSelector.addEventListener('change', updateTable);
});
