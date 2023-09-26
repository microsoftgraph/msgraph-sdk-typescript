import { type DeviceInstallStateCollectionResponse } from '../../../../../../models/';
import { createDeviceInstallStateFromDiscriminatorValue, deserializeIntoDeviceInstallState, serializeDeviceInstallState, type DeviceInstallState } from '../../../../../../models/deviceInstallState';
import { createDeviceInstallStateCollectionResponseFromDiscriminatorValue } from '../../../../../../models/deviceInstallStateCollectionResponse';
import { type ODataError } from '../../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../../../../../models/oDataErrors/oDataError';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { DeviceInstallStateItemRequestBuilder } from './item/deviceInstallStateItemRequestBuilder';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface DeviceStatesRequestBuilderGetQueryParameters {
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
export interface DeviceStatesRequestBuilderGetRequestConfiguration {
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
    queryParameters?: DeviceStatesRequestBuilderGetQueryParameters;
}
export interface DeviceStatesRequestBuilderPostRequestConfiguration {
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
 * Provides operations to manage the deviceStates property of the microsoft.graph.userInstallStateSummary entity.
 */
export class DeviceStatesRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the deviceStates property of the microsoft.graph.userInstallStateSummary entity.
     * @param deviceInstallStateId The unique identifier of deviceInstallState
     * @returns a DeviceInstallStateItemRequestBuilder
     */
    public byDeviceInstallStateId(deviceInstallStateId: string) : DeviceInstallStateItemRequestBuilder {
        if(!deviceInstallStateId) throw new Error("deviceInstallStateId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["deviceInstallState%2Did"] = deviceInstallStateId
        return new DeviceInstallStateItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new DeviceStatesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceAppManagement/managedEBooks/{managedEBook%2Did}/userStateSummary/{userInstallStateSummary%2Did}/deviceStates{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * The install state of the eBook.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DeviceInstallStateCollectionResponse
     */
    public get(requestConfiguration?: DeviceStatesRequestBuilderGetRequestConfiguration | undefined) : Promise<DeviceInstallStateCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DeviceInstallStateCollectionResponse>(requestInfo, createDeviceInstallStateCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to deviceStates for deviceAppManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DeviceInstallState
     */
    public post(body: DeviceInstallState, requestConfiguration?: DeviceStatesRequestBuilderPostRequestConfiguration | undefined) : Promise<DeviceInstallState | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DeviceInstallState>(requestInfo, createDeviceInstallStateFromDiscriminatorValue, errorMapping);
    };
    /**
     * The install state of the eBook.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: DeviceStatesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to deviceStates for deviceAppManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: DeviceInstallState, requestConfiguration?: DeviceStatesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeDeviceInstallState);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a deviceStatesRequestBuilder
     */
    public withUrl(rawUrl: string) : DeviceStatesRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new DeviceStatesRequestBuilder(rawUrl, this.requestAdapter);
    };
}
