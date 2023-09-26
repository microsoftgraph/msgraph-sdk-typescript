import { type OnlineMeetingCollectionResponse } from '../../models/';
import { type ODataError } from '../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../models/oDataErrors/oDataError';
import { createOnlineMeetingFromDiscriminatorValue, deserializeIntoOnlineMeeting, serializeOnlineMeeting, type OnlineMeeting } from '../../models/onlineMeeting';
import { createOnlineMeetingCollectionResponseFromDiscriminatorValue } from '../../models/onlineMeetingCollectionResponse';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { CreateOrGetRequestBuilder } from './createOrGet/createOrGetRequestBuilder';
import { OnlineMeetingItemRequestBuilder } from './item/onlineMeetingItemRequestBuilder';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface OnlineMeetingsRequestBuilderGetQueryParameters {
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
export interface OnlineMeetingsRequestBuilderGetRequestConfiguration {
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
    queryParameters?: OnlineMeetingsRequestBuilderGetQueryParameters;
}
export interface OnlineMeetingsRequestBuilderPostRequestConfiguration {
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
 * Provides operations to manage the onlineMeetings property of the microsoft.graph.cloudCommunications entity.
 */
export class OnlineMeetingsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the createOrGet method.
     */
    public get createOrGet(): CreateOrGetRequestBuilder {
        return new CreateOrGetRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the onlineMeetings property of the microsoft.graph.cloudCommunications entity.
     * @param onlineMeetingId The unique identifier of onlineMeeting
     * @returns a OnlineMeetingItemRequestBuilder
     */
    public byOnlineMeetingId(onlineMeetingId: string) : OnlineMeetingItemRequestBuilder {
        if(!onlineMeetingId) throw new Error("onlineMeetingId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["onlineMeeting%2Did"] = onlineMeetingId
        return new OnlineMeetingItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new OnlineMeetingsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/communications/onlineMeetings{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Retrieve the properties and relationships of an onlineMeeting object. For example, you can: Teams live event attendee report is an online meeting artifact. For details, see Online meeting artifacts and permissions.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of OnlineMeetingCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/onlinemeeting-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: OnlineMeetingsRequestBuilderGetRequestConfiguration | undefined) : Promise<OnlineMeetingCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<OnlineMeetingCollectionResponse>(requestInfo, createOnlineMeetingCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to onlineMeetings for communications
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of OnlineMeeting
     */
    public post(body: OnlineMeeting, requestConfiguration?: OnlineMeetingsRequestBuilderPostRequestConfiguration | undefined) : Promise<OnlineMeeting | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<OnlineMeeting>(requestInfo, createOnlineMeetingFromDiscriminatorValue, errorMapping);
    };
    /**
     * Retrieve the properties and relationships of an onlineMeeting object. For example, you can: Teams live event attendee report is an online meeting artifact. For details, see Online meeting artifacts and permissions.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: OnlineMeetingsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to onlineMeetings for communications
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: OnlineMeeting, requestConfiguration?: OnlineMeetingsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeOnlineMeeting);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a onlineMeetingsRequestBuilder
     */
    public withUrl(rawUrl: string) : OnlineMeetingsRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new OnlineMeetingsRequestBuilder(rawUrl, this.requestAdapter);
    };
}
