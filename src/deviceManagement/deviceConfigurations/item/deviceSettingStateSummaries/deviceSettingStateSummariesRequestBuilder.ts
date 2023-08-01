import {SettingStateDeviceSummaryCollectionResponse} from '../../../../models/';
import {createSettingStateDeviceSummaryCollectionResponseFromDiscriminatorValue} from '../../../../models/createSettingStateDeviceSummaryCollectionResponseFromDiscriminatorValue';
import {createSettingStateDeviceSummaryFromDiscriminatorValue} from '../../../../models/createSettingStateDeviceSummaryFromDiscriminatorValue';
import {deserializeIntoSettingStateDeviceSummary} from '../../../../models/deserializeIntoSettingStateDeviceSummary';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../models/oDataErrors/serializeODataError';
import {serializeSettingStateDeviceSummary} from '../../../../models/serializeSettingStateDeviceSummary';
import type {SettingStateDeviceSummary} from '../../../../models/settingStateDeviceSummary';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {DeviceSettingStateSummariesRequestBuilderGetRequestConfiguration} from './deviceSettingStateSummariesRequestBuilderGetRequestConfiguration';
import {DeviceSettingStateSummariesRequestBuilderPostRequestConfiguration} from './deviceSettingStateSummariesRequestBuilderPostRequestConfiguration';
import {SettingStateDeviceSummaryItemRequestBuilder} from './item/settingStateDeviceSummaryItemRequestBuilder';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, getPathParameters} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the deviceSettingStateSummaries property of the microsoft.graph.deviceConfiguration entity.
 */
export class DeviceSettingStateSummariesRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the deviceSettingStateSummaries property of the microsoft.graph.deviceConfiguration entity.
     * @param settingStateDeviceSummaryId Unique identifier of the item
     * @returns a SettingStateDeviceSummaryItemRequestBuilder
     */
    public bySettingStateDeviceSummaryId(settingStateDeviceSummaryId: string) : SettingStateDeviceSummaryItemRequestBuilder {
        if(!settingStateDeviceSummaryId) throw new Error("settingStateDeviceSummaryId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["settingStateDeviceSummary%2Did"] = settingStateDeviceSummaryId
        return new SettingStateDeviceSummaryItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new DeviceSettingStateSummariesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceManagement/deviceConfigurations/{deviceConfiguration%2Did}/deviceSettingStateSummaries{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * List properties and relationships of the settingStateDeviceSummary objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of SettingStateDeviceSummaryCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/intune-deviceconfig-settingstatedevicesummary-list?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: DeviceSettingStateSummariesRequestBuilderGetRequestConfiguration | undefined) : Promise<SettingStateDeviceSummaryCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<SettingStateDeviceSummaryCollectionResponse>(requestInfo, createSettingStateDeviceSummaryCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create a new settingStateDeviceSummary object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of SettingStateDeviceSummary
     * @see {@link https://learn.microsoft.com/graph/api/intune-deviceconfig-settingstatedevicesummary-create?view=graph-rest-1.0|Find more info here}
     */
    public post(body: SettingStateDeviceSummary | undefined, requestConfiguration?: DeviceSettingStateSummariesRequestBuilderPostRequestConfiguration | undefined) : Promise<SettingStateDeviceSummary | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<SettingStateDeviceSummary>(requestInfo, createSettingStateDeviceSummaryFromDiscriminatorValue, errorMapping);
    };
    /**
     * List properties and relationships of the settingStateDeviceSummary objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: DeviceSettingStateSummariesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new settingStateDeviceSummary object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: SettingStateDeviceSummary | undefined, requestConfiguration?: DeviceSettingStateSummariesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeSettingStateDeviceSummary);
        return requestInfo;
    };
}
