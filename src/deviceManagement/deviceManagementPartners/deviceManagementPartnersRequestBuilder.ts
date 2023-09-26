import { type DeviceManagementPartnerCollectionResponse } from '../../models/';
import { createDeviceManagementPartnerFromDiscriminatorValue, deserializeIntoDeviceManagementPartner, serializeDeviceManagementPartner, type DeviceManagementPartner } from '../../models/deviceManagementPartner';
import { createDeviceManagementPartnerCollectionResponseFromDiscriminatorValue } from '../../models/deviceManagementPartnerCollectionResponse';
import { type ODataError } from '../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../models/oDataErrors/oDataError';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { DeviceManagementPartnerItemRequestBuilder } from './item/deviceManagementPartnerItemRequestBuilder';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface DeviceManagementPartnersRequestBuilderGetQueryParameters {
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
export interface DeviceManagementPartnersRequestBuilderGetRequestConfiguration {
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
    queryParameters?: DeviceManagementPartnersRequestBuilderGetQueryParameters;
}
export interface DeviceManagementPartnersRequestBuilderPostRequestConfiguration {
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
 * Provides operations to manage the deviceManagementPartners property of the microsoft.graph.deviceManagement entity.
 */
export class DeviceManagementPartnersRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the deviceManagementPartners property of the microsoft.graph.deviceManagement entity.
     * @param deviceManagementPartnerId The unique identifier of deviceManagementPartner
     * @returns a DeviceManagementPartnerItemRequestBuilder
     */
    public byDeviceManagementPartnerId(deviceManagementPartnerId: string) : DeviceManagementPartnerItemRequestBuilder {
        if(!deviceManagementPartnerId) throw new Error("deviceManagementPartnerId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["deviceManagementPartner%2Did"] = deviceManagementPartnerId
        return new DeviceManagementPartnerItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new DeviceManagementPartnersRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceManagement/deviceManagementPartners{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * List properties and relationships of the deviceManagementPartner objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DeviceManagementPartnerCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/intune-onboarding-devicemanagementpartner-list?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: DeviceManagementPartnersRequestBuilderGetRequestConfiguration | undefined) : Promise<DeviceManagementPartnerCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DeviceManagementPartnerCollectionResponse>(requestInfo, createDeviceManagementPartnerCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create a new deviceManagementPartner object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DeviceManagementPartner
     * @see {@link https://learn.microsoft.com/graph/api/intune-onboarding-devicemanagementpartner-create?view=graph-rest-1.0|Find more info here}
     */
    public post(body: DeviceManagementPartner, requestConfiguration?: DeviceManagementPartnersRequestBuilderPostRequestConfiguration | undefined) : Promise<DeviceManagementPartner | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DeviceManagementPartner>(requestInfo, createDeviceManagementPartnerFromDiscriminatorValue, errorMapping);
    };
    /**
     * List properties and relationships of the deviceManagementPartner objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: DeviceManagementPartnersRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new deviceManagementPartner object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: DeviceManagementPartner, requestConfiguration?: DeviceManagementPartnersRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeDeviceManagementPartner);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a deviceManagementPartnersRequestBuilder
     */
    public withUrl(rawUrl: string) : DeviceManagementPartnersRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new DeviceManagementPartnersRequestBuilder(rawUrl, this.requestAdapter);
    };
}
