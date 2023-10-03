import { type ManagedAppStatusCollectionResponse } from '../../models/';
import { createManagedAppStatusFromDiscriminatorValue, deserializeIntoManagedAppStatus, serializeManagedAppStatus, type ManagedAppStatus } from '../../models/managedAppStatus';
import { createManagedAppStatusCollectionResponseFromDiscriminatorValue } from '../../models/managedAppStatusCollectionResponse';
import { type ODataError } from '../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../models/oDataErrors/oDataError';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { ManagedAppStatusItemRequestBuilder } from './item/managedAppStatusItemRequestBuilder';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface ManagedAppStatusesRequestBuilderGetQueryParameters {
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
export interface ManagedAppStatusesRequestBuilderGetRequestConfiguration {
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
    queryParameters?: ManagedAppStatusesRequestBuilderGetQueryParameters;
}
export interface ManagedAppStatusesRequestBuilderPostRequestConfiguration {
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
 * Provides operations to manage the managedAppStatuses property of the microsoft.graph.deviceAppManagement entity.
 */
export class ManagedAppStatusesRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the managedAppStatuses property of the microsoft.graph.deviceAppManagement entity.
     * @param managedAppStatusId The unique identifier of managedAppStatus
     * @returns a ManagedAppStatusItemRequestBuilder
     */
    public byManagedAppStatusId(managedAppStatusId: string) : ManagedAppStatusItemRequestBuilder {
        if(!managedAppStatusId) throw new Error("managedAppStatusId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["managedAppStatus%2Did"] = managedAppStatusId
        return new ManagedAppStatusItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new ManagedAppStatusesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceAppManagement/managedAppStatuses{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * List properties and relationships of the managedAppStatusRaw objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ManagedAppStatusCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/intune-mam-managedappstatusraw-list?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: ManagedAppStatusesRequestBuilderGetRequestConfiguration | undefined) : Promise<ManagedAppStatusCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ManagedAppStatusCollectionResponse>(requestInfo, createManagedAppStatusCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to managedAppStatuses for deviceAppManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ManagedAppStatus
     */
    public post(body: ManagedAppStatus, requestConfiguration?: ManagedAppStatusesRequestBuilderPostRequestConfiguration | undefined) : Promise<ManagedAppStatus | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ManagedAppStatus>(requestInfo, createManagedAppStatusFromDiscriminatorValue, errorMapping);
    };
    /**
     * List properties and relationships of the managedAppStatusRaw objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ManagedAppStatusesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to managedAppStatuses for deviceAppManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: ManagedAppStatus, requestConfiguration?: ManagedAppStatusesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeManagedAppStatus);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a managedAppStatusesRequestBuilder
     */
    public withUrl(rawUrl: string) : ManagedAppStatusesRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new ManagedAppStatusesRequestBuilder(rawUrl, this.requestAdapter);
    };
}
