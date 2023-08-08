import {DeviceLogCollectionResponseCollectionResponse} from '../../../../../models/';
import {createDeviceLogCollectionResponseCollectionResponseFromDiscriminatorValue} from '../../../../../models/createDeviceLogCollectionResponseCollectionResponseFromDiscriminatorValue';
import {createDeviceLogCollectionResponseFromDiscriminatorValue} from '../../../../../models/createDeviceLogCollectionResponseFromDiscriminatorValue';
import {deserializeIntoDeviceLogCollectionResponse} from '../../../../../models/deserializeIntoDeviceLogCollectionResponse';
import type {DeviceLogCollectionResponse} from '../../../../../models/deviceLogCollectionResponse';
import {ODataError} from '../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../models/oDataErrors/serializeODataError';
import {serializeDeviceLogCollectionResponse} from '../../../../../models/serializeDeviceLogCollectionResponse';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {DeviceLogCollectionResponseItemRequestBuilder} from './item/deviceLogCollectionResponseItemRequestBuilder';
import {LogCollectionRequestsRequestBuilderGetRequestConfiguration} from './logCollectionRequestsRequestBuilderGetRequestConfiguration';
import {LogCollectionRequestsRequestBuilderPostRequestConfiguration} from './logCollectionRequestsRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the logCollectionRequests property of the microsoft.graph.managedDevice entity.
 */
export class LogCollectionRequestsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the logCollectionRequests property of the microsoft.graph.managedDevice entity.
     * @param deviceLogCollectionResponseId Unique identifier of the item
     * @returns a DeviceLogCollectionResponseItemRequestBuilder
     */
    public byDeviceLogCollectionResponseId(deviceLogCollectionResponseId: string) : DeviceLogCollectionResponseItemRequestBuilder {
        if(!deviceLogCollectionResponseId) throw new Error("deviceLogCollectionResponseId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["deviceLogCollectionResponse%2Did"] = deviceLogCollectionResponseId
        return new DeviceLogCollectionResponseItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new LogCollectionRequestsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/users/{user%2Did}/managedDevices/{managedDevice%2Did}/logCollectionRequests{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * List of log collection requests
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DeviceLogCollectionResponseCollectionResponse
     */
    public get(requestConfiguration?: LogCollectionRequestsRequestBuilderGetRequestConfiguration | undefined) : Promise<DeviceLogCollectionResponseCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DeviceLogCollectionResponseCollectionResponse>(requestInfo, createDeviceLogCollectionResponseCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to logCollectionRequests for users
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DeviceLogCollectionResponse
     */
    public post(body: DeviceLogCollectionResponse, requestConfiguration?: LogCollectionRequestsRequestBuilderPostRequestConfiguration | undefined) : Promise<DeviceLogCollectionResponse | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DeviceLogCollectionResponse>(requestInfo, createDeviceLogCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * List of log collection requests
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: LogCollectionRequestsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to logCollectionRequests for users
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: DeviceLogCollectionResponse, requestConfiguration?: LogCollectionRequestsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeDeviceLogCollectionResponse);
        return requestInfo;
    };
}
