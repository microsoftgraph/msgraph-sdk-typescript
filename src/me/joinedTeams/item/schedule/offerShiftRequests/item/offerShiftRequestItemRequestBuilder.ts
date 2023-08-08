import {createOfferShiftRequestFromDiscriminatorValue} from '../../../../../../models/createOfferShiftRequestFromDiscriminatorValue';
import {deserializeIntoOfferShiftRequest} from '../../../../../../models/deserializeIntoOfferShiftRequest';
import {ODataError} from '../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../../models/oDataErrors/serializeODataError';
import type {OfferShiftRequest} from '../../../../../../models/offerShiftRequest';
import {serializeOfferShiftRequest} from '../../../../../../models/serializeOfferShiftRequest';
import {OfferShiftRequestItemRequestBuilderDeleteRequestConfiguration} from './offerShiftRequestItemRequestBuilderDeleteRequestConfiguration';
import {OfferShiftRequestItemRequestBuilderGetRequestConfiguration} from './offerShiftRequestItemRequestBuilderGetRequestConfiguration';
import {OfferShiftRequestItemRequestBuilderPatchRequestConfiguration} from './offerShiftRequestItemRequestBuilderPatchRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the offerShiftRequests property of the microsoft.graph.schedule entity.
 */
export class OfferShiftRequestItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new OfferShiftRequestItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/me/joinedTeams/{team%2Did}/schedule/offerShiftRequests/{offerShiftRequest%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete navigation property offerShiftRequests for me
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: OfferShiftRequestItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Retrieve the properties and relationships of an offerShiftRequest object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of OfferShiftRequest
     * @see {@link https://learn.microsoft.com/graph/api/offershiftrequest-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: OfferShiftRequestItemRequestBuilderGetRequestConfiguration | undefined) : Promise<OfferShiftRequest | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<OfferShiftRequest>(requestInfo, createOfferShiftRequestFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property offerShiftRequests in me
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of OfferShiftRequest
     */
    public patch(body: OfferShiftRequest, requestConfiguration?: OfferShiftRequestItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<OfferShiftRequest | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<OfferShiftRequest>(requestInfo, createOfferShiftRequestFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property offerShiftRequests for me
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: OfferShiftRequestItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Retrieve the properties and relationships of an offerShiftRequest object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: OfferShiftRequestItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property offerShiftRequests in me
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: OfferShiftRequest, requestConfiguration?: OfferShiftRequestItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeOfferShiftRequest);
        return requestInfo;
    };
}
