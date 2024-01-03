const CertifyContract = artifacts.require("CertifyContract");

contract("CertifyContract", (accounts) => {
	it("should hash a certificate", async () => {
		const instance = await CertifyContract.deployed();
		const base64Certificate = "certificate";
		const expiresOn = 100;
		const name = "name";
		const desc = "description";
		const owner = accounts[0];
		const link = "link";

		await instance.hashCertificate(
			base64Certificate,
			expiresOn,
			name,
			desc,
			owner,
			link
		);

		const certificateExists = await instance.containsCertificateHash(
			base64Certificate
		);

		assert.equal(certificateExists, true);
	});
});

// const axios = require("axios");
// const CertifyContract = artifacts.require("CertifyContract");

// contract("CertifyContract", (accounts) => {
// 	it("stores a certificate", async () => {
// 		const certifyInstance = await CertifyContract.deployed();
// 		var currentDate = new Date();
// 		currentDate.setMonth(currentDate.getMonth() + 3);
// 		var expire = currentDate.getTime();
// 		var certLink =
// 			"https://csg10032003243765cc.blob.core.windows.net/dj2/zane_fernandes.jpg";

// 		var certificate = await axios
// 			.get(certLink, {
// 				responseType: "arraybuffer",
// 			})
// 			.then((response) => {
// 				const base64data = Buffer.from(
// 					response.data,
// 					"binary"
// 				).toString("base64");
// 				return base64data;
// 			});

// 		await certifyInstance.hashCertificate.call(
// 			certificate,
// 			expire,
// 			"Joy",
// 			"Azure",
// 			accounts[1],
// 			certLink
// 		);
// 	});
// });
