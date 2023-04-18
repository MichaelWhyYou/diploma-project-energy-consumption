function heapify(arr, n, i) {
    let largest = i;
    let l = 2 * i + 1;
    let r = 2 * i + 2;
  
    if (l < n && arr[i] < arr[l]) {
      largest = l;
    }
  
    if (r < n && arr[largest] < arr[r]) {
      largest = r;
    }
  
    if (largest != i) {
      [arr[i], arr[largest]] = [arr[largest], arr[i]];
      heapify(arr, n, largest);
    }
  }
  
  function heapSort(arr) {
    let n = arr.length;
  
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      heapify(arr, n, i);
    }
  
    for (let i = n - 1; i >= 0; i--) {
      [arr[0], arr[i]] = [arr[i], arr[0]];
      heapify(arr, i, 0);
    }
  }
  
  const fs = require('fs');
  const arr = fs.readFileSync('heap_sort_data.txt', 'utf8').split(' ').map(Number);
  heapSort(arr);
  console.log('Sorted');
  