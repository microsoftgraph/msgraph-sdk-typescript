import {DeviceComplianceActionItemCollectionResponse} from '../../../../../../models/';
import {createDeviceComplianceActionItemCollectionResponseFromDiscriminatorValue} from '../../../../../../models/createDeviceComplianceActionItemCollectionResponseFromDiscriminatorValue';
import {createDeviceComplianceActionItemFromDiscriminatorValue} from '../../../../../../models/createDeviceComplianceActionItemFromDiscriminatorValue';
import {deserializeIntoDeviceComplianceActionItem} from '../../../../../../models/deserializeIntoDeviceComplianceActionItem';
import type {DeviceComplianceActionItem} from '../../../../../../models/deviceComplianceActionItem';
import {ODataError} from '../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../../models/oDataErrors/serializeODataError';
import {serializeDeviceComplianceActionItem} from '../../../../../../models/serializeDeviceComplianceActionItem';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {DeviceComplianceActionItemItemRequestBuilder} from './item/deviceComplianceActionItemItemRequestBuilder';
import {ScheduledActionConfigurationsRequestBuilderGetRequestConfiguration} from './scheduledActionConfigurationsRequestBuilderGetRequestConfiguration';
import {ScheduledActionConfigurationsRequestBuilderPostRequestConfiguration} from './scheduledActionConfigurationsRequestBuilderPostRequestConfiguration';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the scheduledActionConfigurations property of the microsoft.graph.deviceComplianceScheduledActionForRule entity.
 */
export class ScheduledActionConfigurationsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the scheduledActionConfigurations property of the microsoft.graph.deviceComplianceScheduledActionForRule entity.
     * @param deviceComplianceActionItemId The unique identifier of deviceComplianceActionItem
     * @returns a DeviceComplianceActionItemItemRequestBuilder
     */
    public byDeviceComplianceActionItemId(deviceComplianceActionItemId: string) : DeviceComplianceActionItemItemRequestBuilder {
        if(!deviceComplianceActionItemId) throw new Error("deviceComplianceActionItemId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["deviceComplianceActionItem%2Did"] = deviceComplianceActionItemId
        return new DeviceComplianceActionItemItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new ScheduledActionConfigurationsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy%2Did}/scheduledActionsForRule/{deviceComplianceScheduledActionForRule%2Did}/scheduledActionConfigurations{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * List properties and relationships of the deviceComplianceActionItem objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DeviceComplianceActionItemCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/intune-deviceconfig-devicecomplianceactionitem-list?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: ScheduledActionConfigurationsRequestBuilderGetRequestConfiguration | undefined) : Promise<DeviceComplianceActionItemCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DeviceComplianceActionItemCollectionResponse>(requestInfo, createDeviceComplianceActionItemCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create a new deviceComplianceActionItem object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DeviceComplianceActionItem
     * @see {@link https://learn.microsoft.com/graph/api/intune-deviceconfig-devicecomplianceactionitem-create?view=graph-rest-1.0|Find more info here}
     */
    public post(body: DeviceComplianceActionItem, requestConfiguration?: ScheduledActionConfigurationsRequestBuilderPostRequestConfiguration | undefined) : Promise<DeviceComplianceActionItem | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DeviceComplianceActionItem>(requestInfo, createDeviceComplianceActionItemFromDiscriminatorValue, errorMapping);
    };
    /**
     * List properties and relationships of the deviceComplianceActionItem objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ScheduledActionConfigurationsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new deviceComplianceActionItem object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: DeviceComplianceActionItem, requestConfiguration?: ScheduledActionConfigurationsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeDeviceComplianceActionItem);
        return requestInfo;
    };
}
