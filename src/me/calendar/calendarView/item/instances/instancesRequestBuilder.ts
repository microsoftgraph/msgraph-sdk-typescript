import {EventCollectionResponse} from '../../../../../models/';
import {createEventCollectionResponseFromDiscriminatorValue} from '../../../../../models/createEventCollectionResponseFromDiscriminatorValue';
import {ODataError} from '../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../models/oDataErrors/serializeODataError';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {DeltaRequestBuilder} from './delta/deltaRequestBuilder';
import {InstancesRequestBuilderGetRequestConfiguration} from './instancesRequestBuilderGetRequestConfiguration';
import {EventItemRequestBuilder} from './item/eventItemRequestBuilder';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the instances property of the microsoft.graph.event entity.
 */
export class InstancesRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the delta method.
     */
    public get delta(): DeltaRequestBuilder {
        return new DeltaRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the instances property of the microsoft.graph.event entity.
     * @param eventId1 The unique identifier of event
     * @returns a EventItemRequestBuilder
     */
    public byEventId1(eventId1: string) : EventItemRequestBuilder {
        if(!eventId1) throw new Error("eventId1 cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["event%2Did1"] = eventId1
        return new EventItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new InstancesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/me/calendar/calendarView/{event%2Did}/instances{?startDateTime*,endDateTime*,%24top,%24skip,%24filter,%24count,%24orderby,%24select}");
    };
    /**
     * The occurrences of a recurring series, if the event is a series master. This property includes occurrences that are part of the recurrence pattern, and exceptions that have been modified, but does not include occurrences that have been cancelled from the series. Navigation property. Read-only. Nullable.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of EventCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/event-list-instances?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: InstancesRequestBuilderGetRequestConfiguration | undefined) : Promise<EventCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<EventCollectionResponse>(requestInfo, createEventCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * The occurrences of a recurring series, if the event is a series master. This property includes occurrences that are part of the recurrence pattern, and exceptions that have been modified, but does not include occurrences that have been cancelled from the series. Navigation property. Read-only. Nullable.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: InstancesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a instancesRequestBuilder
     */
    public withUrl(rawUrl: string) : InstancesRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new InstancesRequestBuilder(rawUrl, this.requestAdapter);
    };
}
