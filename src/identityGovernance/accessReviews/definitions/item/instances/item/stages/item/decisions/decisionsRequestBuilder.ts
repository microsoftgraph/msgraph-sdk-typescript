import { type AccessReviewInstanceDecisionItemCollectionResponse } from '../../../../../../../../../models/';
import { type AccessReviewInstanceDecisionItem } from '../../../../../../../../../models/accessReviewInstanceDecisionItem';
import { createAccessReviewInstanceDecisionItemCollectionResponseFromDiscriminatorValue } from '../../../../../../../../../models/createAccessReviewInstanceDecisionItemCollectionResponseFromDiscriminatorValue';
import { createAccessReviewInstanceDecisionItemFromDiscriminatorValue } from '../../../../../../../../../models/createAccessReviewInstanceDecisionItemFromDiscriminatorValue';
import { deserializeIntoAccessReviewInstanceDecisionItem } from '../../../../../../../../../models/deserializeIntoAccessReviewInstanceDecisionItem';
import { type ODataError } from '../../../../../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../../../../../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../../../../../../../models/oDataErrors/serializeODataError';
import { serializeAccessReviewInstanceDecisionItem } from '../../../../../../../../../models/serializeAccessReviewInstanceDecisionItem';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { type DecisionsRequestBuilderGetRequestConfiguration } from './decisionsRequestBuilderGetRequestConfiguration';
import { type DecisionsRequestBuilderPostRequestConfiguration } from './decisionsRequestBuilderPostRequestConfiguration';
import { FilterByCurrentUserWithOnRequestBuilder } from './filterByCurrentUserWithOn/filterByCurrentUserWithOnRequestBuilder';
import { AccessReviewInstanceDecisionItemItemRequestBuilder } from './item/accessReviewInstanceDecisionItemItemRequestBuilder';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the decisions property of the microsoft.graph.accessReviewStage entity.
 */
export class DecisionsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the decisions property of the microsoft.graph.accessReviewStage entity.
     * @param accessReviewInstanceDecisionItemId The unique identifier of accessReviewInstanceDecisionItem
     * @returns a AccessReviewInstanceDecisionItemItemRequestBuilder
     */
    public byAccessReviewInstanceDecisionItemId(accessReviewInstanceDecisionItemId: string) : AccessReviewInstanceDecisionItemItemRequestBuilder {
        if(!accessReviewInstanceDecisionItemId) throw new Error("accessReviewInstanceDecisionItemId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["accessReviewInstanceDecisionItem%2Did"] = accessReviewInstanceDecisionItemId
        return new AccessReviewInstanceDecisionItemItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new DecisionsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition%2Did}/instances/{accessReviewInstance%2Did}/stages/{accessReviewStage%2Did}/decisions{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Provides operations to call the filterByCurrentUser method.
     * @param on Usage: on='{on}'
     * @returns a filterByCurrentUserWithOnRequestBuilder
     */
    public filterByCurrentUserWithOn(on: string | undefined) : FilterByCurrentUserWithOnRequestBuilder {
        if(!on) throw new Error("on cannot be undefined");
        return new FilterByCurrentUserWithOnRequestBuilder(this.pathParameters, this.requestAdapter, on);
    };
    /**
     * Get the decisions from a stage in a multi-stage access review. The decisions in an accessReviewStage object are represented by an accessReviewInstanceDecisionItem object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AccessReviewInstanceDecisionItemCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/accessreviewstage-list-decisions?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: DecisionsRequestBuilderGetRequestConfiguration | undefined) : Promise<AccessReviewInstanceDecisionItemCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AccessReviewInstanceDecisionItemCollectionResponse>(requestInfo, createAccessReviewInstanceDecisionItemCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to decisions for identityGovernance
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AccessReviewInstanceDecisionItem
     */
    public post(body: AccessReviewInstanceDecisionItem, requestConfiguration?: DecisionsRequestBuilderPostRequestConfiguration | undefined) : Promise<AccessReviewInstanceDecisionItem | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AccessReviewInstanceDecisionItem>(requestInfo, createAccessReviewInstanceDecisionItemFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get the decisions from a stage in a multi-stage access review. The decisions in an accessReviewStage object are represented by an accessReviewInstanceDecisionItem object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: DecisionsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to decisions for identityGovernance
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: AccessReviewInstanceDecisionItem, requestConfiguration?: DecisionsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeAccessReviewInstanceDecisionItem);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a decisionsRequestBuilder
     */
    public withUrl(rawUrl: string) : DecisionsRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new DecisionsRequestBuilder(rawUrl, this.requestAdapter);
    };
}
