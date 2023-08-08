import {createLifecycleWorkflowsContainerFromDiscriminatorValue} from '../../models/identityGovernance/createLifecycleWorkflowsContainerFromDiscriminatorValue';
import {deserializeIntoLifecycleWorkflowsContainer} from '../../models/identityGovernance/deserializeIntoLifecycleWorkflowsContainer';
import type {LifecycleWorkflowsContainer} from '../../models/identityGovernance/lifecycleWorkflowsContainer';
import {serializeLifecycleWorkflowsContainer} from '../../models/identityGovernance/serializeLifecycleWorkflowsContainer';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../models/oDataErrors/serializeODataError';
import {CustomTaskExtensionsRequestBuilder} from './customTaskExtensions/customTaskExtensionsRequestBuilder';
import {DeletedItemsRequestBuilder} from './deletedItems/deletedItemsRequestBuilder';
import {LifecycleWorkflowsRequestBuilderDeleteRequestConfiguration} from './lifecycleWorkflowsRequestBuilderDeleteRequestConfiguration';
import {LifecycleWorkflowsRequestBuilderGetRequestConfiguration} from './lifecycleWorkflowsRequestBuilderGetRequestConfiguration';
import {LifecycleWorkflowsRequestBuilderPatchRequestConfiguration} from './lifecycleWorkflowsRequestBuilderPatchRequestConfiguration';
import {SettingsRequestBuilder} from './settings/settingsRequestBuilder';
import {TaskDefinitionsRequestBuilder} from './taskDefinitions/taskDefinitionsRequestBuilder';
import {WorkflowsRequestBuilder} from './workflows/workflowsRequestBuilder';
import {WorkflowTemplatesRequestBuilder} from './workflowTemplates/workflowTemplatesRequestBuilder';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the lifecycleWorkflows property of the microsoft.graph.identityGovernance entity.
 */
export class LifecycleWorkflowsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the customTaskExtensions property of the microsoft.graph.identityGovernance.lifecycleWorkflowsContainer entity.
     */
    public get customTaskExtensions(): CustomTaskExtensionsRequestBuilder {
        return new CustomTaskExtensionsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the deletedItems property of the microsoft.graph.identityGovernance.lifecycleWorkflowsContainer entity.
     */
    public get deletedItems(): DeletedItemsRequestBuilder {
        return new DeletedItemsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the settings property of the microsoft.graph.identityGovernance.lifecycleWorkflowsContainer entity.
     */
    public get settings(): SettingsRequestBuilder {
        return new SettingsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the taskDefinitions property of the microsoft.graph.identityGovernance.lifecycleWorkflowsContainer entity.
     */
    public get taskDefinitions(): TaskDefinitionsRequestBuilder {
        return new TaskDefinitionsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the workflows property of the microsoft.graph.identityGovernance.lifecycleWorkflowsContainer entity.
     */
    public get workflows(): WorkflowsRequestBuilder {
        return new WorkflowsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the workflowTemplates property of the microsoft.graph.identityGovernance.lifecycleWorkflowsContainer entity.
     */
    public get workflowTemplates(): WorkflowTemplatesRequestBuilder {
        return new WorkflowTemplatesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new LifecycleWorkflowsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/identityGovernance/lifecycleWorkflows{?%24select,%24expand}");
    };
    /**
     * Delete navigation property lifecycleWorkflows for identityGovernance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: LifecycleWorkflowsRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Get lifecycleWorkflows from identityGovernance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of LifecycleWorkflowsContainer
     */
    public get(requestConfiguration?: LifecycleWorkflowsRequestBuilderGetRequestConfiguration | undefined) : Promise<LifecycleWorkflowsContainer | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<LifecycleWorkflowsContainer>(requestInfo, createLifecycleWorkflowsContainerFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property lifecycleWorkflows in identityGovernance
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of LifecycleWorkflowsContainer
     */
    public patch(body: LifecycleWorkflowsContainer, requestConfiguration?: LifecycleWorkflowsRequestBuilderPatchRequestConfiguration | undefined) : Promise<LifecycleWorkflowsContainer | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<LifecycleWorkflowsContainer>(requestInfo, createLifecycleWorkflowsContainerFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property lifecycleWorkflows for identityGovernance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: LifecycleWorkflowsRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Get lifecycleWorkflows from identityGovernance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: LifecycleWorkflowsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property lifecycleWorkflows in identityGovernance
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: LifecycleWorkflowsContainer, requestConfiguration?: LifecycleWorkflowsRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeLifecycleWorkflowsContainer);
        return requestInfo;
    };
}
