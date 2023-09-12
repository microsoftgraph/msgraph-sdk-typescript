import { type GovernanceInsightCollectionResponse } from '../../../../../../../../../../../models/';
import { createGovernanceInsightCollectionResponseFromDiscriminatorValue } from '../../../../../../../../../../../models/createGovernanceInsightCollectionResponseFromDiscriminatorValue';
import { createGovernanceInsightFromDiscriminatorValue } from '../../../../../../../../../../../models/createGovernanceInsightFromDiscriminatorValue';
import { deserializeIntoGovernanceInsight } from '../../../../../../../../../../../models/deserializeIntoGovernanceInsight';
import { type GovernanceInsight } from '../../../../../../../../../../../models/governanceInsight';
import { type ODataError } from '../../../../../../../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../../../../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../../../../../../../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../../../../../../../../../models/oDataErrors/serializeODataError';
import { serializeGovernanceInsight } from '../../../../../../../../../../../models/serializeGovernanceInsight';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { type InsightsRequestBuilderGetRequestConfiguration } from './insightsRequestBuilderGetRequestConfiguration';
import { type InsightsRequestBuilderPostRequestConfiguration } from './insightsRequestBuilderPostRequestConfiguration';
import { GovernanceInsightItemRequestBuilder } from './item/governanceInsightItemRequestBuilder';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the insights property of the microsoft.graph.accessReviewInstanceDecisionItem entity.
 */
export class InsightsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the insights property of the microsoft.graph.accessReviewInstanceDecisionItem entity.
     * @param governanceInsightId The unique identifier of governanceInsight
     * @returns a GovernanceInsightItemRequestBuilder
     */
    public byGovernanceInsightId(governanceInsightId: string) : GovernanceInsightItemRequestBuilder {
        if(!governanceInsightId) throw new Error("governanceInsightId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["governanceInsight%2Did"] = governanceInsightId
        return new GovernanceInsightItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new InsightsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition%2Did}/instances/{accessReviewInstance%2Did}/stages/{accessReviewStage%2Did}/decisions/{accessReviewInstanceDecisionItem%2Did}/insights{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Insights are recommendations to reviewers on whether to approve or deny a decision. There can be multiple insights associated with an accessReviewInstanceDecisionItem.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of GovernanceInsightCollectionResponse
     */
    public get(requestConfiguration?: InsightsRequestBuilderGetRequestConfiguration | undefined) : Promise<GovernanceInsightCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<GovernanceInsightCollectionResponse>(requestInfo, createGovernanceInsightCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to insights for identityGovernance
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of GovernanceInsight
     */
    public post(body: GovernanceInsight, requestConfiguration?: InsightsRequestBuilderPostRequestConfiguration | undefined) : Promise<GovernanceInsight | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<GovernanceInsight>(requestInfo, createGovernanceInsightFromDiscriminatorValue, errorMapping);
    };
    /**
     * Insights are recommendations to reviewers on whether to approve or deny a decision. There can be multiple insights associated with an accessReviewInstanceDecisionItem.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: InsightsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to insights for identityGovernance
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: GovernanceInsight, requestConfiguration?: InsightsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeGovernanceInsight);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a insightsRequestBuilder
     */
    public withUrl(rawUrl: string) : InsightsRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new InsightsRequestBuilder(rawUrl, this.requestAdapter);
    };
}
