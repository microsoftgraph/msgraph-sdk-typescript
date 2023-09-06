import { createServiceAnnouncementAttachmentFromDiscriminatorValue } from '../../../../../../models/createServiceAnnouncementAttachmentFromDiscriminatorValue';
import { deserializeIntoServiceAnnouncementAttachment } from '../../../../../../models/deserializeIntoServiceAnnouncementAttachment';
import { type ODataError } from '../../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../../../../models/oDataErrors/serializeODataError';
import { serializeServiceAnnouncementAttachment } from '../../../../../../models/serializeServiceAnnouncementAttachment';
import { type ServiceAnnouncementAttachment } from '../../../../../../models/serviceAnnouncementAttachment';
import { ContentRequestBuilder } from './content/contentRequestBuilder';
import { type ServiceAnnouncementAttachmentItemRequestBuilderDeleteRequestConfiguration } from './serviceAnnouncementAttachmentItemRequestBuilderDeleteRequestConfiguration';
import { type ServiceAnnouncementAttachmentItemRequestBuilderGetRequestConfiguration } from './serviceAnnouncementAttachmentItemRequestBuilderGetRequestConfiguration';
import { type ServiceAnnouncementAttachmentItemRequestBuilderPatchRequestConfiguration } from './serviceAnnouncementAttachmentItemRequestBuilderPatchRequestConfiguration';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the attachments property of the microsoft.graph.serviceUpdateMessage entity.
 */
export class ServiceAnnouncementAttachmentItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the media for the admin entity.
     */
    public get content(): ContentRequestBuilder {
        return new ContentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new ServiceAnnouncementAttachmentItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/admin/serviceAnnouncement/messages/{serviceUpdateMessage%2Did}/attachments/{serviceAnnouncementAttachment%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete navigation property attachments for admin
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: ServiceAnnouncementAttachmentItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Read the properties and relationships of a serviceAnnouncementAttachment object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ServiceAnnouncementAttachment
     * @see {@link https://learn.microsoft.com/graph/api/serviceannouncementattachment-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: ServiceAnnouncementAttachmentItemRequestBuilderGetRequestConfiguration | undefined) : Promise<ServiceAnnouncementAttachment | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ServiceAnnouncementAttachment>(requestInfo, createServiceAnnouncementAttachmentFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property attachments in admin
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ServiceAnnouncementAttachment
     */
    public patch(body: ServiceAnnouncementAttachment, requestConfiguration?: ServiceAnnouncementAttachmentItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<ServiceAnnouncementAttachment | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ServiceAnnouncementAttachment>(requestInfo, createServiceAnnouncementAttachmentFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property attachments for admin
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: ServiceAnnouncementAttachmentItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Read the properties and relationships of a serviceAnnouncementAttachment object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ServiceAnnouncementAttachmentItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property attachments in admin
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: ServiceAnnouncementAttachment, requestConfiguration?: ServiceAnnouncementAttachmentItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.PATCH;
        requestInfo.headers["Accept"] = ["application/json"];
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeServiceAnnouncementAttachment);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a ServiceAnnouncementAttachmentItemRequestBuilder
     */
    public withUrl(rawUrl: string) : ServiceAnnouncementAttachmentItemRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new ServiceAnnouncementAttachmentItemRequestBuilder(rawUrl, this.requestAdapter);
    };
}
