## TEST 1

```c
1. function fishBash(n) {
  for (let i = 1; i <= n; i++) {
    let output = "";
    if (i % 3 === 0) {
      output += "fish";
    }
    if (i % 5 === 0) {
      output += "bash";
    }
    if (output === "") {
      output = i.toString();
    }
    console.log(output);
  }
}
fishBash(5);
```

```c
2.
lower to higher
function sortAsc(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

higher to lower
function sortDesc(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > arr[i]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}
```

```c
3.
 function isPalindrome(str) {
  str = str.toLowerCase().replace(/\s/g, "");

  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  if (str === reversed) {
    return true;
  } else {
    return false;
  }
}
```

## How to install

1. Clone this repository:

```bash
git clone repository
```

2. Go into project

```bash
cd <directory name>
```

3. Install dependencies

```bash
npm install
```

4. Run project

```bash
npm run dev
```

### How running test

Run Test

```bash
npm run test
```
