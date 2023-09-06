import { type AttachmentCollectionResponse } from '../../../../../../../../../../models/';
import { type Attachment } from '../../../../../../../../../../models/attachment';
import { createAttachmentCollectionResponseFromDiscriminatorValue } from '../../../../../../../../../../models/createAttachmentCollectionResponseFromDiscriminatorValue';
import { createAttachmentFromDiscriminatorValue } from '../../../../../../../../../../models/createAttachmentFromDiscriminatorValue';
import { deserializeIntoAttachment } from '../../../../../../../../../../models/deserializeIntoAttachment';
import { type ODataError } from '../../../../../../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../../../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../../../../../../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../../../../../../../../models/oDataErrors/serializeODataError';
import { serializeAttachment } from '../../../../../../../../../../models/serializeAttachment';
import { type AttachmentsRequestBuilderGetRequestConfiguration } from './attachmentsRequestBuilderGetRequestConfiguration';
import { type AttachmentsRequestBuilderPostRequestConfiguration } from './attachmentsRequestBuilderPostRequestConfiguration';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { CreateUploadSessionRequestBuilder } from './createUploadSession/createUploadSessionRequestBuilder';
import { AttachmentItemRequestBuilder } from './item/attachmentItemRequestBuilder';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the attachments property of the microsoft.graph.post entity.
 */
export class AttachmentsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the createUploadSession method.
     */
    public get createUploadSession(): CreateUploadSessionRequestBuilder {
        return new CreateUploadSessionRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the attachments property of the microsoft.graph.post entity.
     * @param attachmentId The unique identifier of attachment
     * @returns a AttachmentItemRequestBuilder
     */
    public byAttachmentId(attachmentId: string) : AttachmentItemRequestBuilder {
        if(!attachmentId) throw new Error("attachmentId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["attachment%2Did"] = attachmentId
        return new AttachmentItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new AttachmentsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/groups/{group%2Did}/conversations/{conversation%2Did}/threads/{conversationThread%2Did}/posts/{post%2Did}/inReplyTo/attachments{?%24top,%24skip,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Retrieve a list of attachment objects attached to a post.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AttachmentCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/post-list-attachments?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: AttachmentsRequestBuilderGetRequestConfiguration | undefined) : Promise<AttachmentCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AttachmentCollectionResponse>(requestInfo, createAttachmentCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to attachments for groups
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Attachment
     */
    public post(body: Attachment, requestConfiguration?: AttachmentsRequestBuilderPostRequestConfiguration | undefined) : Promise<Attachment | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<Attachment>(requestInfo, createAttachmentFromDiscriminatorValue, errorMapping);
    };
    /**
     * Retrieve a list of attachment objects attached to a post.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: AttachmentsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to attachments for groups
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: Attachment, requestConfiguration?: AttachmentsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeAttachment);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a attachmentsRequestBuilder
     */
    public withUrl(rawUrl: string) : AttachmentsRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new AttachmentsRequestBuilder(rawUrl, this.requestAdapter);
    };
}
