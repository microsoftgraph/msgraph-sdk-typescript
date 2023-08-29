import {DeviceCompliancePolicySettingStateSummaryCollectionResponse} from '../../models/';
import {createDeviceCompliancePolicySettingStateSummaryCollectionResponseFromDiscriminatorValue} from '../../models/createDeviceCompliancePolicySettingStateSummaryCollectionResponseFromDiscriminatorValue';
import {createDeviceCompliancePolicySettingStateSummaryFromDiscriminatorValue} from '../../models/createDeviceCompliancePolicySettingStateSummaryFromDiscriminatorValue';
import {deserializeIntoDeviceCompliancePolicySettingStateSummary} from '../../models/deserializeIntoDeviceCompliancePolicySettingStateSummary';
import type {DeviceCompliancePolicySettingStateSummary} from '../../models/deviceCompliancePolicySettingStateSummary';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../models/oDataErrors/serializeODataError';
import {serializeDeviceCompliancePolicySettingStateSummary} from '../../models/serializeDeviceCompliancePolicySettingStateSummary';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {DeviceCompliancePolicySettingStateSummariesRequestBuilderGetRequestConfiguration} from './deviceCompliancePolicySettingStateSummariesRequestBuilderGetRequestConfiguration';
import {DeviceCompliancePolicySettingStateSummariesRequestBuilderPostRequestConfiguration} from './deviceCompliancePolicySettingStateSummariesRequestBuilderPostRequestConfiguration';
import {DeviceCompliancePolicySettingStateSummaryItemRequestBuilder} from './item/deviceCompliancePolicySettingStateSummaryItemRequestBuilder';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the deviceCompliancePolicySettingStateSummaries property of the microsoft.graph.deviceManagement entity.
 */
export class DeviceCompliancePolicySettingStateSummariesRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the deviceCompliancePolicySettingStateSummaries property of the microsoft.graph.deviceManagement entity.
     * @param deviceCompliancePolicySettingStateSummaryId The unique identifier of deviceCompliancePolicySettingStateSummary
     * @returns a DeviceCompliancePolicySettingStateSummaryItemRequestBuilder
     */
    public byDeviceCompliancePolicySettingStateSummaryId(deviceCompliancePolicySettingStateSummaryId: string) : DeviceCompliancePolicySettingStateSummaryItemRequestBuilder {
        if(!deviceCompliancePolicySettingStateSummaryId) throw new Error("deviceCompliancePolicySettingStateSummaryId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["deviceCompliancePolicySettingStateSummary%2Did"] = deviceCompliancePolicySettingStateSummaryId
        return new DeviceCompliancePolicySettingStateSummaryItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new DeviceCompliancePolicySettingStateSummariesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceManagement/deviceCompliancePolicySettingStateSummaries{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * List properties and relationships of the deviceCompliancePolicySettingStateSummary objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DeviceCompliancePolicySettingStateSummaryCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/intune-deviceconfig-devicecompliancepolicysettingstatesummary-list?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: DeviceCompliancePolicySettingStateSummariesRequestBuilderGetRequestConfiguration | undefined) : Promise<DeviceCompliancePolicySettingStateSummaryCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DeviceCompliancePolicySettingStateSummaryCollectionResponse>(requestInfo, createDeviceCompliancePolicySettingStateSummaryCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create a new deviceCompliancePolicySettingStateSummary object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DeviceCompliancePolicySettingStateSummary
     * @see {@link https://learn.microsoft.com/graph/api/intune-deviceconfig-devicecompliancepolicysettingstatesummary-create?view=graph-rest-1.0|Find more info here}
     */
    public post(body: DeviceCompliancePolicySettingStateSummary, requestConfiguration?: DeviceCompliancePolicySettingStateSummariesRequestBuilderPostRequestConfiguration | undefined) : Promise<DeviceCompliancePolicySettingStateSummary | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DeviceCompliancePolicySettingStateSummary>(requestInfo, createDeviceCompliancePolicySettingStateSummaryFromDiscriminatorValue, errorMapping);
    };
    /**
     * List properties and relationships of the deviceCompliancePolicySettingStateSummary objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: DeviceCompliancePolicySettingStateSummariesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new deviceCompliancePolicySettingStateSummary object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: DeviceCompliancePolicySettingStateSummary, requestConfiguration?: DeviceCompliancePolicySettingStateSummariesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.POST;
        requestInfo.headers["Accept"] = ["application/json"];
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeDeviceCompliancePolicySettingStateSummary);
        return requestInfo;
    };
}
