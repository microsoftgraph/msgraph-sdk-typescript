/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createWorkflowFromDiscriminatorValue, type Workflow } from '@microsoft/msgraph-sdk/models/identityGovernance/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { CreatedByRequestBuilderNavigationMetadata, CreatedByRequestBuilderRequestsMetadata, type CreatedByRequestBuilder } from './createdBy/index.js';
// @ts-ignore
import { ExecutionScopeRequestBuilderNavigationMetadata, ExecutionScopeRequestBuilderRequestsMetadata, type ExecutionScopeRequestBuilder } from './executionScope/index.js';
// @ts-ignore
import { LastModifiedByRequestBuilderNavigationMetadata, LastModifiedByRequestBuilderRequestsMetadata, type LastModifiedByRequestBuilder } from './lastModifiedBy/index.js';
// @ts-ignore
import { MicrosoftGraphIdentityGovernanceActivateRequestBuilderRequestsMetadata, type MicrosoftGraphIdentityGovernanceActivateRequestBuilder } from './microsoftGraphIdentityGovernanceActivate/index.js';
// @ts-ignore
import { MicrosoftGraphIdentityGovernanceCreateNewVersionRequestBuilderRequestsMetadata, type MicrosoftGraphIdentityGovernanceCreateNewVersionRequestBuilder } from './microsoftGraphIdentityGovernanceCreateNewVersion/index.js';
// @ts-ignore
import { MicrosoftGraphIdentityGovernanceRestoreRequestBuilderRequestsMetadata, type MicrosoftGraphIdentityGovernanceRestoreRequestBuilder } from './microsoftGraphIdentityGovernanceRestore/index.js';
// @ts-ignore
import { RunsRequestBuilderNavigationMetadata, RunsRequestBuilderRequestsMetadata, type RunsRequestBuilder } from './runs/index.js';
// @ts-ignore
import { TaskReportsRequestBuilderNavigationMetadata, TaskReportsRequestBuilderRequestsMetadata, type TaskReportsRequestBuilder } from './taskReports/index.js';
// @ts-ignore
import { TasksRequestBuilderNavigationMetadata, TasksRequestBuilderRequestsMetadata, type TasksRequestBuilder } from './tasks/index.js';
// @ts-ignore
import { type UserProcessingResultsRequestBuilder, UserProcessingResultsRequestBuilderNavigationMetadata, UserProcessingResultsRequestBuilderRequestsMetadata } from './userProcessingResults/index.js';
// @ts-ignore
import { type VersionsRequestBuilder, VersionsRequestBuilderNavigationMetadata, VersionsRequestBuilderRequestsMetadata } from './versions/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the workflows property of the microsoft.graph.deletedItemContainer entity.
 */
