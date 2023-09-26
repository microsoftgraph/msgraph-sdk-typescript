import { type AccessReviewReviewerCollectionResponse } from '../../../../../../../models/';
import { createAccessReviewReviewerFromDiscriminatorValue, deserializeIntoAccessReviewReviewer, serializeAccessReviewReviewer, type AccessReviewReviewer } from '../../../../../../../models/accessReviewReviewer';
import { createAccessReviewReviewerCollectionResponseFromDiscriminatorValue } from '../../../../../../../models/accessReviewReviewerCollectionResponse';
import { type ODataError } from '../../../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../../../../../../models/oDataErrors/oDataError';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { AccessReviewReviewerItemRequestBuilder } from './item/accessReviewReviewerItemRequestBuilder';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface ContactedReviewersRequestBuilderGetQueryParameters {
    /**
     * Include count of items
     */
    count?: boolean;
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Filter items by property values
     */
    filter?: string;
    /**
     * Order items by property values
     */
    orderby?: string[];
    /**
     * Search items by search phrases
     */
    search?: string;
    /**
     * Select properties to be returned
     */
    select?: string[];
    /**
     * Skip the first n items
     */
    skip?: number;
    /**
     * Show only the first n items
     */
    top?: number;
}
export interface ContactedReviewersRequestBuilderGetRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]>;
    /**
     * Request options
     */
    options?: RequestOption[];
    /**
     * Request query parameters
     */
    queryParameters?: ContactedReviewersRequestBuilderGetQueryParameters;
}
export interface ContactedReviewersRequestBuilderPostRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]>;
    /**
     * Request options
     */
    options?: RequestOption[];
}
/**
 * Provides operations to manage the contactedReviewers property of the microsoft.graph.accessReviewInstance entity.
 */
export class ContactedReviewersRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the contactedReviewers property of the microsoft.graph.accessReviewInstance entity.
     * @param accessReviewReviewerId The unique identifier of accessReviewReviewer
     * @returns a AccessReviewReviewerItemRequestBuilder
     */
    public byAccessReviewReviewerId(accessReviewReviewerId: string) : AccessReviewReviewerItemRequestBuilder {
        if(!accessReviewReviewerId) throw new Error("accessReviewReviewerId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["accessReviewReviewer%2Did"] = accessReviewReviewerId
        return new AccessReviewReviewerItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new ContactedReviewersRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition%2Did}/instances/{accessReviewInstance%2Did}/contactedReviewers{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Get the reviewers for an access review instance, irrespective of whether or not they have received a notification. The reviewers are represented by an accessReviewReviewer object. A list of zero or more objects are returned, including all of their nested properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AccessReviewReviewerCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/accessreviewinstance-list-contactedreviewers?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: ContactedReviewersRequestBuilderGetRequestConfiguration | undefined) : Promise<AccessReviewReviewerCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AccessReviewReviewerCollectionResponse>(requestInfo, createAccessReviewReviewerCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to contactedReviewers for identityGovernance
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AccessReviewReviewer
     */
    public post(body: AccessReviewReviewer, requestConfiguration?: ContactedReviewersRequestBuilderPostRequestConfiguration | undefined) : Promise<AccessReviewReviewer | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AccessReviewReviewer>(requestInfo, createAccessReviewReviewerFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get the reviewers for an access review instance, irrespective of whether or not they have received a notification. The reviewers are represented by an accessReviewReviewer object. A list of zero or more objects are returned, including all of their nested properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ContactedReviewersRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to contactedReviewers for identityGovernance
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: AccessReviewReviewer, requestConfiguration?: ContactedReviewersRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeAccessReviewReviewer);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a contactedReviewersRequestBuilder
     */
    public withUrl(rawUrl: string) : ContactedReviewersRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new ContactedReviewersRequestBuilder(rawUrl, this.requestAdapter);
    };
}
