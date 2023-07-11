import {createDeviceConfigurationDeviceStateSummaryFromDiscriminatorValue} from '../../models/createDeviceConfigurationDeviceStateSummaryFromDiscriminatorValue';
import {deserializeIntoDeviceConfigurationDeviceStateSummary} from '../../models/deserializeIntoDeviceConfigurationDeviceStateSummary';
import {DeviceConfigurationDeviceStateSummary} from '../../models/deviceConfigurationDeviceStateSummary';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../models/oDataErrors/serializeODataError';
import {serializeDeviceConfigurationDeviceStateSummary} from '../../models/serializeDeviceConfigurationDeviceStateSummary';
import {DeviceConfigurationDeviceStateSummariesRequestBuilderDeleteRequestConfiguration} from './deviceConfigurationDeviceStateSummariesRequestBuilderDeleteRequestConfiguration';
import {DeviceConfigurationDeviceStateSummariesRequestBuilderGetRequestConfiguration} from './deviceConfigurationDeviceStateSummariesRequestBuilderGetRequestConfiguration';
import {DeviceConfigurationDeviceStateSummariesRequestBuilderPatchRequestConfiguration} from './deviceConfigurationDeviceStateSummariesRequestBuilderPatchRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the deviceConfigurationDeviceStateSummaries property of the microsoft.graph.deviceManagement entity.
 */
export class DeviceConfigurationDeviceStateSummariesRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new DeviceConfigurationDeviceStateSummariesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceManagement/deviceConfigurationDeviceStateSummaries{?%24select,%24expand}");
    };
    /**
     * Delete navigation property deviceConfigurationDeviceStateSummaries for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: DeviceConfigurationDeviceStateSummariesRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * The device configuration device state summary for this account.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DeviceConfigurationDeviceStateSummary
     */
    public get(requestConfiguration?: DeviceConfigurationDeviceStateSummariesRequestBuilderGetRequestConfiguration | undefined) : Promise<DeviceConfigurationDeviceStateSummary | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DeviceConfigurationDeviceStateSummary>(requestInfo, createDeviceConfigurationDeviceStateSummaryFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property deviceConfigurationDeviceStateSummaries in deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DeviceConfigurationDeviceStateSummary
     */
    public patch(body: DeviceConfigurationDeviceStateSummary | undefined, requestConfiguration?: DeviceConfigurationDeviceStateSummariesRequestBuilderPatchRequestConfiguration | undefined) : Promise<DeviceConfigurationDeviceStateSummary | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DeviceConfigurationDeviceStateSummary>(requestInfo, createDeviceConfigurationDeviceStateSummaryFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property deviceConfigurationDeviceStateSummaries for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: DeviceConfigurationDeviceStateSummariesRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * The device configuration device state summary for this account.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: DeviceConfigurationDeviceStateSummariesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property deviceConfigurationDeviceStateSummaries in deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: DeviceConfigurationDeviceStateSummary | undefined, requestConfiguration?: DeviceConfigurationDeviceStateSummariesRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeDeviceConfigurationDeviceStateSummary);
        return requestInfo;
    };
}
