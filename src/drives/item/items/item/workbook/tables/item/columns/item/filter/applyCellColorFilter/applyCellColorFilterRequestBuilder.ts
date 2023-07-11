import {ODataError} from '../../../../../../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../../../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../../../../../../../models/oDataErrors/serializeODataError';
import {ApplyCellColorFilterPostRequestBody} from './applyCellColorFilterPostRequestBody';
import {ApplyCellColorFilterRequestBuilderPostRequestConfiguration} from './applyCellColorFilterRequestBuilderPostRequestConfiguration';
import {deserializeIntoApplyCellColorFilterPostRequestBody} from './deserializeIntoApplyCellColorFilterPostRequestBody';
import {serializeApplyCellColorFilterPostRequestBody} from './serializeApplyCellColorFilterPostRequestBody';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the applyCellColorFilter method.
 */
export class ApplyCellColorFilterRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new ApplyCellColorFilterRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/tables/{workbookTable%2Did}/columns/{workbookTableColumn%2Did}/filter/applyCellColorFilter");
    };
    /**
     * Invoke action applyCellColorFilter
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public post(body: ApplyCellColorFilterPostRequestBody | undefined, requestConfiguration?: ApplyCellColorFilterRequestBuilderPostRequestConfiguration | undefined) : Promise<void> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendNoResponseContentAsync(requestInfo, errorMapping);
    };
    /**
     * Invoke action applyCellColorFilter
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: ApplyCellColorFilterPostRequestBody | undefined, requestConfiguration?: ApplyCellColorFilterRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.POST;
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeApplyCellColorFilterPostRequestBody);
        return requestInfo;
    };
}
