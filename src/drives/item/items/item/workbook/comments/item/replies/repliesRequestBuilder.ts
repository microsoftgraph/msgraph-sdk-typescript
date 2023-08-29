import {WorkbookCommentReplyCollectionResponse} from '../../../../../../../../models/';
import {createWorkbookCommentReplyCollectionResponseFromDiscriminatorValue} from '../../../../../../../../models/createWorkbookCommentReplyCollectionResponseFromDiscriminatorValue';
import {createWorkbookCommentReplyFromDiscriminatorValue} from '../../../../../../../../models/createWorkbookCommentReplyFromDiscriminatorValue';
import {deserializeIntoWorkbookCommentReply} from '../../../../../../../../models/deserializeIntoWorkbookCommentReply';
import {ODataError} from '../../../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../../../../models/oDataErrors/serializeODataError';
import {serializeWorkbookCommentReply} from '../../../../../../../../models/serializeWorkbookCommentReply';
import type {WorkbookCommentReply} from '../../../../../../../../models/workbookCommentReply';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {WorkbookCommentReplyItemRequestBuilder} from './item/workbookCommentReplyItemRequestBuilder';
import {RepliesRequestBuilderGetRequestConfiguration} from './repliesRequestBuilderGetRequestConfiguration';
import {RepliesRequestBuilderPostRequestConfiguration} from './repliesRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the replies property of the microsoft.graph.workbookComment entity.
 */
export class RepliesRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the replies property of the microsoft.graph.workbookComment entity.
     * @param workbookCommentReplyId The unique identifier of workbookCommentReply
     * @returns a WorkbookCommentReplyItemRequestBuilder
     */
    public byWorkbookCommentReplyId(workbookCommentReplyId: string) : WorkbookCommentReplyItemRequestBuilder {
        if(!workbookCommentReplyId) throw new Error("workbookCommentReplyId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["workbookCommentReply%2Did"] = workbookCommentReplyId
        return new WorkbookCommentReplyItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new RepliesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/comments/{workbookComment%2Did}/replies{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Retrieve the properties and relationships of workbookCommentReply object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of WorkbookCommentReplyCollectionResponse
     */
    public get(requestConfiguration?: RepliesRequestBuilderGetRequestConfiguration | undefined) : Promise<WorkbookCommentReplyCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<WorkbookCommentReplyCollectionResponse>(requestInfo, createWorkbookCommentReplyCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to replies for drives
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of WorkbookCommentReply
     */
    public post(body: WorkbookCommentReply, requestConfiguration?: RepliesRequestBuilderPostRequestConfiguration | undefined) : Promise<WorkbookCommentReply | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<WorkbookCommentReply>(requestInfo, createWorkbookCommentReplyFromDiscriminatorValue, errorMapping);
    };
    /**
     * Retrieve the properties and relationships of workbookCommentReply object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: RepliesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to replies for drives
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: WorkbookCommentReply, requestConfiguration?: RepliesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeWorkbookCommentReply);
        return requestInfo;
    };
}
