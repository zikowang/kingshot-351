/** Split a win count into suns (25), moons (5) and stars (1). */
export function splitWins(wins = 0) {
	const total = Math.max(0, Math.floor(wins));
	const suns = Math.floor(total / 25);
	const moons = Math.floor((total % 25) / 5);
	const stars = total % 5;
	return { total, suns, moons, stars };
}
