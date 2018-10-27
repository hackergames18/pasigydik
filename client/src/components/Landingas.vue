<template>
  <div class="landing-page">
    <section id="first">

      <div class="main">
        <div class="row">
          <div class="col-md-6">
            <div class="align-left">
              <h1>Medical attention from the comfort of your home.</h1>
              <router-link to="/register">
                <button type="button" id="landing-signup" class="btn  btn-lg">
                  Sign up
                </button>
              </router-link>
            </div>
          </div>
          <div class="col-md-6 hide-image-overflow">
            <img src="../assets/landing.png" alt="" class="landing-img">
          </div>

        </div>
        <h1></h1>

      </div>
    </section>

    <section id="second">
      <div class="container">
        <h1 class="text-center">Choose from a variety of our specialists</h1>

        <div class="d-flex justify-content-center flex-wrap items-container">

          <span v-for="spec in specialists" :key="spec.id">
            <button class="specialist mx-2" type="button">
              {{ spec }}
            </button>
          </span>
        </div>

        <!-- <div class="specialists1">
          <span v-for="spec in specialists1" :key="spec.id">
            <button class="specialist mx-2" type="button">
              {{ spec }}
            </button>
          </span>
        </div>
        <div class="specialists2">
          <span v-for="spec in specialists2" :key="spec.id">
            <button class="specialist mx-2" type="button">
              {{ spec }}
            </button>
          </span>
        </div> -->

        <h2 class="text-center ending">
          and many more...
        </h2>
      </div>
    </section>

    <div class="delete-me"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      specialists1: ["Dentist", "Dietologist", "Cardiologist"],
      specialists2: ["Allergist", "Psychologist", "Surgeon"],
      specialists: [
        "Dentist",
        "Dietologist",
        "Cardiologist",
        "Allergist",
        "Psychologist",
        "Surgeon",
        "Traumatologist",
        "Radiologist",
        "Dank Memer",
        "Allergist",
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.delete-me {
  margin-bottom: 20em;
}

.hide-image-overflow {
  overflow: hidden;
}

section#first {
  background-color: #f7f7f7;
  padding-bottom: 5em;
  min-height: 93vh;

  .landing-img {
    height: 750px;
    padding-left: 0px;
    margin-top: 100px;
    // background: url('../assets/landing.png');
    // -webkit-background-size: cover;
    // -moz-background-size: cover;
    // -o-background-size: cover;
    // background-size: cover;
    // TODO
  }

  .align-left {
    padding-left: 150px;
    padding-right: 150px;
    margin-top: 30%;
    text-align: left;

    h1 {
      line-height: 60px;
      font-weight: 900;
    }
  }

  #landing-signup {
    font-size: 1.5em;
    padding: 0.2em 2em;
    margin-top: 2em;
    border-radius: 25px;
    font-weight: 600;
    background-color: #2191fb;
    color: #fff;
  }
}

section#second {
  margin-top: 5em;

  h1 {
    font-weight: 500;
  }

  button.specialist {
    font-size: 1.5em;
    padding: 0.4em 2em;
    margin-top: 2em;
    border-radius: 50px;
    background-color: #2191fb;
    color: #fff;
    border: 0px solid transparent;
  }

  .ending {
    color: #bfbfbf;
    margin-top: 2em;
  }
}
</style>