'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">dating-app documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-a23eec0a205e59cccef28a736c2a65fdaf41cbc49813835953c70628903dea920d6e218669d4c869b7fe5080ca47928ba0f2218811dabb4ec807de5ef1f320c8"' : 'data-target="#xs-components-links-module-AppModule-a23eec0a205e59cccef28a736c2a65fdaf41cbc49813835953c70628903dea920d6e218669d4c869b7fe5080ca47928ba0f2218811dabb4ec807de5ef1f320c8"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-a23eec0a205e59cccef28a736c2a65fdaf41cbc49813835953c70628903dea920d6e218669d4c869b7fe5080ca47928ba0f2218811dabb4ec807de5ef1f320c8"' :
                                            'id="xs-components-links-module-AppModule-a23eec0a205e59cccef28a736c2a65fdaf41cbc49813835953c70628903dea920d6e218669d4c869b7fe5080ca47928ba0f2218811dabb4ec807de5ef1f320c8"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LearnComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LearnComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ModalLanguageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ModalLanguageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ModalLoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ModalLoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/Page404Component.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >Page404Component</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PrivacityComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrivacityComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProductsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SafetyComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SafetyComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SecretLoveMegaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SecretLoveMegaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SecretLovePlusComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SecretLovePlusComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SecretLoveUltraComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SecretLoveUltraComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-a23eec0a205e59cccef28a736c2a65fdaf41cbc49813835953c70628903dea920d6e218669d4c869b7fe5080ca47928ba0f2218811dabb4ec807de5ef1f320c8"' : 'data-target="#xs-injectables-links-module-AppModule-a23eec0a205e59cccef28a736c2a65fdaf41cbc49813835953c70628903dea920d6e218669d4c869b7fe5080ca47928ba0f2218811dabb4ec807de5ef1f320c8"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-a23eec0a205e59cccef28a736c2a65fdaf41cbc49813835953c70628903dea920d6e218669d4c869b7fe5080ca47928ba0f2218811dabb4ec807de5ef1f320c8"' :
                                        'id="xs-injectables-links-module-AppModule-a23eec0a205e59cccef28a736c2a65fdaf41cbc49813835953c70628903dea920d6e218669d4c869b7fe5080ca47928ba0f2218811dabb4ec807de5ef1f320c8"' }>
                                        <li class="link">
                                            <a href="injectables/LoaderService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoaderService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Card.html" data-type="entity-link" >Card</a>
                            </li>
                            <li class="link">
                                <a href="classes/CardProduct.html" data-type="entity-link" >CardProduct</a>
                            </li>
                            <li class="link">
                                <a href="classes/Characteristic.html" data-type="entity-link" >Characteristic</a>
                            </li>
                            <li class="link">
                                <a href="classes/CharacteristicProduct.html" data-type="entity-link" >CharacteristicProduct</a>
                            </li>
                            <li class="link">
                                <a href="classes/NavLink.html" data-type="entity-link" >NavLink</a>
                            </li>
                            <li class="link">
                                <a href="classes/Quote.html" data-type="entity-link" >Quote</a>
                            </li>
                            <li class="link">
                                <a href="classes/SendEmailInfo.html" data-type="entity-link" >SendEmailInfo</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/LanguageService.html" data-type="entity-link" >LanguageService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoaderService.html" data-type="entity-link" >LoaderService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoginScreenService.html" data-type="entity-link" >LoginScreenService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MessageService.html" data-type="entity-link" >MessageService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/miscellaneousApiService.html" data-type="entity-link" >miscellaneousApiService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interceptors-links"' :
                            'data-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/LanguageInterceptor.html" data-type="entity-link" >LanguageInterceptor</a>
                            </li>
                            <li class="link">
                                <a href="interceptors/LoaderInterceptor.html" data-type="entity-link" >LoaderInterceptor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/GuardGuard.html" data-type="entity-link" >GuardGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/LoginScreenGuard.html" data-type="entity-link" >LoginScreenGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Lang.html" data-type="entity-link" >Lang</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});