import {ManagedDeviceMobileAppConfiguration} from '../../../models/';
import {createManagedDeviceMobileAppConfigurationFromDiscriminatorValue} from '../../../models/createManagedDeviceMobileAppConfigurationFromDiscriminatorValue';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {AssignRequestBuilder} from './assign/assignRequestBuilder';
import {AssignmentsRequestBuilder} from './assignments/assignmentsRequestBuilder';
import {ManagedDeviceMobileAppConfigurationAssignmentItemRequestBuilder} from './assignments/item/managedDeviceMobileAppConfigurationAssignmentItemRequestBuilder';
import {DeviceStatusesRequestBuilder} from './deviceStatuses/deviceStatusesRequestBuilder';
import {ManagedDeviceMobileAppConfigurationDeviceStatusItemRequestBuilder} from './deviceStatuses/item/managedDeviceMobileAppConfigurationDeviceStatusItemRequestBuilder';
import {DeviceStatusSummaryRequestBuilder} from './deviceStatusSummary/deviceStatusSummaryRequestBuilder';
import {ManagedDeviceMobileAppConfigurationItemRequestBuilderDeleteRequestConfiguration} from './managedDeviceMobileAppConfigurationItemRequestBuilderDeleteRequestConfiguration';
import {ManagedDeviceMobileAppConfigurationItemRequestBuilderGetRequestConfiguration} from './managedDeviceMobileAppConfigurationItemRequestBuilderGetRequestConfiguration';
import {ManagedDeviceMobileAppConfigurationItemRequestBuilderPatchRequestConfiguration} from './managedDeviceMobileAppConfigurationItemRequestBuilderPatchRequestConfiguration';
import {ManagedDeviceMobileAppConfigurationUserStatusItemRequestBuilder} from './userStatuses/item/managedDeviceMobileAppConfigurationUserStatusItemRequestBuilder';
import {UserStatusesRequestBuilder} from './userStatuses/userStatusesRequestBuilder';
import {UserStatusSummaryRequestBuilder} from './userStatusSummary/userStatusSummaryRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the mobileAppConfigurations property of the microsoft.graph.deviceAppManagement entity.
 */
export class ManagedDeviceMobileAppConfigurationItemRequestBuilder {
    /** Provides operations to call the assign method. */
    public get assign(): AssignRequestBuilder {
        return new AssignRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the assignments property of the microsoft.graph.managedDeviceMobileAppConfiguration entity. */
    public get assignments(): AssignmentsRequestBuilder {
        return new AssignmentsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the deviceStatuses property of the microsoft.graph.managedDeviceMobileAppConfiguration entity. */
    public get deviceStatuses(): DeviceStatusesRequestBuilder {
        return new DeviceStatusesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the deviceStatusSummary property of the microsoft.graph.managedDeviceMobileAppConfiguration entity. */
    public get deviceStatusSummary(): DeviceStatusSummaryRequestBuilder {
        return new DeviceStatusSummaryRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder */
    private urlTemplate: string;
    /** Provides operations to manage the userStatuses property of the microsoft.graph.managedDeviceMobileAppConfiguration entity. */
    public get userStatuses(): UserStatusesRequestBuilder {
        return new UserStatusesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the userStatusSummary property of the microsoft.graph.managedDeviceMobileAppConfiguration entity. */
    public get userStatusSummary(): UserStatusSummaryRequestBuilder {
        return new UserStatusSummaryRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the assignments property of the microsoft.graph.managedDeviceMobileAppConfiguration entity.
     * @param id Unique identifier of the item
     * @returns a ManagedDeviceMobileAppConfigurationAssignmentItemRequestBuilder
     */
    public assignmentsById(id: string) : ManagedDeviceMobileAppConfigurationAssignmentItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["managedDeviceMobileAppConfigurationAssignment%2Did"] = id
        return new ManagedDeviceMobileAppConfigurationAssignmentItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new ManagedDeviceMobileAppConfigurationItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration%2Did}{?%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Delete navigation property mobileAppConfigurations for deviceAppManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(requestConfiguration?: ManagedDeviceMobileAppConfigurationItemRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
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
     * Provides operations to manage the deviceStatuses property of the microsoft.graph.managedDeviceMobileAppConfiguration entity.
     * @param id Unique identifier of the item
     * @returns a ManagedDeviceMobileAppConfigurationDeviceStatusItemRequestBuilder
     */
    public deviceStatusesById(id: string) : ManagedDeviceMobileAppConfigurationDeviceStatusItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["managedDeviceMobileAppConfigurationDeviceStatus%2Did"] = id
        return new ManagedDeviceMobileAppConfigurationDeviceStatusItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * The Managed Device Mobile Application Configurations.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of ManagedDeviceMobileAppConfiguration
     */
    public get(requestConfiguration?: ManagedDeviceMobileAppConfigurationItemRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<ManagedDeviceMobileAppConfiguration | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<ManagedDeviceMobileAppConfiguration>(requestInfo, createManagedDeviceMobileAppConfigurationFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Update the navigation property mobileAppConfigurations in deviceAppManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of ManagedDeviceMobileAppConfiguration
     */
    public patch(body: ManagedDeviceMobileAppConfiguration | undefined, requestConfiguration?: ManagedDeviceMobileAppConfigurationItemRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<ManagedDeviceMobileAppConfiguration | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<ManagedDeviceMobileAppConfiguration>(requestInfo, createManagedDeviceMobileAppConfigurationFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Delete navigation property mobileAppConfigurations for deviceAppManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: ManagedDeviceMobileAppConfigurationItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * The Managed Device Mobile Application Configurations.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ManagedDeviceMobileAppConfigurationItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property mobileAppConfigurations in deviceAppManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: ManagedDeviceMobileAppConfiguration | undefined, requestConfiguration?: ManagedDeviceMobileAppConfigurationItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
    /**
     * Provides operations to manage the userStatuses property of the microsoft.graph.managedDeviceMobileAppConfiguration entity.
     * @param id Unique identifier of the item
     * @returns a ManagedDeviceMobileAppConfigurationUserStatusItemRequestBuilder
     */
    public userStatusesById(id: string) : ManagedDeviceMobileAppConfigurationUserStatusItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["managedDeviceMobileAppConfigurationUserStatus%2Did"] = id
        return new ManagedDeviceMobileAppConfigurationUserStatusItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
}
