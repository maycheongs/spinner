let loaderArr = ['|','/','-','\\','|','-','\\','|','\n'];
let timeout = -100;

for (const char of loaderArr) {
  timeout += 200;
  setTimeout(() => {
    process.stdout.write('\r' + char);
  },timeout)
}

