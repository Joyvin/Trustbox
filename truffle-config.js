module.exports = {
	networks: {
		ganache: {
			host: "127.0.0.1",
			port: 7545,
			network_id: "5777",
		},
		mocha: {
			// timeout: 100000
		},

		// Configure your compilers
		compilers: {
			solc: {
				version: "0.8.19",
			},
		},
	},
};
