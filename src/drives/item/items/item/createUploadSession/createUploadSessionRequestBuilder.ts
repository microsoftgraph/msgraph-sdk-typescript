import { createUploadSessionFromDiscriminatorValue } from '../../../../../models/createUploadSessionFromDiscriminatorValue';
import { deserializeIntoUploadSession } from '../../../../../models/deserializeIntoUploadSession';
import { type ODataError } from '../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../../../models/oDataErrors/serializeODataError';
import { serializeUploadSession } from '../../../../../models/serializeUploadSession';
import { type UploadSession } from '../../../../../models/uploadSession';
import { type CreateUploadSessionPostRequestBody } from './createUploadSessionPostRequestBody';
import { type CreateUploadSessionRequestBuilderPostRequestConfiguration } from './createUploadSessionRequestBuilderPostRequestConfiguration';
import { deserializeIntoCreateUploadSessionPostRequestBody } from './deserializeIntoCreateUploadSessionPostRequestBody';
import { serializeCreateUploadSessionPostRequestBody } from './serializeCreateUploadSessionPostRequestBody';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the createUploadSession method.
 */
export class CreateUploadSessionRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new CreateUploadSessionRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/createUploadSession");
    };
    /**
     * Invoke action createUploadSession
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UploadSession
     */
    public post(body: CreateUploadSessionPostRequestBody, requestConfiguration?: CreateUploadSessionRequestBuilderPostRequestConfiguration | undefined) : Promise<UploadSession | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UploadSession>(requestInfo, createUploadSessionFromDiscriminatorValue, errorMapping);
    };
    /**
     * Invoke action createUploadSession
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: CreateUploadSessionPostRequestBody, requestConfiguration?: CreateUploadSessionRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeCreateUploadSessionPostRequestBody);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a createUploadSessionRequestBuilder
     */
    public withUrl(rawUrl: string) : CreateUploadSessionRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new CreateUploadSessionRequestBuilder(rawUrl, this.requestAdapter);
    };
}
