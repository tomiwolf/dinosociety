import React, { useState, useEffect } from 'react'

import Header from './components/Header'
import JoinCommunity from './components/JoinCommunity'

import Story from './components/Story'
import Team from './components/Team'
import FAQS from './components/FAQS'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import RoadMap from './components/RoadMap'
import DinoGroupHeader from '../src/assets/DinoGroupHeader.png'

//blockchain
import { useDispatch, useSelector } from 'react-redux'
import { connect } from './redux/blockchain/blockchainActions'
import { fetchData } from './redux/data/dataActions'

function App() {
  const dispatch = useDispatch()
  const blockchain = useSelector((state) => state.blockchain)
  const data = useSelector((state) => state.data)
  const [claimingNft, setClaimingNft] = useState(false)
  const [feedback, setFeedback] = useState(`Click buy to mint your NFT.`)
  const [feedbackMsgStyle, setFeedbackMsgStyle] = useState('normalStyle')
  const [mintAmount, setMintAmount] = useState(1)
  const [CONFIG, SET_CONFIG] = useState({
    CONTRACT_ADDRESS: '',
    SCAN_LINK: '',
    NETWORK: {
      NAME: '',
      SYMBOL: '',
      ID: 0,
    },
    NFT_NAME: '',
    SYMBOL: '',
    MAX_SUPPLY: 1,
    WEI_COST: 0,
    DISPLAY_COST: 0,
    GAS_LIMIT: 0,
    MARKETPLACE: '',
    MARKETPLACE_LINK: '',
    SHOW_BACKGROUND: false,
  })

  const claimNFTs = async () => {
    console.log(' 🧮 ')
    let cost = CONFIG.WEI_COST
    let gasLimit = CONFIG.GAS_LIMIT
    let totalCostWei = String(cost * mintAmount)
    let totalGasLimit = String(gasLimit * mintAmount)
    console.log('Cost: ', totalCostWei)
    console.log('Gas limit: ', totalGasLimit)
    setFeedback(`Minting your ${CONFIG.NFT_NAME}...`)
    setClaimingNft(true)
    console.log(
      'blockchain==================',
      blockchain.smartContract.methods,
    )

    await blockchain.smartContract.methods
      .mint(blockchain.account, mintAmount)
      .send({
        gasLimit: String(totalGasLimit),
        to: CONFIG.CONTRACT_ADDRESS,
        from: blockchain.account,
        value: totalCostWei,
      })
      .once('error', (err) => {
        console.log('Sorry, something went wrong please try again later.', err)
        setFeedback('Sorry, something went wrong please try again later.')
        setClaimingNft(false)
        setFeedbackMsgStyle('errorStyle')
      })
      .then((receipt) => {
        console.log(
          `WOW, the ${CONFIG.NFT_NAME} is yours! go visit Opensea.io to view it.`,
          receipt,
        )
        setFeedback(
          `WOW, the ${CONFIG.NFT_NAME} is yours! go visit Opensea.io to view it.`,
        )
        setClaimingNft(false)
        setFeedbackMsgStyle('successStyle')
        dispatch(fetchData(blockchain.account))
      })
  }

  const decrementMintAmount = () => {
    let newMintAmount = mintAmount - 1
    if (newMintAmount < 1) {
      newMintAmount = 1
    }
    setMintAmount(newMintAmount)
  }

  const incrementMintAmount = () => {
    let newMintAmount = mintAmount + 1
    if (newMintAmount > 50) {
      newMintAmount = 50
    }
    setMintAmount(newMintAmount)
  }

  const getData = () => {
    // console.log('blockchain.account', blockchain.account)
    // console.log('blockchain.smartContract', blockchain.smartContract)
    if (blockchain.account !== '' && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account))
    }
  }

  const getConfig = async () => {
    const configResponse = await fetch('/config/config.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
    const config = await configResponse.json()
    SET_CONFIG(config)
  }

  useEffect(() => {
    getConfig()
  }, [])

  useEffect(() => {
    let data = getData()
    console.log('data', data)
  }, [blockchain.account])

  const connectHandler = (e) => {
    console.log('clicked')
    // // e.preventDefault();
    dispatch(connect())
    getData()
  }

  return (
    <div className="App">
      {/* <Header /> */}
      <div className="header">
        <Navbar />
        <div className="content">
          <h1>Dino Society</h1>
          <p>8,888 unique dinosaurs launch on ETH blockchain!</p>
          <span>Connect your MetaMask wallet then click Mint</span>
          <div>
            <div>
              {Number(data.totalSupply) == CONFIG.MAX_SUPPLY ? (
                <h1>The sale has ended.</h1>
              ) : (
                <div>
                  {blockchain.account === '' ||
                  blockchain.smartContract === null ? (
                    <button class="connect-b" onClick={connectHandler}>
                      Connect
                      {blockchain.errorMsg !== ''
                        ? alert(blockchain.errorMsg)
                        : null}
                    </button>
                  ) : (
                    <button
                      class="connect-b"
                      onClick={(e) => {
                        e.preventDefault()
                        claimNFTs(2)
                        getData()
                      }}
                    >
                      {claimingNft ? 'Busy...' : 'MINT IS NOT LIVE'}
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="dino_group_background">
          <img src={DinoGroupHeader} alt="DinoGroupHeader" />
        </div>
      </div>
      <Story />
      <RoadMap />
      <JoinCommunity />
      <Team />
      <FAQS />
      <Footer />
    </div>
  )
}

export default App
