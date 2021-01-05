<template>
  <div id="tab-bar" ignore>
      <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "TabBar",
    // Promise 使用
    mounted() {
      new Promise((resolve,reject) => {
          setTimeout(() => {
              resolve('hhh')
          },1000)
          reject('error')
      }).then((data) => {
          console.log(data)
          // return Promise.resolve('aaa')
          // return 'aaa'
          return new Promise((resolve,reject) => {
              setTimeout(() => {
                  resolve('aaa')
              },2000)
          }).then((data) => {
              // console.log(data)
          })
      }).catch(error => {
          // console.log(error)
      })

      Promise.all([
          new Promise(reslove => {
              setTimeout(() => {
                  // console.log('请求1');
                  reslove('请求1')
              },2000)
          }),
          new Promise(reslove => {
              setTimeout(() => {
                  // console.log('请求2');
                  reslove('请求2')
              },1000)
          }),
      ]).then(results => {
          // console.log(results)
      })
    },
  }
</script>

<style scoped>
  #tab-bar {
    display: flex;
    background-color: #f6f6f6;

    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;

    box-shadow: 0 -1px 1px rgba(100,100,100,0.2);
  }
</style>
