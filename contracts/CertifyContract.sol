//SPDX-License-Identifier:MIT
pragma solidity ^0.8.19;

contract CertifyContract {
    constructor() {}

    event Secured(bytes32 hash, address owner);

    struct Certificate {
        address owner;
        address issuer;
        uint256 issuedOn;
        uint256 expiresOn;
        string name;
        string desc;
    }

    mapping(bytes32 => Certificate) public certificates;
    mapping(address => string[]) public ownedBy;

    function hashCertificate(
        string memory base64Certificate,
        uint256 expiresOn,
        string memory name,
        string memory desc,
        address owner,
        string memory link
    ) public {
        bytes memory certificate = bytes(base64Certificate);
        bytes32 certificateHash = keccak256(certificate);

        certificates[certificateHash] = Certificate(
            owner,
            msg.sender,
            block.timestamp,
            expiresOn,
            name,
            desc
        );
        ownedBy[owner].push(link);

        emit Secured(certificateHash, owner);
    }

    function containsCertificateHash(
        string memory base64Certificate
    ) public view returns (bool) {
        bytes memory certificate = bytes(base64Certificate);
        bytes32 certificateHash = keccak256(certificate);

        return certificates[certificateHash].owner != address(0);
    }

    function getUsersCertificate(
        address user
    ) public returns (string[] memory) {
        return ownedBy[user];
    }
}
