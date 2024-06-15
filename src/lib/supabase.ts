import { createClient } from '@supabase/supabase-js';
import { writable } from 'svelte/store';

export const supabase = createClient(
	'https://tzdpywmkzjuboxtynhte.supabase.co',
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR6ZHB5d21remp1Ym94dHluaHRlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg0NzQ2MzYsImV4cCI6MjAzNDA1MDYzNn0.6H_vK2igXt_Nctafla69t9S6XIpGDG1fzYXkoojqnPA'
);

export async function signInWithGoogle() {
	const user = await supabase.auth.signInWithOAuth({
		provider: 'google',
		options: {
			redirectTo: 'http://localhost:4321/dashboard'
		}
	});

	console.log(user);
}

async function userStore() {
	let unsubscribe: () => void;

	const {
		data: { user }
	} = await supabase.auth.getUser();

	const {subscribe } = writable(user, (set) => {
		supabase.auth.onAuthStateChange((_event, session) => {
			if (session?.user) {
				set(session.user)
			}
		});
	})
}
