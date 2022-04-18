<template>
  <div class="container">
    <div class="posts" v-if="Inscrioptions">
      <ul>
        <li v-for="inscription in Inscrioptions" :key="inscription.id">
          <div id="post-div">
            <p>{{ inscription.user_id }}</p>
            <p>{{ inscription.name }}</p>
            <p>{{ inscription.lastName }}</p>
            <p>{{ inscription.email }}</p>
            <p>{{ inscription.validated }}</p>

           <button type="submit" > validate</button>
            
          </div>
        </li>
      </ul>
    </div>
   
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Validation",
  components: {},
  data() {
    return {
      form: {
        title: "",
        write_up: "",
      },
    };
  },
  created: function() {
    // a function to call getposts action
    this.GetInscriptions()
  },
  computed: {
    ...mapGetters({ Inscriptions: "StateInscriptions", User: "StateUser" }),
  },
  methods: {
    ...mapActions([ "GetInscriptions"]),
    async submit(id) {
      try {
        await this. confirmInscriptions({ id }) ;
      } catch (error) {
        throw "Sorry!"
      }
    },
  },
};
</script>
<style scoped>
* {
  box-sizing: border-box;
}

label {
  padding: 12px 12px 12px 0;
  display: inline-block;
}

button[type="submit"] {
  background-color: #4caf50;
  color: white;
  padding: 12px 20px;
  cursor: pointer;
  border-radius: 30px;
  margin: 10px;
}

button[type="submit"]:hover {
  background-color: #45a049;
}

input {
  width: 60%;
  margin: 15px;
  border: 0;
  box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);
  padding: 10px;
  border-radius: 30px;
}

textarea {
  width: 75%;
  resize: vertical;
  padding: 15px;
  border-radius: 15px;
  border: 0;
  box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);
  height: 150px;
  margin: 15px;
}

ul {
  list-style: none;
}

#post-div {
  border: 3px solid #000;
  width: 500px;
  margin: auto;
  margin-bottom: 5px;
}
</style>
