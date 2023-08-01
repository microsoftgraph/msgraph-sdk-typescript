import {WorkbookCommentCollectionResponse} from '../../../../../../models/';
import {createWorkbookCommentCollectionResponseFromDiscriminatorValue} from '../../../../../../models/createWorkbookCommentCollectionResponseFromDiscriminatorValue';
import {createWorkbookCommentFromDiscriminatorValue} from '../../../../../../models/createWorkbookCommentFromDiscriminatorValue';
import {deserializeIntoWorkbookComment} from '../../../../../../models/deserializeIntoWorkbookComment';
import {ODataError} from '../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../../models/oDataErrors/serializeODataError';
import {serializeWorkbookComment} from '../../../../../../models/serializeWorkbookComment';
import type {WorkbookComment} from '../../../../../../models/workbookComment';
import {CommentsRequestBuilderGetRequestConfiguration} from './commentsRequestBuilderGetRequestConfiguration';
import {CommentsRequestBuilderPostRequestConfiguration} from './commentsRequestBuilderPostRequestConfiguration';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {WorkbookCommentItemRequestBuilder} from './item/workbookCommentItemRequestBuilder';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, getPathParameters} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the comments property of the microsoft.graph.workbook entity.
 */
export class CommentsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the comments property of the microsoft.graph.workbook entity.
     * @param workbookCommentId Unique identifier of the item
     * @returns a WorkbookCommentItemRequestBuilder
     */
    public byWorkbookCommentId(workbookCommentId: string) : WorkbookCommentItemRequestBuilder {
        if(!workbookCommentId) throw new Error("workbookCommentId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["workbookComment%2Did"] = workbookCommentId
        return new WorkbookCommentItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new CommentsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/comments{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Represents a collection of comments in a workbook.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of WorkbookCommentCollectionResponse
     */
    public get(requestConfiguration?: CommentsRequestBuilderGetRequestConfiguration | undefined) : Promise<WorkbookCommentCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<WorkbookCommentCollectionResponse>(requestInfo, createWorkbookCommentCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to comments for drives
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of WorkbookComment
     */
    public post(body: WorkbookComment | undefined, requestConfiguration?: CommentsRequestBuilderPostRequestConfiguration | undefined) : Promise<WorkbookComment | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<WorkbookComment>(requestInfo, createWorkbookCommentFromDiscriminatorValue, errorMapping);
    };
    /**
     * Represents a collection of comments in a workbook.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: CommentsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to comments for drives
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: WorkbookComment | undefined, requestConfiguration?: CommentsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeWorkbookComment);
        return requestInfo;
    };
}
