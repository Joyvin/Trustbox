const CertifyContract = artifacts.require("CertifyContract");

module.exports = function (deployer) {
	deployer.deploy(CertifyContract);
};
