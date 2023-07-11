import {createDeviceManagementPartnerFromDiscriminatorValue} from '../../../models/createDeviceManagementPartnerFromDiscriminatorValue';
import {deserializeIntoDeviceManagementPartner} from '../../../models/deserializeIntoDeviceManagementPartner';
import {DeviceManagementPartner} from '../../../models/deviceManagementPartner';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../models/oDataErrors/serializeODataError';
import {serializeDeviceManagementPartner} from '../../../models/serializeDeviceManagementPartner';
import {DeviceManagementPartnerItemRequestBuilderDeleteRequestConfiguration} from './deviceManagementPartnerItemRequestBuilderDeleteRequestConfiguration';
import {DeviceManagementPartnerItemRequestBuilderGetRequestConfiguration} from './deviceManagementPartnerItemRequestBuilderGetRequestConfiguration';
import {DeviceManagementPartnerItemRequestBuilderPatchRequestConfiguration} from './deviceManagementPartnerItemRequestBuilderPatchRequestConfiguration';
import {TerminateRequestBuilder} from './terminate/terminateRequestBuilder';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the deviceManagementPartners property of the microsoft.graph.deviceManagement entity.
 */
export class DeviceManagementPartnerItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to call the terminate method.
     */
    public get terminate(): TerminateRequestBuilder {
        return new TerminateRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new DeviceManagementPartnerItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceManagement/deviceManagementPartners/{deviceManagementPartner%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete navigation property deviceManagementPartners for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: DeviceManagementPartnerItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * The list of Device Management Partners configured by the tenant.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DeviceManagementPartner
     */
    public get(requestConfiguration?: DeviceManagementPartnerItemRequestBuilderGetRequestConfiguration | undefined) : Promise<DeviceManagementPartner | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DeviceManagementPartner>(requestInfo, createDeviceManagementPartnerFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property deviceManagementPartners in deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DeviceManagementPartner
     */
    public patch(body: DeviceManagementPartner | undefined, requestConfiguration?: DeviceManagementPartnerItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<DeviceManagementPartner | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DeviceManagementPartner>(requestInfo, createDeviceManagementPartnerFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property deviceManagementPartners for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: DeviceManagementPartnerItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * The list of Device Management Partners configured by the tenant.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: DeviceManagementPartnerItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property deviceManagementPartners in deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: DeviceManagementPartner | undefined, requestConfiguration?: DeviceManagementPartnerItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeDeviceManagementPartner);
        return requestInfo;
    };
}
