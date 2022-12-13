import {DeviceConfiguration} from '../../../models/';
import {createDeviceConfigurationFromDiscriminatorValue} from '../../../models/createDeviceConfigurationFromDiscriminatorValue';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {AssignRequestBuilder} from './assign/assignRequestBuilder';
import {AssignmentsRequestBuilder} from './assignments/assignmentsRequestBuilder';
import {DeviceConfigurationAssignmentItemRequestBuilder} from './assignments/item/deviceConfigurationAssignmentItemRequestBuilder';
import {DeviceConfigurationItemRequestBuilderDeleteRequestConfiguration} from './deviceConfigurationItemRequestBuilderDeleteRequestConfiguration';
import {DeviceConfigurationItemRequestBuilderGetRequestConfiguration} from './deviceConfigurationItemRequestBuilderGetRequestConfiguration';
import {DeviceConfigurationItemRequestBuilderPatchRequestConfiguration} from './deviceConfigurationItemRequestBuilderPatchRequestConfiguration';
import {DeviceSettingStateSummariesRequestBuilder} from './deviceSettingStateSummaries/deviceSettingStateSummariesRequestBuilder';
import {SettingStateDeviceSummaryItemRequestBuilder} from './deviceSettingStateSummaries/item/settingStateDeviceSummaryItemRequestBuilder';
import {DeviceStatusesRequestBuilder} from './deviceStatuses/deviceStatusesRequestBuilder';
import {DeviceConfigurationDeviceStatusItemRequestBuilder} from './deviceStatuses/item/deviceConfigurationDeviceStatusItemRequestBuilder';
import {DeviceStatusOverviewRequestBuilder} from './deviceStatusOverview/deviceStatusOverviewRequestBuilder';
import {GetOmaSettingPlainTextValueWithSecretReferenceValueIdRequestBuilder} from './getOmaSettingPlainTextValueWithSecretReferenceValueId/getOmaSettingPlainTextValueWithSecretReferenceValueIdRequestBuilder';
import {DeviceConfigurationUserStatusItemRequestBuilder} from './userStatuses/item/deviceConfigurationUserStatusItemRequestBuilder';
import {UserStatusesRequestBuilder} from './userStatuses/userStatusesRequestBuilder';
import {UserStatusOverviewRequestBuilder} from './userStatusOverview/userStatusOverviewRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the deviceConfigurations property of the microsoft.graph.deviceManagement entity.
 */
export class DeviceConfigurationItemRequestBuilder {
    /** Provides operations to call the assign method. */
    public get assign(): AssignRequestBuilder {
        return new AssignRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the assignments property of the microsoft.graph.deviceConfiguration entity. */
    public get assignments(): AssignmentsRequestBuilder {
        return new AssignmentsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the deviceSettingStateSummaries property of the microsoft.graph.deviceConfiguration entity. */
    public get deviceSettingStateSummaries(): DeviceSettingStateSummariesRequestBuilder {
        return new DeviceSettingStateSummariesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the deviceStatuses property of the microsoft.graph.deviceConfiguration entity. */
    public get deviceStatuses(): DeviceStatusesRequestBuilder {
        return new DeviceStatusesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the deviceStatusOverview property of the microsoft.graph.deviceConfiguration entity. */
    public get deviceStatusOverview(): DeviceStatusOverviewRequestBuilder {
        return new DeviceStatusOverviewRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder */
    private urlTemplate: string;
    /** Provides operations to manage the userStatuses property of the microsoft.graph.deviceConfiguration entity. */
    public get userStatuses(): UserStatusesRequestBuilder {
        return new UserStatusesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the userStatusOverview property of the microsoft.graph.deviceConfiguration entity. */
    public get userStatusOverview(): UserStatusOverviewRequestBuilder {
        return new UserStatusOverviewRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the assignments property of the microsoft.graph.deviceConfiguration entity.
     * @param id Unique identifier of the item
     * @returns a DeviceConfigurationAssignmentItemRequestBuilder
     */
    public assignmentsById(id: string) : DeviceConfigurationAssignmentItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["deviceConfigurationAssignment%2Did"] = id
        return new DeviceConfigurationAssignmentItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new DeviceConfigurationItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/deviceManagement/deviceConfigurations/{deviceConfiguration%2Did}{?%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Delete navigation property deviceConfigurations for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createDeleteRequestInformation(requestConfiguration?: DeviceConfigurationItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * The device configurations.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: DeviceConfigurationItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property deviceConfigurations in deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: DeviceConfiguration | undefined, requestConfiguration?: DeviceConfigurationItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
     * Delete navigation property deviceConfigurations for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(requestConfiguration?: DeviceConfigurationItemRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.createDeleteRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Provides operations to manage the deviceSettingStateSummaries property of the microsoft.graph.deviceConfiguration entity.
     * @param id Unique identifier of the item
     * @returns a SettingStateDeviceSummaryItemRequestBuilder
     */
    public deviceSettingStateSummariesById(id: string) : SettingStateDeviceSummaryItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["settingStateDeviceSummary%2Did"] = id
        return new SettingStateDeviceSummaryItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the deviceStatuses property of the microsoft.graph.deviceConfiguration entity.
     * @param id Unique identifier of the item
     * @returns a DeviceConfigurationDeviceStatusItemRequestBuilder
     */
    public deviceStatusesById(id: string) : DeviceConfigurationDeviceStatusItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["deviceConfigurationDeviceStatus%2Did"] = id
        return new DeviceConfigurationDeviceStatusItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * The device configurations.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of DeviceConfiguration
     */
    public get(requestConfiguration?: DeviceConfigurationItemRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<DeviceConfiguration | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<DeviceConfiguration>(requestInfo, createDeviceConfigurationFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Provides operations to call the getOmaSettingPlainTextValue method.
     * @param secretReferenceValueId Usage: secretReferenceValueId='{secretReferenceValueId}'
     * @returns a getOmaSettingPlainTextValueWithSecretReferenceValueIdRequestBuilder
     */
    public getOmaSettingPlainTextValueWithSecretReferenceValueId(secretReferenceValueId: string | undefined) : GetOmaSettingPlainTextValueWithSecretReferenceValueIdRequestBuilder {
        if(!secretReferenceValueId) throw new Error("secretReferenceValueId cannot be undefined");
        return new GetOmaSettingPlainTextValueWithSecretReferenceValueIdRequestBuilder(this.pathParameters, this.requestAdapter, secretReferenceValueId);
    };
    /**
     * Update the navigation property deviceConfigurations in deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of DeviceConfiguration
     */
    public patch(body: DeviceConfiguration | undefined, requestConfiguration?: DeviceConfigurationItemRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<DeviceConfiguration | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<DeviceConfiguration>(requestInfo, createDeviceConfigurationFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Provides operations to manage the userStatuses property of the microsoft.graph.deviceConfiguration entity.
     * @param id Unique identifier of the item
     * @returns a DeviceConfigurationUserStatusItemRequestBuilder
     */
    public userStatusesById(id: string) : DeviceConfigurationUserStatusItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["deviceConfigurationUserStatus%2Did"] = id
        return new DeviceConfigurationUserStatusItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
}
