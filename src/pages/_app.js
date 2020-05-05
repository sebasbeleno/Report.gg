// Imports
import App, {Container} from 'next/app'
import Head from 'next/head'
import React from 'react'


// Styless imports
import "../components/Styles/Navbar.css";
import "../components/Styles/MatchList.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/Global.css'
import "./styles/Home.css";
import "./styles/Summoner.css";
import "../components/Styles/Loader.css";


export default class MyApp extends App {
    static async getInitialProps({ Component, router, ctx }) {
      let pageProps = {}

      if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx)
      }
      return { pageProps }
    }
    render() {
      const { Component, pageProps, router } = this.props
      return (
        <>
            <Head>

              <title>Report.gg</title>


            </Head>

            <Component {...pageProps} key={router.route} />

        </>
      )
    }
  }