<template>
  <div>
    <methodist-form />
    <hr>
    <h4>Створити викладача:</h4>
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

    <hr>
    <h4>Створити студента:</h4>
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
        <label for="text4">спеціальність</label>
        <input type="text" class="form-control" id="text4">
      </div>
      <div class="form-group">
        <label for="text5">курс</label>
        <input type="text" class="form-control" id="text5">
      </div>
      <button type="submit" class="btn btn-primary">Створити</button>
    </form>

    <hr>
    <h4>Створити дисципліну:</h4>
    <form>
      <div class="form-group">
        <label for="text1">назва</label>
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
      <div class="form-group">
        <label for="text5">викладач</label>
        <input type="text" class="form-control" id="text5">
      </div>
      <button type="submit" class="btn btn-primary">Створити</button>
    </form>

    <hr>
    <h4>Створити групу:</h4>
    <form>
      <div class="form-group">
        <label for="text1">університет</label>
        <input type="text" class="form-control" id="text1">
      </div>
      <div class="form-group">
        <label for="text2">факультет</label>
        <input type="text" class="form-control" id="text2">
      </div>
      <div class="form-group">
        <label for="text3">шифр</label>
        <input type="text" class="form-control" id="text3">
      </div>
      <div class="form-group">
        <label for="text4">дисципліна</label>
        <input type="text" class="form-control" id="text4">
      </div>
      <button type="submit" class="btn btn-primary">Створити</button>
    </form>

    <hr>
    <h4>Внести студента до групи:</h4>
    <form>
      <div class="form-group">
        <label for="text1">номер групи</label>
        <input type="text" class="form-control" id="text1">
      </div>
      <div class="form-group">
        <label for="text2">номер студентського квитка студента</label>
        <input type="text" class="form-control" id="text2">
      </div>
      <button type="submit" class="btn btn-primary">Створити</button>
    </form>

    <hr>
    <h4>Створити лекцію:</h4>
    <form>
      <div class="form-group">
        <label for="text1">дисципліна</label>
        <input type="text" class="form-control" id="text1">
      </div>
      <div class="form-group">
        <label for="text2">тема</label>
        <input type="text" class="form-control" id="text2">
      </div>
      <div class="form-group">
        <label for="text3">зміст</label>
        <textarea class="form-control" rows="5" id="text3"></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Створити</button>
    </form>

    <hr>
    <h4>Створити тести:</h4>
    <form>
      <div class="form-group">
        <label for="text1">дисципліна</label>
        <input type="text" class="form-control" id="text1">
      </div>
      <div class="form-group">
        <label for="text2">тема</label>
        <input type="text" class="form-control" id="text2">
      </div>
      <button type="submit" class="btn btn-primary">Створити</button>
    </form>

    <hr>
    <h4>Створити відповідь до тесту:</h4>
    <form>
      <div class="form-group">
        <label for="text1">тест</label>
        <input type="text" class="form-control" id="text1">
      </div>
      <div class="form-group">
        <label for="text2">питання</label>
        <input type="text" class="form-control" id="text2">
      </div>
      <div class="form-group">
        <label for="text3">відповідь</label>
        <input type="text" class="form-control" id="text3">
      </div>
      <button type="submit" class="btn btn-primary">Створити</button>
    </form>

    <hr>
    <h4>Створити план:</h4>
    <form>
      <div class="form-group">
        <label for="text1">дата</label>
        <input type="text" class="form-control" id="text1">
      </div>
      <div class="form-group">
        <label for="text2">дисципліна</label>
        <input type="text" class="form-control" id="text2">
      </div>
      <div class="form-group">
        <label for="text3">тема</label>
        <input type="text" class="form-control" id="text3">
      </div>
      <div class="form-group">
        <label for="text4">максимальний бал</label>
        <input type="text" class="form-control" id="text4">
      </div>
      <button type="submit" class="btn btn-primary">Створити</button>
    </form>
  </div>
</template>

<script>
import MethodistForm from '../components/methodist-form';
export default {
  components: {
    MethodistForm
  },
  name: 'admin'
}
</script>
