import {SubjectRightsRequestCollectionResponse} from '../../models/';
import {createSubjectRightsRequestCollectionResponseFromDiscriminatorValue} from '../../models/createSubjectRightsRequestCollectionResponseFromDiscriminatorValue';
import {createSubjectRightsRequestFromDiscriminatorValue} from '../../models/createSubjectRightsRequestFromDiscriminatorValue';
import {deserializeIntoSubjectRightsRequest} from '../../models/deserializeIntoSubjectRightsRequest';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../models/oDataErrors/serializeODataError';
import {serializeSubjectRightsRequest} from '../../models/serializeSubjectRightsRequest';
import {SubjectRightsRequest} from '../../models/subjectRightsRequest';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {SubjectRightsRequestItemRequestBuilder} from './item/subjectRightsRequestItemRequestBuilder';
import {SubjectRightsRequestsRequestBuilderGetRequestConfiguration} from './subjectRightsRequestsRequestBuilderGetRequestConfiguration';
import {SubjectRightsRequestsRequestBuilderPostRequestConfiguration} from './subjectRightsRequestsRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the subjectRightsRequests property of the microsoft.graph.privacy entity.
 */
export class SubjectRightsRequestsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the subjectRightsRequests property of the microsoft.graph.privacy entity.
     * @param subjectRightsRequestId Unique identifier of the item
     * @returns a SubjectRightsRequestItemRequestBuilder
     */
    public bySubjectRightsRequestId(subjectRightsRequestId: string) : SubjectRightsRequestItemRequestBuilder {
        if(!subjectRightsRequestId) throw new Error("subjectRightsRequestId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["subjectRightsRequest%2Did"] = subjectRightsRequestId
        return new SubjectRightsRequestItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new SubjectRightsRequestsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/privacy/subjectRightsRequests{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Get a list of subjectRightsRequest objects and their properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of SubjectRightsRequestCollectionResponse
     * @see {@link https://docs.microsoft.com/graph/api/subjectrightsrequest-list?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: SubjectRightsRequestsRequestBuilderGetRequestConfiguration | undefined) : Promise<SubjectRightsRequestCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<SubjectRightsRequestCollectionResponse>(requestInfo, createSubjectRightsRequestCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create a new subjectRightsRequest object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of SubjectRightsRequest
     * @see {@link https://docs.microsoft.com/graph/api/subjectrightsrequest-post?view=graph-rest-1.0|Find more info here}
     */
    public post(body: SubjectRightsRequest | undefined, requestConfiguration?: SubjectRightsRequestsRequestBuilderPostRequestConfiguration | undefined) : Promise<SubjectRightsRequest | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<SubjectRightsRequest>(requestInfo, createSubjectRightsRequestFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get a list of subjectRightsRequest objects and their properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: SubjectRightsRequestsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new subjectRightsRequest object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: SubjectRightsRequest | undefined, requestConfiguration?: SubjectRightsRequestsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeSubjectRightsRequest);
        return requestInfo;
    };
}
