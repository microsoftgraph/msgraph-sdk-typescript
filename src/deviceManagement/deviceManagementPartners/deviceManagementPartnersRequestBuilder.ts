import {DeviceManagementPartner, DeviceManagementPartnerCollectionResponse} from '../../models/';
import {createDeviceManagementPartnerCollectionResponseFromDiscriminatorValue} from '../../models/createDeviceManagementPartnerCollectionResponseFromDiscriminatorValue';
import {createDeviceManagementPartnerFromDiscriminatorValue} from '../../models/createDeviceManagementPartnerFromDiscriminatorValue';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {DeviceManagementPartnersRequestBuilderGetRequestConfiguration} from './deviceManagementPartnersRequestBuilderGetRequestConfiguration';
import {DeviceManagementPartnersRequestBuilderPostRequestConfiguration} from './deviceManagementPartnersRequestBuilderPostRequestConfiguration';
import {DeviceManagementPartnerItemRequestBuilder} from './item/deviceManagementPartnerItemRequestBuilder';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the deviceManagementPartners property of the microsoft.graph.deviceManagement entity.
 */
export class DeviceManagementPartnersRequestBuilder extends BaseRequestBuilder {
    /** Provides operations to count the resources in the collection. */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the deviceManagementPartners property of the microsoft.graph.deviceManagement entity.
     * @param deviceManagementPartnerId Unique identifier of the item
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
     * The list of Device Management Partners configured by the tenant.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of DeviceManagementPartnerCollectionResponse
     */
    public get(requestConfiguration?: DeviceManagementPartnersRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<DeviceManagementPartnerCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<DeviceManagementPartnerCollectionResponse>(requestInfo, createDeviceManagementPartnerCollectionResponseFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Create new navigation property to deviceManagementPartners for deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of DeviceManagementPartner
     */
    public post(body: DeviceManagementPartner | undefined, requestConfiguration?: DeviceManagementPartnersRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<DeviceManagementPartner | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<DeviceManagementPartner>(requestInfo, createDeviceManagementPartnerFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * The list of Device Management Partners configured by the tenant.
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
     * Create new navigation property to deviceManagementPartners for deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: DeviceManagementPartner | undefined, requestConfiguration?: DeviceManagementPartnersRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        return requestInfo;
    };
}
