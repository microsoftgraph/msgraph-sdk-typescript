import {createManagedAppPolicyDeploymentSummaryFromDiscriminatorValue} from '../../../../models/createManagedAppPolicyDeploymentSummaryFromDiscriminatorValue';
import {deserializeIntoManagedAppPolicyDeploymentSummary} from '../../../../models/deserializeIntoManagedAppPolicyDeploymentSummary';
import type {ManagedAppPolicyDeploymentSummary} from '../../../../models/managedAppPolicyDeploymentSummary';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../models/oDataErrors/serializeODataError';
import {serializeManagedAppPolicyDeploymentSummary} from '../../../../models/serializeManagedAppPolicyDeploymentSummary';
import {DeploymentSummaryRequestBuilderDeleteRequestConfiguration} from './deploymentSummaryRequestBuilderDeleteRequestConfiguration';
import {DeploymentSummaryRequestBuilderGetRequestConfiguration} from './deploymentSummaryRequestBuilderGetRequestConfiguration';
import {DeploymentSummaryRequestBuilderPatchRequestConfiguration} from './deploymentSummaryRequestBuilderPatchRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the deploymentSummary property of the microsoft.graph.iosManagedAppProtection entity.
 */
export class DeploymentSummaryRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new DeploymentSummaryRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection%2Did}/deploymentSummary{?%24select,%24expand}");
    };
    /**
     * Delete navigation property deploymentSummary for deviceAppManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: DeploymentSummaryRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Read properties and relationships of the managedAppPolicyDeploymentSummary object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ManagedAppPolicyDeploymentSummary
     * @see {@link https://learn.microsoft.com/graph/api/intune-mam-managedapppolicydeploymentsummary-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: DeploymentSummaryRequestBuilderGetRequestConfiguration | undefined) : Promise<ManagedAppPolicyDeploymentSummary | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ManagedAppPolicyDeploymentSummary>(requestInfo, createManagedAppPolicyDeploymentSummaryFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the properties of a managedAppPolicyDeploymentSummary object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ManagedAppPolicyDeploymentSummary
     * @see {@link https://learn.microsoft.com/graph/api/intune-mam-managedapppolicydeploymentsummary-update?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: ManagedAppPolicyDeploymentSummary, requestConfiguration?: DeploymentSummaryRequestBuilderPatchRequestConfiguration | undefined) : Promise<ManagedAppPolicyDeploymentSummary | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ManagedAppPolicyDeploymentSummary>(requestInfo, createManagedAppPolicyDeploymentSummaryFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property deploymentSummary for deviceAppManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: DeploymentSummaryRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Read properties and relationships of the managedAppPolicyDeploymentSummary object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: DeploymentSummaryRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the properties of a managedAppPolicyDeploymentSummary object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: ManagedAppPolicyDeploymentSummary, requestConfiguration?: DeploymentSummaryRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeManagedAppPolicyDeploymentSummary);
        return requestInfo;
    };
}
