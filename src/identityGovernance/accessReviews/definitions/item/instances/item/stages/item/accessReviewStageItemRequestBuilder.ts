import {AccessReviewStage} from '../../../../../../../../models/accessReviewStage';
import {createAccessReviewStageFromDiscriminatorValue} from '../../../../../../../../models/createAccessReviewStageFromDiscriminatorValue';
import {deserializeIntoAccessReviewStage} from '../../../../../../../../models/deserializeIntoAccessReviewStage';
import {ODataError} from '../../../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../../../../models/oDataErrors/serializeODataError';
import {serializeAccessReviewStage} from '../../../../../../../../models/serializeAccessReviewStage';
import {AccessReviewStageItemRequestBuilderDeleteRequestConfiguration} from './accessReviewStageItemRequestBuilderDeleteRequestConfiguration';
import {AccessReviewStageItemRequestBuilderGetRequestConfiguration} from './accessReviewStageItemRequestBuilderGetRequestConfiguration';
import {AccessReviewStageItemRequestBuilderPatchRequestConfiguration} from './accessReviewStageItemRequestBuilderPatchRequestConfiguration';
import {DecisionsRequestBuilder} from './decisions/decisionsRequestBuilder';
import {StopRequestBuilder} from './stop/stopRequestBuilder';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the stages property of the microsoft.graph.accessReviewInstance entity.
 */
export class AccessReviewStageItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the decisions property of the microsoft.graph.accessReviewStage entity.
     */
    public get decisions(): DecisionsRequestBuilder {
        return new DecisionsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the stop method.
     */
    public get stop(): StopRequestBuilder {
        return new StopRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new AccessReviewStageItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition%2Did}/instances/{accessReviewInstance%2Did}/stages/{accessReviewStage%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete navigation property stages for identityGovernance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: AccessReviewStageItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Retrieve the properties and relationships of an accessReviewStage object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AccessReviewStage
     * @see {@link https://docs.microsoft.com/graph/api/accessreviewstage-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: AccessReviewStageItemRequestBuilderGetRequestConfiguration | undefined) : Promise<AccessReviewStage | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AccessReviewStage>(requestInfo, createAccessReviewStageFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the properties of an accessReviewStage object. Only the **reviewers** and **fallbackReviewers** properties can be updated. You can only add reviewers to the **fallbackReviewers** property but can't remove existing **fallbackReviewers**. To update an **accessReviewStage**, its **status** must be `NotStarted`, `Initializing`, or `InProgress`.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AccessReviewStage
     * @see {@link https://docs.microsoft.com/graph/api/accessreviewstage-update?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: AccessReviewStage | undefined, requestConfiguration?: AccessReviewStageItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<AccessReviewStage | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AccessReviewStage>(requestInfo, createAccessReviewStageFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property stages for identityGovernance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: AccessReviewStageItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Retrieve the properties and relationships of an accessReviewStage object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: AccessReviewStageItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the properties of an accessReviewStage object. Only the **reviewers** and **fallbackReviewers** properties can be updated. You can only add reviewers to the **fallbackReviewers** property but can't remove existing **fallbackReviewers**. To update an **accessReviewStage**, its **status** must be `NotStarted`, `Initializing`, or `InProgress`.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: AccessReviewStage | undefined, requestConfiguration?: AccessReviewStageItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeAccessReviewStage);
        return requestInfo;
    };
}
