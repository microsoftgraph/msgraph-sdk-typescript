import { type ODataError } from '../../../../../../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../../../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../../../../../../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../../../../../../../../models/oDataErrors/serializeODataError';
import { createImageWithWidthWithHeightResponseFromDiscriminatorValue } from './createImageWithWidthWithHeightResponseFromDiscriminatorValue';
import { type ImageWithWidthWithHeightRequestBuilderGetRequestConfiguration } from './imageWithWidthWithHeightRequestBuilderGetRequestConfiguration';
import { type ImageWithWidthWithHeightResponse } from './index';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the image method.
 */
export class ImageWithWidthWithHeightRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new ImageWithWidthWithHeightRequestBuilder and sets the default values.
     * @param height Usage: height={height}
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     * @param width Usage: width={width}
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter, height?: number | undefined, width?: number | undefined) {
        super(pathParameters, requestAdapter, "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/worksheets/{workbookWorksheet%2Did}/charts/{workbookChart%2Did}/image(width={width},height={height})");
        this.pathParameters["height"] = height
        this.pathParameters["width"] = width
    };
    /**
     * Invoke function image
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ImageWithWidthWithHeightResponse
     */
    public get(requestConfiguration?: ImageWithWidthWithHeightRequestBuilderGetRequestConfiguration | undefined) : Promise<ImageWithWidthWithHeightResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ImageWithWidthWithHeightResponse>(requestInfo, createImageWithWidthWithHeightResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Invoke function image
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ImageWithWidthWithHeightRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * @returns a imageWithWidthWithHeightRequestBuilder
     */
    public withUrl(rawUrl: string) : ImageWithWidthWithHeightRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new ImageWithWidthWithHeightRequestBuilder(rawUrl, this.requestAdapter);
    };
}
