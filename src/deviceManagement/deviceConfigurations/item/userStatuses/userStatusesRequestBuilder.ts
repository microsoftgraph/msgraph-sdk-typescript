import {DeviceConfigurationUserStatusCollectionResponse} from '../../../../models/';
import {createDeviceConfigurationUserStatusCollectionResponseFromDiscriminatorValue} from '../../../../models/createDeviceConfigurationUserStatusCollectionResponseFromDiscriminatorValue';
import {createDeviceConfigurationUserStatusFromDiscriminatorValue} from '../../../../models/createDeviceConfigurationUserStatusFromDiscriminatorValue';
import {deserializeIntoDeviceConfigurationUserStatus} from '../../../../models/deserializeIntoDeviceConfigurationUserStatus';
import type {DeviceConfigurationUserStatus} from '../../../../models/deviceConfigurationUserStatus';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../models/oDataErrors/serializeODataError';
import {serializeDeviceConfigurationUserStatus} from '../../../../models/serializeDeviceConfigurationUserStatus';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {DeviceConfigurationUserStatusItemRequestBuilder} from './item/deviceConfigurationUserStatusItemRequestBuilder';
import {UserStatusesRequestBuilderGetRequestConfiguration} from './userStatusesRequestBuilderGetRequestConfiguration';
import {UserStatusesRequestBuilderPostRequestConfiguration} from './userStatusesRequestBuilderPostRequestConfiguration';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the userStatuses property of the microsoft.graph.deviceConfiguration entity.
 */
export class UserStatusesRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the userStatuses property of the microsoft.graph.deviceConfiguration entity.
     * @param deviceConfigurationUserStatusId Unique identifier of the item
     * @returns a DeviceConfigurationUserStatusItemRequestBuilder
     */
    public byDeviceConfigurationUserStatusId(deviceConfigurationUserStatusId: string) : DeviceConfigurationUserStatusItemRequestBuilder {
        if(!deviceConfigurationUserStatusId) throw new Error("deviceConfigurationUserStatusId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["deviceConfigurationUserStatus%2Did"] = deviceConfigurationUserStatusId
        return new DeviceConfigurationUserStatusItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new UserStatusesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceManagement/deviceConfigurations/{deviceConfiguration%2Did}/userStatuses{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * List properties and relationships of the deviceConfigurationUserStatus objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DeviceConfigurationUserStatusCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/intune-deviceconfig-deviceconfigurationuserstatus-list?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: UserStatusesRequestBuilderGetRequestConfiguration | undefined) : Promise<DeviceConfigurationUserStatusCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DeviceConfigurationUserStatusCollectionResponse>(requestInfo, createDeviceConfigurationUserStatusCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create a new deviceConfigurationUserStatus object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DeviceConfigurationUserStatus
     * @see {@link https://learn.microsoft.com/graph/api/intune-deviceconfig-deviceconfigurationuserstatus-create?view=graph-rest-1.0|Find more info here}
     */
    public post(body: DeviceConfigurationUserStatus, requestConfiguration?: UserStatusesRequestBuilderPostRequestConfiguration | undefined) : Promise<DeviceConfigurationUserStatus | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DeviceConfigurationUserStatus>(requestInfo, createDeviceConfigurationUserStatusFromDiscriminatorValue, errorMapping);
    };
    /**
     * List properties and relationships of the deviceConfigurationUserStatus objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: UserStatusesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new deviceConfigurationUserStatus object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: DeviceConfigurationUserStatus, requestConfiguration?: UserStatusesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeDeviceConfigurationUserStatus);
        return requestInfo;
    };
}
