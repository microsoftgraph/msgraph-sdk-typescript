import {DeviceConfigurationAssignmentCollectionResponse} from '../../../../models/';
import {createDeviceConfigurationAssignmentCollectionResponseFromDiscriminatorValue} from '../../../../models/createDeviceConfigurationAssignmentCollectionResponseFromDiscriminatorValue';
import {createDeviceConfigurationAssignmentFromDiscriminatorValue} from '../../../../models/createDeviceConfigurationAssignmentFromDiscriminatorValue';
import {deserializeIntoDeviceConfigurationAssignment} from '../../../../models/deserializeIntoDeviceConfigurationAssignment';
import {DeviceConfigurationAssignment} from '../../../../models/deviceConfigurationAssignment';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../models/oDataErrors/serializeODataError';
import {serializeDeviceConfigurationAssignment} from '../../../../models/serializeDeviceConfigurationAssignment';
import {AssignmentsRequestBuilderGetRequestConfiguration} from './assignmentsRequestBuilderGetRequestConfiguration';
import {AssignmentsRequestBuilderPostRequestConfiguration} from './assignmentsRequestBuilderPostRequestConfiguration';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {DeviceConfigurationAssignmentItemRequestBuilder} from './item/deviceConfigurationAssignmentItemRequestBuilder';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the assignments property of the microsoft.graph.deviceConfiguration entity.
 */
export class AssignmentsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the assignments property of the microsoft.graph.deviceConfiguration entity.
     * @param deviceConfigurationAssignmentId Unique identifier of the item
     * @returns a DeviceConfigurationAssignmentItemRequestBuilder
     */
    public byDeviceConfigurationAssignmentId(deviceConfigurationAssignmentId: string) : DeviceConfigurationAssignmentItemRequestBuilder {
        if(!deviceConfigurationAssignmentId) throw new Error("deviceConfigurationAssignmentId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["deviceConfigurationAssignment%2Did"] = deviceConfigurationAssignmentId
        return new DeviceConfigurationAssignmentItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new AssignmentsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceManagement/deviceConfigurations/{deviceConfiguration%2Did}/assignments{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * The list of assignments for the device configuration profile.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DeviceConfigurationAssignmentCollectionResponse
     */
    public get(requestConfiguration?: AssignmentsRequestBuilderGetRequestConfiguration | undefined) : Promise<DeviceConfigurationAssignmentCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DeviceConfigurationAssignmentCollectionResponse>(requestInfo, createDeviceConfigurationAssignmentCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to assignments for deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DeviceConfigurationAssignment
     */
    public post(body: DeviceConfigurationAssignment | undefined, requestConfiguration?: AssignmentsRequestBuilderPostRequestConfiguration | undefined) : Promise<DeviceConfigurationAssignment | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DeviceConfigurationAssignment>(requestInfo, createDeviceConfigurationAssignmentFromDiscriminatorValue, errorMapping);
    };
    /**
     * The list of assignments for the device configuration profile.
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
     * Create new navigation property to assignments for deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: DeviceConfigurationAssignment | undefined, requestConfiguration?: AssignmentsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeDeviceConfigurationAssignment);
        return requestInfo;
    };
}