export interface WorkflowItemRequestBuilder extends BaseRequestBuilder<WorkflowItemRequestBuilder> {
    /**
     * Provides operations to manage the createdBy property of the microsoft.graph.identityGovernance.workflowBase entity.
     */
    get createdBy(): CreatedByRequestBuilder;
    /**
     * Provides operations to manage the executionScope property of the microsoft.graph.identityGovernance.workflow entity.
     */
    get executionScope(): ExecutionScopeRequestBuilder;
    /**
     * Provides operations to manage the lastModifiedBy property of the microsoft.graph.identityGovernance.workflowBase entity.
     */
    get lastModifiedBy(): LastModifiedByRequestBuilder;
    /**
     * Provides operations to call the activate method.
     */
    get microsoftGraphIdentityGovernanceActivate(): MicrosoftGraphIdentityGovernanceActivateRequestBuilder;
    /**
     * Provides operations to call the createNewVersion method.
     */
    get microsoftGraphIdentityGovernanceCreateNewVersion(): MicrosoftGraphIdentityGovernanceCreateNewVersionRequestBuilder;
    /**
     * Provides operations to call the restore method.
     */
    get microsoftGraphIdentityGovernanceRestore(): MicrosoftGraphIdentityGovernanceRestoreRequestBuilder;
    /**
     * Provides operations to manage the runs property of the microsoft.graph.identityGovernance.workflow entity.
     */
    get runs(): RunsRequestBuilder;
    /**
     * Provides operations to manage the taskReports property of the microsoft.graph.identityGovernance.workflow entity.
     */
    get taskReports(): TaskReportsRequestBuilder;
    /**
     * Provides operations to manage the tasks property of the microsoft.graph.identityGovernance.workflowBase entity.
     */
    get tasks(): TasksRequestBuilder;
    /**
     * Provides operations to manage the userProcessingResults property of the microsoft.graph.identityGovernance.workflow entity.
     */
    get userProcessingResults(): UserProcessingResultsRequestBuilder;
    /**
     * Provides operations to manage the versions property of the microsoft.graph.identityGovernance.workflow entity.
     */
    get versions(): VersionsRequestBuilder;
    /**
     * Delete a workflow object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/identitygovernance-deleteditemcontainer-delete?view=graph-rest-1.0|Find more info here}
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Retrieve a deleted workflow object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<Workflow>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/identitygovernance-deleteditemcontainer-get?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<WorkflowItemRequestBuilderGetQueryParameters> | undefined) : Promise<Workflow | undefined>;
    /**
     * Delete a workflow object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Retrieve a deleted workflow object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<WorkflowItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
}
/**
 * Retrieve a deleted workflow object.
 */
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
/**
 * Uri template for the request builder.
 */
export const WorkflowItemRequestBuilderUriTemplate = "{+baseurl}/identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow%2Did}{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const WorkflowItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const WorkflowItemRequestBuilderNavigationMetadata: Record<Exclude<keyof WorkflowItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    createdBy: {
        requestsMetadata: CreatedByRequestBuilderRequestsMetadata,
        navigationMetadata: CreatedByRequestBuilderNavigationMetadata,
    },
    executionScope: {
        requestsMetadata: ExecutionScopeRequestBuilderRequestsMetadata,
        navigationMetadata: ExecutionScopeRequestBuilderNavigationMetadata,
    },
    lastModifiedBy: {
        requestsMetadata: LastModifiedByRequestBuilderRequestsMetadata,
        navigationMetadata: LastModifiedByRequestBuilderNavigationMetadata,
    },
    microsoftGraphIdentityGovernanceActivate: {
        requestsMetadata: MicrosoftGraphIdentityGovernanceActivateRequestBuilderRequestsMetadata,
    },
    microsoftGraphIdentityGovernanceCreateNewVersion: {
        requestsMetadata: MicrosoftGraphIdentityGovernanceCreateNewVersionRequestBuilderRequestsMetadata,
    },
    microsoftGraphIdentityGovernanceRestore: {
        requestsMetadata: MicrosoftGraphIdentityGovernanceRestoreRequestBuilderRequestsMetadata,
    },
    runs: {
        requestsMetadata: RunsRequestBuilderRequestsMetadata,
        navigationMetadata: RunsRequestBuilderNavigationMetadata,
    },
    taskReports: {
        requestsMetadata: TaskReportsRequestBuilderRequestsMetadata,
        navigationMetadata: TaskReportsRequestBuilderNavigationMetadata,
    },
    tasks: {
        requestsMetadata: TasksRequestBuilderRequestsMetadata,
        navigationMetadata: TasksRequestBuilderNavigationMetadata,
    },
    userProcessingResults: {
        requestsMetadata: UserProcessingResultsRequestBuilderRequestsMetadata,
        navigationMetadata: UserProcessingResultsRequestBuilderNavigationMetadata,
    },
    versions: {
        requestsMetadata: VersionsRequestBuilderRequestsMetadata,
        navigationMetadata: VersionsRequestBuilderNavigationMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const WorkflowItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: WorkflowItemRequestBuilderUriTemplate,
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: WorkflowItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createWorkflowFromDiscriminatorValue,
        queryParametersMapper: WorkflowItemRequestBuilderGetQueryParametersMapper,
    },
};
/* tslint:enable */
/* eslint-enable */
