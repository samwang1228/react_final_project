import ReactGA from 'react-ga'

export const initGA = () => {
    console.log('GA init')
    ReactGA.initialize('G-P06XSD84ZK')
}

export const logPageView = (page) => {
    console.log('Logging pageview for '+page)
    ReactGA.set({ page: page })
    ReactGA.send({ page: page })
    ReactGA.pageview(page)
}