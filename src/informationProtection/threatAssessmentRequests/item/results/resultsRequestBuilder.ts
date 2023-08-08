import {ThreatAssessmentResultCollectionResponse} from '../../../../models/';
import {createThreatAssessmentResultCollectionResponseFromDiscriminatorValue} from '../../../../models/createThreatAssessmentResultCollectionResponseFromDiscriminatorValue';
import {createThreatAssessmentResultFromDiscriminatorValue} from '../../../../models/createThreatAssessmentResultFromDiscriminatorValue';
import {deserializeIntoThreatAssessmentResult} from '../../../../models/deserializeIntoThreatAssessmentResult';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../models/oDataErrors/serializeODataError';
import {serializeThreatAssessmentResult} from '../../../../models/serializeThreatAssessmentResult';
import type {ThreatAssessmentResult} from '../../../../models/threatAssessmentResult';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {ThreatAssessmentResultItemRequestBuilder} from './item/threatAssessmentResultItemRequestBuilder';
import {ResultsRequestBuilderGetRequestConfiguration} from './resultsRequestBuilderGetRequestConfiguration';
import {ResultsRequestBuilderPostRequestConfiguration} from './resultsRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the results property of the microsoft.graph.threatAssessmentRequest entity.
 */
export class ResultsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the results property of the microsoft.graph.threatAssessmentRequest entity.
     * @param threatAssessmentResultId Unique identifier of the item
     * @returns a ThreatAssessmentResultItemRequestBuilder
     */
    public byThreatAssessmentResultId(threatAssessmentResultId: string) : ThreatAssessmentResultItemRequestBuilder {
        if(!threatAssessmentResultId) throw new Error("threatAssessmentResultId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["threatAssessmentResult%2Did"] = threatAssessmentResultId
        return new ThreatAssessmentResultItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new ResultsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest%2Did}/results{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * A collection of threat assessment results. Read-only. By default, a GET /threatAssessmentRequests/{id} does not return this property unless you apply $expand on it.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ThreatAssessmentResultCollectionResponse
     */
    public get(requestConfiguration?: ResultsRequestBuilderGetRequestConfiguration | undefined) : Promise<ThreatAssessmentResultCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ThreatAssessmentResultCollectionResponse>(requestInfo, createThreatAssessmentResultCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to results for informationProtection
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ThreatAssessmentResult
     */
    public post(body: ThreatAssessmentResult, requestConfiguration?: ResultsRequestBuilderPostRequestConfiguration | undefined) : Promise<ThreatAssessmentResult | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ThreatAssessmentResult>(requestInfo, createThreatAssessmentResultFromDiscriminatorValue, errorMapping);
    };
    /**
     * A collection of threat assessment results. Read-only. By default, a GET /threatAssessmentRequests/{id} does not return this property unless you apply $expand on it.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ResultsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to results for informationProtection
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: ThreatAssessmentResult, requestConfiguration?: ResultsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeThreatAssessmentResult);
        return requestInfo;
    };
}
