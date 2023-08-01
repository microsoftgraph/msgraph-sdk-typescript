import {createDeviceLogCollectionResponseFromDiscriminatorValue} from '../../../../../models/createDeviceLogCollectionResponseFromDiscriminatorValue';
import {deserializeIntoDeviceLogCollectionResponse} from '../../../../../models/deserializeIntoDeviceLogCollectionResponse';
import type {DeviceLogCollectionResponse} from '../../../../../models/deviceLogCollectionResponse';
import {ODataError} from '../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../models/oDataErrors/serializeODataError';
import {serializeDeviceLogCollectionResponse} from '../../../../../models/serializeDeviceLogCollectionResponse';
import {CreateDownloadUrlRequestBuilder} from './createDownloadUrl/createDownloadUrlRequestBuilder';
import {DeviceLogCollectionResponseItemRequestBuilderDeleteRequestConfiguration} from './deviceLogCollectionResponseItemRequestBuilderDeleteRequestConfiguration';
import {DeviceLogCollectionResponseItemRequestBuilderGetRequestConfiguration} from './deviceLogCollectionResponseItemRequestBuilderGetRequestConfiguration';
import {DeviceLogCollectionResponseItemRequestBuilderPatchRequestConfiguration} from './deviceLogCollectionResponseItemRequestBuilderPatchRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the logCollectionRequests property of the microsoft.graph.managedDevice entity.
 */
export class DeviceLogCollectionResponseItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to call the createDownloadUrl method.
     */
    public get createDownloadUrl(): CreateDownloadUrlRequestBuilder {
        return new CreateDownloadUrlRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new DeviceLogCollectionResponseItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceManagement/managedDevices/{managedDevice%2Did}/logCollectionRequests/{deviceLogCollectionResponse%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete navigation property logCollectionRequests for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: DeviceLogCollectionResponseItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * List of log collection requests
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DeviceLogCollectionResponse
     */
    public get(requestConfiguration?: DeviceLogCollectionResponseItemRequestBuilderGetRequestConfiguration | undefined) : Promise<DeviceLogCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DeviceLogCollectionResponse>(requestInfo, createDeviceLogCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property logCollectionRequests in deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DeviceLogCollectionResponse
     */
    public patch(body: DeviceLogCollectionResponse | undefined, requestConfiguration?: DeviceLogCollectionResponseItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<DeviceLogCollectionResponse | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DeviceLogCollectionResponse>(requestInfo, createDeviceLogCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property logCollectionRequests for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: DeviceLogCollectionResponseItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * List of log collection requests
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: DeviceLogCollectionResponseItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property logCollectionRequests in deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: DeviceLogCollectionResponse | undefined, requestConfiguration?: DeviceLogCollectionResponseItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeDeviceLogCollectionResponse);
        return requestInfo;
    };
}
