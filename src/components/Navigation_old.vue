<template>
    <header id="navigation">
        <section id="top-nav">
            <section class="container">
                <a href="tel:01518831122">
                    <img src="../assets/images/icons/phone.svg"/> 
                    <img src="../assets/images/icons/gb.svg"/>
                    0151 883 1122
                </a>
                <a href="mailto:01518831122">info@biostoreexample.co.uk</a>
            </section>
        </section>
        <section class="container">
            <img src="../assets/images/logo-colour.svg"/>
            <section id="nav-bar">
                <nav>
                    <a href="/" class="active">Home</a>
                    <a href="/">About us</a>
                    <a href="/">Products</a>
                    <a href="/">Contact us</a>
                </nav>
            </section>
            <section>
                <section id="nav-contact-details">
                    <a href="tel:01518831122">
                        <img src="../assets/images/icons/phone.svg"/> 
                        <img src="../assets/images/icons/gb.svg"/>
                        0151 883 1122
                    </a>
                    <a href="mailto:01518831122">info@biostoreexample.co.uk</a>
                </section>
                <button class="btn"><img src="../assets/images/icons/menu.svg"/></button>
            </section>
            
        </section>
    </header>
</template>

<script>
export default {
  name: 'Navigation'
}
</script>

<style scoped lang="scss">
    #top-nav {
        background-color: #f4f4f4;
    }

    #navigation {
        font-size: 0.9em;
        width: 100%;
        a {
            text-decoration: none;
        }

        & > section {
            padding: 1em 0;
        }

        & > .container {
            padding-top: 2em;
            display: grid;
            grid-template-columns: 1.5fr 5.5fr 3fr;
            text-align: left;
            margin-bottom: 2em;

            & > img {
                width: calc(100% - 8em);
                min-width: 180px;
                max-width: 200px;
                height: auto;
                display: flex;
                justify-self: flex-end;
            }

            & > section:last-child {
                display: flex;

                & > button, & > a {
                    align-content: center;
                    justify-content: center;
                    align-self: center;
                }

                & > button {
                    display: none;

                    & > img {
                        // margin-right: 1em;
                        height: 2.5em;
                    }
                }
            }
        }

        a:last-child {
            display: flex;
            align-self: center;
            justify-self: center;
        }

        #nav-bar {
            display: flex;
            align-items: center;
            justify-content: center;

            a {
                color: inherit;
            }

            

            & > nav {
                width: 50%;
                display: inline-flex;
                justify-content: space-around;

                &:hover > a.active::after {
                    width: 0;
                }

                & > a {
                    padding: 1em 1em;
                    font-weight: 800;
                    letter-spacing: -0.025em;
                    position: relative;

                    &:hover::after{
                        width: 1em;
                    }

                    &::after {
                        content: "\A";
                        white-space: pre;
                        width: 0;
                        height: 2px;
                        top: 2.75em;
                        left: 1em;
                        position: absolute;
                        background: black;

                        transition: 0.2s ease-out;
                    }

                    &.active::after, &:hover.active::after {
                        width: 1em;
                    }
                }
            }
        }
    }

    #nav-contact-details, #top-nav > .container {
        display: inline-flex;
        align-items: center;
        justify-content: space-around;

        font-weight: 600;
        letter-spacing: -0.025em;
        width: 100%;

        & > a {
            width: max-content;
            color: inherit;
            height: max-content;
            margin: 0 1em;

            & > img {
                height: 0.6em;
                margin-right: 0.5em;
            }
        }
    }

    #top-nav > .container {
        justify-content: center;
    }

    @media screen and (max-width: 780px) {
        #navigation {
            & > .container {
                width: 90%;
                grid-template-columns: 6fr 4fr;
                padding-bottom: 2em;
                border-bottom: 1px solid #e3e3e3;

                & > section:last-child {
                    display: flex;
                    justify-content: flex-end;

                    & > #nav-contact-details {
                        display: none;
                    }

                    & > button {
                        display: flex;
                        
                        padding: 1em;
                    }
                }

                & > img {
                    padding: 0;
                    display: flex;
                    justify-self: flex-start;
                }
            }

            #nav-bar {
                display: none;
            }
        }
    }

    @media screen and (min-width: 1080px) {
        #top-nav {
            display: none;
        }

        #navigation {
            #nav-bar > nav {
                width: 80%;
            }
        }
    }

    @media screen and (max-width: 1080px) {
        #navigation {
            & > .container {
                grid-template-columns: 2fr 8fr;
                padding-bottom: 2em;
                border-bottom: 1px solid #e3e3e3;
            }

            #nav-contact-details {
                display: none;
            }

            #nav-bar > nav {
                width: 80%;

                & > a::after {
                    left: 1em;
                }
            }
        }
    }

    @media screen and (max-width: 380px) {
        #top-nav > .container {
            flex-direction: column;

            & > a {
                padding: 0.25em 0;
            }
        }
    }
</style>