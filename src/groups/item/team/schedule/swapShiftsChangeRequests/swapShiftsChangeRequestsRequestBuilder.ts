import {SwapShiftsChangeRequestCollectionResponse} from '../../../../../models/';
import {createSwapShiftsChangeRequestCollectionResponseFromDiscriminatorValue} from '../../../../../models/createSwapShiftsChangeRequestCollectionResponseFromDiscriminatorValue';
import {createSwapShiftsChangeRequestFromDiscriminatorValue} from '../../../../../models/createSwapShiftsChangeRequestFromDiscriminatorValue';
import {deserializeIntoSwapShiftsChangeRequest} from '../../../../../models/deserializeIntoSwapShiftsChangeRequest';
import {ODataError} from '../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../models/oDataErrors/serializeODataError';
import {serializeSwapShiftsChangeRequest} from '../../../../../models/serializeSwapShiftsChangeRequest';
import type {SwapShiftsChangeRequest} from '../../../../../models/swapShiftsChangeRequest';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {SwapShiftsChangeRequestItemRequestBuilder} from './item/swapShiftsChangeRequestItemRequestBuilder';
import {SwapShiftsChangeRequestsRequestBuilderGetRequestConfiguration} from './swapShiftsChangeRequestsRequestBuilderGetRequestConfiguration';
import {SwapShiftsChangeRequestsRequestBuilderPostRequestConfiguration} from './swapShiftsChangeRequestsRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the swapShiftsChangeRequests property of the microsoft.graph.schedule entity.
 */
export class SwapShiftsChangeRequestsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the swapShiftsChangeRequests property of the microsoft.graph.schedule entity.
     * @param swapShiftsChangeRequestId The unique identifier of swapShiftsChangeRequest
     * @returns a SwapShiftsChangeRequestItemRequestBuilder
     */
    public bySwapShiftsChangeRequestId(swapShiftsChangeRequestId: string) : SwapShiftsChangeRequestItemRequestBuilder {
        if(!swapShiftsChangeRequestId) throw new Error("swapShiftsChangeRequestId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["swapShiftsChangeRequest%2Did"] = swapShiftsChangeRequestId
        return new SwapShiftsChangeRequestItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new SwapShiftsChangeRequestsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/groups/{group%2Did}/team/schedule/swapShiftsChangeRequests{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Retrieve a list of swapShiftsChangeRequest objects in the team.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of SwapShiftsChangeRequestCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/swapshiftschangerequest-list?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: SwapShiftsChangeRequestsRequestBuilderGetRequestConfiguration | undefined) : Promise<SwapShiftsChangeRequestCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<SwapShiftsChangeRequestCollectionResponse>(requestInfo, createSwapShiftsChangeRequestCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create an instance of a swapShiftsChangeRequest object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of SwapShiftsChangeRequest
     * @see {@link https://learn.microsoft.com/graph/api/swapshiftschangerequest-post?view=graph-rest-1.0|Find more info here}
     */
    public post(body: SwapShiftsChangeRequest, requestConfiguration?: SwapShiftsChangeRequestsRequestBuilderPostRequestConfiguration | undefined) : Promise<SwapShiftsChangeRequest | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<SwapShiftsChangeRequest>(requestInfo, createSwapShiftsChangeRequestFromDiscriminatorValue, errorMapping);
    };
    /**
     * Retrieve a list of swapShiftsChangeRequest objects in the team.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: SwapShiftsChangeRequestsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create an instance of a swapShiftsChangeRequest object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: SwapShiftsChangeRequest, requestConfiguration?: SwapShiftsChangeRequestsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeSwapShiftsChangeRequest);
        return requestInfo;
    };
}
