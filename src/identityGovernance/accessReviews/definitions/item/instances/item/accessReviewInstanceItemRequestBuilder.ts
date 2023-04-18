import {AccessReviewInstance} from '../../../../../../models/';
import {createAccessReviewInstanceFromDiscriminatorValue} from '../../../../../../models/createAccessReviewInstanceFromDiscriminatorValue';
import {ODataError} from '../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {AcceptRecommendationsRequestBuilder} from './acceptRecommendations/acceptRecommendationsRequestBuilder';
import {AccessReviewInstanceItemRequestBuilderDeleteRequestConfiguration} from './accessReviewInstanceItemRequestBuilderDeleteRequestConfiguration';
import {AccessReviewInstanceItemRequestBuilderGetRequestConfiguration} from './accessReviewInstanceItemRequestBuilderGetRequestConfiguration';
import {AccessReviewInstanceItemRequestBuilderPatchRequestConfiguration} from './accessReviewInstanceItemRequestBuilderPatchRequestConfiguration';
import {ApplyDecisionsRequestBuilder} from './applyDecisions/applyDecisionsRequestBuilder';
import {BatchRecordDecisionsRequestBuilder} from './batchRecordDecisions/batchRecordDecisionsRequestBuilder';
import {ContactedReviewersRequestBuilder} from './contactedReviewers/contactedReviewersRequestBuilder';
import {DecisionsRequestBuilder} from './decisions/decisionsRequestBuilder';
import {ResetDecisionsRequestBuilder} from './resetDecisions/resetDecisionsRequestBuilder';
import {SendReminderRequestBuilder} from './sendReminder/sendReminderRequestBuilder';
import {StagesRequestBuilder} from './stages/stagesRequestBuilder';
import {StopRequestBuilder} from './stop/stopRequestBuilder';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the instances property of the microsoft.graph.accessReviewScheduleDefinition entity.
 */
export class AccessReviewInstanceItemRequestBuilder extends BaseRequestBuilder {
    /** Provides operations to call the acceptRecommendations method. */
    public get acceptRecommendations(): AcceptRecommendationsRequestBuilder {
        return new AcceptRecommendationsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the applyDecisions method. */
    public get applyDecisions(): ApplyDecisionsRequestBuilder {
        return new ApplyDecisionsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the batchRecordDecisions method. */
    public get batchRecordDecisions(): BatchRecordDecisionsRequestBuilder {
        return new BatchRecordDecisionsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the contactedReviewers property of the microsoft.graph.accessReviewInstance entity. */
    public get contactedReviewers(): ContactedReviewersRequestBuilder {
        return new ContactedReviewersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the decisions property of the microsoft.graph.accessReviewInstance entity. */
    public get decisions(): DecisionsRequestBuilder {
        return new DecisionsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the resetDecisions method. */
    public get resetDecisions(): ResetDecisionsRequestBuilder {
        return new ResetDecisionsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the sendReminder method. */
    public get sendReminder(): SendReminderRequestBuilder {
        return new SendReminderRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the stages property of the microsoft.graph.accessReviewInstance entity. */
    public get stages(): StagesRequestBuilder {
        return new StagesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the stop method. */
    public get stop(): StopRequestBuilder {
        return new StopRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new AccessReviewInstanceItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition%2Did}/instances/{accessReviewInstance%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete navigation property instances for identityGovernance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(requestConfiguration?: AccessReviewInstanceItemRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.toDeleteRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * If the accessReviewScheduleDefinition is a recurring access review, instances represent each recurrence. A review that does not recur will have exactly one instance. Instances also represent each unique resource under review in the accessReviewScheduleDefinition. If a review has multiple resources and multiple instances, each resource will have a unique instance for each recurrence.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of AccessReviewInstance
     */
    public get(requestConfiguration?: AccessReviewInstanceItemRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<AccessReviewInstance | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<AccessReviewInstance>(requestInfo, createAccessReviewInstanceFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Update the navigation property instances in identityGovernance
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of AccessReviewInstance
     */
    public patch(body: AccessReviewInstance | undefined, requestConfiguration?: AccessReviewInstanceItemRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<AccessReviewInstance | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<AccessReviewInstance>(requestInfo, createAccessReviewInstanceFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Delete navigation property instances for identityGovernance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: AccessReviewInstanceItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * If the accessReviewScheduleDefinition is a recurring access review, instances represent each recurrence. A review that does not recur will have exactly one instance. Instances also represent each unique resource under review in the accessReviewScheduleDefinition. If a review has multiple resources and multiple instances, each resource will have a unique instance for each recurrence.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: AccessReviewInstanceItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property instances in identityGovernance
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: AccessReviewInstance | undefined, requestConfiguration?: AccessReviewInstanceItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        return requestInfo;
    };
}
