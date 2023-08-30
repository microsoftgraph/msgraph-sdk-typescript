import {ThreatAssessmentRequestCollectionResponse} from '../../models/';
import {createThreatAssessmentRequestCollectionResponseFromDiscriminatorValue} from '../../models/createThreatAssessmentRequestCollectionResponseFromDiscriminatorValue';
import {createThreatAssessmentRequestFromDiscriminatorValue} from '../../models/createThreatAssessmentRequestFromDiscriminatorValue';
import {deserializeIntoThreatAssessmentRequest} from '../../models/deserializeIntoThreatAssessmentRequest';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../models/oDataErrors/serializeODataError';
import {serializeThreatAssessmentRequest} from '../../models/serializeThreatAssessmentRequest';
import type {ThreatAssessmentRequest} from '../../models/threatAssessmentRequest';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {ThreatAssessmentRequestItemRequestBuilder} from './item/threatAssessmentRequestItemRequestBuilder';
import {ThreatAssessmentRequestsRequestBuilderGetRequestConfiguration} from './threatAssessmentRequestsRequestBuilderGetRequestConfiguration';
import {ThreatAssessmentRequestsRequestBuilderPostRequestConfiguration} from './threatAssessmentRequestsRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the threatAssessmentRequests property of the microsoft.graph.informationProtection entity.
 */
export class ThreatAssessmentRequestsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the threatAssessmentRequests property of the microsoft.graph.informationProtection entity.
     * @param threatAssessmentRequestId The unique identifier of threatAssessmentRequest
     * @returns a ThreatAssessmentRequestItemRequestBuilder
     */
    public byThreatAssessmentRequestId(threatAssessmentRequestId: string) : ThreatAssessmentRequestItemRequestBuilder {
        if(!threatAssessmentRequestId) throw new Error("threatAssessmentRequestId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["threatAssessmentRequest%2Did"] = threatAssessmentRequestId
        return new ThreatAssessmentRequestItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new ThreatAssessmentRequestsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/informationProtection/threatAssessmentRequests{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Retrieve a list of threatAssessmentRequest objects. A threat assessment request can be one of the following types:
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ThreatAssessmentRequestCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/informationprotection-list-threatassessmentrequests?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: ThreatAssessmentRequestsRequestBuilderGetRequestConfiguration | undefined) : Promise<ThreatAssessmentRequestCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ThreatAssessmentRequestCollectionResponse>(requestInfo, createThreatAssessmentRequestCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create a new threat assessment request. A threat assessment request can be one of the following types:
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ThreatAssessmentRequest
     * @see {@link https://learn.microsoft.com/graph/api/informationprotection-post-threatassessmentrequests?view=graph-rest-1.0|Find more info here}
     */
    public post(body: ThreatAssessmentRequest, requestConfiguration?: ThreatAssessmentRequestsRequestBuilderPostRequestConfiguration | undefined) : Promise<ThreatAssessmentRequest | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ThreatAssessmentRequest>(requestInfo, createThreatAssessmentRequestFromDiscriminatorValue, errorMapping);
    };
    /**
     * Retrieve a list of threatAssessmentRequest objects. A threat assessment request can be one of the following types:
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ThreatAssessmentRequestsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new threat assessment request. A threat assessment request can be one of the following types:
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: ThreatAssessmentRequest, requestConfiguration?: ThreatAssessmentRequestsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeThreatAssessmentRequest);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a threatAssessmentRequestsRequestBuilder
     */
    public withUrl(rawUrl: string) : ThreatAssessmentRequestsRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new ThreatAssessmentRequestsRequestBuilder(rawUrl, this.requestAdapter);
    };
}
