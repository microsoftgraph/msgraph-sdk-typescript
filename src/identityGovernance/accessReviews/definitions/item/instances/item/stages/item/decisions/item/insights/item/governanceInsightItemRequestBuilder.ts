import {createGovernanceInsightFromDiscriminatorValue} from '../../../../../../../../../../../../models/createGovernanceInsightFromDiscriminatorValue';
import {deserializeIntoGovernanceInsight} from '../../../../../../../../../../../../models/deserializeIntoGovernanceInsight';
import type {GovernanceInsight} from '../../../../../../../../../../../../models/governanceInsight';
import {ODataError} from '../../../../../../../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../../../../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../../../../../../../../models/oDataErrors/serializeODataError';
import {serializeGovernanceInsight} from '../../../../../../../../../../../../models/serializeGovernanceInsight';
import {GovernanceInsightItemRequestBuilderDeleteRequestConfiguration} from './governanceInsightItemRequestBuilderDeleteRequestConfiguration';
import {GovernanceInsightItemRequestBuilderGetRequestConfiguration} from './governanceInsightItemRequestBuilderGetRequestConfiguration';
import {GovernanceInsightItemRequestBuilderPatchRequestConfiguration} from './governanceInsightItemRequestBuilderPatchRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the insights property of the microsoft.graph.accessReviewInstanceDecisionItem entity.
 */
export class GovernanceInsightItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new GovernanceInsightItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition%2Did}/instances/{accessReviewInstance%2Did}/stages/{accessReviewStage%2Did}/decisions/{accessReviewInstanceDecisionItem%2Did}/insights/{governanceInsight%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete navigation property insights for identityGovernance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: GovernanceInsightItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Insights are recommendations to reviewers on whether to approve or deny a decision. There can be multiple insights associated with an accessReviewInstanceDecisionItem.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of GovernanceInsight
     */
    public get(requestConfiguration?: GovernanceInsightItemRequestBuilderGetRequestConfiguration | undefined) : Promise<GovernanceInsight | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<GovernanceInsight>(requestInfo, createGovernanceInsightFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property insights in identityGovernance
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of GovernanceInsight
     */
    public patch(body: GovernanceInsight, requestConfiguration?: GovernanceInsightItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<GovernanceInsight | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<GovernanceInsight>(requestInfo, createGovernanceInsightFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property insights for identityGovernance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: GovernanceInsightItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Insights are recommendations to reviewers on whether to approve or deny a decision. There can be multiple insights associated with an accessReviewInstanceDecisionItem.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: GovernanceInsightItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property insights in identityGovernance
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: GovernanceInsight, requestConfiguration?: GovernanceInsightItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeGovernanceInsight);
        return requestInfo;
    };
}
