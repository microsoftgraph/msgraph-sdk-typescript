import { type OfferShiftRequestCollectionResponse } from '../../../../../../models/';
import { type ODataError } from '../../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../../../../../models/oDataErrors/oDataError';
import { createOfferShiftRequestFromDiscriminatorValue, deserializeIntoOfferShiftRequest, serializeOfferShiftRequest, type OfferShiftRequest } from '../../../../../../models/offerShiftRequest';
import { createOfferShiftRequestCollectionResponseFromDiscriminatorValue } from '../../../../../../models/offerShiftRequestCollectionResponse';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { OfferShiftRequestItemRequestBuilder } from './item/offerShiftRequestItemRequestBuilder';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface OfferShiftRequestsRequestBuilderGetQueryParameters {
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
export interface OfferShiftRequestsRequestBuilderGetRequestConfiguration {
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
    queryParameters?: OfferShiftRequestsRequestBuilderGetQueryParameters;
}
export interface OfferShiftRequestsRequestBuilderPostRequestConfiguration {
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
 * Provides operations to manage the offerShiftRequests property of the microsoft.graph.schedule entity.
 */
export class OfferShiftRequestsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the offerShiftRequests property of the microsoft.graph.schedule entity.
     * @param offerShiftRequestId The unique identifier of offerShiftRequest
     * @returns a OfferShiftRequestItemRequestBuilder
     */
    public byOfferShiftRequestId(offerShiftRequestId: string) : OfferShiftRequestItemRequestBuilder {
        if(!offerShiftRequestId) throw new Error("offerShiftRequestId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["offerShiftRequest%2Did"] = offerShiftRequestId
        return new OfferShiftRequestItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new OfferShiftRequestsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/users/{user%2Did}/joinedTeams/{team%2Did}/schedule/offerShiftRequests{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Retrieve the properties and relationships of all offerShiftRequest objects in a team. This API is supported in the following national cloud deployments.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of OfferShiftRequestCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/offershiftrequest-list?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: OfferShiftRequestsRequestBuilderGetRequestConfiguration | undefined) : Promise<OfferShiftRequestCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<OfferShiftRequestCollectionResponse>(requestInfo, createOfferShiftRequestCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create an instance of an offerShiftRequest. This API is supported in the following national cloud deployments.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of OfferShiftRequest
     * @see {@link https://learn.microsoft.com/graph/api/offershiftrequest-post?view=graph-rest-1.0|Find more info here}
     */
    public post(body: OfferShiftRequest, requestConfiguration?: OfferShiftRequestsRequestBuilderPostRequestConfiguration | undefined) : Promise<OfferShiftRequest | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<OfferShiftRequest>(requestInfo, createOfferShiftRequestFromDiscriminatorValue, errorMapping);
    };
    /**
     * Retrieve the properties and relationships of all offerShiftRequest objects in a team. This API is supported in the following national cloud deployments.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: OfferShiftRequestsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create an instance of an offerShiftRequest. This API is supported in the following national cloud deployments.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: OfferShiftRequest, requestConfiguration?: OfferShiftRequestsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeOfferShiftRequest);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a offerShiftRequestsRequestBuilder
     */
    public withUrl(rawUrl: string) : OfferShiftRequestsRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new OfferShiftRequestsRequestBuilder(rawUrl, this.requestAdapter);
    };
}
