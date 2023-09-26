import { type TaskProcessingResultCollectionResponse } from '../../../../../../../models/identityGovernance/';
import { createTaskProcessingResultCollectionResponseFromDiscriminatorValue } from '../../../../../../../models/identityGovernance/taskProcessingResultCollectionResponse';
import { type ODataError } from '../../../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../../../../../../models/oDataErrors/oDataError';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { TaskProcessingResultItemRequestBuilder } from './item/taskProcessingResultItemRequestBuilder';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface TaskProcessingResultsRequestBuilderGetQueryParameters {
    /**
     * Include count of items
     */
    count?: boolean;
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Filter items by property values
     */
    filter?: string;
    /**
     * Order items by property values
     */
    orderby?: string[];
    /**
     * Search items by search phrases
     */
    search?: string;
    /**
     * Select properties to be returned
     */
    select?: string[];
    /**
     * Skip the first n items
     */
    skip?: number;
    /**
     * Show only the first n items
     */
    top?: number;
}
export interface TaskProcessingResultsRequestBuilderGetRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]>;
    /**
     * Request options
     */
    options?: RequestOption[];
    /**
     * Request query parameters
     */
    queryParameters?: TaskProcessingResultsRequestBuilderGetQueryParameters;
}
/**
 * Provides operations to manage the taskProcessingResults property of the microsoft.graph.identityGovernance.taskReport entity.
 */
export class TaskProcessingResultsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the taskProcessingResults property of the microsoft.graph.identityGovernance.taskReport entity.
     * @param taskProcessingResultId The unique identifier of taskProcessingResult
     * @returns a TaskProcessingResultItemRequestBuilder
     */
    public byTaskProcessingResultId(taskProcessingResultId: string) : TaskProcessingResultItemRequestBuilder {
        if(!taskProcessingResultId) throw new Error("taskProcessingResultId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["taskProcessingResult%2Did"] = taskProcessingResultId
        return new TaskProcessingResultItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new TaskProcessingResultsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/identityGovernance/lifecycleWorkflows/workflows/{workflow%2Did}/taskReports/{taskReport%2Did}/taskProcessingResults{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Get the task processing result resources from the taskReport.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of TaskProcessingResultCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/identitygovernance-taskreport-list-taskprocessingresults?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: TaskProcessingResultsRequestBuilderGetRequestConfiguration | undefined) : Promise<TaskProcessingResultCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<TaskProcessingResultCollectionResponse>(requestInfo, createTaskProcessingResultCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get the task processing result resources from the taskReport.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: TaskProcessingResultsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * @returns a taskProcessingResultsRequestBuilder
     */
    public withUrl(rawUrl: string) : TaskProcessingResultsRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new TaskProcessingResultsRequestBuilder(rawUrl, this.requestAdapter);
    };
}
