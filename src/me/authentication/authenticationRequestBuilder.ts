import {Authentication} from '../../models/';
import {createAuthenticationFromDiscriminatorValue} from '../../models/createAuthenticationFromDiscriminatorValue';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {AuthenticationRequestBuilderDeleteRequestConfiguration} from './authenticationRequestBuilderDeleteRequestConfiguration';
import {AuthenticationRequestBuilderGetRequestConfiguration} from './authenticationRequestBuilderGetRequestConfiguration';
import {AuthenticationRequestBuilderPatchRequestConfiguration} from './authenticationRequestBuilderPatchRequestConfiguration';
import {EmailMethodsRequestBuilder} from './emailMethods/emailMethodsRequestBuilder';
import {EmailAuthenticationMethodItemRequestBuilder} from './emailMethods/item/emailAuthenticationMethodItemRequestBuilder';
import {Fido2MethodsRequestBuilder} from './fido2Methods/fido2MethodsRequestBuilder';
import {Fido2AuthenticationMethodItemRequestBuilder} from './fido2Methods/item/fido2AuthenticationMethodItemRequestBuilder';
import {AuthenticationMethodItemRequestBuilder} from './methods/item/authenticationMethodItemRequestBuilder';
import {MethodsRequestBuilder} from './methods/methodsRequestBuilder';
import {MicrosoftAuthenticatorAuthenticationMethodItemRequestBuilder} from './microsoftAuthenticatorMethods/item/microsoftAuthenticatorAuthenticationMethodItemRequestBuilder';
import {MicrosoftAuthenticatorMethodsRequestBuilder} from './microsoftAuthenticatorMethods/microsoftAuthenticatorMethodsRequestBuilder';
import {LongRunningOperationItemRequestBuilder} from './operations/item/longRunningOperationItemRequestBuilder';
import {OperationsRequestBuilder} from './operations/operationsRequestBuilder';
import {PasswordAuthenticationMethodItemRequestBuilder} from './passwordMethods/item/passwordAuthenticationMethodItemRequestBuilder';
import {PasswordMethodsRequestBuilder} from './passwordMethods/passwordMethodsRequestBuilder';
import {PhoneAuthenticationMethodItemRequestBuilder} from './phoneMethods/item/phoneAuthenticationMethodItemRequestBuilder';
import {PhoneMethodsRequestBuilder} from './phoneMethods/phoneMethodsRequestBuilder';
import {SoftwareOathAuthenticationMethodItemRequestBuilder} from './softwareOathMethods/item/softwareOathAuthenticationMethodItemRequestBuilder';
import {SoftwareOathMethodsRequestBuilder} from './softwareOathMethods/softwareOathMethodsRequestBuilder';
import {TemporaryAccessPassAuthenticationMethodItemRequestBuilder} from './temporaryAccessPassMethods/item/temporaryAccessPassAuthenticationMethodItemRequestBuilder';
import {TemporaryAccessPassMethodsRequestBuilder} from './temporaryAccessPassMethods/temporaryAccessPassMethodsRequestBuilder';
import {WindowsHelloForBusinessAuthenticationMethodItemRequestBuilder} from './windowsHelloForBusinessMethods/item/windowsHelloForBusinessAuthenticationMethodItemRequestBuilder';
import {WindowsHelloForBusinessMethodsRequestBuilder} from './windowsHelloForBusinessMethods/windowsHelloForBusinessMethodsRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the authentication property of the microsoft.graph.user entity. */
export class AuthenticationRequestBuilder {
    /** Provides operations to manage the emailMethods property of the microsoft.graph.authentication entity. */
    public get emailMethods(): EmailMethodsRequestBuilder {
        return new EmailMethodsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the fido2Methods property of the microsoft.graph.authentication entity. */
    public get fido2Methods(): Fido2MethodsRequestBuilder {
        return new Fido2MethodsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the methods property of the microsoft.graph.authentication entity. */
    public get methods(): MethodsRequestBuilder {
        return new MethodsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the microsoftAuthenticatorMethods property of the microsoft.graph.authentication entity. */
    public get microsoftAuthenticatorMethods(): MicrosoftAuthenticatorMethodsRequestBuilder {
        return new MicrosoftAuthenticatorMethodsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the operations property of the microsoft.graph.authentication entity. */
    public get operations(): OperationsRequestBuilder {
        return new OperationsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the passwordMethods property of the microsoft.graph.authentication entity. */
    public get passwordMethods(): PasswordMethodsRequestBuilder {
        return new PasswordMethodsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private pathParameters: Record<string, unknown>;
    /** Provides operations to manage the phoneMethods property of the microsoft.graph.authentication entity. */
    public get phoneMethods(): PhoneMethodsRequestBuilder {
        return new PhoneMethodsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The request adapter to use to execute the requests. */
    private requestAdapter: RequestAdapter;
    /** Provides operations to manage the softwareOathMethods property of the microsoft.graph.authentication entity. */
    public get softwareOathMethods(): SoftwareOathMethodsRequestBuilder {
        return new SoftwareOathMethodsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the temporaryAccessPassMethods property of the microsoft.graph.authentication entity. */
    public get temporaryAccessPassMethods(): TemporaryAccessPassMethodsRequestBuilder {
        return new TemporaryAccessPassMethodsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder */
    private urlTemplate: string;
    /** Provides operations to manage the windowsHelloForBusinessMethods property of the microsoft.graph.authentication entity. */
    public get windowsHelloForBusinessMethods(): WindowsHelloForBusinessMethodsRequestBuilder {
        return new WindowsHelloForBusinessMethodsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new AuthenticationRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/me/authentication{?%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Delete navigation property authentication for me
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createDeleteRequestInformation(requestConfiguration?: AuthenticationRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.DELETE;
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
    /**
     * The authentication methods that are supported for the user.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: AuthenticationRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        requestInfo.headers["Accept"] = "application/json";
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.setQueryStringParametersFromRawObject(requestConfiguration.queryParameters);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
    /**
     * Update the navigation property authentication in me
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: Authentication | undefined, requestConfiguration?: AuthenticationRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.PATCH;
        requestInfo.headers["Accept"] = "application/json";
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        return requestInfo;
    };
    /**
     * Delete navigation property authentication for me
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(requestConfiguration?: AuthenticationRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.createDeleteRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Provides operations to manage the emailMethods property of the microsoft.graph.authentication entity.
     * @param id Unique identifier of the item
     * @returns a EmailAuthenticationMethodItemRequestBuilder
     */
    public emailMethodsById(id: string) : EmailAuthenticationMethodItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["emailAuthenticationMethod%2Did"] = id
        return new EmailAuthenticationMethodItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the fido2Methods property of the microsoft.graph.authentication entity.
     * @param id Unique identifier of the item
     * @returns a Fido2AuthenticationMethodItemRequestBuilder
     */
    public fido2MethodsById(id: string) : Fido2AuthenticationMethodItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["fido2AuthenticationMethod%2Did"] = id
        return new Fido2AuthenticationMethodItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * The authentication methods that are supported for the user.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Authentication
     */
    public get(requestConfiguration?: AuthenticationRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Authentication | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<Authentication>(requestInfo, createAuthenticationFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Provides operations to manage the methods property of the microsoft.graph.authentication entity.
     * @param id Unique identifier of the item
     * @returns a AuthenticationMethodItemRequestBuilder
     */
    public methodsById(id: string) : AuthenticationMethodItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["authenticationMethod%2Did"] = id
        return new AuthenticationMethodItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the microsoftAuthenticatorMethods property of the microsoft.graph.authentication entity.
     * @param id Unique identifier of the item
     * @returns a MicrosoftAuthenticatorAuthenticationMethodItemRequestBuilder
     */
    public microsoftAuthenticatorMethodsById(id: string) : MicrosoftAuthenticatorAuthenticationMethodItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["microsoftAuthenticatorAuthenticationMethod%2Did"] = id
        return new MicrosoftAuthenticatorAuthenticationMethodItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the operations property of the microsoft.graph.authentication entity.
     * @param id Unique identifier of the item
     * @returns a LongRunningOperationItemRequestBuilder
     */
    public operationsById(id: string) : LongRunningOperationItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["longRunningOperation%2Did"] = id
        return new LongRunningOperationItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the passwordMethods property of the microsoft.graph.authentication entity.
     * @param id Unique identifier of the item
     * @returns a PasswordAuthenticationMethodItemRequestBuilder
     */
    public passwordMethodsById(id: string) : PasswordAuthenticationMethodItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["passwordAuthenticationMethod%2Did"] = id
        return new PasswordAuthenticationMethodItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Update the navigation property authentication in me
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Authentication
     */
    public patch(body: Authentication | undefined, requestConfiguration?: AuthenticationRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Authentication | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<Authentication>(requestInfo, createAuthenticationFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Provides operations to manage the phoneMethods property of the microsoft.graph.authentication entity.
     * @param id Unique identifier of the item
     * @returns a PhoneAuthenticationMethodItemRequestBuilder
     */
    public phoneMethodsById(id: string) : PhoneAuthenticationMethodItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["phoneAuthenticationMethod%2Did"] = id
        return new PhoneAuthenticationMethodItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the softwareOathMethods property of the microsoft.graph.authentication entity.
     * @param id Unique identifier of the item
     * @returns a SoftwareOathAuthenticationMethodItemRequestBuilder
     */
    public softwareOathMethodsById(id: string) : SoftwareOathAuthenticationMethodItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["softwareOathAuthenticationMethod%2Did"] = id
        return new SoftwareOathAuthenticationMethodItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the temporaryAccessPassMethods property of the microsoft.graph.authentication entity.
     * @param id Unique identifier of the item
     * @returns a TemporaryAccessPassAuthenticationMethodItemRequestBuilder
     */
    public temporaryAccessPassMethodsById(id: string) : TemporaryAccessPassAuthenticationMethodItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["temporaryAccessPassAuthenticationMethod%2Did"] = id
        return new TemporaryAccessPassAuthenticationMethodItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the windowsHelloForBusinessMethods property of the microsoft.graph.authentication entity.
     * @param id Unique identifier of the item
     * @returns a WindowsHelloForBusinessAuthenticationMethodItemRequestBuilder
     */
    public windowsHelloForBusinessMethodsById(id: string) : WindowsHelloForBusinessAuthenticationMethodItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["windowsHelloForBusinessAuthenticationMethod%2Did"] = id
        return new WindowsHelloForBusinessAuthenticationMethodItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
}
