import { type ODataError } from '../../../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../../../../../../models/oDataErrors/oDataError';
import { type UnifiedGroupSourceCollectionResponse } from '../../../../../../../models/security/';
import { createUnifiedGroupSourceFromDiscriminatorValue, deserializeIntoUnifiedGroupSource, serializeUnifiedGroupSource, type UnifiedGroupSource } from '../../../../../../../models/security/unifiedGroupSource';
import { createUnifiedGroupSourceCollectionResponseFromDiscriminatorValue } from '../../../../../../../models/security/unifiedGroupSourceCollectionResponse';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { UnifiedGroupSourceItemRequestBuilder } from './item/unifiedGroupSourceItemRequestBuilder';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface UnifiedGroupSourcesRequestBuilderGetQueryParameters {
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
export interface UnifiedGroupSourcesRequestBuilderGetRequestConfiguration {
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
    queryParameters?: UnifiedGroupSourcesRequestBuilderGetQueryParameters;
}
export interface UnifiedGroupSourcesRequestBuilderPostRequestConfiguration {
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
 * Provides operations to manage the unifiedGroupSources property of the microsoft.graph.security.ediscoveryCustodian entity.
 */
export class UnifiedGroupSourcesRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the unifiedGroupSources property of the microsoft.graph.security.ediscoveryCustodian entity.
     * @param unifiedGroupSourceId The unique identifier of unifiedGroupSource
     * @returns a UnifiedGroupSourceItemRequestBuilder
     */
    public byUnifiedGroupSourceId(unifiedGroupSourceId: string) : UnifiedGroupSourceItemRequestBuilder {
        if(!unifiedGroupSourceId) throw new Error("unifiedGroupSourceId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["unifiedGroupSource%2Did"] = unifiedGroupSourceId
        return new UnifiedGroupSourceItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new UnifiedGroupSourcesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/security/cases/ediscoveryCases/{ediscoveryCase%2Did}/custodians/{ediscoveryCustodian%2Did}/unifiedGroupSources{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Get a list of the unifiedGroupSource objects associated with an ediscoveryCustodian.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UnifiedGroupSourceCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/security-ediscoverycustodian-list-unifiedgroupsources?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: UnifiedGroupSourcesRequestBuilderGetRequestConfiguration | undefined) : Promise<UnifiedGroupSourceCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UnifiedGroupSourceCollectionResponse>(requestInfo, createUnifiedGroupSourceCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create a new unifiedGroupSource object associated with an eDiscovery custodian.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UnifiedGroupSource
     * @see {@link https://learn.microsoft.com/graph/api/security-ediscoverycustodian-post-unifiedgroupsources?view=graph-rest-1.0|Find more info here}
     */
    public post(body: UnifiedGroupSource, requestConfiguration?: UnifiedGroupSourcesRequestBuilderPostRequestConfiguration | undefined) : Promise<UnifiedGroupSource | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UnifiedGroupSource>(requestInfo, createUnifiedGroupSourceFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get a list of the unifiedGroupSource objects associated with an ediscoveryCustodian.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: UnifiedGroupSourcesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new unifiedGroupSource object associated with an eDiscovery custodian.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: UnifiedGroupSource, requestConfiguration?: UnifiedGroupSourcesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeUnifiedGroupSource);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a unifiedGroupSourcesRequestBuilder
     */
    public withUrl(rawUrl: string) : UnifiedGroupSourcesRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new UnifiedGroupSourcesRequestBuilder(rawUrl, this.requestAdapter);
    };
}
