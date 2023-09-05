import { type SubjectRightsRequestCollectionResponse } from '../../models/';
import { createSubjectRightsRequestCollectionResponseFromDiscriminatorValue } from '../../models/createSubjectRightsRequestCollectionResponseFromDiscriminatorValue';
import { createSubjectRightsRequestFromDiscriminatorValue } from '../../models/createSubjectRightsRequestFromDiscriminatorValue';
import { deserializeIntoSubjectRightsRequest } from '../../models/deserializeIntoSubjectRightsRequest';
import { type ODataError } from '../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../models/oDataErrors/serializeODataError';
import { serializeSubjectRightsRequest } from '../../models/serializeSubjectRightsRequest';
import { type SubjectRightsRequest } from '../../models/subjectRightsRequest';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { SubjectRightsRequestItemRequestBuilder } from './item/subjectRightsRequestItemRequestBuilder';
import { type SubjectRightsRequestsRequestBuilderGetRequestConfiguration } from './subjectRightsRequestsRequestBuilderGetRequestConfiguration';
import { type SubjectRightsRequestsRequestBuilderPostRequestConfiguration } from './subjectRightsRequestsRequestBuilderPostRequestConfiguration';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the subjectRightsRequests property of the microsoft.graph.privacy entity.
 */
export class SubjectRightsRequestsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     * @deprecated The subject rights request API under Privacy is deprecated and will stop working on  March 22, 2025. Please use the new API under Security. as of 2022-02/PrivacyDeprecate on 2022-03-22 and will be removed 2025-03-20
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the subjectRightsRequests property of the microsoft.graph.privacy entity.
     * @param subjectRightsRequestId The unique identifier of subjectRightsRequest
     * @returns a SubjectRightsRequestItemRequestBuilder
     * @deprecated The subject rights request API under Privacy is deprecated and will stop working on  March 22, 2025. Please use the new API under Security. as of 2022-02/PrivacyDeprecate on 2022-03-22 and will be removed 2025-03-20
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
     * @deprecated The subject rights request API under Privacy is deprecated and will stop working on  March 22, 2025. Please use the new API under Security. as of 2022-02/PrivacyDeprecate on 2022-03-22 and will be removed 2025-03-20
     * @see {@link https://learn.microsoft.com/graph/api/subjectrightsrequest-list?view=graph-rest-1.0|Find more info here}
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
     * @deprecated The subject rights request API under Privacy is deprecated and will stop working on  March 22, 2025. Please use the new API under Security. as of 2022-02/PrivacyDeprecate on 2022-03-22 and will be removed 2025-03-20
     * @see {@link https://learn.microsoft.com/graph/api/subjectrightsrequest-post?view=graph-rest-1.0|Find more info here}
     */
    public post(body: SubjectRightsRequest, requestConfiguration?: SubjectRightsRequestsRequestBuilderPostRequestConfiguration | undefined) : Promise<SubjectRightsRequest | undefined> {
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
     * @deprecated The subject rights request API under Privacy is deprecated and will stop working on  March 22, 2025. Please use the new API under Security. as of 2022-02/PrivacyDeprecate on 2022-03-22 and will be removed 2025-03-20
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
     * @deprecated The subject rights request API under Privacy is deprecated and will stop working on  March 22, 2025. Please use the new API under Security. as of 2022-02/PrivacyDeprecate on 2022-03-22 and will be removed 2025-03-20
     */
    public toPostRequestInformation(body: SubjectRightsRequest, requestConfiguration?: SubjectRightsRequestsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeSubjectRightsRequest);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a subjectRightsRequestsRequestBuilder
     * @deprecated The subject rights request API under Privacy is deprecated and will stop working on  March 22, 2025. Please use the new API under Security. as of 2022-02/PrivacyDeprecate on 2022-03-22 and will be removed 2025-03-20
     */
    public withUrl(rawUrl: string) : SubjectRightsRequestsRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new SubjectRightsRequestsRequestBuilder(rawUrl, this.requestAdapter);
    };
}
