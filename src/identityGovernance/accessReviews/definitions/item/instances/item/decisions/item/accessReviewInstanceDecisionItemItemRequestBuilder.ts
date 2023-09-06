import { type AccessReviewInstanceDecisionItem } from '../../../../../../../../models/accessReviewInstanceDecisionItem';
import { createAccessReviewInstanceDecisionItemFromDiscriminatorValue } from '../../../../../../../../models/createAccessReviewInstanceDecisionItemFromDiscriminatorValue';
import { deserializeIntoAccessReviewInstanceDecisionItem } from '../../../../../../../../models/deserializeIntoAccessReviewInstanceDecisionItem';
import { type ODataError } from '../../../../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../../../../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../../../../../../models/oDataErrors/serializeODataError';
import { serializeAccessReviewInstanceDecisionItem } from '../../../../../../../../models/serializeAccessReviewInstanceDecisionItem';
import { type AccessReviewInstanceDecisionItemItemRequestBuilderDeleteRequestConfiguration } from './accessReviewInstanceDecisionItemItemRequestBuilderDeleteRequestConfiguration';
import { type AccessReviewInstanceDecisionItemItemRequestBuilderGetRequestConfiguration } from './accessReviewInstanceDecisionItemItemRequestBuilderGetRequestConfiguration';
import { type AccessReviewInstanceDecisionItemItemRequestBuilderPatchRequestConfiguration } from './accessReviewInstanceDecisionItemItemRequestBuilderPatchRequestConfiguration';
import { InsightsRequestBuilder } from './insights/insightsRequestBuilder';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the decisions property of the microsoft.graph.accessReviewInstance entity.
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
        super(pathParameters, requestAdapter, "{+baseurl}/identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition%2Did}/instances/{accessReviewInstance%2Did}/decisions/{accessReviewInstanceDecisionItem%2Did}{?%24select,%24expand}");
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
     * Update the navigation property decisions in identityGovernance
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AccessReviewInstanceDecisionItem
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
     * Update the navigation property decisions in identityGovernance
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
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a AccessReviewInstanceDecisionItemItemRequestBuilder
     */
    public withUrl(rawUrl: string) : AccessReviewInstanceDecisionItemItemRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new AccessReviewInstanceDecisionItemItemRequestBuilder(rawUrl, this.requestAdapter);
    };
}
