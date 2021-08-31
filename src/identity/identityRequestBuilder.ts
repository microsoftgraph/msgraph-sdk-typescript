import {Identity} from '../identity';
import {ApiConnectorsRequestBuilder} from './apiConnectors/apiConnectorsRequestBuilder';
import {IdentityApiConnectorRequestBuilder} from './apiConnectors/item/identityApiConnectorRequestBuilder';
import {B2xUserFlowsRequestBuilder} from './b2xUserFlows/b2xUserFlowsRequestBuilder';
import {B2xIdentityUserFlowRequestBuilder} from './b2xUserFlows/item/b2xIdentityUserFlowRequestBuilder';
import {ConditionalAccessRequestBuilder} from './conditionalAccess/conditionalAccessRequestBuilder';
import {IdentityContainer} from './identityContainer';
import {IdentityProvidersRequestBuilder} from './identityProviders/identityProvidersRequestBuilder';
import {IdentityProviderBaseRequestBuilder} from './identityProviders/item/identityProviderBaseRequestBuilder';
import {IdentityUserFlowAttributeRequestBuilder} from './userFlowAttributes/item/identityUserFlowAttributeRequestBuilder';
import {UserFlowAttributesRequestBuilder} from './userFlowAttributes/userFlowAttributesRequestBuilder';
import {HttpCore, HttpMethod, RequestInfo, ResponseHandler, MiddlewareOption} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /identity  */
export class IdentityRequestBuilder {
    public get apiConnectors(): ApiConnectorsRequestBuilder {
        return new ApiConnectorsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get b2xUserFlows(): B2xUserFlowsRequestBuilder {
        return new B2xUserFlowsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get conditionalAccess(): ConditionalAccessRequestBuilder {
        return new ConditionalAccessRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /** Current path for the request  */
    private readonly currentPath: string;
    /** The http core service to use to execute the requests.  */
    private readonly httpCore: HttpCore;
    public get identityProviders(): IdentityProvidersRequestBuilder {
        return new IdentityProvidersRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /** Whether the current path is a raw URL  */
    private readonly isRawUrl: boolean;
    /** Path segment to use to build the URL for the current request builder  */
    private readonly pathSegment: string;
    public get userFlowAttributes(): UserFlowAttributesRequestBuilder {
        return new UserFlowAttributesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /**
     * Gets an item from the MicrosoftGraph.identity.apiConnectors collection
     * @param id Unique identifier of the item
     * @returns a IdentityApiConnectorRequestBuilder
     */
    public apiConnectorsById(id: String) : IdentityApiConnectorRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new IdentityApiConnectorRequestBuilder(this.currentPath + this.pathSegment + "/apiConnectors/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the MicrosoftGraph.identity.b2xUserFlows collection
     * @param id Unique identifier of the item
     * @returns a B2xIdentityUserFlowRequestBuilder
     */
    public b2xUserFlowsById(id: String) : B2xIdentityUserFlowRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new B2xIdentityUserFlowRequestBuilder(this.currentPath + this.pathSegment + "/b2xUserFlows/" + id, this.httpCore, false);
    };
    /**
     * Instantiates a new IdentityRequestBuilder and sets the default values.
     * @param currentPath Current path for the request
     * @param httpCore The http core service to use to execute the requests.
     * @param isRawUrl Whether the current path is a raw URL
     */
    public constructor(currentPath: string, httpCore: HttpCore, isRawUrl: boolean = true) {
        if(!currentPath) throw new Error("currentPath cannot be undefined");
        if(!httpCore) throw new Error("httpCore cannot be undefined");
        this.pathSegment = "/identity";
        this.httpCore = httpCore;
        this.currentPath = currentPath;
        this.isRawUrl = isRawUrl;
    };
    /**
     * Get identity
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @returns a RequestInfo
     */
    public createGetRequestInfo(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined) : RequestInfo {
        const requestInfo = new RequestInfo();
        requestInfo.setUri(this.currentPath, this.pathSegment, this.isRawUrl);
        requestInfo.httpMethod = HttpMethod.GET;
        h && requestInfo.setHeadersFromRawObject(h);
        q && requestInfo.setQueryStringParametersFromRawObject(q);
        o && requestInfo.addMiddlewareOptions(...o);
        return requestInfo;
    };
    /**
     * Update identity
     * @param body 
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @returns a RequestInfo
     */
    public createPatchRequestInfo(body: Identity | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined) : RequestInfo {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInfo();
        requestInfo.setUri(this.currentPath, this.pathSegment, this.isRawUrl);
        requestInfo.httpMethod = HttpMethod.PATCH;
        h && requestInfo.setHeadersFromRawObject(h);
        requestInfo.setContentFromParsable(this.httpCore, "application/json", body);
        o && requestInfo.addMiddlewareOptions(...o);
        return requestInfo;
    };
    /**
     * Get identity
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of IdentityContainer
     */
    public get(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<IdentityContainer | undefined> {
        const requestInfo = this.createGetRequestInfo(
            q, h, o
        );
        return this.httpCore?.sendAsync<IdentityContainer>(requestInfo, IdentityContainer, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the MicrosoftGraph.identity.identityProviders collection
     * @param id Unique identifier of the item
     * @returns a IdentityProviderBaseRequestBuilder
     */
    public identityProvidersById(id: String) : IdentityProviderBaseRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new IdentityProviderBaseRequestBuilder(this.currentPath + this.pathSegment + "/identityProviders/" + id, this.httpCore, false);
    };
    /**
     * Update identity
     * @param body 
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: Identity | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInfo(
            body, h, o
        );
        return this.httpCore?.sendNoResponseContentAsync(requestInfo, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the MicrosoftGraph.identity.userFlowAttributes collection
     * @param id Unique identifier of the item
     * @returns a IdentityUserFlowAttributeRequestBuilder
     */
    public userFlowAttributesById(id: String) : IdentityUserFlowAttributeRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new IdentityUserFlowAttributeRequestBuilder(this.currentPath + this.pathSegment + "/userFlowAttributes/" + id, this.httpCore, false);
    };
}
