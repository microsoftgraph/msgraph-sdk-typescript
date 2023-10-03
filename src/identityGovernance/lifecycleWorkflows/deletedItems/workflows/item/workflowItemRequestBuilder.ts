import { type Workflow } from '../../../../../models/identityGovernance/';
import { createWorkflowFromDiscriminatorValue } from '../../../../../models/identityGovernance/workflow';
import { type ODataError } from '../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../../../../models/oDataErrors/oDataError';
import { CreatedByRequestBuilder } from './createdBy/createdByRequestBuilder';
import { ExecutionScopeRequestBuilder } from './executionScope/executionScopeRequestBuilder';
import { LastModifiedByRequestBuilder } from './lastModifiedBy/lastModifiedByRequestBuilder';
import { MicrosoftGraphIdentityGovernanceActivateRequestBuilder } from './microsoftGraphIdentityGovernanceActivate/microsoftGraphIdentityGovernanceActivateRequestBuilder';
import { MicrosoftGraphIdentityGovernanceCreateNewVersionRequestBuilder } from './microsoftGraphIdentityGovernanceCreateNewVersion/microsoftGraphIdentityGovernanceCreateNewVersionRequestBuilder';
import { MicrosoftGraphIdentityGovernanceRestoreRequestBuilder } from './microsoftGraphIdentityGovernanceRestore/microsoftGraphIdentityGovernanceRestoreRequestBuilder';
import { RunsRequestBuilder } from './runs/runsRequestBuilder';
import { TaskReportsRequestBuilder } from './taskReports/taskReportsRequestBuilder';
import { TasksRequestBuilder } from './tasks/tasksRequestBuilder';
import { UserProcessingResultsRequestBuilder } from './userProcessingResults/userProcessingResultsRequestBuilder';
import { VersionsRequestBuilder } from './versions/versionsRequestBuilder';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface WorkflowItemRequestBuilderDeleteRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]>;
    /**
     * Request options
     */
    options?: RequestOption[];
}
export interface WorkflowItemRequestBuilderGetQueryParameters {
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Select properties to be returned
     */
    select?: string[];
}
export interface WorkflowItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: WorkflowItemRequestBuilderGetQueryParameters;
}
/**
 * Provides operations to manage the workflows property of the microsoft.graph.deletedItemContainer entity.
 */
export class WorkflowItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the createdBy property of the microsoft.graph.identityGovernance.workflowBase entity.
     */
    public get createdBy(): CreatedByRequestBuilder {
        return new CreatedByRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the executionScope property of the microsoft.graph.identityGovernance.workflow entity.
     */
    public get executionScope(): ExecutionScopeRequestBuilder {
        return new ExecutionScopeRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the lastModifiedBy property of the microsoft.graph.identityGovernance.workflowBase entity.
     */
    public get lastModifiedBy(): LastModifiedByRequestBuilder {
        return new LastModifiedByRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the activate method.
     */
    public get microsoftGraphIdentityGovernanceActivate(): MicrosoftGraphIdentityGovernanceActivateRequestBuilder {
        return new MicrosoftGraphIdentityGovernanceActivateRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the createNewVersion method.
     */
    public get microsoftGraphIdentityGovernanceCreateNewVersion(): MicrosoftGraphIdentityGovernanceCreateNewVersionRequestBuilder {
        return new MicrosoftGraphIdentityGovernanceCreateNewVersionRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the restore method.
     */
    public get microsoftGraphIdentityGovernanceRestore(): MicrosoftGraphIdentityGovernanceRestoreRequestBuilder {
        return new MicrosoftGraphIdentityGovernanceRestoreRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the runs property of the microsoft.graph.identityGovernance.workflow entity.
     */
    public get runs(): RunsRequestBuilder {
        return new RunsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the taskReports property of the microsoft.graph.identityGovernance.workflow entity.
     */
    public get taskReports(): TaskReportsRequestBuilder {
        return new TaskReportsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the tasks property of the microsoft.graph.identityGovernance.workflowBase entity.
     */
    public get tasks(): TasksRequestBuilder {
        return new TasksRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the userProcessingResults property of the microsoft.graph.identityGovernance.workflow entity.
     */
    public get userProcessingResults(): UserProcessingResultsRequestBuilder {
        return new UserProcessingResultsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the versions property of the microsoft.graph.identityGovernance.workflow entity.
     */
    public get versions(): VersionsRequestBuilder {
        return new VersionsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new WorkflowItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete a workflow object. This API is supported in the following national cloud deployments.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/identitygovernance-deletedItemcontainer-delete?view=graph-rest-1.0|Find more info here}
     */
    public delete(requestConfiguration?: WorkflowItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Retrieve a deleted workflow object. This API is supported in the following national cloud deployments.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Workflow
     * @see {@link https://learn.microsoft.com/graph/api/identitygovernance-deleteditemcontainer-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: WorkflowItemRequestBuilderGetRequestConfiguration | undefined) : Promise<Workflow | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<Workflow>(requestInfo, createWorkflowFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete a workflow object. This API is supported in the following national cloud deployments.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: WorkflowItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Retrieve a deleted workflow object. This API is supported in the following national cloud deployments.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: WorkflowItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * @returns a WorkflowItemRequestBuilder
     */
    public withUrl(rawUrl: string) : WorkflowItemRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new WorkflowItemRequestBuilder(rawUrl, this.requestAdapter);
    };
}
