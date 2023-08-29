import {DeviceAndAppManagementRoleAssignmentCollectionResponse} from '../../models/';
import {createDeviceAndAppManagementRoleAssignmentCollectionResponseFromDiscriminatorValue} from '../../models/createDeviceAndAppManagementRoleAssignmentCollectionResponseFromDiscriminatorValue';
import {createDeviceAndAppManagementRoleAssignmentFromDiscriminatorValue} from '../../models/createDeviceAndAppManagementRoleAssignmentFromDiscriminatorValue';
import {deserializeIntoDeviceAndAppManagementRoleAssignment} from '../../models/deserializeIntoDeviceAndAppManagementRoleAssignment';
import type {DeviceAndAppManagementRoleAssignment} from '../../models/deviceAndAppManagementRoleAssignment';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../models/oDataErrors/serializeODataError';
import {serializeDeviceAndAppManagementRoleAssignment} from '../../models/serializeDeviceAndAppManagementRoleAssignment';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {DeviceAndAppManagementRoleAssignmentItemRequestBuilder} from './item/deviceAndAppManagementRoleAssignmentItemRequestBuilder';
import {RoleAssignmentsRequestBuilderGetRequestConfiguration} from './roleAssignmentsRequestBuilderGetRequestConfiguration';
import {RoleAssignmentsRequestBuilderPostRequestConfiguration} from './roleAssignmentsRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the roleAssignments property of the microsoft.graph.deviceManagement entity.
 */
export class RoleAssignmentsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the roleAssignments property of the microsoft.graph.deviceManagement entity.
     * @param deviceAndAppManagementRoleAssignmentId The unique identifier of deviceAndAppManagementRoleAssignment
     * @returns a DeviceAndAppManagementRoleAssignmentItemRequestBuilder
     */
    public byDeviceAndAppManagementRoleAssignmentId(deviceAndAppManagementRoleAssignmentId: string) : DeviceAndAppManagementRoleAssignmentItemRequestBuilder {
        if(!deviceAndAppManagementRoleAssignmentId) throw new Error("deviceAndAppManagementRoleAssignmentId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["deviceAndAppManagementRoleAssignment%2Did"] = deviceAndAppManagementRoleAssignmentId
        return new DeviceAndAppManagementRoleAssignmentItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new RoleAssignmentsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceManagement/roleAssignments{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * List properties and relationships of the deviceAndAppManagementRoleAssignment objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DeviceAndAppManagementRoleAssignmentCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/intune-rbac-deviceandappmanagementroleassignment-list?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: RoleAssignmentsRequestBuilderGetRequestConfiguration | undefined) : Promise<DeviceAndAppManagementRoleAssignmentCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DeviceAndAppManagementRoleAssignmentCollectionResponse>(requestInfo, createDeviceAndAppManagementRoleAssignmentCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create a new deviceAndAppManagementRoleAssignment object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DeviceAndAppManagementRoleAssignment
     * @see {@link https://learn.microsoft.com/graph/api/intune-rbac-deviceandappmanagementroleassignment-create?view=graph-rest-1.0|Find more info here}
     */
    public post(body: DeviceAndAppManagementRoleAssignment, requestConfiguration?: RoleAssignmentsRequestBuilderPostRequestConfiguration | undefined) : Promise<DeviceAndAppManagementRoleAssignment | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DeviceAndAppManagementRoleAssignment>(requestInfo, createDeviceAndAppManagementRoleAssignmentFromDiscriminatorValue, errorMapping);
    };
    /**
     * List properties and relationships of the deviceAndAppManagementRoleAssignment objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: RoleAssignmentsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new deviceAndAppManagementRoleAssignment object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: DeviceAndAppManagementRoleAssignment, requestConfiguration?: RoleAssignmentsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeDeviceAndAppManagementRoleAssignment);
        return requestInfo;
    };
}
