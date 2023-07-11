import {AttachmentBase} from '../../../../../../../../../models/';
import {createAttachmentBaseFromDiscriminatorValue} from '../../../../../../../../../models/createAttachmentBaseFromDiscriminatorValue';
import {ODataError} from '../../../../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../../../../../models/oDataErrors/serializeODataError';
import {AttachmentBaseItemRequestBuilderDeleteRequestConfiguration} from './attachmentBaseItemRequestBuilderDeleteRequestConfiguration';
import {AttachmentBaseItemRequestBuilderGetRequestConfiguration} from './attachmentBaseItemRequestBuilderGetRequestConfiguration';
import {ContentRequestBuilder} from './value/contentRequestBuilder';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the attachments property of the microsoft.graph.todoTask entity.
 */
export class AttachmentBaseItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the media for the user entity.
     */
    public get content(): ContentRequestBuilder {
        return new ContentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new AttachmentBaseItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/users/{user%2Did}/todo/lists/{todoTaskList%2Did}/tasks/{todoTask%2Did}/attachments/{attachmentBase%2Did}{?%24select}");
    };
    /**
     * Delete a taskFileAttachment object from a todoTask resource.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://docs.microsoft.com/graph/api/taskfileattachment-delete?view=graph-rest-1.0|Find more info here}
     */
    public delete(requestConfiguration?: AttachmentBaseItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
        const requestInfo = this.toDeleteRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendNoResponseContentAsync(requestInfo, errorMapping);
    };
    /**
     * Read the properties and relationships of a taskFileAttachment object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AttachmentBase
     * @see {@link https://docs.microsoft.com/graph/api/taskfileattachment-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: AttachmentBaseItemRequestBuilderGetRequestConfiguration | undefined) : Promise<AttachmentBase | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AttachmentBase>(requestInfo, createAttachmentBaseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete a taskFileAttachment object from a todoTask resource.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: AttachmentBaseItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.DELETE;
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
    /**
     * Read the properties and relationships of a taskFileAttachment object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: AttachmentBaseItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
}
