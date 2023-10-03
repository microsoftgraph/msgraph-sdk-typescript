import { type IdentityUserFlowAttributeCollectionResponse } from '../../models/';
import { createIdentityUserFlowAttributeFromDiscriminatorValue, deserializeIntoIdentityUserFlowAttribute, serializeIdentityUserFlowAttribute, type IdentityUserFlowAttribute } from '../../models/identityUserFlowAttribute';
import { createIdentityUserFlowAttributeCollectionResponseFromDiscriminatorValue } from '../../models/identityUserFlowAttributeCollectionResponse';
import { type ODataError } from '../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../models/oDataErrors/oDataError';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { IdentityUserFlowAttributeItemRequestBuilder } from './item/identityUserFlowAttributeItemRequestBuilder';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface UserFlowAttributesRequestBuilderGetQueryParameters {
    /**
     * Include count of items
     */
    count?: boolean;
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Filter items by property values
     */
    filter?: string;
    /**
     * Order items by property values
     */
    orderby?: string[];
    /**
     * Search items by search phrases
     */
    search?: string;
    /**
     * Select properties to be returned
     */
    select?: string[];
    /**
     * Skip the first n items
     */
    skip?: number;
    /**
     * Show only the first n items
     */
    top?: number;
}
export interface UserFlowAttributesRequestBuilderGetRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]>;
    /**
     * Request options
     */
    options?: RequestOption[];
    /**
     * Request query parameters
     */
    queryParameters?: UserFlowAttributesRequestBuilderGetQueryParameters;
}
export interface UserFlowAttributesRequestBuilderPostRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]>;
    /**
     * Request options
     */
    options?: RequestOption[];
}
/**
 * Provides operations to manage the userFlowAttributes property of the microsoft.graph.identityContainer entity.
 */
export class UserFlowAttributesRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the userFlowAttributes property of the microsoft.graph.identityContainer entity.
     * @param identityUserFlowAttributeId The unique identifier of identityUserFlowAttribute
     * @returns a IdentityUserFlowAttributeItemRequestBuilder
     */
    public byIdentityUserFlowAttributeId(identityUserFlowAttributeId: string) : IdentityUserFlowAttributeItemRequestBuilder {
        if(!identityUserFlowAttributeId) throw new Error("identityUserFlowAttributeId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["identityUserFlowAttribute%2Did"] = identityUserFlowAttributeId
        return new IdentityUserFlowAttributeItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new UserFlowAttributesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/identity/userFlowAttributes{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Retrieve a list of identityUserFlowAttribute objects. This API is supported in the following national cloud deployments.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of IdentityUserFlowAttributeCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/identityuserflowattribute-list?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: UserFlowAttributesRequestBuilderGetRequestConfiguration | undefined) : Promise<IdentityUserFlowAttributeCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<IdentityUserFlowAttributeCollectionResponse>(requestInfo, createIdentityUserFlowAttributeCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create a new custom identityUserFlowAttribute object. This API is supported in the following national cloud deployments.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of IdentityUserFlowAttribute
     * @see {@link https://learn.microsoft.com/graph/api/identityuserflowattribute-post?view=graph-rest-1.0|Find more info here}
     */
    public post(body: IdentityUserFlowAttribute, requestConfiguration?: UserFlowAttributesRequestBuilderPostRequestConfiguration | undefined) : Promise<IdentityUserFlowAttribute | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<IdentityUserFlowAttribute>(requestInfo, createIdentityUserFlowAttributeFromDiscriminatorValue, errorMapping);
    };
    /**
     * Retrieve a list of identityUserFlowAttribute objects. This API is supported in the following national cloud deployments.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: UserFlowAttributesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        requestInfo.headers["Accept"] = ["application/json"];
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.setQueryStringParametersFromRawObject(requestConfiguration.queryParameters);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
    /**
     * Create a new custom identityUserFlowAttribute object. This API is supported in the following national cloud deployments.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: IdentityUserFlowAttribute, requestConfiguration?: UserFlowAttributesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.POST;
        requestInfo.headers["Accept"] = ["application/json"];
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeIdentityUserFlowAttribute);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a userFlowAttributesRequestBuilder
     */
    public withUrl(rawUrl: string) : UserFlowAttributesRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new UserFlowAttributesRequestBuilder(rawUrl, this.requestAdapter);
    };
}
