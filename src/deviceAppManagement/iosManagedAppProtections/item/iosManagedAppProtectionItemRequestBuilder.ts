import {createIosManagedAppProtectionFromDiscriminatorValue} from '../../../models/createIosManagedAppProtectionFromDiscriminatorValue';
import {deserializeIntoIosManagedAppProtection} from '../../../models/deserializeIntoIosManagedAppProtection';
import {IosManagedAppProtection} from '../../../models/iosManagedAppProtection';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../models/oDataErrors/serializeODataError';
import {serializeIosManagedAppProtection} from '../../../models/serializeIosManagedAppProtection';
import {AppsRequestBuilder} from './apps/appsRequestBuilder';
import {AssignmentsRequestBuilder} from './assignments/assignmentsRequestBuilder';
import {DeploymentSummaryRequestBuilder} from './deploymentSummary/deploymentSummaryRequestBuilder';
import {IosManagedAppProtectionItemRequestBuilderDeleteRequestConfiguration} from './iosManagedAppProtectionItemRequestBuilderDeleteRequestConfiguration';
import {IosManagedAppProtectionItemRequestBuilderGetRequestConfiguration} from './iosManagedAppProtectionItemRequestBuilderGetRequestConfiguration';
import {IosManagedAppProtectionItemRequestBuilderPatchRequestConfiguration} from './iosManagedAppProtectionItemRequestBuilderPatchRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the iosManagedAppProtections property of the microsoft.graph.deviceAppManagement entity.
 */
export class IosManagedAppProtectionItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the apps property of the microsoft.graph.iosManagedAppProtection entity.
     */
    public get apps(): AppsRequestBuilder {
        return new AppsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the assignments property of the microsoft.graph.targetedManagedAppProtection entity.
     */
    public get assignments(): AssignmentsRequestBuilder {
        return new AssignmentsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the deploymentSummary property of the microsoft.graph.iosManagedAppProtection entity.
     */
    public get deploymentSummary(): DeploymentSummaryRequestBuilder {
        return new DeploymentSummaryRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new IosManagedAppProtectionItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete navigation property iosManagedAppProtections for deviceAppManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: IosManagedAppProtectionItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * iOS managed app policies.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of IosManagedAppProtection
     */
    public get(requestConfiguration?: IosManagedAppProtectionItemRequestBuilderGetRequestConfiguration | undefined) : Promise<IosManagedAppProtection | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<IosManagedAppProtection>(requestInfo, createIosManagedAppProtectionFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property iosManagedAppProtections in deviceAppManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of IosManagedAppProtection
     */
    public patch(body: IosManagedAppProtection | undefined, requestConfiguration?: IosManagedAppProtectionItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<IosManagedAppProtection | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<IosManagedAppProtection>(requestInfo, createIosManagedAppProtectionFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property iosManagedAppProtections for deviceAppManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: IosManagedAppProtectionItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * iOS managed app policies.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: IosManagedAppProtectionItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property iosManagedAppProtections in deviceAppManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: IosManagedAppProtection | undefined, requestConfiguration?: IosManagedAppProtectionItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeIosManagedAppProtection);
        return requestInfo;
    };
}
