import {DeviceCompliancePolicyCollectionResponse} from '../../models/';
import {createDeviceCompliancePolicyCollectionResponseFromDiscriminatorValue} from '../../models/createDeviceCompliancePolicyCollectionResponseFromDiscriminatorValue';
import {createDeviceCompliancePolicyFromDiscriminatorValue} from '../../models/createDeviceCompliancePolicyFromDiscriminatorValue';
import {deserializeIntoDeviceCompliancePolicy} from '../../models/deserializeIntoDeviceCompliancePolicy';
import {DeviceCompliancePolicy} from '../../models/deviceCompliancePolicy';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../models/oDataErrors/serializeODataError';
import {serializeDeviceCompliancePolicy} from '../../models/serializeDeviceCompliancePolicy';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {DeviceCompliancePoliciesRequestBuilderGetRequestConfiguration} from './deviceCompliancePoliciesRequestBuilderGetRequestConfiguration';
import {DeviceCompliancePoliciesRequestBuilderPostRequestConfiguration} from './deviceCompliancePoliciesRequestBuilderPostRequestConfiguration';
import {DeviceCompliancePolicyItemRequestBuilder} from './item/deviceCompliancePolicyItemRequestBuilder';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the deviceCompliancePolicies property of the microsoft.graph.deviceManagement entity.
 */
export class DeviceCompliancePoliciesRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the deviceCompliancePolicies property of the microsoft.graph.deviceManagement entity.
     * @param deviceCompliancePolicyId Unique identifier of the item
     * @returns a DeviceCompliancePolicyItemRequestBuilder
     */
    public byDeviceCompliancePolicyId(deviceCompliancePolicyId: string) : DeviceCompliancePolicyItemRequestBuilder {
        if(!deviceCompliancePolicyId) throw new Error("deviceCompliancePolicyId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["deviceCompliancePolicy%2Did"] = deviceCompliancePolicyId
        return new DeviceCompliancePolicyItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new DeviceCompliancePoliciesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceManagement/deviceCompliancePolicies{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * List properties and relationships of the windowsPhone81CompliancePolicy objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DeviceCompliancePolicyCollectionResponse
     * @see {@link https://docs.microsoft.com/graph/api/intune-deviceconfig-windowsphone81compliancepolicy-list?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: DeviceCompliancePoliciesRequestBuilderGetRequestConfiguration | undefined) : Promise<DeviceCompliancePolicyCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DeviceCompliancePolicyCollectionResponse>(requestInfo, createDeviceCompliancePolicyCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create a new windows10CompliancePolicy object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DeviceCompliancePolicy
     * @see {@link https://docs.microsoft.com/graph/api/intune-deviceconfig-windows10compliancepolicy-create?view=graph-rest-1.0|Find more info here}
     */
    public post(body: DeviceCompliancePolicy | undefined, requestConfiguration?: DeviceCompliancePoliciesRequestBuilderPostRequestConfiguration | undefined) : Promise<DeviceCompliancePolicy | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DeviceCompliancePolicy>(requestInfo, createDeviceCompliancePolicyFromDiscriminatorValue, errorMapping);
    };
    /**
     * List properties and relationships of the windowsPhone81CompliancePolicy objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: DeviceCompliancePoliciesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new windows10CompliancePolicy object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: DeviceCompliancePolicy | undefined, requestConfiguration?: DeviceCompliancePoliciesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeDeviceCompliancePolicy);
        return requestInfo;
    };
}
