import {Authentication} from '../../models/microsoft/graph/authentication';
import {Fido2MethodsRequestBuilder} from './fido2Methods/fido2MethodsRequestBuilder';
import {Fido2AuthenticationMethodRequestBuilder} from './fido2Methods/item/fido2AuthenticationMethodRequestBuilder';
import {AuthenticationMethodRequestBuilder} from './methods/item/authenticationMethodRequestBuilder';
import {MethodsRequestBuilder} from './methods/methodsRequestBuilder';
import {MicrosoftAuthenticatorAuthenticationMethodRequestBuilder} from './microsoftAuthenticatorMethods/item/microsoftAuthenticatorAuthenticationMethodRequestBuilder';
import {MicrosoftAuthenticatorMethodsRequestBuilder} from './microsoftAuthenticatorMethods/microsoftAuthenticatorMethodsRequestBuilder';
import {WindowsHelloForBusinessAuthenticationMethodRequestBuilder} from './windowsHelloForBusinessMethods/item/windowsHelloForBusinessAuthenticationMethodRequestBuilder';
import {WindowsHelloForBusinessMethodsRequestBuilder} from './windowsHelloForBusinessMethods/windowsHelloForBusinessMethodsRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /me/authentication  */
export class AuthenticationRequestBuilder {
    public get fido2Methods(): Fido2MethodsRequestBuilder {
        return new Fido2MethodsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get methods(): MethodsRequestBuilder {
        return new MethodsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get microsoftAuthenticatorMethods(): MicrosoftAuthenticatorMethodsRequestBuilder {
        return new MicrosoftAuthenticatorMethodsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request  */
    private readonly pathParameters: Map<string, unknown>;
    /** The request adapter to use to execute the requests.  */
    private readonly requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder  */
    private readonly urlTemplate: string;
    public get windowsHelloForBusinessMethods(): WindowsHelloForBusinessMethodsRequestBuilder {
        return new WindowsHelloForBusinessMethodsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new AuthenticationRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Map<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/me/authentication{?select,expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Delete navigation property authentication for me
     * @param h Request headers
     * @param o Request options
     * @returns a RequestInformation
     */
    public createDeleteRequestInformation(h?: object | undefined, o?: RequestOption[] | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.DELETE;
        h && requestInfo.setHeadersFromRawObject(h);
        o && requestInfo.addRequestOptions(...o);
        return requestInfo;
    };
    /**
     * Get authentication from me
     * @param h Request headers
     * @param o Request options
     * @param q Request query parameters
     * @returns a RequestInformation
     */
    public createGetRequestInformation(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: object | undefined, o?: RequestOption[] | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        h && requestInfo.setHeadersFromRawObject(h);
        q && requestInfo.setQueryStringParametersFromRawObject(q);
        o && requestInfo.addRequestOptions(...o);
        return requestInfo;
    };
    /**
     * Update the navigation property authentication in me
     * @param body 
     * @param h Request headers
     * @param o Request options
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: Authentication | undefined, h?: object | undefined, o?: RequestOption[] | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.PATCH;
        h && requestInfo.setHeadersFromRawObject(h);
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        o && requestInfo.addRequestOptions(...o);
        return requestInfo;
    };
    /**
     * Delete navigation property authentication for me
     * @param h Request headers
     * @param o Request options
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(h?: object | undefined, o?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.createDeleteRequestInformation(
            h, o
        );
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.me.authentication.fido2Methods.item collection
     * @param id Unique identifier of the item
     * @returns a fido2AuthenticationMethodRequestBuilder
     */
    public fido2MethodsById(id: string) : Fido2AuthenticationMethodRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        id && urlTplParams.set("fido2AuthenticationMethod_id", id);
        return new Fido2AuthenticationMethodRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Get authentication from me
     * @param h Request headers
     * @param o Request options
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Authentication
     */
    public get(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: object | undefined, o?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Authentication | undefined> {
        const requestInfo = this.createGetRequestInformation(
            q, h, o
        );
        return this.requestAdapter?.sendAsync<Authentication>(requestInfo, Authentication, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.me.authentication.methods.item collection
     * @param id Unique identifier of the item
     * @returns a authenticationMethodRequestBuilder
     */
    public methodsById(id: string) : AuthenticationMethodRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        id && urlTplParams.set("authenticationMethod_id", id);
        return new AuthenticationMethodRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.me.authentication.microsoftAuthenticatorMethods.item collection
     * @param id Unique identifier of the item
     * @returns a microsoftAuthenticatorAuthenticationMethodRequestBuilder
     */
    public microsoftAuthenticatorMethodsById(id: string) : MicrosoftAuthenticatorAuthenticationMethodRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        id && urlTplParams.set("microsoftAuthenticatorAuthenticationMethod_id", id);
        return new MicrosoftAuthenticatorAuthenticationMethodRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Update the navigation property authentication in me
     * @param body 
     * @param h Request headers
     * @param o Request options
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: Authentication | undefined, h?: object | undefined, o?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, h, o
        );
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.me.authentication.windowsHelloForBusinessMethods.item collection
     * @param id Unique identifier of the item
     * @returns a windowsHelloForBusinessAuthenticationMethodRequestBuilder
     */
    public windowsHelloForBusinessMethodsById(id: string) : WindowsHelloForBusinessAuthenticationMethodRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        id && urlTplParams.set("windowsHelloForBusinessAuthenticationMethod_id", id);
        return new WindowsHelloForBusinessAuthenticationMethodRequestBuilder(urlTplParams, this.requestAdapter);
    };
}
