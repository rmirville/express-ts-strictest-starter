type RestLink = {
	href: string;
};

export type RestResBody = {
	_links: Record<string, RestLink>;
};
