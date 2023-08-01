import {DeviceComplianceScheduledActionForRuleCollectionResponse} from '../../../../models/';
import {createDeviceComplianceScheduledActionForRuleCollectionResponseFromDiscriminatorValue} from '../../../../models/createDeviceComplianceScheduledActionForRuleCollectionResponseFromDiscriminatorValue';
import {createDeviceComplianceScheduledActionForRuleFromDiscriminatorValue} from '../../../../models/createDeviceComplianceScheduledActionForRuleFromDiscriminatorValue';
import {deserializeIntoDeviceComplianceScheduledActionForRule} from '../../../../models/deserializeIntoDeviceComplianceScheduledActionForRule';
import type {DeviceComplianceScheduledActionForRule} from '../../../../models/deviceComplianceScheduledActionForRule';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../models/oDataErrors/serializeODataError';
import {serializeDeviceComplianceScheduledActionForRule} from '../../../../models/serializeDeviceComplianceScheduledActionForRule';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {DeviceComplianceScheduledActionForRuleItemRequestBuilder} from './item/deviceComplianceScheduledActionForRuleItemRequestBuilder';
import {ScheduledActionsForRuleRequestBuilderGetRequestConfiguration} from './scheduledActionsForRuleRequestBuilderGetRequestConfiguration';
import {ScheduledActionsForRuleRequestBuilderPostRequestConfiguration} from './scheduledActionsForRuleRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, getPathParameters} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the scheduledActionsForRule property of the microsoft.graph.deviceCompliancePolicy entity.
 */
export class ScheduledActionsForRuleRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the scheduledActionsForRule property of the microsoft.graph.deviceCompliancePolicy entity.
     * @param deviceComplianceScheduledActionForRuleId Unique identifier of the item
     * @returns a DeviceComplianceScheduledActionForRuleItemRequestBuilder
     */
    public byDeviceComplianceScheduledActionForRuleId(deviceComplianceScheduledActionForRuleId: string) : DeviceComplianceScheduledActionForRuleItemRequestBuilder {
        if(!deviceComplianceScheduledActionForRuleId) throw new Error("deviceComplianceScheduledActionForRuleId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["deviceComplianceScheduledActionForRule%2Did"] = deviceComplianceScheduledActionForRuleId
        return new DeviceComplianceScheduledActionForRuleItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new ScheduledActionsForRuleRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy%2Did}/scheduledActionsForRule{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * List properties and relationships of the deviceComplianceScheduledActionForRule objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DeviceComplianceScheduledActionForRuleCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/intune-deviceconfig-devicecompliancescheduledactionforrule-list?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: ScheduledActionsForRuleRequestBuilderGetRequestConfiguration | undefined) : Promise<DeviceComplianceScheduledActionForRuleCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DeviceComplianceScheduledActionForRuleCollectionResponse>(requestInfo, createDeviceComplianceScheduledActionForRuleCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create a new deviceComplianceScheduledActionForRule object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DeviceComplianceScheduledActionForRule
     * @see {@link https://learn.microsoft.com/graph/api/intune-deviceconfig-devicecompliancescheduledactionforrule-create?view=graph-rest-1.0|Find more info here}
     */
    public post(body: DeviceComplianceScheduledActionForRule | undefined, requestConfiguration?: ScheduledActionsForRuleRequestBuilderPostRequestConfiguration | undefined) : Promise<DeviceComplianceScheduledActionForRule | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DeviceComplianceScheduledActionForRule>(requestInfo, createDeviceComplianceScheduledActionForRuleFromDiscriminatorValue, errorMapping);
    };
    /**
     * List properties and relationships of the deviceComplianceScheduledActionForRule objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ScheduledActionsForRuleRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new deviceComplianceScheduledActionForRule object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: DeviceComplianceScheduledActionForRule | undefined, requestConfiguration?: ScheduledActionsForRuleRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeDeviceComplianceScheduledActionForRule);
        return requestInfo;
    };
}
