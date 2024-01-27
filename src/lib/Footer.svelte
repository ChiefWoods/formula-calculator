<script lang="ts">
  import GitHub from "../assets/icons/github.svg";

  const year = new Date().getFullYear();
</script>

<footer>
  <span class="made-by"
    >Copyright @ {year} ChiefWoods
  </span>
  <a
    class="github-link"
    href="https://github.com/ChiefWoods/formula-calculator"
    target="_blank"
  >
    <img src={GitHub} class="github-icon" alt="GitHub" />
  </a>
</footer>
