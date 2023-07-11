import {ODataError} from '../../../../../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../../../../../../models/oDataErrors/serializeODataError';
import {createImageWithWidthWithHeightWithFittingModeResponseFromDiscriminatorValue} from './createImageWithWidthWithHeightWithFittingModeResponseFromDiscriminatorValue';
import {ImageWithWidthWithHeightWithFittingModeRequestBuilderGetRequestConfiguration} from './imageWithWidthWithHeightWithFittingModeRequestBuilderGetRequestConfiguration';
import {ImageWithWidthWithHeightWithFittingModeResponse} from './index';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the image method.
 */
export class ImageWithWidthWithHeightWithFittingModeRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new ImageWithWidthWithHeightWithFittingModeRequestBuilder and sets the default values.
     * @param fittingMode Usage: fittingMode='{fittingMode}'
     * @param height Usage: height={height}
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     * @param width Usage: width={width}
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter, fittingMode?: string | undefined, height?: number | undefined, width?: number | undefined) {
        super(pathParameters, requestAdapter, "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/worksheets/{workbookWorksheet%2Did}/charts/{workbookChart%2Did}/image(width={width},height={height},fittingMode='{fittingMode}')");
        this.pathParameters["fittingMode"] = fittingMode
        this.pathParameters["height"] = height
        this.pathParameters["width"] = width
    };
    /**
     * Invoke function image
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ImageWithWidthWithHeightWithFittingModeResponse
     */
    public get(requestConfiguration?: ImageWithWidthWithHeightWithFittingModeRequestBuilderGetRequestConfiguration | undefined) : Promise<ImageWithWidthWithHeightWithFittingModeResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ImageWithWidthWithHeightWithFittingModeResponse>(requestInfo, createImageWithWidthWithHeightWithFittingModeResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Invoke function image
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ImageWithWidthWithHeightWithFittingModeRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
}
