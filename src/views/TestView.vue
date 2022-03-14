<template>
  <main>
    <pre>{{ $store.state.data }}</pre>
    <p></p>
    <!-- <div>
      <h1>Personal Info</h1>
      <p>
        First Name: <span>{{ $store.state.data.first_name }}</span>
      </p>
      <p>
        Last Name: <span>{{ $store.state.data.last_name }}</span>
      </p>
      <p>
        Email: <span>{{ $store.state.data.email }}</span>
      </p>
      <p>
        Phone: <span>{{ $store.state.data.phone }}</span>
      </p>
      <hr />
    </div>

    <div>
      <h1>Skills</h1>
      <pre>{{ $store.state.data.skills }}</pre>
      <hr />
    </div>

    <div>
      <h1>Covid Staff</h1>
      <p>
        Work Preference: <span>{{ $store.state.data.work_preference }}ggg</span>
      </p>
      <p>
        Had Covid: <span>{{ $store.state.data.had_covid }}</span>
      </p>
      <p>
        Had Covid At: <span>{{ $store.state.data.had_covid_at }}</span>
      </p>
      <p>
        Vaccinated: <span>{{ $store.state.data.vaccinated }}</span>
      </p>
      <p>
        Vaccinated At: <span>{{ $store.state.data.vaccinated_at }}</span>
      </p>
      <hr />
    </div>

    <div>
      <h1>Redberrian</h1>
      <p>
        Work Preference:
        <span>{{ $store.state.data.will_organize_devtalk }}ggg</span>
      </p>
      <p>
        Topic: <span>{{ $store.state.data.devtalk_topic }}</span>
      </p>
      <p>
        Special: <span>{{ $store.state.data.something_special }}</span>
      </p>
      <hr />
    </div> -->
  </main>
</template>

<script>
export default {};
</script>

<style scoped>
main {
  height: 100vh;
}
div {
  margin: 0 auto;
  padding: 50px 0;
  width: 70%;
  color: white;
}
span {
  color: red;
}
h1 {
  text-align: center;
  font-size: 20px;
}
</style>
