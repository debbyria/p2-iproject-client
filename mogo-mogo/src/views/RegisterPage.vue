<script>
import { mapActions } from "pinia";
import { useMogoStore } from "../stores/mogo";

export default {
  data() {
    return {
      dataUser: {
        username: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions(useMogoStore, ["registerAction"]),
    async registerButtonHandler() {
      try {
        let response = await this.registerAction(this.dataUser);

        this.$router.push("/login");
        this.$swal({
          icon: "success",
          text: "You are registered, please sign in now",
        });
      } catch (err) {
        console.log(err.response);
      }
    },
  },
};
</script>

<template>
  <!-- Main Content -->
  <div class="container-fluid">
    <div class="row main-content bg-success text-center">
      <div class="col-md-4 text-center company__info">
        <span class="company__logo"
          ><h2><img src="../assets/logo-removebg.png" alt="" /></h2
        ></span>
      </div>
      <div class="col-md-8 col-xs-12 col-sm-12 login_form">
        <div class="container-fluid">
          <div class="row">
            <h2>Sign Up</h2>
          </div>
          <div class="row">
            <form
              @submit.prevent="registerButtonHandler"
              control=""
              class="form-group"
            >
              <div class="row">
                <input
                  v-model="this.dataUser.username"
                  type="text"
                  name="username"
                  id="username"
                  class="form__input"
                  placeholder="Username"
                />
              </div>
              <div class="row">
                <input
                  v-model="this.dataUser.email"
                  type="email"
                  name="email"
                  id="email"
                  class="form__input"
                  placeholder="Email"
                />
              </div>
              <div class="row">
                <input
                  v-model="this.dataUser.password"
                  type="password"
                  name="password"
                  id="password"
                  class="form__input"
                  placeholder="Password"
                />
              </div>
              <div class="row">
                <input type="submit" value="Sign Up" class="btn" />
              </div>
            </form>
          </div>
          <div class="row">
            <RouterLink class="link-home" to="/"
              ><i class="fa-solid fa-rotate-left"></i> Back to home</RouterLink
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.link-home {
  margin-bottom: 25px;
}
.main-content {
  width: 50%;
  border-radius: 20px;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.4);
  margin: 5em auto;
  display: flex;
}
.company__info {
  background-color: #b4e197;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #fff;
}
.fa-android {
  font-size: 3em;
}
@media screen and (max-width: 640px) {
  .main-content {
    width: 90%;
  }
  .company__info {
    display: none;
  }
  .login_form {
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
  }
}
@media screen and (min-width: 642px) and (max-width: 800px) {
  .main-content {
    width: 70%;
  }
}
.row > h2 {
  margin-top: 20px;
  color: #008080;
}
.login_form {
  background-color: #fff;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top: 1px solid #ccc;
  border-right: 1px solid #ccc;
}
form {
  padding: 0 2em;
}
.form__input {
  width: 100%;
  border: 0px solid transparent;
  border-radius: 0;
  border-bottom: 1px solid #aaa;
  padding: 1em 0.5em 0.5em;
  padding-left: 2em;
  outline: none;
  margin: 1.5em auto;
  transition: all 0.5s ease;
}
.form__input:focus {
  border-bottom-color: #008080;
  box-shadow: 0 0 5px rgba(0, 80, 80, 0.4);
  border-radius: 4px;
}
.btn {
  transition: all 0.5s ease;
  width: 70%;
  border-radius: 30px;
  color: #008080;
  font-weight: 600;
  background-color: #fff;
  border: 1px solid #008080;
  margin-top: 1.5em;
  margin-bottom: 1em;
  margin-left: 45px;
}
.btn:hover,
.btn:focus {
  background-color: #008080;
  color: #fff;
}
</style>
