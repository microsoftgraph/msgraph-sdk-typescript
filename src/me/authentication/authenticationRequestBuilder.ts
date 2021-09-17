import {Authentication} from '../../models/microsoft/graph/authentication';
import {Fido2MethodsRequestBuilder} from './fido2Methods/fido2MethodsRequestBuilder';
import {Fido2AuthenticationMethodRequestBuilder} from './fido2Methods/item/fido2AuthenticationMethodRequestBuilder';
import {AuthenticationMethodRequestBuilder} from './methods/item/authenticationMethodRequestBuilder';
import {MethodsRequestBuilder} from './methods/methodsRequestBuilder';
import {MicrosoftAuthenticatorAuthenticationMethodRequestBuilder} from './microsoftAuthenticatorMethods/item/microsoftAuthenticatorAuthenticationMethodRequestBuilder';
import {MicrosoftAuthenticatorMethodsRequestBuilder} from './microsoftAuthenticatorMethods/microsoftAuthenticatorMethodsRequestBuilder';
import {WindowsHelloForBusinessAuthenticationMethodRequestBuilder} from './windowsHelloForBusinessMethods/item/windowsHelloForBusinessAuthenticationMethodRequestBuilder';
import {WindowsHelloForBusinessMethodsRequestBuilder} from './windowsHelloForBusinessMethods/windowsHelloForBusinessMethodsRequestBuilder';
import {HttpCore, HttpMethod, RequestInformation, ResponseHandler, MiddlewareOption} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /me/authentication  */
export class AuthenticationRequestBuilder {
    /** Current path for the request  */
    private readonly currentPath: string;
    public get fido2Methods(): Fido2MethodsRequestBuilder {
        return new Fido2MethodsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /** The http core service to use to execute the requests.  */
    private readonly httpCore: HttpCore;
    /** Whether the current path is a raw URL  */
    private readonly isRawUrl: boolean;
    public get methods(): MethodsRequestBuilder {
        return new MethodsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get microsoftAuthenticatorMethods(): MicrosoftAuthenticatorMethodsRequestBuilder {
        return new MicrosoftAuthenticatorMethodsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /** Path segment to use to build the URL for the current request builder  */
    private readonly pathSegment: string;
    public get windowsHelloForBusinessMethods(): WindowsHelloForBusinessMethodsRequestBuilder {
        return new WindowsHelloForBusinessMethodsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /**
     * Instantiates a new AuthenticationRequestBuilder and sets the default values.
     * @param currentPath Current path for the request
     * @param httpCore The http core service to use to execute the requests.
     * @param isRawUrl Whether the current path is a raw URL
     */
    public constructor(currentPath: string, httpCore: HttpCore, isRawUrl: boolean = true) {
        if(!currentPath) throw new Error("currentPath cannot be undefined");
        if(!httpCore) throw new Error("httpCore cannot be undefined");
        this.pathSegment = "/authentication";
        this.httpCore = httpCore;
        this.currentPath = currentPath;
        this.isRawUrl = isRawUrl;
    };
    /**
     * Delete navigation property authentication for me
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @returns a RequestInformation
     */
    public createDeleteRequestInformation(h?: object | undefined, o?: MiddlewareOption[] | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.setUri(this.currentPath, this.pathSegment, this.isRawUrl);
        requestInfo.httpMethod = HttpMethod.DELETE;
        h && requestInfo.setHeadersFromRawObject(h);
        o && requestInfo.addMiddlewareOptions(...o);
        return requestInfo;
    };
    /**
     * Get authentication from me
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @returns a RequestInformation
     */
    public createGetRequestInformation(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.setUri(this.currentPath, this.pathSegment, this.isRawUrl);
        requestInfo.httpMethod = HttpMethod.GET;
        h && requestInfo.setHeadersFromRawObject(h);
        q && requestInfo.setQueryStringParametersFromRawObject(q);
        o && requestInfo.addMiddlewareOptions(...o);
        return requestInfo;
    };
    /**
     * Update the navigation property authentication in me
     * @param body 
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: Authentication | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.setUri(this.currentPath, this.pathSegment, this.isRawUrl);
        requestInfo.httpMethod = HttpMethod.PATCH;
        h && requestInfo.setHeadersFromRawObject(h);
        requestInfo.setContentFromParsable(this.httpCore, "application/json", body);
        o && requestInfo.addMiddlewareOptions(...o);
        return requestInfo;
    };
    /**
     * Delete navigation property authentication for me
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(h?: object | undefined, o?: MiddlewareOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.createDeleteRequestInformation(
            h, o
        );
        return this.httpCore?.sendNoResponseContentAsync(requestInfo, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.me.authentication.fido2Methods.item collection
     * @param id Unique identifier of the item
     * @returns a fido2AuthenticationMethodRequestBuilder
     */
    public fido2MethodsById(id: String) : Fido2AuthenticationMethodRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new Fido2AuthenticationMethodRequestBuilder(this.currentPath + this.pathSegment + "/fido2Methods/" + id, this.httpCore, false);
    };
    /**
     * Get authentication from me
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Authentication
     */
    public get(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Authentication | undefined> {
        const requestInfo = this.createGetRequestInformation(
            q, h, o
        );
        return this.httpCore?.sendAsync<Authentication>(requestInfo, Authentication, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.me.authentication.methods.item collection
     * @param id Unique identifier of the item
     * @returns a authenticationMethodRequestBuilder
     */
    public methodsById(id: String) : AuthenticationMethodRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new AuthenticationMethodRequestBuilder(this.currentPath + this.pathSegment + "/methods/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.me.authentication.microsoftAuthenticatorMethods.item collection
     * @param id Unique identifier of the item
     * @returns a microsoftAuthenticatorAuthenticationMethodRequestBuilder
     */
    public microsoftAuthenticatorMethodsById(id: String) : MicrosoftAuthenticatorAuthenticationMethodRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new MicrosoftAuthenticatorAuthenticationMethodRequestBuilder(this.currentPath + this.pathSegment + "/microsoftAuthenticatorMethods/" + id, this.httpCore, false);
    };
    /**
     * Update the navigation property authentication in me
     * @param body 
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: Authentication | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, h, o
        );
        return this.httpCore?.sendNoResponseContentAsync(requestInfo, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.me.authentication.windowsHelloForBusinessMethods.item collection
     * @param id Unique identifier of the item
     * @returns a windowsHelloForBusinessAuthenticationMethodRequestBuilder
     */
    public windowsHelloForBusinessMethodsById(id: String) : WindowsHelloForBusinessAuthenticationMethodRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new WindowsHelloForBusinessAuthenticationMethodRequestBuilder(this.currentPath + this.pathSegment + "/windowsHelloForBusinessMethods/" + id, this.httpCore, false);
    };
}
