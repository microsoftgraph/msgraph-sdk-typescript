import {AuthenticationImpl} from '../../models/';
import {Authentication} from '../../models/authentication';
import {createAuthenticationFromDiscriminatorValue} from '../../models/createAuthenticationFromDiscriminatorValue';
import {ODataErrorImpl} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {AuthenticationRequestBuilderDeleteRequestConfiguration} from './authenticationRequestBuilderDeleteRequestConfiguration';
import {AuthenticationRequestBuilderGetRequestConfiguration} from './authenticationRequestBuilderGetRequestConfiguration';
import {AuthenticationRequestBuilderPatchRequestConfiguration} from './authenticationRequestBuilderPatchRequestConfiguration';
import {Fido2MethodsRequestBuilder} from './fido2Methods/fido2MethodsRequestBuilder';
import {Fido2AuthenticationMethodItemRequestBuilder} from './fido2Methods/item/fido2AuthenticationMethodItemRequestBuilder';
import {AuthenticationMethodItemRequestBuilder} from './methods/item/authenticationMethodItemRequestBuilder';
import {MethodsRequestBuilder} from './methods/methodsRequestBuilder';
import {MicrosoftAuthenticatorAuthenticationMethodItemRequestBuilder} from './microsoftAuthenticatorMethods/item/microsoftAuthenticatorAuthenticationMethodItemRequestBuilder';
import {MicrosoftAuthenticatorMethodsRequestBuilder} from './microsoftAuthenticatorMethods/microsoftAuthenticatorMethodsRequestBuilder';
import {WindowsHelloForBusinessAuthenticationMethodItemRequestBuilder} from './windowsHelloForBusinessMethods/item/windowsHelloForBusinessAuthenticationMethodItemRequestBuilder';
import {WindowsHelloForBusinessMethodsRequestBuilder} from './windowsHelloForBusinessMethods/windowsHelloForBusinessMethodsRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the authentication property of the microsoft.graph.user entity. */
export class AuthenticationRequestBuilder {
    /** The fido2Methods property */
    public get fido2Methods(): Fido2MethodsRequestBuilder {
        return new Fido2MethodsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The methods property */
    public get methods(): MethodsRequestBuilder {
        return new MethodsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The microsoftAuthenticatorMethods property */
    public get microsoftAuthenticatorMethods(): MicrosoftAuthenticatorMethodsRequestBuilder {
        return new MicrosoftAuthenticatorMethodsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private readonly pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private readonly requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder */
    private readonly urlTemplate: string;
    /** The windowsHelloForBusinessMethods property */
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
     * TODO: Add Description
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: AuthenticationRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
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
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        const parsableBody = new AuthenticationImpl(body)
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", parsableBody);
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
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, errorMapping) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the MicrosoftGraph.me.authentication.fido2Methods.item collection
     * @param id Unique identifier of the item
     * @returns a fido2AuthenticationMethodItemRequestBuilder
     */
    public fido2MethodsById(id: string) : Fido2AuthenticationMethodItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["fido2AuthenticationMethod%2Did"] = id
        return new Fido2AuthenticationMethodItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * TODO: Add Description
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Authentication
     */
    public get(requestConfiguration?: AuthenticationRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<AuthenticationImpl | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<AuthenticationImpl>(requestInfo, createAuthenticationFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the MicrosoftGraph.me.authentication.methods.item collection
     * @param id Unique identifier of the item
     * @returns a authenticationMethodItemRequestBuilder
     */
    public methodsById(id: string) : AuthenticationMethodItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["authenticationMethod%2Did"] = id
        return new AuthenticationMethodItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.me.authentication.microsoftAuthenticatorMethods.item collection
     * @param id Unique identifier of the item
     * @returns a microsoftAuthenticatorAuthenticationMethodItemRequestBuilder
     */
    public microsoftAuthenticatorMethodsById(id: string) : MicrosoftAuthenticatorAuthenticationMethodItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["microsoftAuthenticatorAuthenticationMethod%2Did"] = id
        return new MicrosoftAuthenticatorAuthenticationMethodItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Update the navigation property authentication in me
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: Authentication | undefined, requestConfiguration?: AuthenticationRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, errorMapping) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the MicrosoftGraph.me.authentication.windowsHelloForBusinessMethods.item collection
     * @param id Unique identifier of the item
     * @returns a windowsHelloForBusinessAuthenticationMethodItemRequestBuilder
     */
    public windowsHelloForBusinessMethodsById(id: string) : WindowsHelloForBusinessAuthenticationMethodItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["windowsHelloForBusinessAuthenticationMethod%2Did"] = id
        return new WindowsHelloForBusinessAuthenticationMethodItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
}
