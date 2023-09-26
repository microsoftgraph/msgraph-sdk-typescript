import { type SharedInsightCollectionResponse } from '../../../../models/';
import { type ODataError } from '../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../../../models/oDataErrors/oDataError';
import { createSharedInsightFromDiscriminatorValue, deserializeIntoSharedInsight, serializeSharedInsight, type SharedInsight } from '../../../../models/sharedInsight';
import { createSharedInsightCollectionResponseFromDiscriminatorValue } from '../../../../models/sharedInsightCollectionResponse';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { SharedInsightItemRequestBuilder } from './item/sharedInsightItemRequestBuilder';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface SharedRequestBuilderGetQueryParameters {
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
export interface SharedRequestBuilderGetRequestConfiguration {
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
    queryParameters?: SharedRequestBuilderGetQueryParameters;
}
export interface SharedRequestBuilderPostRequestConfiguration {
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
 * Provides operations to manage the shared property of the microsoft.graph.officeGraphInsights entity.
 */
export class SharedRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the shared property of the microsoft.graph.officeGraphInsights entity.
     * @param sharedInsightId The unique identifier of sharedInsight
     * @returns a SharedInsightItemRequestBuilder
     */
    public bySharedInsightId(sharedInsightId: string) : SharedInsightItemRequestBuilder {
        if(!sharedInsightId) throw new Error("sharedInsightId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["sharedInsight%2Did"] = sharedInsightId
        return new SharedInsightItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new SharedRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/users/{user%2Did}/insights/shared{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Calculated insight that includes the list of documents shared with a user. This insight includes documents hosted on OneDrive/SharePoint in the user's Microsoft 365 tenant that are shared with the user, and documents that are attached as files and sent to the user.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of SharedInsightCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/insights-list-shared?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: SharedRequestBuilderGetRequestConfiguration | undefined) : Promise<SharedInsightCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<SharedInsightCollectionResponse>(requestInfo, createSharedInsightCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to shared for users
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of SharedInsight
     */
    public post(body: SharedInsight, requestConfiguration?: SharedRequestBuilderPostRequestConfiguration | undefined) : Promise<SharedInsight | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<SharedInsight>(requestInfo, createSharedInsightFromDiscriminatorValue, errorMapping);
    };
    /**
     * Calculated insight that includes the list of documents shared with a user. This insight includes documents hosted on OneDrive/SharePoint in the user's Microsoft 365 tenant that are shared with the user, and documents that are attached as files and sent to the user.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: SharedRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to shared for users
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: SharedInsight, requestConfiguration?: SharedRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeSharedInsight);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a sharedRequestBuilder
     */
    public withUrl(rawUrl: string) : SharedRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new SharedRequestBuilder(rawUrl, this.requestAdapter);
    };
}
