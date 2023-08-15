import {createManagedDeviceMobileAppConfigurationDeviceStatusFromDiscriminatorValue} from '../../../../../models/createManagedDeviceMobileAppConfigurationDeviceStatusFromDiscriminatorValue';
import {deserializeIntoManagedDeviceMobileAppConfigurationDeviceStatus} from '../../../../../models/deserializeIntoManagedDeviceMobileAppConfigurationDeviceStatus';
import type {ManagedDeviceMobileAppConfigurationDeviceStatus} from '../../../../../models/managedDeviceMobileAppConfigurationDeviceStatus';
import {ODataError} from '../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../models/oDataErrors/serializeODataError';
import {serializeManagedDeviceMobileAppConfigurationDeviceStatus} from '../../../../../models/serializeManagedDeviceMobileAppConfigurationDeviceStatus';
import {ManagedDeviceMobileAppConfigurationDeviceStatusItemRequestBuilderDeleteRequestConfiguration} from './managedDeviceMobileAppConfigurationDeviceStatusItemRequestBuilderDeleteRequestConfiguration';
import {ManagedDeviceMobileAppConfigurationDeviceStatusItemRequestBuilderGetRequestConfiguration} from './managedDeviceMobileAppConfigurationDeviceStatusItemRequestBuilderGetRequestConfiguration';
import {ManagedDeviceMobileAppConfigurationDeviceStatusItemRequestBuilderPatchRequestConfiguration} from './managedDeviceMobileAppConfigurationDeviceStatusItemRequestBuilderPatchRequestConfiguration';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the deviceStatuses property of the microsoft.graph.managedDeviceMobileAppConfiguration entity.
 */
export class ManagedDeviceMobileAppConfigurationDeviceStatusItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new ManagedDeviceMobileAppConfigurationDeviceStatusItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration%2Did}/deviceStatuses/{managedDeviceMobileAppConfigurationDeviceStatus%2Did}{?%24select,%24expand}");
    };
    /**
     * Deletes a managedDeviceMobileAppConfigurationDeviceStatus.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/intune-apps-manageddevicemobileappconfigurationdevicestatus-delete?view=graph-rest-1.0|Find more info here}
     */
    public delete(requestConfiguration?: ManagedDeviceMobileAppConfigurationDeviceStatusItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Read properties and relationships of the managedDeviceMobileAppConfigurationDeviceStatus object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ManagedDeviceMobileAppConfigurationDeviceStatus
     * @see {@link https://learn.microsoft.com/graph/api/intune-apps-manageddevicemobileappconfigurationdevicestatus-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: ManagedDeviceMobileAppConfigurationDeviceStatusItemRequestBuilderGetRequestConfiguration | undefined) : Promise<ManagedDeviceMobileAppConfigurationDeviceStatus | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ManagedDeviceMobileAppConfigurationDeviceStatus>(requestInfo, createManagedDeviceMobileAppConfigurationDeviceStatusFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the properties of a managedDeviceMobileAppConfigurationDeviceStatus object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ManagedDeviceMobileAppConfigurationDeviceStatus
     * @see {@link https://learn.microsoft.com/graph/api/intune-apps-manageddevicemobileappconfigurationdevicestatus-update?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: ManagedDeviceMobileAppConfigurationDeviceStatus, requestConfiguration?: ManagedDeviceMobileAppConfigurationDeviceStatusItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<ManagedDeviceMobileAppConfigurationDeviceStatus | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ManagedDeviceMobileAppConfigurationDeviceStatus>(requestInfo, createManagedDeviceMobileAppConfigurationDeviceStatusFromDiscriminatorValue, errorMapping);
    };
    /**
     * Deletes a managedDeviceMobileAppConfigurationDeviceStatus.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: ManagedDeviceMobileAppConfigurationDeviceStatusItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Read properties and relationships of the managedDeviceMobileAppConfigurationDeviceStatus object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ManagedDeviceMobileAppConfigurationDeviceStatusItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the properties of a managedDeviceMobileAppConfigurationDeviceStatus object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: ManagedDeviceMobileAppConfigurationDeviceStatus, requestConfiguration?: ManagedDeviceMobileAppConfigurationDeviceStatusItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeManagedDeviceMobileAppConfigurationDeviceStatus);
        return requestInfo;
    };
}
