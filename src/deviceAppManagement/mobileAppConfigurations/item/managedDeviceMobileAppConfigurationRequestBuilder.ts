import {ManagedDeviceMobileAppConfiguration} from '../../../models/microsoft/graph/managedDeviceMobileAppConfiguration';
import {AssignRequestBuilder} from './assign/assignRequestBuilder';
import {AssignmentsRequestBuilder} from './assignments/assignmentsRequestBuilder';
import {ManagedDeviceMobileAppConfigurationAssignmentRequestBuilder} from './assignments/item/managedDeviceMobileAppConfigurationAssignmentRequestBuilder';
import {DeviceStatusesRequestBuilder} from './deviceStatuses/deviceStatusesRequestBuilder';
import {ManagedDeviceMobileAppConfigurationDeviceStatusRequestBuilder} from './deviceStatuses/item/managedDeviceMobileAppConfigurationDeviceStatusRequestBuilder';
import {DeviceStatusSummaryRequestBuilder} from './deviceStatusSummary/deviceStatusSummaryRequestBuilder';
import {ManagedDeviceMobileAppConfigurationUserStatusRequestBuilder} from './userStatuses/item/managedDeviceMobileAppConfigurationUserStatusRequestBuilder';
import {UserStatusesRequestBuilder} from './userStatuses/userStatusesRequestBuilder';
import {UserStatusSummaryRequestBuilder} from './userStatusSummary/userStatusSummaryRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}  */
export class ManagedDeviceMobileAppConfigurationRequestBuilder {
    public get assign(): AssignRequestBuilder {
        return new AssignRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get assignments(): AssignmentsRequestBuilder {
        return new AssignmentsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get deviceStatuses(): DeviceStatusesRequestBuilder {
        return new DeviceStatusesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get deviceStatusSummary(): DeviceStatusSummaryRequestBuilder {
        return new DeviceStatusSummaryRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request  */
    private readonly pathParameters: Map<string, unknown>;
    /** The request adapter to use to execute the requests.  */
    private readonly requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder  */
    private readonly urlTemplate: string;
    public get userStatuses(): UserStatusesRequestBuilder {
        return new UserStatusesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get userStatusSummary(): UserStatusSummaryRequestBuilder {
        return new UserStatusSummaryRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.deviceAppManagement.mobileAppConfigurations.item.assignments.item collection
     * @param id Unique identifier of the item
     * @returns a managedDeviceMobileAppConfigurationAssignmentRequestBuilder
     */
    public assignmentsById(id: string) : ManagedDeviceMobileAppConfigurationAssignmentRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        id && urlTplParams.set("managedDeviceMobileAppConfigurationAssignment_id", id);
        return new ManagedDeviceMobileAppConfigurationAssignmentRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new ManagedDeviceMobileAppConfigurationRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Map<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration_id}{?select,expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * The Managed Device Mobile Application Configurations.
     * @param h Request headers
     * @param o Request options
     * @returns a RequestInformation
     */
    public createDeleteRequestInformation(h?: object | undefined, o?: RequestOption[] | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.DELETE;
        h && requestInfo.setHeadersFromRawObject(h);
        o && requestInfo.addRequestOptions(...o);
        return requestInfo;
    };
    /**
     * The Managed Device Mobile Application Configurations.
     * @param h Request headers
     * @param o Request options
     * @param q Request query parameters
     * @returns a RequestInformation
     */
    public createGetRequestInformation(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: object | undefined, o?: RequestOption[] | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        h && requestInfo.setHeadersFromRawObject(h);
        q && requestInfo.setQueryStringParametersFromRawObject(q);
        o && requestInfo.addRequestOptions(...o);
        return requestInfo;
    };
    /**
     * The Managed Device Mobile Application Configurations.
     * @param body 
     * @param h Request headers
     * @param o Request options
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: ManagedDeviceMobileAppConfiguration | undefined, h?: object | undefined, o?: RequestOption[] | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.PATCH;
        h && requestInfo.setHeadersFromRawObject(h);
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        o && requestInfo.addRequestOptions(...o);
        return requestInfo;
    };
    /**
     * The Managed Device Mobile Application Configurations.
     * @param h Request headers
     * @param o Request options
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(h?: object | undefined, o?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.createDeleteRequestInformation(
            h, o
        );
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.deviceAppManagement.mobileAppConfigurations.item.deviceStatuses.item collection
     * @param id Unique identifier of the item
     * @returns a managedDeviceMobileAppConfigurationDeviceStatusRequestBuilder
     */
    public deviceStatusesById(id: string) : ManagedDeviceMobileAppConfigurationDeviceStatusRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        id && urlTplParams.set("managedDeviceMobileAppConfigurationDeviceStatus_id", id);
        return new ManagedDeviceMobileAppConfigurationDeviceStatusRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * The Managed Device Mobile Application Configurations.
     * @param h Request headers
     * @param o Request options
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of ManagedDeviceMobileAppConfiguration
     */
    public get(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: object | undefined, o?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<ManagedDeviceMobileAppConfiguration | undefined> {
        const requestInfo = this.createGetRequestInformation(
            q, h, o
        );
        return this.requestAdapter?.sendAsync<ManagedDeviceMobileAppConfiguration>(requestInfo, ManagedDeviceMobileAppConfiguration, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * The Managed Device Mobile Application Configurations.
     * @param body 
     * @param h Request headers
     * @param o Request options
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: ManagedDeviceMobileAppConfiguration | undefined, h?: object | undefined, o?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, h, o
        );
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.deviceAppManagement.mobileAppConfigurations.item.userStatuses.item collection
     * @param id Unique identifier of the item
     * @returns a managedDeviceMobileAppConfigurationUserStatusRequestBuilder
     */
    public userStatusesById(id: string) : ManagedDeviceMobileAppConfigurationUserStatusRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        id && urlTplParams.set("managedDeviceMobileAppConfigurationUserStatus_id", id);
        return new ManagedDeviceMobileAppConfigurationUserStatusRequestBuilder(urlTplParams, this.requestAdapter);
    };
}
