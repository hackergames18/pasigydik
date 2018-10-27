<template>
  <div class="landing-page">
    <section id="first">

      <div class="main">
        <div class="container">
          <div class="row">
            <div class="col-md-5">
              <div class="align-left">
                <div class="landing-text">
                  <h1>Medical attention from the comfort of your home.</h1>
                </div>
                <button type="button" id="landing-signup" class="btn  btn-lg">
                  Sign up
                </button>
              </div>
            </div>
            <div class="col-md-7">
              <img src="" alt="">
              TODO Image
            </div>

          </div>
          <h1></h1>
        </div>

      </div>
    </section>

    <section id="second">
      <span class="text-center">
        <h1>Choose from a variety of our specialists</h1>
      </span>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
section#first {
  background-color: #f7f7f7;
  padding-bottom: 5em;
  min-height: 93vh;
}

section#second {
}

.navbar-brand {
  font-size: 2em;
}

.align-left {
  margin-left: 1em;
  text-align: left;
}

.landing-text {
  margin-top: 40%;
}

.landing-text h1 {
  font-weight: 900;
}

#landing-signup {
  font-size: 1.5em;
  padding: 0.2em 2em;
  margin-top: 2em;
  border-radius: 25px;
  background-color: #2191fb;
  color: #fff;
}
</style>