import {createDeviceCompliancePolicyAssignmentFromDiscriminatorValue} from '../../../../../models/createDeviceCompliancePolicyAssignmentFromDiscriminatorValue';
import {deserializeIntoDeviceCompliancePolicyAssignment} from '../../../../../models/deserializeIntoDeviceCompliancePolicyAssignment';
import {DeviceCompliancePolicyAssignment} from '../../../../../models/deviceCompliancePolicyAssignment';
import {ODataError} from '../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../models/oDataErrors/serializeODataError';
import {serializeDeviceCompliancePolicyAssignment} from '../../../../../models/serializeDeviceCompliancePolicyAssignment';
import {DeviceCompliancePolicyAssignmentItemRequestBuilderDeleteRequestConfiguration} from './deviceCompliancePolicyAssignmentItemRequestBuilderDeleteRequestConfiguration';
import {DeviceCompliancePolicyAssignmentItemRequestBuilderGetRequestConfiguration} from './deviceCompliancePolicyAssignmentItemRequestBuilderGetRequestConfiguration';
import {DeviceCompliancePolicyAssignmentItemRequestBuilderPatchRequestConfiguration} from './deviceCompliancePolicyAssignmentItemRequestBuilderPatchRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the assignments property of the microsoft.graph.deviceCompliancePolicy entity.
 */
export class DeviceCompliancePolicyAssignmentItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new DeviceCompliancePolicyAssignmentItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy%2Did}/assignments/{deviceCompliancePolicyAssignment%2Did}{?%24select,%24expand}");
    };
    /**
     * Deletes a deviceCompliancePolicyAssignment.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://docs.microsoft.com/graph/api/intune-deviceconfig-devicecompliancepolicyassignment-delete?view=graph-rest-1.0|Find more info here}
     */
    public delete(requestConfiguration?: DeviceCompliancePolicyAssignmentItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Read properties and relationships of the deviceCompliancePolicyAssignment object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DeviceCompliancePolicyAssignment
     * @see {@link https://docs.microsoft.com/graph/api/intune-deviceconfig-devicecompliancepolicyassignment-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: DeviceCompliancePolicyAssignmentItemRequestBuilderGetRequestConfiguration | undefined) : Promise<DeviceCompliancePolicyAssignment | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DeviceCompliancePolicyAssignment>(requestInfo, createDeviceCompliancePolicyAssignmentFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the properties of a deviceCompliancePolicyAssignment object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DeviceCompliancePolicyAssignment
     * @see {@link https://docs.microsoft.com/graph/api/intune-deviceconfig-devicecompliancepolicyassignment-update?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: DeviceCompliancePolicyAssignment | undefined, requestConfiguration?: DeviceCompliancePolicyAssignmentItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<DeviceCompliancePolicyAssignment | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DeviceCompliancePolicyAssignment>(requestInfo, createDeviceCompliancePolicyAssignmentFromDiscriminatorValue, errorMapping);
    };
    /**
     * Deletes a deviceCompliancePolicyAssignment.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: DeviceCompliancePolicyAssignmentItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Read properties and relationships of the deviceCompliancePolicyAssignment object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: DeviceCompliancePolicyAssignmentItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the properties of a deviceCompliancePolicyAssignment object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: DeviceCompliancePolicyAssignment | undefined, requestConfiguration?: DeviceCompliancePolicyAssignmentItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeDeviceCompliancePolicyAssignment);
        return requestInfo;
    };
}
