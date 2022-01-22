import {IdentityContainer} from '../models/microsoft/graph/identityContainer';
import {ApiConnectorsRequestBuilder} from './apiConnectors/apiConnectorsRequestBuilder';
import {IdentityApiConnectorRequestBuilder} from './apiConnectors/item/identityApiConnectorRequestBuilder';
import {B2xUserFlowsRequestBuilder} from './b2xUserFlows/b2xUserFlowsRequestBuilder';
import {B2xIdentityUserFlowRequestBuilder} from './b2xUserFlows/item/b2xIdentityUserFlowRequestBuilder';
import {ConditionalAccessRequestBuilder} from './conditionalAccess/conditionalAccessRequestBuilder';
import {IdentityProvidersRequestBuilder} from './identityProviders/identityProvidersRequestBuilder';
import {IdentityProviderBaseRequestBuilder} from './identityProviders/item/identityProviderBaseRequestBuilder';
import {IdentityUserFlowAttributeRequestBuilder} from './userFlowAttributes/item/identityUserFlowAttributeRequestBuilder';
import {UserFlowAttributesRequestBuilder} from './userFlowAttributes/userFlowAttributesRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /identity  */
export class IdentityRequestBuilder {
    public get apiConnectors(): ApiConnectorsRequestBuilder {
        return new ApiConnectorsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get b2xUserFlows(): B2xUserFlowsRequestBuilder {
        return new B2xUserFlowsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get conditionalAccess(): ConditionalAccessRequestBuilder {
        return new ConditionalAccessRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get identityProviders(): IdentityProvidersRequestBuilder {
        return new IdentityProvidersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request  */
    private readonly pathParameters: Map<string, unknown>;
    /** The request adapter to use to execute the requests.  */
    private readonly requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder  */
    private readonly urlTemplate: string;
    public get userFlowAttributes(): UserFlowAttributesRequestBuilder {
        return new UserFlowAttributesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.identity.apiConnectors.item collection
     * @param id Unique identifier of the item
     * @returns a identityApiConnectorRequestBuilder
     */
    public apiConnectorsById(id: string) : IdentityApiConnectorRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        id && urlTplParams.set("identityApiConnector_id", id);
        return new IdentityApiConnectorRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.identity.b2xUserFlows.item collection
     * @param id Unique identifier of the item
     * @returns a b2xIdentityUserFlowRequestBuilder
     */
    public b2xUserFlowsById(id: string) : B2xIdentityUserFlowRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        id && urlTplParams.set("b2xIdentityUserFlow_id", id);
        return new B2xIdentityUserFlowRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new IdentityRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Map<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/identity{?select,expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Get identity
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
     * Update identity
     * @param body 
     * @param h Request headers
     * @param o Request options
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: IdentityContainer | undefined, h?: object | undefined, o?: RequestOption[] | undefined) : RequestInformation {
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
     * Get identity
     * @param h Request headers
     * @param o Request options
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of IdentityContainer
     */
    public get(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: object | undefined, o?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<IdentityContainer | undefined> {
        const requestInfo = this.createGetRequestInformation(
            q, h, o
        );
        return this.requestAdapter?.sendAsync<IdentityContainer>(requestInfo, IdentityContainer, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.identity.identityProviders.item collection
     * @param id Unique identifier of the item
     * @returns a identityProviderBaseRequestBuilder
     */
    public identityProvidersById(id: string) : IdentityProviderBaseRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        id && urlTplParams.set("identityProviderBase_id", id);
        return new IdentityProviderBaseRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Update identity
     * @param body 
     * @param h Request headers
     * @param o Request options
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: IdentityContainer | undefined, h?: object | undefined, o?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, h, o
        );
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.identity.userFlowAttributes.item collection
     * @param id Unique identifier of the item
     * @returns a identityUserFlowAttributeRequestBuilder
     */
    public userFlowAttributesById(id: string) : IdentityUserFlowAttributeRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        id && urlTplParams.set("identityUserFlowAttribute_id", id);
        return new IdentityUserFlowAttributeRequestBuilder(urlTplParams, this.requestAdapter);
    };
}
