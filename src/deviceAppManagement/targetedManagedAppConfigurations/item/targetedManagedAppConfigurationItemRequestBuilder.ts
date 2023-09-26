import { type ODataError } from '../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../../models/oDataErrors/oDataError';
import { createTargetedManagedAppConfigurationFromDiscriminatorValue, deserializeIntoTargetedManagedAppConfiguration, serializeTargetedManagedAppConfiguration, type TargetedManagedAppConfiguration } from '../../../models/targetedManagedAppConfiguration';
import { AppsRequestBuilder } from './apps/appsRequestBuilder';
import { AssignRequestBuilder } from './assign/assignRequestBuilder';
import { AssignmentsRequestBuilder } from './assignments/assignmentsRequestBuilder';
import { DeploymentSummaryRequestBuilder } from './deploymentSummary/deploymentSummaryRequestBuilder';
import { TargetAppsRequestBuilder } from './targetApps/targetAppsRequestBuilder';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface TargetedManagedAppConfigurationItemRequestBuilderDeleteRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]>;
    /**
     * Request options
     */
    options?: RequestOption[];
}
export interface TargetedManagedAppConfigurationItemRequestBuilderGetQueryParameters {
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Select properties to be returned
     */
    select?: string[];
}
export interface TargetedManagedAppConfigurationItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: TargetedManagedAppConfigurationItemRequestBuilderGetQueryParameters;
}
export interface TargetedManagedAppConfigurationItemRequestBuilderPatchRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]>;
    /**
     * Request options
     */
    options?: RequestOption[];
}
/**
 * Provides operations to manage the targetedManagedAppConfigurations property of the microsoft.graph.deviceAppManagement entity.
 */
export class TargetedManagedAppConfigurationItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the apps property of the microsoft.graph.targetedManagedAppConfiguration entity.
     */
    public get apps(): AppsRequestBuilder {
        return new AppsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the assign method.
     */
    public get assign(): AssignRequestBuilder {
        return new AssignRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the assignments property of the microsoft.graph.targetedManagedAppConfiguration entity.
     */
    public get assignments(): AssignmentsRequestBuilder {
        return new AssignmentsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the deploymentSummary property of the microsoft.graph.targetedManagedAppConfiguration entity.
     */
    public get deploymentSummary(): DeploymentSummaryRequestBuilder {
        return new DeploymentSummaryRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the targetApps method.
     */
    public get targetApps(): TargetAppsRequestBuilder {
        return new TargetAppsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new TargetedManagedAppConfigurationItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration%2Did}{?%24select,%24expand}");
    };
    /**
     * Deletes a targetedManagedAppConfiguration.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/intune-mam-targetedmanagedappconfiguration-delete?view=graph-rest-1.0|Find more info here}
     */
    public delete(requestConfiguration?: TargetedManagedAppConfigurationItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Read properties and relationships of the targetedManagedAppConfiguration object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of TargetedManagedAppConfiguration
     * @see {@link https://learn.microsoft.com/graph/api/intune-mam-targetedmanagedappconfiguration-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: TargetedManagedAppConfigurationItemRequestBuilderGetRequestConfiguration | undefined) : Promise<TargetedManagedAppConfiguration | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<TargetedManagedAppConfiguration>(requestInfo, createTargetedManagedAppConfigurationFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the properties of a targetedManagedAppConfiguration object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of TargetedManagedAppConfiguration
     * @see {@link https://learn.microsoft.com/graph/api/intune-mam-targetedmanagedappconfiguration-update?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: TargetedManagedAppConfiguration, requestConfiguration?: TargetedManagedAppConfigurationItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<TargetedManagedAppConfiguration | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<TargetedManagedAppConfiguration>(requestInfo, createTargetedManagedAppConfigurationFromDiscriminatorValue, errorMapping);
    };
    /**
     * Deletes a targetedManagedAppConfiguration.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: TargetedManagedAppConfigurationItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Read properties and relationships of the targetedManagedAppConfiguration object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: TargetedManagedAppConfigurationItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the properties of a targetedManagedAppConfiguration object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: TargetedManagedAppConfiguration, requestConfiguration?: TargetedManagedAppConfigurationItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeTargetedManagedAppConfiguration);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a TargetedManagedAppConfigurationItemRequestBuilder
     */
    public withUrl(rawUrl: string) : TargetedManagedAppConfigurationItemRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new TargetedManagedAppConfigurationItemRequestBuilder(rawUrl, this.requestAdapter);
    };
}
