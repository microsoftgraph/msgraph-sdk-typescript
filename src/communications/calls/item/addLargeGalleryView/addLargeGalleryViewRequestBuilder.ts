import { createAddLargeGalleryViewOperationFromDiscriminatorValue, deserializeIntoAddLargeGalleryViewOperation, serializeAddLargeGalleryViewOperation, type AddLargeGalleryViewOperation } from '../../../../models/addLargeGalleryViewOperation';
import { type ODataError } from '../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../../../models/oDataErrors/oDataError';
import { deserializeIntoAddLargeGalleryViewPostRequestBody, serializeAddLargeGalleryViewPostRequestBody, type AddLargeGalleryViewPostRequestBody } from './addLargeGalleryViewPostRequestBody';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface AddLargeGalleryViewRequestBuilderPostRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]>;
    /**
     * Request options
     */
    options?: RequestOption[];
}
/**
 * Provides operations to call the addLargeGalleryView method.
 */
export class AddLargeGalleryViewRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new AddLargeGalleryViewRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/communications/calls/{call%2Did}/addLargeGalleryView");
    };
    /**
     * Add the large gallery view to a call.  For details about how to identify a large gallery view participant in a roster so that you can retrieve the relevant data to subscribe to the video feed, see Identify large gallery view participants in a roster.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AddLargeGalleryViewOperation
     * @see {@link https://learn.microsoft.com/graph/api/call-addlargegalleryview?view=graph-rest-1.0|Find more info here}
     */
    public post(body: AddLargeGalleryViewPostRequestBody, requestConfiguration?: AddLargeGalleryViewRequestBuilderPostRequestConfiguration | undefined) : Promise<AddLargeGalleryViewOperation | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AddLargeGalleryViewOperation>(requestInfo, createAddLargeGalleryViewOperationFromDiscriminatorValue, errorMapping);
    };
    /**
     * Add the large gallery view to a call.  For details about how to identify a large gallery view participant in a roster so that you can retrieve the relevant data to subscribe to the video feed, see Identify large gallery view participants in a roster.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: AddLargeGalleryViewPostRequestBody, requestConfiguration?: AddLargeGalleryViewRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeAddLargeGalleryViewPostRequestBody);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a addLargeGalleryViewRequestBuilder
     */
    public withUrl(rawUrl: string) : AddLargeGalleryViewRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new AddLargeGalleryViewRequestBuilder(rawUrl, this.requestAdapter);
    };
}
