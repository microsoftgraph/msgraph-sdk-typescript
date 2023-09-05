import { createSwapShiftsChangeRequestFromDiscriminatorValue } from '../../../../../../../models/createSwapShiftsChangeRequestFromDiscriminatorValue';
import { deserializeIntoSwapShiftsChangeRequest } from '../../../../../../../models/deserializeIntoSwapShiftsChangeRequest';
import { type ODataError } from '../../../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../../../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../../../../../models/oDataErrors/serializeODataError';
import { serializeSwapShiftsChangeRequest } from '../../../../../../../models/serializeSwapShiftsChangeRequest';
import { type SwapShiftsChangeRequest } from '../../../../../../../models/swapShiftsChangeRequest';
import { type SwapShiftsChangeRequestItemRequestBuilderDeleteRequestConfiguration } from './swapShiftsChangeRequestItemRequestBuilderDeleteRequestConfiguration';
import { type SwapShiftsChangeRequestItemRequestBuilderGetRequestConfiguration } from './swapShiftsChangeRequestItemRequestBuilderGetRequestConfiguration';
import { type SwapShiftsChangeRequestItemRequestBuilderPatchRequestConfiguration } from './swapShiftsChangeRequestItemRequestBuilderPatchRequestConfiguration';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the swapShiftsChangeRequests property of the microsoft.graph.schedule entity.
 */
export class SwapShiftsChangeRequestItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new SwapShiftsChangeRequestItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/users/{user%2Did}/joinedTeams/{team%2Did}/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete navigation property swapShiftsChangeRequests for users
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: SwapShiftsChangeRequestItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
        const requestInfo = this.toDeleteRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendNoResponseContentAsync(requestInfo, errorMapping);
    };
    /**
     * Retrieve the properties and relationships of a swapShiftsChangeRequest object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of SwapShiftsChangeRequest
     * @see {@link https://learn.microsoft.com/graph/api/swapshiftschangerequest-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: SwapShiftsChangeRequestItemRequestBuilderGetRequestConfiguration | undefined) : Promise<SwapShiftsChangeRequest | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<SwapShiftsChangeRequest>(requestInfo, createSwapShiftsChangeRequestFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property swapShiftsChangeRequests in users
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of SwapShiftsChangeRequest
     */
    public patch(body: SwapShiftsChangeRequest, requestConfiguration?: SwapShiftsChangeRequestItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<SwapShiftsChangeRequest | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<SwapShiftsChangeRequest>(requestInfo, createSwapShiftsChangeRequestFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property swapShiftsChangeRequests for users
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: SwapShiftsChangeRequestItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.DELETE;
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
    /**
     * Retrieve the properties and relationships of a swapShiftsChangeRequest object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: SwapShiftsChangeRequestItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property swapShiftsChangeRequests in users
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: SwapShiftsChangeRequest, requestConfiguration?: SwapShiftsChangeRequestItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.PATCH;
        requestInfo.headers["Accept"] = ["application/json"];
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeSwapShiftsChangeRequest);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a SwapShiftsChangeRequestItemRequestBuilder
     */
    public withUrl(rawUrl: string) : SwapShiftsChangeRequestItemRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new SwapShiftsChangeRequestItemRequestBuilder(rawUrl, this.requestAdapter);
    };
}
