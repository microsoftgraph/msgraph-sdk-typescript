import {AddLargeGalleryViewOperation} from '../../../../models/addLargeGalleryViewOperation';
import {createAddLargeGalleryViewOperationFromDiscriminatorValue} from '../../../../models/createAddLargeGalleryViewOperationFromDiscriminatorValue';
import {deserializeIntoAddLargeGalleryViewOperation} from '../../../../models/deserializeIntoAddLargeGalleryViewOperation';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../models/oDataErrors/serializeODataError';
import {serializeAddLargeGalleryViewOperation} from '../../../../models/serializeAddLargeGalleryViewOperation';
import {AddLargeGalleryViewPostRequestBody} from './addLargeGalleryViewPostRequestBody';
import {AddLargeGalleryViewRequestBuilderPostRequestConfiguration} from './addLargeGalleryViewRequestBuilderPostRequestConfiguration';
import {deserializeIntoAddLargeGalleryViewPostRequestBody} from './deserializeIntoAddLargeGalleryViewPostRequestBody';
import {serializeAddLargeGalleryViewPostRequestBody} from './serializeAddLargeGalleryViewPostRequestBody';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

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
     * @see {@link https://docs.microsoft.com/graph/api/call-addlargegalleryview?view=graph-rest-1.0|Find more info here}
     */
    public post(body: AddLargeGalleryViewPostRequestBody | undefined, requestConfiguration?: AddLargeGalleryViewRequestBuilderPostRequestConfiguration | undefined) : Promise<AddLargeGalleryViewOperation | undefined> {
        if(!body) throw new Error("body cannot be undefined");
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
    public toPostRequestInformation(body: AddLargeGalleryViewPostRequestBody | undefined, requestConfiguration?: AddLargeGalleryViewRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeAddLargeGalleryViewPostRequestBody);
        return requestInfo;
    };
}
