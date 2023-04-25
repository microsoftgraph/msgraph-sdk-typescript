import {IosManagedAppProtection} from '../../../models/';
import {createIosManagedAppProtectionFromDiscriminatorValue} from '../../../models/createIosManagedAppProtectionFromDiscriminatorValue';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {AppsRequestBuilder} from './apps/appsRequestBuilder';
import {DeploymentSummaryRequestBuilder} from './deploymentSummary/deploymentSummaryRequestBuilder';
import {IosManagedAppProtectionItemRequestBuilderDeleteRequestConfiguration} from './iosManagedAppProtectionItemRequestBuilderDeleteRequestConfiguration';
import {IosManagedAppProtectionItemRequestBuilderGetRequestConfiguration} from './iosManagedAppProtectionItemRequestBuilderGetRequestConfiguration';
import {IosManagedAppProtectionItemRequestBuilderPatchRequestConfiguration} from './iosManagedAppProtectionItemRequestBuilderPatchRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the iosManagedAppProtections property of the microsoft.graph.deviceAppManagement entity.
 */
export class IosManagedAppProtectionItemRequestBuilder extends BaseRequestBuilder {
    /** Provides operations to manage the apps property of the microsoft.graph.iosManagedAppProtection entity. */
    public get apps(): AppsRequestBuilder {
        return new AppsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the deploymentSummary property of the microsoft.graph.iosManagedAppProtection entity. */
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
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(requestConfiguration?: IosManagedAppProtectionItemRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.toDeleteRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * iOS managed app policies.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of IosManagedAppProtection
     */
    public get(requestConfiguration?: IosManagedAppProtectionItemRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<IosManagedAppProtection | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<IosManagedAppProtection>(requestInfo, createIosManagedAppProtectionFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Update the navigation property iosManagedAppProtections in deviceAppManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of IosManagedAppProtection
     */
    public patch(body: IosManagedAppProtection | undefined, requestConfiguration?: IosManagedAppProtectionItemRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<IosManagedAppProtection | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<IosManagedAppProtection>(requestInfo, createIosManagedAppProtectionFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        return requestInfo;
    };
}
