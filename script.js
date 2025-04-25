window.onload = function () {
    const savedData = JSON.parse(localStorage.getItem('houseTaxData'));
    if (savedData) {
      document.getElementById('plotLength').value = savedData.plotLength || '';
      document.getElementById('plotBreadth').value = savedData.plotBreadth || '';
      document.getElementById('costPerYard').value = savedData.costPerYard || '';
      document.getElementById('plinthLength').value = savedData.plinthLength || '';
      document.getElementById('plinthBreadth').value = savedData.plinthBreadth || '';
      document.getElementById('costPerFt').value = savedData.costPerFt || '';
      document.getElementById('taxPercent').value = savedData.taxPercent || '';
    }
    calculate();
  };
  
  function calculate() {
    const plotLength = parseFloat(document.getElementById('plotLength').value) || 0;
    const plotBreadth = parseFloat(document.getElementById('plotBreadth').value) || 0;
    const costPerYard = parseFloat(document.getElementById('costPerYard').value) || 0;
  
    const plinthLength = parseFloat(document.getElementById('plinthLength').value) || 0;
    const plinthBreadth = parseFloat(document.getElementById('plinthBreadth').value) || 0;
    const costPerFt = parseFloat(document.getElementById('costPerFt').value) || 0;
  
    const taxPercent = parseFloat(document.getElementById('taxPercent').value) || 0;
  
    const waterRate = parseFloat(document.getElementById('waterTaxRate').value) || 0;
    const drainageRate = parseFloat(document.getElementById('drainageTaxRate').value) || 0;
    const lightningRate = parseFloat(document.getElementById('lightningTaxRate').value) || 0;
  
    const plotArea = (plotLength * plotBreadth) / 9;
    const plinthArea = plinthLength * plinthBreadth;
  
    const plotCost = Math.round(plotArea * costPerYard);
    const plinthCost = Math.round(plinthArea * costPerFt);
    const totalCost = plotCost + plinthCost;
  
    const houseTax = Math.round((totalCost * taxPercent) / 100);
  
    const waterTax = Math.round(houseTax * (waterRate / 100));
    const drainageTax = Math.round(houseTax * (drainageRate / 100));
    const lightningTax = Math.round(houseTax * (lightningRate / 100));
    const libraryTax = Math.round(houseTax * 0.08);
    const sportsTax = Math.round(houseTax * 0.03);
    const fireTax = Math.round(houseTax * 0.01);
  
    const totalTaxes = houseTax + waterTax + drainageTax + lightningTax + libraryTax + sportsTax + fireTax;
  
    document.getElementById('plotArea').textContent = plotArea.toFixed(2);
    document.getElementById('plinthArea').textContent = plinthArea.toFixed(2);
  
    document.getElementById('plotCost').textContent = plotCost;
    document.getElementById('plinthCost').textContent = plinthCost;
  
    document.getElementById('sumPlotCost').textContent = plotCost;
    document.getElementById('sumPlinthCost').textContent = plinthCost;
    document.getElementById('totalCost').textContent = totalCost;
  
    document.getElementById('houseTax').textContent = houseTax;
    document.getElementById('waterTax').textContent = waterTax;
    document.getElementById('drainageTax').textContent = drainageTax;
    document.getElementById('lightningTax').textContent = lightningTax;
    document.getElementById('libraryTax').textContent = libraryTax;
    document.getElementById('sportsTax').textContent = sportsTax;
    document.getElementById('fireTax').textContent = fireTax;
    document.getElementById('totalTaxes').textContent = totalTaxes;
  
    const saveData = {
      plotLength,
      plotBreadth,
      costPerYard,
      plinthLength,
      plinthBreadth,
      costPerFt,
      taxPercent
    };
    localStorage.setItem('houseTaxData', JSON.stringify(saveData));
  }
  
  const allInputs = document.querySelectorAll('input');
  allInputs.forEach(input => input.addEventListener('input', calculate));
  
  ['waterTaxRate', 'drainageTaxRate', 'lightningTaxRate'].forEach(id => {
    document.getElementById(id).addEventListener('change', calculate);
  });
  