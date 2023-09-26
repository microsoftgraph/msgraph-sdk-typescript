import { type ODataError } from '../../../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../../../../../../models/oDataErrors/oDataError';
import { type SetCollectionResponse } from '../../../../../../../models/termStore/';
import { createSetFromDiscriminatorValue, deserializeIntoSet, serializeSet, type Set } from '../../../../../../../models/termStore/set';
import { createSetCollectionResponseFromDiscriminatorValue } from '../../../../../../../models/termStore/setCollectionResponse';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { SetItemRequestBuilder } from './item/setItemRequestBuilder';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface SetsRequestBuilderGetQueryParameters {
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
export interface SetsRequestBuilderGetRequestConfiguration {
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
    queryParameters?: SetsRequestBuilderGetQueryParameters;
}
export interface SetsRequestBuilderPostRequestConfiguration {
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
 * Provides operations to manage the sets property of the microsoft.graph.termStore.group entity.
 */
export class SetsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the sets property of the microsoft.graph.termStore.group entity.
     * @param setId1 The unique identifier of set
     * @returns a SetItemRequestBuilder
     */
    public bySetId1(setId1: string) : SetItemRequestBuilder {
        if(!setId1) throw new Error("setId1 cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["set%2Did1"] = setId1
        return new SetItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new SetsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/sites/{site%2Did}/termStore/sets/{set%2Did}/parentGroup/sets{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Get a list of the set objects and their properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of SetCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/termstore-group-list-sets?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: SetsRequestBuilderGetRequestConfiguration | undefined) : Promise<SetCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<SetCollectionResponse>(requestInfo, createSetCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to sets for sites
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Set
     */
    public post(body: Set, requestConfiguration?: SetsRequestBuilderPostRequestConfiguration | undefined) : Promise<Set | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<Set>(requestInfo, createSetFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get a list of the set objects and their properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: SetsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to sets for sites
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: Set, requestConfiguration?: SetsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeSet);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a setsRequestBuilder
     */
    public withUrl(rawUrl: string) : SetsRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new SetsRequestBuilder(rawUrl, this.requestAdapter);
    };
}
