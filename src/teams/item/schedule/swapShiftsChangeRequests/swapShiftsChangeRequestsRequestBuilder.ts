import {SwapShiftsChangeRequest, SwapShiftsChangeRequestCollectionResponse} from '../../../../models/';
import {createSwapShiftsChangeRequestCollectionResponseFromDiscriminatorValue} from '../../../../models/createSwapShiftsChangeRequestCollectionResponseFromDiscriminatorValue';
import {createSwapShiftsChangeRequestFromDiscriminatorValue} from '../../../../models/createSwapShiftsChangeRequestFromDiscriminatorValue';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {SwapShiftsChangeRequestItemRequestBuilder} from './item/swapShiftsChangeRequestItemRequestBuilder';
import {SwapShiftsChangeRequestsRequestBuilderGetRequestConfiguration} from './swapShiftsChangeRequestsRequestBuilderGetRequestConfiguration';
import {SwapShiftsChangeRequestsRequestBuilderPostRequestConfiguration} from './swapShiftsChangeRequestsRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the swapShiftsChangeRequests property of the microsoft.graph.schedule entity.
 */
export class SwapShiftsChangeRequestsRequestBuilder extends BaseRequestBuilder {
    /** Provides operations to count the resources in the collection. */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the swapShiftsChangeRequests property of the microsoft.graph.schedule entity.
     * @param swapShiftsChangeRequestId Unique identifier of the item
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
        super(pathParameters, requestAdapter, "{+baseurl}/teams/{team%2Did}/schedule/swapShiftsChangeRequests{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Get swapShiftsChangeRequests from teams
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of SwapShiftsChangeRequestCollectionResponse
     */
    public get(requestConfiguration?: SwapShiftsChangeRequestsRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<SwapShiftsChangeRequestCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<SwapShiftsChangeRequestCollectionResponse>(requestInfo, createSwapShiftsChangeRequestCollectionResponseFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Create new navigation property to swapShiftsChangeRequests for teams
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of SwapShiftsChangeRequest
     */
    public post(body: SwapShiftsChangeRequest | undefined, requestConfiguration?: SwapShiftsChangeRequestsRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<SwapShiftsChangeRequest | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<SwapShiftsChangeRequest>(requestInfo, createSwapShiftsChangeRequestFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Get swapShiftsChangeRequests from teams
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
     * Create new navigation property to swapShiftsChangeRequests for teams
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: SwapShiftsChangeRequest | undefined, requestConfiguration?: SwapShiftsChangeRequestsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        return requestInfo;
    };
}
