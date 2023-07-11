import {createDeviceComplianceSettingStateFromDiscriminatorValue} from '../../../../../models/createDeviceComplianceSettingStateFromDiscriminatorValue';
import {deserializeIntoDeviceComplianceSettingState} from '../../../../../models/deserializeIntoDeviceComplianceSettingState';
import {DeviceComplianceSettingState} from '../../../../../models/deviceComplianceSettingState';
import {ODataError} from '../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../models/oDataErrors/serializeODataError';
import {serializeDeviceComplianceSettingState} from '../../../../../models/serializeDeviceComplianceSettingState';
import {DeviceComplianceSettingStateItemRequestBuilderDeleteRequestConfiguration} from './deviceComplianceSettingStateItemRequestBuilderDeleteRequestConfiguration';
import {DeviceComplianceSettingStateItemRequestBuilderGetRequestConfiguration} from './deviceComplianceSettingStateItemRequestBuilderGetRequestConfiguration';
import {DeviceComplianceSettingStateItemRequestBuilderPatchRequestConfiguration} from './deviceComplianceSettingStateItemRequestBuilderPatchRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the deviceComplianceSettingStates property of the microsoft.graph.deviceCompliancePolicySettingStateSummary entity.
 */
export class DeviceComplianceSettingStateItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new DeviceComplianceSettingStateItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceManagement/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary%2Did}/deviceComplianceSettingStates/{deviceComplianceSettingState%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete navigation property deviceComplianceSettingStates for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: DeviceComplianceSettingStateItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Not yet documented
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DeviceComplianceSettingState
     */
    public get(requestConfiguration?: DeviceComplianceSettingStateItemRequestBuilderGetRequestConfiguration | undefined) : Promise<DeviceComplianceSettingState | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DeviceComplianceSettingState>(requestInfo, createDeviceComplianceSettingStateFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property deviceComplianceSettingStates in deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DeviceComplianceSettingState
     */
    public patch(body: DeviceComplianceSettingState | undefined, requestConfiguration?: DeviceComplianceSettingStateItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<DeviceComplianceSettingState | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DeviceComplianceSettingState>(requestInfo, createDeviceComplianceSettingStateFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property deviceComplianceSettingStates for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: DeviceComplianceSettingStateItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Not yet documented
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: DeviceComplianceSettingStateItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property deviceComplianceSettingStates in deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: DeviceComplianceSettingState | undefined, requestConfiguration?: DeviceComplianceSettingStateItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeDeviceComplianceSettingState);
        return requestInfo;
    };
}
