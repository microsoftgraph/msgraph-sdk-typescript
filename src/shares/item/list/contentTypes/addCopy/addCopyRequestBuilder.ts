import { type ContentType } from '../../../../../models/contentType';
import { createContentTypeFromDiscriminatorValue } from '../../../../../models/createContentTypeFromDiscriminatorValue';
import { deserializeIntoContentType } from '../../../../../models/deserializeIntoContentType';
import { type ODataError } from '../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../../../models/oDataErrors/serializeODataError';
import { serializeContentType } from '../../../../../models/serializeContentType';
import { type AddCopyPostRequestBody } from './addCopyPostRequestBody';
import { type AddCopyRequestBuilderPostRequestConfiguration } from './addCopyRequestBuilderPostRequestConfiguration';
import { deserializeIntoAddCopyPostRequestBody } from './deserializeIntoAddCopyPostRequestBody';
import { serializeAddCopyPostRequestBody } from './serializeAddCopyPostRequestBody';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the addCopy method.
 */
export class AddCopyRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new AddCopyRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/shares/{sharedDriveItem%2Did}/list/contentTypes/addCopy");
    };
    /**
     * Add a copy of a [content type][contentType] from a [site][site] to a [list][list].
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ContentType
     * @see {@link https://learn.microsoft.com/graph/api/contenttype-addcopy?view=graph-rest-1.0|Find more info here}
     */
    public post(body: AddCopyPostRequestBody, requestConfiguration?: AddCopyRequestBuilderPostRequestConfiguration | undefined) : Promise<ContentType | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ContentType>(requestInfo, createContentTypeFromDiscriminatorValue, errorMapping);
    };
    /**
     * Add a copy of a [content type][contentType] from a [site][site] to a [list][list].
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: AddCopyPostRequestBody, requestConfiguration?: AddCopyRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeAddCopyPostRequestBody);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a addCopyRequestBuilder
     */
    public withUrl(rawUrl: string) : AddCopyRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new AddCopyRequestBuilder(rawUrl, this.requestAdapter);
    };
}
