import {TaskReport} from '../../../../../../models/identityGovernance/';
import {createTaskReportFromDiscriminatorValue} from '../../../../../../models/identityGovernance/createTaskReportFromDiscriminatorValue';
import {ODataError} from '../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../../models/oDataErrors/serializeODataError';
import {TaskRequestBuilder} from './task/taskRequestBuilder';
import {TaskDefinitionRequestBuilder} from './taskDefinition/taskDefinitionRequestBuilder';
import {TaskProcessingResultsRequestBuilder} from './taskProcessingResults/taskProcessingResultsRequestBuilder';
import {TaskReportItemRequestBuilderGetRequestConfiguration} from './taskReportItemRequestBuilderGetRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the taskReports property of the microsoft.graph.identityGovernance.workflow entity.
 */
export class TaskReportItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the task property of the microsoft.graph.identityGovernance.taskReport entity.
     */
    public get task(): TaskRequestBuilder {
        return new TaskRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the taskDefinition property of the microsoft.graph.identityGovernance.taskReport entity.
     */
    public get taskDefinition(): TaskDefinitionRequestBuilder {
        return new TaskDefinitionRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the taskProcessingResults property of the microsoft.graph.identityGovernance.taskReport entity.
     */
    public get taskProcessingResults(): TaskProcessingResultsRequestBuilder {
        return new TaskProcessingResultsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new TaskReportItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/identityGovernance/lifecycleWorkflows/workflows/{workflow%2Did}/taskReports/{taskReport%2Did}{?%24select,%24expand}");
    };
    /**
     * Represents the aggregation of task execution data for tasks within a workflow object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of TaskReport
     */
    public get(requestConfiguration?: TaskReportItemRequestBuilderGetRequestConfiguration | undefined) : Promise<TaskReport | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<TaskReport>(requestInfo, createTaskReportFromDiscriminatorValue, errorMapping);
    };
    /**
     * Represents the aggregation of task execution data for tasks within a workflow object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: TaskReportItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
