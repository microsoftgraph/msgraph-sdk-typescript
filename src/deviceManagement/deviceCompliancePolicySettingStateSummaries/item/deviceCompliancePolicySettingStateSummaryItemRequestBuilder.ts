import {DeviceCompliancePolicySettingStateSummary} from '../../../models/';
import {createDeviceCompliancePolicySettingStateSummaryFromDiscriminatorValue} from '../../../models/createDeviceCompliancePolicySettingStateSummaryFromDiscriminatorValue';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {DeviceCompliancePolicySettingStateSummaryItemRequestBuilderDeleteRequestConfiguration} from './deviceCompliancePolicySettingStateSummaryItemRequestBuilderDeleteRequestConfiguration';
import {DeviceCompliancePolicySettingStateSummaryItemRequestBuilderGetRequestConfiguration} from './deviceCompliancePolicySettingStateSummaryItemRequestBuilderGetRequestConfiguration';
import {DeviceCompliancePolicySettingStateSummaryItemRequestBuilderPatchRequestConfiguration} from './deviceCompliancePolicySettingStateSummaryItemRequestBuilderPatchRequestConfiguration';
import {DeviceComplianceSettingStatesRequestBuilder} from './deviceComplianceSettingStates/deviceComplianceSettingStatesRequestBuilder';
import {DeviceComplianceSettingStateItemRequestBuilder} from './deviceComplianceSettingStates/item/deviceComplianceSettingStateItemRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the deviceCompliancePolicySettingStateSummaries property of the microsoft.graph.deviceManagement entity.
 */
export class DeviceCompliancePolicySettingStateSummaryItemRequestBuilder {
    /** Provides operations to manage the deviceComplianceSettingStates property of the microsoft.graph.deviceCompliancePolicySettingStateSummary entity. */
    public get deviceComplianceSettingStates(): DeviceComplianceSettingStatesRequestBuilder {
        return new DeviceComplianceSettingStatesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder */
    private urlTemplate: string;
    /**
     * Instantiates a new DeviceCompliancePolicySettingStateSummaryItemRequestBuilder and sets the default values.
     * @param deviceCompliancePolicySettingStateSummaryId key: id of deviceCompliancePolicySettingStateSummary
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter, deviceCompliancePolicySettingStateSummaryId?: string | undefined) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/deviceManagement/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary%2Did}{?%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        urlTplParams["deviceCompliancePolicySettingStateSummary%2Did"] = deviceCompliancePolicySettingStateSummaryId
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Delete navigation property deviceCompliancePolicySettingStateSummaries for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(requestConfiguration?: DeviceCompliancePolicySettingStateSummaryItemRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
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
     * Provides operations to manage the deviceComplianceSettingStates property of the microsoft.graph.deviceCompliancePolicySettingStateSummary entity.
     * @param id Unique identifier of the item
     * @returns a DeviceComplianceSettingStateItemRequestBuilder
     */
    public deviceComplianceSettingStatesById(id: string) : DeviceComplianceSettingStateItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["deviceComplianceSettingState%2Did"] = id
        return new DeviceComplianceSettingStateItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * The summary states of compliance policy settings for this account.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of DeviceCompliancePolicySettingStateSummary
     */
    public get(requestConfiguration?: DeviceCompliancePolicySettingStateSummaryItemRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<DeviceCompliancePolicySettingStateSummary | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<DeviceCompliancePolicySettingStateSummary>(requestInfo, createDeviceCompliancePolicySettingStateSummaryFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Update the navigation property deviceCompliancePolicySettingStateSummaries in deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of DeviceCompliancePolicySettingStateSummary
     */
    public patch(body: DeviceCompliancePolicySettingStateSummary | undefined, requestConfiguration?: DeviceCompliancePolicySettingStateSummaryItemRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<DeviceCompliancePolicySettingStateSummary | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<DeviceCompliancePolicySettingStateSummary>(requestInfo, createDeviceCompliancePolicySettingStateSummaryFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Delete navigation property deviceCompliancePolicySettingStateSummaries for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: DeviceCompliancePolicySettingStateSummaryItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * The summary states of compliance policy settings for this account.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: DeviceCompliancePolicySettingStateSummaryItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property deviceCompliancePolicySettingStateSummaries in deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: DeviceCompliancePolicySettingStateSummary | undefined, requestConfiguration?: DeviceCompliancePolicySettingStateSummaryItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
