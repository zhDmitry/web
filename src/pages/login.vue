<template>
    <div>
      <h4>Вхід в особистий кабінет</h4>
      <form>
        <div class="form-group">
        <label for="email">поштова скринька:</label>
        <input type="email" class="form-control" id="email">
        </div>
        <div class="form-group">
        <label for="pwd">пароль:</label>
        <input type="password" class="form-control" id="pwd">
        </div>
        <button type="submit" class="btn btn-default">Увійти</button>
      </form>
    </div>
</template>

<script>
export default {
    name: 'login'
}
</script>
