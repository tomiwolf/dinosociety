// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";

//0xd9145CCE52D386f254917e481eB44e9943F39138
contract DinoNFTs is ERC721Enumerable, Ownable {

    using SafeMath for uint256;
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    using Strings for uint256;

  string public baseURI; 
  string public baseExtension = ".json";
  uint256 public cost = 0.09 ether; // Cost of per NFT 
  uint256 public maxSupply = 8888; //Max Supply 
  uint256 public maxMintAmount = 10; // one user can mint only 10 nfts 
  bool public paused = false; // Is sale start 
  mapping(address => bool) public whitelisted; //maping for whitelisted users 
  bool public revealed = false; //Is reveled start 
  string public notRevealedUri; // Not reveled URI 
  uint256 public maxMintAmountPerWallet = 10;

  constructor(
    string memory _name,//name of your token  
    string memory _symbol, //symbol of your token 
    string memory _initBaseURI,//base URI , Set your baase uri with forword slash "/"
    string memory _initNotRevealedUri //Notrevealed URL 
  ) ERC721(_name, _symbol) {
    setBaseURI(_initBaseURI);
    reserveNFTs(); // reserve 10 NFTs when you deploy this(this will automatically set deployer as the owner)
    setNotRevealedURI(_initNotRevealedUri);
 // msg.sender means you (the deployer )
  }

  // internal
  function _baseURI() internal view virtual override returns (string memory) {
    return baseURI;
  }
  // public
  function mint(address _to, uint256 _mintAmount) public payable { //Mint function
    uint256 supply = totalSupply();
    require(!paused,"Contract is paused"); //check is contract paused
    require(_mintAmount > 0,"Your mint amount need to grater than 1 NFT "); // check user set enough NFTs for mint 
    require(_mintAmount <= maxMintAmount,"You can only mint 5 NFT once"); //check user set NFTs lower than maxMintAmount
    require(supply + _mintAmount <= maxSupply,"We have only 8888 NFTs "); // check user set NFTs lower than maxSupply
    require(balanceOf(_to) <= maxMintAmountPerWallet , "Only can mint 10 NFTs per wallet"); //check user's wallet NFTs 

    if (msg.sender != owner()) {
        if(whitelisted[msg.sender] != true) { //check whitelisted
          require(msg.value >= cost * _mintAmount,"NOt enough value(funds)"); //check set enough value 
        }
    }

    for (uint256 i = 1; i <= _mintAmount; i++) {
      _safeMint(_to, supply + i); //Mint NFTs 
    }
  }

  function walletOfOwner(address _owner) 
    public
    view
    returns (uint256[] memory)
  {
    uint256 ownerTokenCount = balanceOf(_owner);
    uint256[] memory tokenIds = new uint256[](ownerTokenCount);
    for (uint256 i; i < ownerTokenCount; i++) {
      tokenIds[i] = tokenOfOwnerByIndex(_owner, i);
    }
    return tokenIds;
  }

  function tokenURI(uint256 tokenId) 
    public
    view
    virtual
    override
    returns (string memory)
  {
    require(
      _exists(tokenId),
      "ERC721Metadata: URI query for nonexistent token"
    );
     
    if(revealed == false) { // revealed BAse URI 
        return notRevealedUri;  // if you dint set reveal this will return your notRevealedUri
    }

    string memory currentBaseURI = _baseURI();
    return bytes(currentBaseURI).length > 0
        ? string(abi.encodePacked(currentBaseURI, tokenId.toString(), baseExtension))
        : "";
  }
//functions 
    function _mintSingleNFT() private {
        uint newTokenID = _tokenIds.current();
        _safeMint(msg.sender, newTokenID);
        _tokenIds.increment();
    }


  //only owner

    function reserveNFTs() public onlyOwner { //reserve NFts 
        uint totalMinted = _tokenIds.current();

        require(totalMinted.add(5)/* ~5 */ < maxSupply, "Not enough NFTs left to reserve"); // Set how many NFTs want to mint when you deploy

        for (uint i = 0; i < 5; i++) {  //~5
            _mintSingleNFT();
        }
    }

  function setCost(uint256 _newCost) public onlyOwner {
    cost = _newCost;
  }

  function reveal() public onlyOwner { //set reveal 
      revealed = true;
  }

  function setmaxMintAmount(uint256 _newmaxMintAmount) public onlyOwner {
    maxMintAmount = _newmaxMintAmount;
  }

  function setBaseURI(string memory _newBaseURI) public onlyOwner {
    baseURI = _newBaseURI;
  }

  function setBaseExtension(string memory _newBaseExtension) public onlyOwner {
    baseExtension = _newBaseExtension;
  }

  function setNotRevealedURI(string memory _notRevealedURI) public onlyOwner { //Set your notRevealedURI
    notRevealedUri = _notRevealedURI;
  }

  function pause(bool _state) public onlyOwner {
    paused = _state;
  }
 
 function whitelistUser(address _user) public onlyOwner { //add user to whitelist function
    whitelisted[_user] = true;
  }
 
  function removeWhitelistUser(address _user) public onlyOwner { //remove user from whitelist function
    whitelisted[_user] = false;
  }

  function withdraw() public payable onlyOwner {
  require(payable(msg.sender).send(address(this).balance),'');
  payable(msg.sender).send(address(this).balance);
  }
}
