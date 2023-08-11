<template>
    <div class="fs-2 separator">{{ title }}</div>
</template>

<script>
export default {
    props: {
        title: String
    }
}
</script>

<style lang="scss">
.separator {
    display: flex;
    align-items: center;
    text-align: center;
    width: fit-content; 
    height:2rem; 
    background-color:transparent !important; 
    line-height:30px;
    color: #111;

  }
  
  .separator::before,
  .separator::after {
    content: '';
    flex: 1;
    border-bottom: 1px dotted #000;
  }
  
  .separator:not(:empty)::before {
    margin-right: .25em;
  }
  
  .separator:not(:empty)::after {
    margin-left: .25em;
  }

</style>