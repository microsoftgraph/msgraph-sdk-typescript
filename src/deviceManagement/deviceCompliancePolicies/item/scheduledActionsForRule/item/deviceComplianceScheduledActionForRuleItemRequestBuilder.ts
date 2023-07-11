import {createDeviceComplianceScheduledActionForRuleFromDiscriminatorValue} from '../../../../../models/createDeviceComplianceScheduledActionForRuleFromDiscriminatorValue';
import {deserializeIntoDeviceComplianceScheduledActionForRule} from '../../../../../models/deserializeIntoDeviceComplianceScheduledActionForRule';
import {DeviceComplianceScheduledActionForRule} from '../../../../../models/deviceComplianceScheduledActionForRule';
import {ODataError} from '../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../models/oDataErrors/serializeODataError';
import {serializeDeviceComplianceScheduledActionForRule} from '../../../../../models/serializeDeviceComplianceScheduledActionForRule';
import {DeviceComplianceScheduledActionForRuleItemRequestBuilderDeleteRequestConfiguration} from './deviceComplianceScheduledActionForRuleItemRequestBuilderDeleteRequestConfiguration';
import {DeviceComplianceScheduledActionForRuleItemRequestBuilderGetRequestConfiguration} from './deviceComplianceScheduledActionForRuleItemRequestBuilderGetRequestConfiguration';
import {DeviceComplianceScheduledActionForRuleItemRequestBuilderPatchRequestConfiguration} from './deviceComplianceScheduledActionForRuleItemRequestBuilderPatchRequestConfiguration';
import {ScheduledActionConfigurationsRequestBuilder} from './scheduledActionConfigurations/scheduledActionConfigurationsRequestBuilder';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the scheduledActionsForRule property of the microsoft.graph.deviceCompliancePolicy entity.
 */
export class DeviceComplianceScheduledActionForRuleItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the scheduledActionConfigurations property of the microsoft.graph.deviceComplianceScheduledActionForRule entity.
     */
    public get scheduledActionConfigurations(): ScheduledActionConfigurationsRequestBuilder {
        return new ScheduledActionConfigurationsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new DeviceComplianceScheduledActionForRuleItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy%2Did}/scheduledActionsForRule/{deviceComplianceScheduledActionForRule%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete navigation property scheduledActionsForRule for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: DeviceComplianceScheduledActionForRuleItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * The list of scheduled action per rule for this compliance policy. This is a required property when creating any individual per-platform compliance policies.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DeviceComplianceScheduledActionForRule
     */
    public get(requestConfiguration?: DeviceComplianceScheduledActionForRuleItemRequestBuilderGetRequestConfiguration | undefined) : Promise<DeviceComplianceScheduledActionForRule | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DeviceComplianceScheduledActionForRule>(requestInfo, createDeviceComplianceScheduledActionForRuleFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property scheduledActionsForRule in deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DeviceComplianceScheduledActionForRule
     */
    public patch(body: DeviceComplianceScheduledActionForRule | undefined, requestConfiguration?: DeviceComplianceScheduledActionForRuleItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<DeviceComplianceScheduledActionForRule | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DeviceComplianceScheduledActionForRule>(requestInfo, createDeviceComplianceScheduledActionForRuleFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property scheduledActionsForRule for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: DeviceComplianceScheduledActionForRuleItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * The list of scheduled action per rule for this compliance policy. This is a required property when creating any individual per-platform compliance policies.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: DeviceComplianceScheduledActionForRuleItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property scheduledActionsForRule in deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: DeviceComplianceScheduledActionForRule | undefined, requestConfiguration?: DeviceComplianceScheduledActionForRuleItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeDeviceComplianceScheduledActionForRule);
        return requestInfo;
    };
}
