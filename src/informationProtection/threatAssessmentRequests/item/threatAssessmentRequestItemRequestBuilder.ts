import { createThreatAssessmentRequestFromDiscriminatorValue } from '../../../models/createThreatAssessmentRequestFromDiscriminatorValue';
import { deserializeIntoThreatAssessmentRequest } from '../../../models/deserializeIntoThreatAssessmentRequest';
import { type ODataError } from '../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../models/oDataErrors/serializeODataError';
import { serializeThreatAssessmentRequest } from '../../../models/serializeThreatAssessmentRequest';
import { type ThreatAssessmentRequest } from '../../../models/threatAssessmentRequest';
import { ResultsRequestBuilder } from './results/resultsRequestBuilder';
import { type ThreatAssessmentRequestItemRequestBuilderDeleteRequestConfiguration } from './threatAssessmentRequestItemRequestBuilderDeleteRequestConfiguration';
import { type ThreatAssessmentRequestItemRequestBuilderGetRequestConfiguration } from './threatAssessmentRequestItemRequestBuilderGetRequestConfiguration';
import { type ThreatAssessmentRequestItemRequestBuilderPatchRequestConfiguration } from './threatAssessmentRequestItemRequestBuilderPatchRequestConfiguration';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the threatAssessmentRequests property of the microsoft.graph.informationProtection entity.
 */
export class ThreatAssessmentRequestItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the results property of the microsoft.graph.threatAssessmentRequest entity.
     */
    public get results(): ResultsRequestBuilder {
        return new ResultsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new ThreatAssessmentRequestItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete navigation property threatAssessmentRequests for informationProtection
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: ThreatAssessmentRequestItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Retrieve the properties and relationships of a specified threatAssessmentRequest object. A threat assessment request can be one of the following types:
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ThreatAssessmentRequest
     * @see {@link https://learn.microsoft.com/graph/api/threatassessmentrequest-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: ThreatAssessmentRequestItemRequestBuilderGetRequestConfiguration | undefined) : Promise<ThreatAssessmentRequest | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ThreatAssessmentRequest>(requestInfo, createThreatAssessmentRequestFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property threatAssessmentRequests in informationProtection
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ThreatAssessmentRequest
     */
    public patch(body: ThreatAssessmentRequest, requestConfiguration?: ThreatAssessmentRequestItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<ThreatAssessmentRequest | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ThreatAssessmentRequest>(requestInfo, createThreatAssessmentRequestFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property threatAssessmentRequests for informationProtection
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: ThreatAssessmentRequestItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Retrieve the properties and relationships of a specified threatAssessmentRequest object. A threat assessment request can be one of the following types:
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ThreatAssessmentRequestItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property threatAssessmentRequests in informationProtection
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: ThreatAssessmentRequest, requestConfiguration?: ThreatAssessmentRequestItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeThreatAssessmentRequest);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a ThreatAssessmentRequestItemRequestBuilder
     */
    public withUrl(rawUrl: string) : ThreatAssessmentRequestItemRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new ThreatAssessmentRequestItemRequestBuilder(rawUrl, this.requestAdapter);
    };
}
