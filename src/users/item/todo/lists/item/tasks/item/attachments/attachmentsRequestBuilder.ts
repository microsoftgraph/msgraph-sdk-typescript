import {AttachmentBaseCollectionResponse} from '../../../../../../../../models/';
import type {AttachmentBase} from '../../../../../../../../models/attachmentBase';
import {createAttachmentBaseCollectionResponseFromDiscriminatorValue} from '../../../../../../../../models/createAttachmentBaseCollectionResponseFromDiscriminatorValue';
import {createAttachmentBaseFromDiscriminatorValue} from '../../../../../../../../models/createAttachmentBaseFromDiscriminatorValue';
import {deserializeIntoAttachmentBase} from '../../../../../../../../models/deserializeIntoAttachmentBase';
import {ODataError} from '../../../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../../../../models/oDataErrors/serializeODataError';
import {serializeAttachmentBase} from '../../../../../../../../models/serializeAttachmentBase';
import {AttachmentsRequestBuilderGetRequestConfiguration} from './attachmentsRequestBuilderGetRequestConfiguration';
import {AttachmentsRequestBuilderPostRequestConfiguration} from './attachmentsRequestBuilderPostRequestConfiguration';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {CreateUploadSessionRequestBuilder} from './createUploadSession/createUploadSessionRequestBuilder';
import {AttachmentBaseItemRequestBuilder} from './item/attachmentBaseItemRequestBuilder';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the attachments property of the microsoft.graph.todoTask entity.
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
     * Provides operations to manage the attachments property of the microsoft.graph.todoTask entity.
     * @param attachmentBaseId The unique identifier of attachmentBase
     * @returns a AttachmentBaseItemRequestBuilder
     */
    public byAttachmentBaseId(attachmentBaseId: string) : AttachmentBaseItemRequestBuilder {
        if(!attachmentBaseId) throw new Error("attachmentBaseId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["attachmentBase%2Did"] = attachmentBaseId
        return new AttachmentBaseItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new AttachmentsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/users/{user%2Did}/todo/lists/{todoTaskList%2Did}/tasks/{todoTask%2Did}/attachments{?%24top,%24skip,%24filter,%24count,%24orderby,%24select}");
    };
    /**
     * Get a list of the taskFileAttachment objects and their properties. The contentBytes property will not be returned in the response. Use the Get attachment API to view the contentBytes.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AttachmentBaseCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/todotask-list-attachments?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: AttachmentsRequestBuilderGetRequestConfiguration | undefined) : Promise<AttachmentBaseCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AttachmentBaseCollectionResponse>(requestInfo, createAttachmentBaseCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Add a new taskFileAttachment object to a todoTask. This operation limits the size of the attachment you can add to under 3 MB. If the size of the file attachments is more than 3 MB, create an upload session to upload the attachments.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AttachmentBase
     * @see {@link https://learn.microsoft.com/graph/api/todotask-post-attachments?view=graph-rest-1.0|Find more info here}
     */
    public post(body: AttachmentBase, requestConfiguration?: AttachmentsRequestBuilderPostRequestConfiguration | undefined) : Promise<AttachmentBase | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AttachmentBase>(requestInfo, createAttachmentBaseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get a list of the taskFileAttachment objects and their properties. The contentBytes property will not be returned in the response. Use the Get attachment API to view the contentBytes.
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
     * Add a new taskFileAttachment object to a todoTask. This operation limits the size of the attachment you can add to under 3 MB. If the size of the file attachments is more than 3 MB, create an upload session to upload the attachments.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: AttachmentBase, requestConfiguration?: AttachmentsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeAttachmentBase);
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
