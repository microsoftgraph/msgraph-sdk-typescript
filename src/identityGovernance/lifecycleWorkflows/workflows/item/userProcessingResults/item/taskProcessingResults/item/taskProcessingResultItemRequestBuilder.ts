import {TaskProcessingResult} from '../../../../../../../../models/identityGovernance/';
import {createTaskProcessingResultFromDiscriminatorValue} from '../../../../../../../../models/identityGovernance/createTaskProcessingResultFromDiscriminatorValue';
import {ODataError} from '../../../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../../../../models/oDataErrors/serializeODataError';
import {MicrosoftGraphIdentityGovernanceResumeRequestBuilder} from './microsoftGraphIdentityGovernanceResume/microsoftGraphIdentityGovernanceResumeRequestBuilder';
import {SubjectRequestBuilder} from './subject/subjectRequestBuilder';
import {TaskRequestBuilder} from './task/taskRequestBuilder';
import {TaskProcessingResultItemRequestBuilderGetRequestConfiguration} from './taskProcessingResultItemRequestBuilderGetRequestConfiguration';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the taskProcessingResults property of the microsoft.graph.identityGovernance.userProcessingResult entity.
 */
export class TaskProcessingResultItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to call the resume method.
     */
    public get microsoftGraphIdentityGovernanceResume(): MicrosoftGraphIdentityGovernanceResumeRequestBuilder {
        return new MicrosoftGraphIdentityGovernanceResumeRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the subject property of the microsoft.graph.identityGovernance.taskProcessingResult entity.
     */
    public get subject(): SubjectRequestBuilder {
        return new SubjectRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the task property of the microsoft.graph.identityGovernance.taskProcessingResult entity.
     */
    public get task(): TaskRequestBuilder {
        return new TaskRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new TaskProcessingResultItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/identityGovernance/lifecycleWorkflows/workflows/{workflow%2Did}/userProcessingResults/{userProcessingResult%2Did}/taskProcessingResults/{taskProcessingResult%2Did}{?%24select,%24expand}");
    };
    /**
     * The associated individual task execution.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of TaskProcessingResult
     */
    public get(requestConfiguration?: TaskProcessingResultItemRequestBuilderGetRequestConfiguration | undefined) : Promise<TaskProcessingResult | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<TaskProcessingResult>(requestInfo, createTaskProcessingResultFromDiscriminatorValue, errorMapping);
    };
    /**
     * The associated individual task execution.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: TaskProcessingResultItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
}
