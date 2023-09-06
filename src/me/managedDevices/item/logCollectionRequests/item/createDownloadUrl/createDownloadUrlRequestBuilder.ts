import { type ODataError } from '../../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../../../../models/oDataErrors/serializeODataError';
import { createCreateDownloadUrlResponseFromDiscriminatorValue } from './createCreateDownloadUrlResponseFromDiscriminatorValue';
import { type CreateDownloadUrlRequestBuilderPostRequestConfiguration } from './createDownloadUrlRequestBuilderPostRequestConfiguration';
import { type CreateDownloadUrlResponse } from './index';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the createDownloadUrl method.
 */
export class CreateDownloadUrlRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new CreateDownloadUrlRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/me/managedDevices/{managedDevice%2Did}/logCollectionRequests/{deviceLogCollectionResponse%2Did}/createDownloadUrl");
    };
    /**
     * Invoke action createDownloadUrl
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of CreateDownloadUrlResponse
     */
    public post(requestConfiguration?: CreateDownloadUrlRequestBuilderPostRequestConfiguration | undefined) : Promise<CreateDownloadUrlResponse | undefined> {
        const requestInfo = this.toPostRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<CreateDownloadUrlResponse>(requestInfo, createCreateDownloadUrlResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Invoke action createDownloadUrl
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(requestConfiguration?: CreateDownloadUrlRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.POST;
        requestInfo.headers["Accept"] = ["application/json"];
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a createDownloadUrlRequestBuilder
     */
    public withUrl(rawUrl: string) : CreateDownloadUrlRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new CreateDownloadUrlRequestBuilder(rawUrl, this.requestAdapter);
    };
}
