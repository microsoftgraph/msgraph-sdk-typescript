import {ContentSharingSessionCollectionResponse} from '../../../../models/';
import {ContentSharingSession} from '../../../../models/contentSharingSession';
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
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the contentSharingSessions property of the microsoft.graph.call entity.
 */
export class ContentSharingSessionsRequestBuilder extends BaseRequestBuilder {
    /** Provides operations to count the resources in the collection. */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the contentSharingSessions property of the microsoft.graph.call entity.
     * @param contentSharingSessionId Unique identifier of the item
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
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of ContentSharingSessionCollectionResponse
     * @see {@link https://docs.microsoft.com/graph/api/call-list-contentsharingsessions?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: ContentSharingSessionsRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<ContentSharingSessionCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter?.sendAsync<ContentSharingSessionCollectionResponse>(requestInfo, createContentSharingSessionCollectionResponseFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Create new navigation property to contentSharingSessions for communications
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of ContentSharingSession
     */
    public post(body: ContentSharingSession | undefined, requestConfiguration?: ContentSharingSessionsRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<ContentSharingSession | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter?.sendAsync<ContentSharingSession>(requestInfo, createContentSharingSessionFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
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
    public toPostRequestInformation(body: ContentSharingSession | undefined, requestConfiguration?: ContentSharingSessionsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeContentSharingSession);
        return requestInfo;
    };
}
