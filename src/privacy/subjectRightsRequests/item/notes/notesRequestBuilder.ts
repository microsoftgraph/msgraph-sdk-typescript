import {AuthoredNoteCollectionResponse} from '../../../../models/';
import {AuthoredNote} from '../../../../models/authoredNote';
import {createAuthoredNoteCollectionResponseFromDiscriminatorValue} from '../../../../models/createAuthoredNoteCollectionResponseFromDiscriminatorValue';
import {createAuthoredNoteFromDiscriminatorValue} from '../../../../models/createAuthoredNoteFromDiscriminatorValue';
import {deserializeIntoAuthoredNote} from '../../../../models/deserializeIntoAuthoredNote';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../models/oDataErrors/serializeODataError';
import {serializeAuthoredNote} from '../../../../models/serializeAuthoredNote';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {AuthoredNoteItemRequestBuilder} from './item/authoredNoteItemRequestBuilder';
import {NotesRequestBuilderGetRequestConfiguration} from './notesRequestBuilderGetRequestConfiguration';
import {NotesRequestBuilderPostRequestConfiguration} from './notesRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the notes property of the microsoft.graph.subjectRightsRequest entity.
 */
export class NotesRequestBuilder extends BaseRequestBuilder {
    /** Provides operations to count the resources in the collection. */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the notes property of the microsoft.graph.subjectRightsRequest entity.
     * @param authoredNoteId Unique identifier of the item
     * @returns a AuthoredNoteItemRequestBuilder
     */
    public byAuthoredNoteId(authoredNoteId: string) : AuthoredNoteItemRequestBuilder {
        if(!authoredNoteId) throw new Error("authoredNoteId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["authoredNote%2Did"] = authoredNoteId
        return new AuthoredNoteItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new NotesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/privacy/subjectRightsRequests/{subjectRightsRequest%2Did}/notes{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Get the list of authored notes assoicated with a subject rights request. 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of AuthoredNoteCollectionResponse
     * @see {@link https://docs.microsoft.com/graph/api/subjectrightsrequest-list-notes?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: NotesRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<AuthoredNoteCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter?.sendAsync<AuthoredNoteCollectionResponse>(requestInfo, createAuthoredNoteCollectionResponseFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Create a new authoredNote object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of AuthoredNote
     * @see {@link https://docs.microsoft.com/graph/api/subjectrightsrequest-post-notes?view=graph-rest-1.0|Find more info here}
     */
    public post(body: AuthoredNote | undefined, requestConfiguration?: NotesRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<AuthoredNote | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter?.sendAsync<AuthoredNote>(requestInfo, createAuthoredNoteFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Get the list of authored notes assoicated with a subject rights request. 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: NotesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new authoredNote object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: AuthoredNote | undefined, requestConfiguration?: NotesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeAuthoredNote);
        return requestInfo;
    };
}
