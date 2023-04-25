import {DeviceComplianceDeviceStatus, DeviceComplianceDeviceStatusCollectionResponse} from '../../../../models/';
import {createDeviceComplianceDeviceStatusCollectionResponseFromDiscriminatorValue} from '../../../../models/createDeviceComplianceDeviceStatusCollectionResponseFromDiscriminatorValue';
import {createDeviceComplianceDeviceStatusFromDiscriminatorValue} from '../../../../models/createDeviceComplianceDeviceStatusFromDiscriminatorValue';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {DeviceStatusesRequestBuilderGetRequestConfiguration} from './deviceStatusesRequestBuilderGetRequestConfiguration';
import {DeviceStatusesRequestBuilderPostRequestConfiguration} from './deviceStatusesRequestBuilderPostRequestConfiguration';
import {DeviceComplianceDeviceStatusItemRequestBuilder} from './item/deviceComplianceDeviceStatusItemRequestBuilder';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the deviceStatuses property of the microsoft.graph.deviceCompliancePolicy entity.
 */
export class DeviceStatusesRequestBuilder extends BaseRequestBuilder {
    /** Provides operations to count the resources in the collection. */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the deviceStatuses property of the microsoft.graph.deviceCompliancePolicy entity.
     * @param deviceComplianceDeviceStatusId Unique identifier of the item
     * @returns a DeviceComplianceDeviceStatusItemRequestBuilder
     */
    public byDeviceComplianceDeviceStatusId(deviceComplianceDeviceStatusId: string) : DeviceComplianceDeviceStatusItemRequestBuilder {
        if(!deviceComplianceDeviceStatusId) throw new Error("deviceComplianceDeviceStatusId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["deviceComplianceDeviceStatus%2Did"] = deviceComplianceDeviceStatusId
        return new DeviceComplianceDeviceStatusItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new DeviceStatusesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy%2Did}/deviceStatuses{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * List of DeviceComplianceDeviceStatus.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of DeviceComplianceDeviceStatusCollectionResponse
     */
    public get(requestConfiguration?: DeviceStatusesRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<DeviceComplianceDeviceStatusCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<DeviceComplianceDeviceStatusCollectionResponse>(requestInfo, createDeviceComplianceDeviceStatusCollectionResponseFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Create new navigation property to deviceStatuses for deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of DeviceComplianceDeviceStatus
     */
    public post(body: DeviceComplianceDeviceStatus | undefined, requestConfiguration?: DeviceStatusesRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<DeviceComplianceDeviceStatus | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<DeviceComplianceDeviceStatus>(requestInfo, createDeviceComplianceDeviceStatusFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * List of DeviceComplianceDeviceStatus.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: DeviceStatusesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to deviceStatuses for deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: DeviceComplianceDeviceStatus | undefined, requestConfiguration?: DeviceStatusesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
