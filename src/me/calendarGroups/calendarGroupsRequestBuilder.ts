import { type CalendarGroupCollectionResponse } from '../../models/';
import { createCalendarGroupFromDiscriminatorValue, deserializeIntoCalendarGroup, serializeCalendarGroup, type CalendarGroup } from '../../models/calendarGroup';
import { createCalendarGroupCollectionResponseFromDiscriminatorValue } from '../../models/calendarGroupCollectionResponse';
import { type ODataError } from '../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../models/oDataErrors/oDataError';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { CalendarGroupItemRequestBuilder } from './item/calendarGroupItemRequestBuilder';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface CalendarGroupsRequestBuilderGetQueryParameters {
    /**
     * Include count of items
     */
    count?: boolean;
    /**
     * Filter items by property values
     */
    filter?: string;
    /**
     * Order items by property values
     */
    orderby?: string[];
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
export interface CalendarGroupsRequestBuilderGetRequestConfiguration {
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
    queryParameters?: CalendarGroupsRequestBuilderGetQueryParameters;
}
export interface CalendarGroupsRequestBuilderPostRequestConfiguration {
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
 * Provides operations to manage the calendarGroups property of the microsoft.graph.user entity.
 */
export class CalendarGroupsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the calendarGroups property of the microsoft.graph.user entity.
     * @param calendarGroupId The unique identifier of calendarGroup
     * @returns a CalendarGroupItemRequestBuilder
     */
    public byCalendarGroupId(calendarGroupId: string) : CalendarGroupItemRequestBuilder {
        if(!calendarGroupId) throw new Error("calendarGroupId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["calendarGroup%2Did"] = calendarGroupId
        return new CalendarGroupItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new CalendarGroupsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/me/calendarGroups{?%24top,%24skip,%24filter,%24count,%24orderby,%24select}");
    };
    /**
     * Get the user's calendar groups.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of CalendarGroupCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/user-list-calendargroups?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: CalendarGroupsRequestBuilderGetRequestConfiguration | undefined) : Promise<CalendarGroupCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<CalendarGroupCollectionResponse>(requestInfo, createCalendarGroupCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Use this API to create a new CalendarGroup.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of CalendarGroup
     * @see {@link https://learn.microsoft.com/graph/api/user-post-calendargroups?view=graph-rest-1.0|Find more info here}
     */
    public post(body: CalendarGroup, requestConfiguration?: CalendarGroupsRequestBuilderPostRequestConfiguration | undefined) : Promise<CalendarGroup | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<CalendarGroup>(requestInfo, createCalendarGroupFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get the user's calendar groups.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: CalendarGroupsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Use this API to create a new CalendarGroup.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: CalendarGroup, requestConfiguration?: CalendarGroupsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeCalendarGroup);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a calendarGroupsRequestBuilder
     */
    public withUrl(rawUrl: string) : CalendarGroupsRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new CalendarGroupsRequestBuilder(rawUrl, this.requestAdapter);
    };
}
