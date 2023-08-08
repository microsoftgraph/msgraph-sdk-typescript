import {createDeviceCompliancePolicySettingStateSummaryFromDiscriminatorValue} from '../../../models/createDeviceCompliancePolicySettingStateSummaryFromDiscriminatorValue';
import {deserializeIntoDeviceCompliancePolicySettingStateSummary} from '../../../models/deserializeIntoDeviceCompliancePolicySettingStateSummary';
import type {DeviceCompliancePolicySettingStateSummary} from '../../../models/deviceCompliancePolicySettingStateSummary';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../models/oDataErrors/serializeODataError';
import {serializeDeviceCompliancePolicySettingStateSummary} from '../../../models/serializeDeviceCompliancePolicySettingStateSummary';
import {DeviceCompliancePolicySettingStateSummaryItemRequestBuilderDeleteRequestConfiguration} from './deviceCompliancePolicySettingStateSummaryItemRequestBuilderDeleteRequestConfiguration';
import {DeviceCompliancePolicySettingStateSummaryItemRequestBuilderGetRequestConfiguration} from './deviceCompliancePolicySettingStateSummaryItemRequestBuilderGetRequestConfiguration';
import {DeviceCompliancePolicySettingStateSummaryItemRequestBuilderPatchRequestConfiguration} from './deviceCompliancePolicySettingStateSummaryItemRequestBuilderPatchRequestConfiguration';
import {DeviceComplianceSettingStatesRequestBuilder} from './deviceComplianceSettingStates/deviceComplianceSettingStatesRequestBuilder';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the deviceCompliancePolicySettingStateSummaries property of the microsoft.graph.deviceManagement entity.
 */
export class DeviceCompliancePolicySettingStateSummaryItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the deviceComplianceSettingStates property of the microsoft.graph.deviceCompliancePolicySettingStateSummary entity.
     */
    public get deviceComplianceSettingStates(): DeviceComplianceSettingStatesRequestBuilder {
        return new DeviceComplianceSettingStatesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new DeviceCompliancePolicySettingStateSummaryItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceManagement/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary%2Did}{?%24select,%24expand}");
    };
    /**
     * Deletes a deviceCompliancePolicySettingStateSummary.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/intune-deviceconfig-devicecompliancepolicysettingstatesummary-delete?view=graph-rest-1.0|Find more info here}
     */
    public delete(requestConfiguration?: DeviceCompliancePolicySettingStateSummaryItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Read properties and relationships of the deviceCompliancePolicySettingStateSummary object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DeviceCompliancePolicySettingStateSummary
     * @see {@link https://learn.microsoft.com/graph/api/intune-deviceconfig-devicecompliancepolicysettingstatesummary-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: DeviceCompliancePolicySettingStateSummaryItemRequestBuilderGetRequestConfiguration | undefined) : Promise<DeviceCompliancePolicySettingStateSummary | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DeviceCompliancePolicySettingStateSummary>(requestInfo, createDeviceCompliancePolicySettingStateSummaryFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the properties of a deviceCompliancePolicySettingStateSummary object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DeviceCompliancePolicySettingStateSummary
     * @see {@link https://learn.microsoft.com/graph/api/intune-deviceconfig-devicecompliancepolicysettingstatesummary-update?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: DeviceCompliancePolicySettingStateSummary, requestConfiguration?: DeviceCompliancePolicySettingStateSummaryItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<DeviceCompliancePolicySettingStateSummary | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DeviceCompliancePolicySettingStateSummary>(requestInfo, createDeviceCompliancePolicySettingStateSummaryFromDiscriminatorValue, errorMapping);
    };
    /**
     * Deletes a deviceCompliancePolicySettingStateSummary.
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
     * Read properties and relationships of the deviceCompliancePolicySettingStateSummary object.
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
     * Update the properties of a deviceCompliancePolicySettingStateSummary object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: DeviceCompliancePolicySettingStateSummary, requestConfiguration?: DeviceCompliancePolicySettingStateSummaryItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeDeviceCompliancePolicySettingStateSummary);
        return requestInfo;
    };
}
