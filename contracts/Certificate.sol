pragma solidity ^0.8.0;

import "@openzeppelin/contracts/utils/structs/EnumerableSet.sol";

contract CertificateHasher {
    using EnumerableSet for EnumerableSet.Bytes32Set;

    struct Certificate {
        address owner;
        address issuer;
        uint256 issuedOn;
        uint256 expiresOn;
        string name;
        string desc;
    }

    mapping(bytes32 => Certificate) public certificates;
    mapping(address => Certificate[]) public ownedBy;
    EnumerableSet.Bytes32Set private certificateHashes;

    function hashCertificate(
        string memory base64Certificate,
        uint256 memory expiresOn,
        string memory name,
        string memory desc,
        address memory owner
    ) public {
        bytes memory certificate = bytes(base64Certificate);
        bytes32 certificateHash = keccak256(certificate);

        Certificate newCerty = Certificate(
            owner,
            msg.sender,
            block.timestamp,
            expiresOn,
            name,
            desc
        );

        certificates[certificateHash] = newCerty;
        certificateHashes.add(certificateHash);
        ownedBy[owner].push(newCerty);
    }

    function containsCertificateHash(
        bytes32 certificateHash
    ) public view returns (bool) {
        return certificateHashes.contains(certificateHash);
    }

    function getUsersCertificate(address memory user) {
        return ownedBy[user];
    }
}
