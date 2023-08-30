import {ContentSharingSessionCollectionResponse} from '../../../../models/';
import type {ContentSharingSession} from '../../../../models/contentSharingSession';
import {createContentSharingSessionCollectionResponseFromDiscriminatorValue} from '../../../../models/createContentSharingSessionCollectionResponseFromDiscriminatorValue';
import {createContentSharingSessionFromDiscriminatorValue} from '../../../../models/createContentSharingSessionFromDiscriminatorValue';
import {deserializeIntoContentSharingSession} from '../../../../models/deserializeIntoContentSharingSession';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../models/oDataErrors/serializeODataError';
import {serializeContentSharingSession} from '../../../../models/serializeContentSharingSession';
import {ContentSharingSessionsRequestBuilderGetRequestConfiguration} from './contentSharingSessionsRequestBuilderGetRequestConfiguration';
import {ContentSharingSessionsRequestBuilderPostRequestConfiguration} from './contentSharingSessionsRequestBuilderPostRequestConfiguration';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {ContentSharingSessionItemRequestBuilder} from './item/contentSharingSessionItemRequestBuilder';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the contentSharingSessions property of the microsoft.graph.call entity.
 */
export class ContentSharingSessionsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the contentSharingSessions property of the microsoft.graph.call entity.
     * @param contentSharingSessionId The unique identifier of contentSharingSession
     * @returns a ContentSharingSessionItemRequestBuilder
     */
    public byContentSharingSessionId(contentSharingSessionId: string) : ContentSharingSessionItemRequestBuilder {
        if(!contentSharingSessionId) throw new Error("contentSharingSessionId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["contentSharingSession%2Did"] = contentSharingSessionId
        return new ContentSharingSessionItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new ContentSharingSessionsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/communications/calls/{call%2Did}/contentSharingSessions{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Retrieve a list of contentSharingSession objects in a call.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ContentSharingSessionCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/call-list-contentsharingsessions?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: ContentSharingSessionsRequestBuilderGetRequestConfiguration | undefined) : Promise<ContentSharingSessionCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ContentSharingSessionCollectionResponse>(requestInfo, createContentSharingSessionCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to contentSharingSessions for communications
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ContentSharingSession
     */
    public post(body: ContentSharingSession, requestConfiguration?: ContentSharingSessionsRequestBuilderPostRequestConfiguration | undefined) : Promise<ContentSharingSession | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ContentSharingSession>(requestInfo, createContentSharingSessionFromDiscriminatorValue, errorMapping);
    };
    /**
     * Retrieve a list of contentSharingSession objects in a call.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ContentSharingSessionsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to contentSharingSessions for communications
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: ContentSharingSession, requestConfiguration?: ContentSharingSessionsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeContentSharingSession);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a contentSharingSessionsRequestBuilder
     */
    public withUrl(rawUrl: string) : ContentSharingSessionsRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new ContentSharingSessionsRequestBuilder(rawUrl, this.requestAdapter);
    };
}
