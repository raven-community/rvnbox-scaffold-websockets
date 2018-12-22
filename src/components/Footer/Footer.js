
import React from 'react'
import styled from 'styled-components'

import rvnboxLogo from '../../assets/rvnbox-logo.png'
import ravencoinonlineLogo from '../../assets/ravencoin-logo-white.png'

const Wrapper = styled.div`
    width: 100%;
    text-align: center;
    min-width: 100%;
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    flex:1;
    flex-direction: row;
    align-items: top;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0 20px;
    color: #000;
`

const Image = styled.img`
    margin: auto 20px;
    max-height: 60px;
`

const PoweredBy = styled.div`
    font-weight: 700;
    padding: 10px;
    display: flex;
    flex-direction: row;
    flex: 1;
    align-items: center;
    justify-content: left;
`

const PoweredByTitle = styled.h2`
    margin: 0;
`

const Sponsors = styled.div`
    width: auto;
    padding: 10px;
`

const SponsorLogos = styled.div`
    display: flex;
    flex: 1;
    width: 100%;
    height: 100%;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`

const SponsorsImage = styled.img`
    width: auto;
    max-width: 300px;
    max-height: 60px;
    margin: 0px 30px;
`

class Footer extends React.Component {
    render() {
        return (
            <Wrapper>
                <PoweredBy>
                    <Image src={rvnboxLogo} alt="RVNBOX" height="50" />
                    <PoweredByTitle>Powered by RVNBOX<br />developer.ravencoin.online</PoweredByTitle>
                </PoweredBy>
                <Sponsors>
                    <SponsorLogos>
                        <SponsorsImage src={ravencoinonlineLogo} alt="RVNBOX" />
                    </SponsorLogos>
                </Sponsors>
            </Wrapper>)
    }
}

export default Footer
