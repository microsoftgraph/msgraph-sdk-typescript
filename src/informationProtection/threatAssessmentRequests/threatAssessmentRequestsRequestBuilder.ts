import {ThreatAssessmentRequestCollectionResponse} from '../../models/';
import {createThreatAssessmentRequestCollectionResponseFromDiscriminatorValue} from '../../models/createThreatAssessmentRequestCollectionResponseFromDiscriminatorValue';
import {createThreatAssessmentRequestFromDiscriminatorValue} from '../../models/createThreatAssessmentRequestFromDiscriminatorValue';
import {deserializeIntoThreatAssessmentRequest} from '../../models/deserializeIntoThreatAssessmentRequest';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../models/oDataErrors/serializeODataError';
import {serializeThreatAssessmentRequest} from '../../models/serializeThreatAssessmentRequest';
import {ThreatAssessmentRequest} from '../../models/threatAssessmentRequest';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {ThreatAssessmentRequestItemRequestBuilder} from './item/threatAssessmentRequestItemRequestBuilder';
import {ThreatAssessmentRequestsRequestBuilderGetRequestConfiguration} from './threatAssessmentRequestsRequestBuilderGetRequestConfiguration';
import {ThreatAssessmentRequestsRequestBuilderPostRequestConfiguration} from './threatAssessmentRequestsRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

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
     * @param threatAssessmentRequestId Unique identifier of the item
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
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of ThreatAssessmentRequestCollectionResponse
     * @see {@link https://docs.microsoft.com/graph/api/informationprotection-list-threatassessmentrequests?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: ThreatAssessmentRequestsRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<ThreatAssessmentRequestCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter?.sendAsync<ThreatAssessmentRequestCollectionResponse>(requestInfo, createThreatAssessmentRequestCollectionResponseFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Create a new threat assessment request. A threat assessment request can be one of the following types:
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of ThreatAssessmentRequest
     * @see {@link https://docs.microsoft.com/graph/api/informationprotection-post-threatassessmentrequests?view=graph-rest-1.0|Find more info here}
     */
    public post(body: ThreatAssessmentRequest | undefined, requestConfiguration?: ThreatAssessmentRequestsRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<ThreatAssessmentRequest | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter?.sendAsync<ThreatAssessmentRequest>(requestInfo, createThreatAssessmentRequestFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
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
    public toPostRequestInformation(body: ThreatAssessmentRequest | undefined, requestConfiguration?: ThreatAssessmentRequestsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeThreatAssessmentRequest);
        return requestInfo;
    };
}
