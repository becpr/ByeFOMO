export interface Quote {
	id: any;
	text: string;
	source: string;
}

export default Quote;

export const BuiltinQuotes : Array<Quote> = [
	{
		id: 1,
		text: "What are you grateful for?",
		source: "Just one little thing..."
	},
	{
		id: 2,
		text: "Maybe you could send someone a message instead?",
		source: "Tell them what you're grateful for."
	},
	{
		id: 3,
		text: "What's it trying to teach you?",
		source: "The universe is conspiring in your favour."
	},	
	{
		id: 4,
		text: "What's the most thoughtful thing someone's done for you this week?",
		source: "Just one little thing..."
	},	
	{
		id: 5,
		text: "What were you hoping to find here?",
		source: "How else could you get that feeling?"
	},
];
