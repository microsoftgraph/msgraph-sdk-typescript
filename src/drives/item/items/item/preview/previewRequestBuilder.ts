import {createItemPreviewInfoFromDiscriminatorValue} from '../../../../../models/createItemPreviewInfoFromDiscriminatorValue';
import {deserializeIntoItemPreviewInfo} from '../../../../../models/deserializeIntoItemPreviewInfo';
import type {ItemPreviewInfo} from '../../../../../models/itemPreviewInfo';
import {ODataError} from '../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../models/oDataErrors/serializeODataError';
import {serializeItemPreviewInfo} from '../../../../../models/serializeItemPreviewInfo';
import {deserializeIntoPreviewPostRequestBody} from './deserializeIntoPreviewPostRequestBody';
import type {PreviewPostRequestBody} from './previewPostRequestBody';
import {PreviewRequestBuilderPostRequestConfiguration} from './previewRequestBuilderPostRequestConfiguration';
import {serializePreviewPostRequestBody} from './serializePreviewPostRequestBody';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the preview method.
 */
export class PreviewRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new PreviewRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/preview");
    };
    /**
     * Invoke action preview
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ItemPreviewInfo
     */
    public post(body: PreviewPostRequestBody, requestConfiguration?: PreviewRequestBuilderPostRequestConfiguration | undefined) : Promise<ItemPreviewInfo | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ItemPreviewInfo>(requestInfo, createItemPreviewInfoFromDiscriminatorValue, errorMapping);
    };
    /**
     * Invoke action preview
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: PreviewPostRequestBody, requestConfiguration?: PreviewRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializePreviewPostRequestBody);
        return requestInfo;
    };
}
