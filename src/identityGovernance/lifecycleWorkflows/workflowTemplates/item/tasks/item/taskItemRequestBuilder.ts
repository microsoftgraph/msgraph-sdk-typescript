import {Task} from '../../../../../../models/identityGovernance/';
import {createTaskFromDiscriminatorValue} from '../../../../../../models/identityGovernance/createTaskFromDiscriminatorValue';
import {ODataError} from '../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../../models/oDataErrors/serializeODataError';
import {TaskItemRequestBuilderGetRequestConfiguration} from './taskItemRequestBuilderGetRequestConfiguration';
import {TaskProcessingResultsRequestBuilder} from './taskProcessingResults/taskProcessingResultsRequestBuilder';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the tasks property of the microsoft.graph.identityGovernance.workflowTemplate entity.
 */
export class TaskItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the taskProcessingResults property of the microsoft.graph.identityGovernance.task entity.
     */
    public get taskProcessingResults(): TaskProcessingResultsRequestBuilder {
        return new TaskProcessingResultsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new TaskItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/identityGovernance/lifecycleWorkflows/workflowTemplates/{workflowTemplate%2Did}/tasks/{task%2Did}{?%24select,%24expand}");
    };
    /**
     * Represents the configured tasks to execute and their execution sequence within a workflow. This relationship is expanded by default.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Task
     */
    public get(requestConfiguration?: TaskItemRequestBuilderGetRequestConfiguration | undefined) : Promise<Task | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<Task>(requestInfo, createTaskFromDiscriminatorValue, errorMapping);
    };
    /**
     * Represents the configured tasks to execute and their execution sequence within a workflow. This relationship is expanded by default.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: TaskItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a TaskItemRequestBuilder
     */
    public withUrl(rawUrl: string) : TaskItemRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new TaskItemRequestBuilder(rawUrl, this.requestAdapter);
    };
}
