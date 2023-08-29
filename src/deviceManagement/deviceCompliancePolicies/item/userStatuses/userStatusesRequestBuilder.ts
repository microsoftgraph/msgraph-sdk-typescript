import {DeviceComplianceUserStatusCollectionResponse} from '../../../../models/';
import {createDeviceComplianceUserStatusCollectionResponseFromDiscriminatorValue} from '../../../../models/createDeviceComplianceUserStatusCollectionResponseFromDiscriminatorValue';
import {createDeviceComplianceUserStatusFromDiscriminatorValue} from '../../../../models/createDeviceComplianceUserStatusFromDiscriminatorValue';
import {deserializeIntoDeviceComplianceUserStatus} from '../../../../models/deserializeIntoDeviceComplianceUserStatus';
import type {DeviceComplianceUserStatus} from '../../../../models/deviceComplianceUserStatus';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../models/oDataErrors/serializeODataError';
import {serializeDeviceComplianceUserStatus} from '../../../../models/serializeDeviceComplianceUserStatus';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {DeviceComplianceUserStatusItemRequestBuilder} from './item/deviceComplianceUserStatusItemRequestBuilder';
import {UserStatusesRequestBuilderGetRequestConfiguration} from './userStatusesRequestBuilderGetRequestConfiguration';
import {UserStatusesRequestBuilderPostRequestConfiguration} from './userStatusesRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the userStatuses property of the microsoft.graph.deviceCompliancePolicy entity.
 */
export class UserStatusesRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the userStatuses property of the microsoft.graph.deviceCompliancePolicy entity.
     * @param deviceComplianceUserStatusId The unique identifier of deviceComplianceUserStatus
     * @returns a DeviceComplianceUserStatusItemRequestBuilder
     */
    public byDeviceComplianceUserStatusId(deviceComplianceUserStatusId: string) : DeviceComplianceUserStatusItemRequestBuilder {
        if(!deviceComplianceUserStatusId) throw new Error("deviceComplianceUserStatusId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["deviceComplianceUserStatus%2Did"] = deviceComplianceUserStatusId
        return new DeviceComplianceUserStatusItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new UserStatusesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy%2Did}/userStatuses{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * List properties and relationships of the deviceComplianceUserStatus objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DeviceComplianceUserStatusCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/intune-deviceconfig-devicecomplianceuserstatus-list?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: UserStatusesRequestBuilderGetRequestConfiguration | undefined) : Promise<DeviceComplianceUserStatusCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DeviceComplianceUserStatusCollectionResponse>(requestInfo, createDeviceComplianceUserStatusCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create a new deviceComplianceUserStatus object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DeviceComplianceUserStatus
     * @see {@link https://learn.microsoft.com/graph/api/intune-deviceconfig-devicecomplianceuserstatus-create?view=graph-rest-1.0|Find more info here}
     */
    public post(body: DeviceComplianceUserStatus, requestConfiguration?: UserStatusesRequestBuilderPostRequestConfiguration | undefined) : Promise<DeviceComplianceUserStatus | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DeviceComplianceUserStatus>(requestInfo, createDeviceComplianceUserStatusFromDiscriminatorValue, errorMapping);
    };
    /**
     * List properties and relationships of the deviceComplianceUserStatus objects.
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
     * Create a new deviceComplianceUserStatus object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: DeviceComplianceUserStatus, requestConfiguration?: UserStatusesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeDeviceComplianceUserStatus);
        return requestInfo;
    };
}
