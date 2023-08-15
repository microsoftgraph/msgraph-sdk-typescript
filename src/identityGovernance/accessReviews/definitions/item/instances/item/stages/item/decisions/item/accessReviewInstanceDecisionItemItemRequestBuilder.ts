import type {AccessReviewInstanceDecisionItem} from '../../../../../../../../../../models/accessReviewInstanceDecisionItem';
import {createAccessReviewInstanceDecisionItemFromDiscriminatorValue} from '../../../../../../../../../../models/createAccessReviewInstanceDecisionItemFromDiscriminatorValue';
import {deserializeIntoAccessReviewInstanceDecisionItem} from '../../../../../../../../../../models/deserializeIntoAccessReviewInstanceDecisionItem';
import {ODataError} from '../../../../../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../../../../../../models/oDataErrors/serializeODataError';
import {serializeAccessReviewInstanceDecisionItem} from '../../../../../../../../../../models/serializeAccessReviewInstanceDecisionItem';
import {AccessReviewInstanceDecisionItemItemRequestBuilderDeleteRequestConfiguration} from './accessReviewInstanceDecisionItemItemRequestBuilderDeleteRequestConfiguration';
import {AccessReviewInstanceDecisionItemItemRequestBuilderGetRequestConfiguration} from './accessReviewInstanceDecisionItemItemRequestBuilderGetRequestConfiguration';
import {AccessReviewInstanceDecisionItemItemRequestBuilderPatchRequestConfiguration} from './accessReviewInstanceDecisionItemItemRequestBuilderPatchRequestConfiguration';
import {InsightsRequestBuilder} from './insights/insightsRequestBuilder';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the decisions property of the microsoft.graph.accessReviewStage entity.
 */
export class AccessReviewInstanceDecisionItemItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the insights property of the microsoft.graph.accessReviewInstanceDecisionItem entity.
     */
    public get insights(): InsightsRequestBuilder {
        return new InsightsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new AccessReviewInstanceDecisionItemItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition%2Did}/instances/{accessReviewInstance%2Did}/stages/{accessReviewStage%2Did}/decisions/{accessReviewInstanceDecisionItem%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete navigation property decisions for identityGovernance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: AccessReviewInstanceDecisionItemItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Read the properties and relationships of an accessReviewInstanceDecisionItem object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AccessReviewInstanceDecisionItem
     * @see {@link https://learn.microsoft.com/graph/api/accessreviewinstancedecisionitem-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: AccessReviewInstanceDecisionItemItemRequestBuilderGetRequestConfiguration | undefined) : Promise<AccessReviewInstanceDecisionItem | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AccessReviewInstanceDecisionItem>(requestInfo, createAccessReviewInstanceDecisionItemFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update access decisions, known as accessReviewInstanceDecisionItems, for which the user is the reviewer.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AccessReviewInstanceDecisionItem
     * @see {@link https://learn.microsoft.com/graph/api/accessreviewinstancedecisionitem-update?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: AccessReviewInstanceDecisionItem, requestConfiguration?: AccessReviewInstanceDecisionItemItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<AccessReviewInstanceDecisionItem | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AccessReviewInstanceDecisionItem>(requestInfo, createAccessReviewInstanceDecisionItemFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property decisions for identityGovernance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: AccessReviewInstanceDecisionItemItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Read the properties and relationships of an accessReviewInstanceDecisionItem object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: AccessReviewInstanceDecisionItemItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update access decisions, known as accessReviewInstanceDecisionItems, for which the user is the reviewer.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: AccessReviewInstanceDecisionItem, requestConfiguration?: AccessReviewInstanceDecisionItemItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeAccessReviewInstanceDecisionItem);
        return requestInfo;
    };
}
