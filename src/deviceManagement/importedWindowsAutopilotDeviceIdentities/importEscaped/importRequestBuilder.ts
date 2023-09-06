import { type ODataError } from '../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../models/oDataErrors/serializeODataError';
import { createImportResponseFromDiscriminatorValue } from './createImportResponseFromDiscriminatorValue';
import { deserializeIntoImportPostRequestBody } from './deserializeIntoImportPostRequestBody';
import { deserializeIntoImportResponse } from './deserializeIntoImportResponse';
import { type ImportPostRequestBody } from './importPostRequestBody';
import { type ImportRequestBuilderPostRequestConfiguration } from './importRequestBuilderPostRequestConfiguration';
import { type ImportResponse } from './importResponse';
import { serializeImportPostRequestBody } from './serializeImportPostRequestBody';
import { serializeImportResponse } from './serializeImportResponse';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the import method.
 */
export class ImportRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new ImportRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceManagement/importedWindowsAutopilotDeviceIdentities/import");
    };
    /**
     * Not yet documented
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ImportResponse
     * @see {@link https://learn.microsoft.com/graph/api/intune-enrollment-importedwindowsautopilotdeviceidentity-import?view=graph-rest-1.0|Find more info here}
     */
    public post(body: ImportPostRequestBody, requestConfiguration?: ImportRequestBuilderPostRequestConfiguration | undefined) : Promise<ImportResponse | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ImportResponse>(requestInfo, createImportResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Not yet documented
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: ImportPostRequestBody, requestConfiguration?: ImportRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeImportPostRequestBody);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a importRequestBuilder
     */
    public withUrl(rawUrl: string) : ImportRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new ImportRequestBuilder(rawUrl, this.requestAdapter);
    };
}
