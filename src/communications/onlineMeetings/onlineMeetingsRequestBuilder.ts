import {OnlineMeetingCollectionResponse} from '../../models/';
import {createOnlineMeetingCollectionResponseFromDiscriminatorValue} from '../../models/createOnlineMeetingCollectionResponseFromDiscriminatorValue';
import {createOnlineMeetingFromDiscriminatorValue} from '../../models/createOnlineMeetingFromDiscriminatorValue';
import {deserializeIntoOnlineMeeting} from '../../models/deserializeIntoOnlineMeeting';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../models/oDataErrors/serializeODataError';
import type {OnlineMeeting} from '../../models/onlineMeeting';
import {serializeOnlineMeeting} from '../../models/serializeOnlineMeeting';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {CreateOrGetRequestBuilder} from './createOrGet/createOrGetRequestBuilder';
import {OnlineMeetingItemRequestBuilder} from './item/onlineMeetingItemRequestBuilder';
import {OnlineMeetingsRequestBuilderGetRequestConfiguration} from './onlineMeetingsRequestBuilderGetRequestConfiguration';
import {OnlineMeetingsRequestBuilderPostRequestConfiguration} from './onlineMeetingsRequestBuilderPostRequestConfiguration';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';

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
     * @param onlineMeetingId Unique identifier of the item
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
}
