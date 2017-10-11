<template>
  <div>
    <h4>Створити методиста:</h4>
    <form>
      <div class="form-group">
        <label for="text1">ПІБ</label>
        <input type="text" class="form-control" id="text1">
      </div>
      <div class="form-group">
        <label for="text2">університет</label>
        <input type="text" class="form-control" id="text2">
      </div>
      <div class="form-group">
        <label for="text3">факультет</label>
        <input type="text" class="form-control" id="text3">
      </div>
      <div class="form-group">
        <label for="text4">кафедра</label>
        <input type="text" class="form-control" id="text4">
      </div>
      <button type="submit" class="btn btn-primary">Створити</button>
    </form>

  </div>
</template>

<script>
export default {
  name: 'methodist-form'
}
</script>

<style>

</style>
