import { type ODataError } from '../../../../../../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../../../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../../../../../../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../../../../../../../../models/oDataErrors/serializeODataError';
import { createImageWithWidthResponseFromDiscriminatorValue } from './createImageWithWidthResponseFromDiscriminatorValue';
import { type ImageWithWidthRequestBuilderGetRequestConfiguration } from './imageWithWidthRequestBuilderGetRequestConfiguration';
import { type ImageWithWidthResponse } from './index';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the image method.
 */
export class ImageWithWidthRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new ImageWithWidthRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     * @param width Usage: width={width}
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter, width?: number | undefined) {
        super(pathParameters, requestAdapter, "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/worksheets/{workbookWorksheet%2Did}/charts/{workbookChart%2Did}/image(width={width})");
        this.pathParameters["width"] = width
    };
    /**
     * Invoke function image
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ImageWithWidthResponse
     */
    public get(requestConfiguration?: ImageWithWidthRequestBuilderGetRequestConfiguration | undefined) : Promise<ImageWithWidthResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ImageWithWidthResponse>(requestInfo, createImageWithWidthResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Invoke function image
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ImageWithWidthRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
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
     * @returns a imageWithWidthRequestBuilder
     */
    public withUrl(rawUrl: string) : ImageWithWidthRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new ImageWithWidthRequestBuilder(rawUrl, this.requestAdapter);
    };
}
