import { type DeviceManagementTroubleshootingEventCollectionResponse } from '../../models/';
import { createDeviceManagementTroubleshootingEventFromDiscriminatorValue, deserializeIntoDeviceManagementTroubleshootingEvent, serializeDeviceManagementTroubleshootingEvent, type DeviceManagementTroubleshootingEvent } from '../../models/deviceManagementTroubleshootingEvent';
import { createDeviceManagementTroubleshootingEventCollectionResponseFromDiscriminatorValue } from '../../models/deviceManagementTroubleshootingEventCollectionResponse';
import { type ODataError } from '../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../models/oDataErrors/oDataError';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { DeviceManagementTroubleshootingEventItemRequestBuilder } from './item/deviceManagementTroubleshootingEventItemRequestBuilder';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface TroubleshootingEventsRequestBuilderGetQueryParameters {
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
export interface TroubleshootingEventsRequestBuilderGetRequestConfiguration {
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
    queryParameters?: TroubleshootingEventsRequestBuilderGetQueryParameters;
}
export interface TroubleshootingEventsRequestBuilderPostRequestConfiguration {
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
 * Provides operations to manage the troubleshootingEvents property of the microsoft.graph.deviceManagement entity.
 */
export class TroubleshootingEventsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the troubleshootingEvents property of the microsoft.graph.deviceManagement entity.
     * @param deviceManagementTroubleshootingEventId The unique identifier of deviceManagementTroubleshootingEvent
     * @returns a DeviceManagementTroubleshootingEventItemRequestBuilder
     */
    public byDeviceManagementTroubleshootingEventId(deviceManagementTroubleshootingEventId: string) : DeviceManagementTroubleshootingEventItemRequestBuilder {
        if(!deviceManagementTroubleshootingEventId) throw new Error("deviceManagementTroubleshootingEventId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["deviceManagementTroubleshootingEvent%2Did"] = deviceManagementTroubleshootingEventId
        return new DeviceManagementTroubleshootingEventItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new TroubleshootingEventsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceManagement/troubleshootingEvents{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * The list of troubleshooting events for the tenant.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DeviceManagementTroubleshootingEventCollectionResponse
     */
    public get(requestConfiguration?: TroubleshootingEventsRequestBuilderGetRequestConfiguration | undefined) : Promise<DeviceManagementTroubleshootingEventCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DeviceManagementTroubleshootingEventCollectionResponse>(requestInfo, createDeviceManagementTroubleshootingEventCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to troubleshootingEvents for deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DeviceManagementTroubleshootingEvent
     */
    public post(body: DeviceManagementTroubleshootingEvent, requestConfiguration?: TroubleshootingEventsRequestBuilderPostRequestConfiguration | undefined) : Promise<DeviceManagementTroubleshootingEvent | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DeviceManagementTroubleshootingEvent>(requestInfo, createDeviceManagementTroubleshootingEventFromDiscriminatorValue, errorMapping);
    };
    /**
     * The list of troubleshooting events for the tenant.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: TroubleshootingEventsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to troubleshootingEvents for deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: DeviceManagementTroubleshootingEvent, requestConfiguration?: TroubleshootingEventsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeDeviceManagementTroubleshootingEvent);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a troubleshootingEventsRequestBuilder
     */
    public withUrl(rawUrl: string) : TroubleshootingEventsRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new TroubleshootingEventsRequestBuilder(rawUrl, this.requestAdapter);
    };
}
