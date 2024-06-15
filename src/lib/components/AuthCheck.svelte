<script lang="ts">
  import {user} from '$lib/supabase'

</script>

{#if $user}
  <slot />
{:else}
    <p class="text-error">
        You must be signed in to view this page.
        <a class="btn btn-primary" href="/">Fuck off home lol</a>
    </p>
{/if}