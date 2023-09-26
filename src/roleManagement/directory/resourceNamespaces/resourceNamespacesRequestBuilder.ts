import { type UnifiedRbacResourceNamespaceCollectionResponse } from '../../../models/';
import { type ODataError } from '../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../../models/oDataErrors/oDataError';
import { createUnifiedRbacResourceNamespaceFromDiscriminatorValue, deserializeIntoUnifiedRbacResourceNamespace, serializeUnifiedRbacResourceNamespace, type UnifiedRbacResourceNamespace } from '../../../models/unifiedRbacResourceNamespace';
import { createUnifiedRbacResourceNamespaceCollectionResponseFromDiscriminatorValue } from '../../../models/unifiedRbacResourceNamespaceCollectionResponse';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { UnifiedRbacResourceNamespaceItemRequestBuilder } from './item/unifiedRbacResourceNamespaceItemRequestBuilder';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface ResourceNamespacesRequestBuilderGetQueryParameters {
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
export interface ResourceNamespacesRequestBuilderGetRequestConfiguration {
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
    queryParameters?: ResourceNamespacesRequestBuilderGetQueryParameters;
}
export interface ResourceNamespacesRequestBuilderPostRequestConfiguration {
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
 * Provides operations to manage the resourceNamespaces property of the microsoft.graph.rbacApplication entity.
 */
export class ResourceNamespacesRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the resourceNamespaces property of the microsoft.graph.rbacApplication entity.
     * @param unifiedRbacResourceNamespaceId The unique identifier of unifiedRbacResourceNamespace
     * @returns a UnifiedRbacResourceNamespaceItemRequestBuilder
     */
    public byUnifiedRbacResourceNamespaceId(unifiedRbacResourceNamespaceId: string) : UnifiedRbacResourceNamespaceItemRequestBuilder {
        if(!unifiedRbacResourceNamespaceId) throw new Error("unifiedRbacResourceNamespaceId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["unifiedRbacResourceNamespace%2Did"] = unifiedRbacResourceNamespaceId
        return new UnifiedRbacResourceNamespaceItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new ResourceNamespacesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/roleManagement/directory/resourceNamespaces{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Get resourceNamespaces from roleManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UnifiedRbacResourceNamespaceCollectionResponse
     */
    public get(requestConfiguration?: ResourceNamespacesRequestBuilderGetRequestConfiguration | undefined) : Promise<UnifiedRbacResourceNamespaceCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UnifiedRbacResourceNamespaceCollectionResponse>(requestInfo, createUnifiedRbacResourceNamespaceCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to resourceNamespaces for roleManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UnifiedRbacResourceNamespace
     */
    public post(body: UnifiedRbacResourceNamespace, requestConfiguration?: ResourceNamespacesRequestBuilderPostRequestConfiguration | undefined) : Promise<UnifiedRbacResourceNamespace | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UnifiedRbacResourceNamespace>(requestInfo, createUnifiedRbacResourceNamespaceFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get resourceNamespaces from roleManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ResourceNamespacesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to resourceNamespaces for roleManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: UnifiedRbacResourceNamespace, requestConfiguration?: ResourceNamespacesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeUnifiedRbacResourceNamespace);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a resourceNamespacesRequestBuilder
     */
    public withUrl(rawUrl: string) : ResourceNamespacesRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new ResourceNamespacesRequestBuilder(rawUrl, this.requestAdapter);
    };
}
