<template>
    <article class="team-member">
        <div :style="`background-image: url(${profile})`" class="team-member__photo"/>
        <p class="team-member__name">{{name}}</p>
        <p class="team-member__title">{{title}}</p>
        <p class="team-member__education">{{education}}</p>
    </article>
</template>

<script>

export default {
  name: "Team__member",
  props: {
      name: String,
      title: String,
      education: String,
      profile: String
  }
}
</script>

<style scoped lang="scss">
    .team-member {
        width: 80%;
        margin: 0 auto;
        padding: 2rem 0;
        
        &__photo {
            background-size: cover;
            background-position-x: 50%;
            background-position-y: 50%;
            border-radius: 50%;

            width: 200px;
            height: 200px;
            margin: 0 auto;
        }

        &__name {
            font-size: 1.5rem;
            font-weight: 600;
            margin-bottom: 0;
        }

        &__title, &__education {
            font-size: 1rem;
            margin: 0 auto;
            max-width: 150px;
        }
    }
</style>