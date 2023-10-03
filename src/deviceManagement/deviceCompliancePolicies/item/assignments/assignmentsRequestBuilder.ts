import { type DeviceCompliancePolicyAssignmentCollectionResponse } from '../../../../models/';
import { createDeviceCompliancePolicyAssignmentFromDiscriminatorValue, deserializeIntoDeviceCompliancePolicyAssignment, serializeDeviceCompliancePolicyAssignment, type DeviceCompliancePolicyAssignment } from '../../../../models/deviceCompliancePolicyAssignment';
import { createDeviceCompliancePolicyAssignmentCollectionResponseFromDiscriminatorValue } from '../../../../models/deviceCompliancePolicyAssignmentCollectionResponse';
import { type ODataError } from '../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../../../models/oDataErrors/oDataError';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { DeviceCompliancePolicyAssignmentItemRequestBuilder } from './item/deviceCompliancePolicyAssignmentItemRequestBuilder';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface AssignmentsRequestBuilderGetQueryParameters {
    /**
     * Include count of items
     */
    count?: boolean;
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Filter items by property values
     */
    filter?: string;
    /**
     * Order items by property values
     */
    orderby?: string[];
    /**
     * Search items by search phrases
     */
    search?: string;
    /**
     * Select properties to be returned
     */
    select?: string[];
    /**
     * Skip the first n items
     */
    skip?: number;
    /**
     * Show only the first n items
     */
    top?: number;
}
export interface AssignmentsRequestBuilderGetRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]>;
    /**
     * Request options
     */
    options?: RequestOption[];
    /**
     * Request query parameters
     */
    queryParameters?: AssignmentsRequestBuilderGetQueryParameters;
}
export interface AssignmentsRequestBuilderPostRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]>;
    /**
     * Request options
     */
    options?: RequestOption[];
}
/**
 * Provides operations to manage the assignments property of the microsoft.graph.deviceCompliancePolicy entity.
 */
export class AssignmentsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the assignments property of the microsoft.graph.deviceCompliancePolicy entity.
     * @param deviceCompliancePolicyAssignmentId The unique identifier of deviceCompliancePolicyAssignment
     * @returns a DeviceCompliancePolicyAssignmentItemRequestBuilder
     */
    public byDeviceCompliancePolicyAssignmentId(deviceCompliancePolicyAssignmentId: string) : DeviceCompliancePolicyAssignmentItemRequestBuilder {
        if(!deviceCompliancePolicyAssignmentId) throw new Error("deviceCompliancePolicyAssignmentId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["deviceCompliancePolicyAssignment%2Did"] = deviceCompliancePolicyAssignmentId
        return new DeviceCompliancePolicyAssignmentItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new AssignmentsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy%2Did}/assignments{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * List properties and relationships of the deviceCompliancePolicyAssignment objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DeviceCompliancePolicyAssignmentCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/intune-deviceconfig-devicecompliancepolicyassignment-list?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: AssignmentsRequestBuilderGetRequestConfiguration | undefined) : Promise<DeviceCompliancePolicyAssignmentCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DeviceCompliancePolicyAssignmentCollectionResponse>(requestInfo, createDeviceCompliancePolicyAssignmentCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create a new deviceCompliancePolicyAssignment object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DeviceCompliancePolicyAssignment
     * @see {@link https://learn.microsoft.com/graph/api/intune-deviceconfig-devicecompliancepolicyassignment-create?view=graph-rest-1.0|Find more info here}
     */
    public post(body: DeviceCompliancePolicyAssignment, requestConfiguration?: AssignmentsRequestBuilderPostRequestConfiguration | undefined) : Promise<DeviceCompliancePolicyAssignment | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DeviceCompliancePolicyAssignment>(requestInfo, createDeviceCompliancePolicyAssignmentFromDiscriminatorValue, errorMapping);
    };
    /**
     * List properties and relationships of the deviceCompliancePolicyAssignment objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: AssignmentsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new deviceCompliancePolicyAssignment object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: DeviceCompliancePolicyAssignment, requestConfiguration?: AssignmentsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeDeviceCompliancePolicyAssignment);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a assignmentsRequestBuilder
     */
    public withUrl(rawUrl: string) : AssignmentsRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new AssignmentsRequestBuilder(rawUrl, this.requestAdapter);
    };
}
