import {createDeviceConfigurationUserOverviewFromDiscriminatorValue} from '../../../../models/createDeviceConfigurationUserOverviewFromDiscriminatorValue';
import {deserializeIntoDeviceConfigurationUserOverview} from '../../../../models/deserializeIntoDeviceConfigurationUserOverview';
import type {DeviceConfigurationUserOverview} from '../../../../models/deviceConfigurationUserOverview';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../models/oDataErrors/serializeODataError';
import {serializeDeviceConfigurationUserOverview} from '../../../../models/serializeDeviceConfigurationUserOverview';
import {UserStatusOverviewRequestBuilderDeleteRequestConfiguration} from './userStatusOverviewRequestBuilderDeleteRequestConfiguration';
import {UserStatusOverviewRequestBuilderGetRequestConfiguration} from './userStatusOverviewRequestBuilderGetRequestConfiguration';
import {UserStatusOverviewRequestBuilderPatchRequestConfiguration} from './userStatusOverviewRequestBuilderPatchRequestConfiguration';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the userStatusOverview property of the microsoft.graph.deviceConfiguration entity.
 */
export class UserStatusOverviewRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new UserStatusOverviewRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceManagement/deviceConfigurations/{deviceConfiguration%2Did}/userStatusOverview{?%24select,%24expand}");
    };
    /**
     * Delete navigation property userStatusOverview for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: UserStatusOverviewRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Read properties and relationships of the deviceConfigurationUserOverview object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DeviceConfigurationUserOverview
     * @see {@link https://learn.microsoft.com/graph/api/intune-deviceconfig-deviceconfigurationuseroverview-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: UserStatusOverviewRequestBuilderGetRequestConfiguration | undefined) : Promise<DeviceConfigurationUserOverview | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DeviceConfigurationUserOverview>(requestInfo, createDeviceConfigurationUserOverviewFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the properties of a deviceConfigurationUserOverview object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DeviceConfigurationUserOverview
     * @see {@link https://learn.microsoft.com/graph/api/intune-deviceconfig-deviceconfigurationuseroverview-update?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: DeviceConfigurationUserOverview, requestConfiguration?: UserStatusOverviewRequestBuilderPatchRequestConfiguration | undefined) : Promise<DeviceConfigurationUserOverview | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DeviceConfigurationUserOverview>(requestInfo, createDeviceConfigurationUserOverviewFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property userStatusOverview for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: UserStatusOverviewRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Read properties and relationships of the deviceConfigurationUserOverview object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: UserStatusOverviewRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the properties of a deviceConfigurationUserOverview object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: DeviceConfigurationUserOverview, requestConfiguration?: UserStatusOverviewRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeDeviceConfigurationUserOverview);
        return requestInfo;
    };
}
