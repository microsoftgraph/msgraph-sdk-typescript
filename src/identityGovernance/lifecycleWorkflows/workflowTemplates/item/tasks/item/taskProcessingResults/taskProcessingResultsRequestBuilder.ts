import {TaskProcessingResultCollectionResponse} from '../../../../../../../models/identityGovernance/';
import {createTaskProcessingResultCollectionResponseFromDiscriminatorValue} from '../../../../../../../models/identityGovernance/createTaskProcessingResultCollectionResponseFromDiscriminatorValue';
import {ODataError} from '../../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../../../models/oDataErrors/serializeODataError';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {TaskProcessingResultItemRequestBuilder} from './item/taskProcessingResultItemRequestBuilder';
import {TaskProcessingResultsRequestBuilderGetRequestConfiguration} from './taskProcessingResultsRequestBuilderGetRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, getPathParameters} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the taskProcessingResults property of the microsoft.graph.identityGovernance.task entity.
 */
export class TaskProcessingResultsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the taskProcessingResults property of the microsoft.graph.identityGovernance.task entity.
     * @param taskProcessingResultId Unique identifier of the item
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
        super(pathParameters, requestAdapter, "{+baseurl}/identityGovernance/lifecycleWorkflows/workflowTemplates/{workflowTemplate%2Did}/tasks/{task%2Did}/taskProcessingResults{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * The result of processing the task.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of TaskProcessingResultCollectionResponse
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
     * The result of processing the task.
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
}
