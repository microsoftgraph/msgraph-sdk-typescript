import {WorkflowVersionCollectionResponse} from '../../../../../../models/identityGovernance/';
import {createWorkflowVersionCollectionResponseFromDiscriminatorValue} from '../../../../../../models/identityGovernance/createWorkflowVersionCollectionResponseFromDiscriminatorValue';
import {ODataError} from '../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../../models/oDataErrors/serializeODataError';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {WorkflowVersionVersionNumberItemRequestBuilder} from './item/workflowVersionVersionNumberItemRequestBuilder';
import {VersionsRequestBuilderGetRequestConfiguration} from './versionsRequestBuilderGetRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the versions property of the microsoft.graph.identityGovernance.workflow entity.
 */
export class VersionsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the versions property of the microsoft.graph.identityGovernance.workflow entity.
     * @param workflowVersionVersionNumber The unique identifier of workflowVersion
     * @returns a WorkflowVersionVersionNumberItemRequestBuilder
     */
    public byWorkflowVersionVersionNumber(workflowVersionVersionNumber: number) : WorkflowVersionVersionNumberItemRequestBuilder {
        if(!workflowVersionVersionNumber) throw new Error("workflowVersionVersionNumber cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["workflowVersion%2DversionNumber"] = workflowVersionVersionNumber
        return new WorkflowVersionVersionNumberItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new VersionsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow%2Did}/versions{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Get a list of the workflowVersion objects and their properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of WorkflowVersionCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/identitygovernance-workflow-list-versions?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: VersionsRequestBuilderGetRequestConfiguration | undefined) : Promise<WorkflowVersionCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<WorkflowVersionCollectionResponse>(requestInfo, createWorkflowVersionCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get a list of the workflowVersion objects and their properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: VersionsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * @returns a versionsRequestBuilder
     */
    public withUrl(rawUrl: string) : VersionsRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new VersionsRequestBuilder(rawUrl, this.requestAdapter);
    };
}
