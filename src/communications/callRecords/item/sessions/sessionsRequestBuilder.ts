import {SessionCollectionResponse} from '../../../../models/callRecords/';
import {createSessionCollectionResponseFromDiscriminatorValue} from '../../../../models/callRecords/createSessionCollectionResponseFromDiscriminatorValue';
import {createSessionFromDiscriminatorValue} from '../../../../models/callRecords/createSessionFromDiscriminatorValue';
import {deserializeIntoSession} from '../../../../models/callRecords/deserializeIntoSession';
import {serializeSession} from '../../../../models/callRecords/serializeSession';
import type {Session} from '../../../../models/callRecords/session';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../models/oDataErrors/serializeODataError';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {SessionItemRequestBuilder} from './item/sessionItemRequestBuilder';
import {SessionsRequestBuilderGetRequestConfiguration} from './sessionsRequestBuilderGetRequestConfiguration';
import {SessionsRequestBuilderPostRequestConfiguration} from './sessionsRequestBuilderPostRequestConfiguration';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the sessions property of the microsoft.graph.callRecords.callRecord entity.
 */
export class SessionsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the sessions property of the microsoft.graph.callRecords.callRecord entity.
     * @param sessionId The unique identifier of session
     * @returns a SessionItemRequestBuilder
     */
    public bySessionId(sessionId: string) : SessionItemRequestBuilder {
        if(!sessionId) throw new Error("sessionId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["session%2Did"] = sessionId
        return new SessionItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new SessionsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/communications/callRecords/{callRecord%2Did}/sessions{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Retrieve the list of sessions associated with a callRecord object. If the sessions list is truncated, a sessions@odata.nextLink value will be provided to retrieve the next page of sessions. The maximum page size for sessions is 60 entries.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of SessionCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/callrecords-session-list?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: SessionsRequestBuilderGetRequestConfiguration | undefined) : Promise<SessionCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<SessionCollectionResponse>(requestInfo, createSessionCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to sessions for communications
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Session
     */
    public post(body: Session, requestConfiguration?: SessionsRequestBuilderPostRequestConfiguration | undefined) : Promise<Session | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<Session>(requestInfo, createSessionFromDiscriminatorValue, errorMapping);
    };
    /**
     * Retrieve the list of sessions associated with a callRecord object. If the sessions list is truncated, a sessions@odata.nextLink value will be provided to retrieve the next page of sessions. The maximum page size for sessions is 60 entries.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: SessionsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to sessions for communications
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: Session, requestConfiguration?: SessionsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeSession);
        return requestInfo;
    };
}
