import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../models/oDataErrors/serializeODataError';
import {createImportResponseFromDiscriminatorValue} from './createImportResponseFromDiscriminatorValue';
import {deserializeIntoImportPostRequestBody} from './deserializeIntoImportPostRequestBody';
import {deserializeIntoImportResponse} from './deserializeIntoImportResponse';
import {ImportPostRequestBody} from './importPostRequestBody';
import {ImportRequestBuilderPostRequestConfiguration} from './importRequestBuilderPostRequestConfiguration';
import {ImportResponse} from './importResponse';
import {serializeImportPostRequestBody} from './serializeImportPostRequestBody';
import {serializeImportResponse} from './serializeImportResponse';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

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
     * Invoke action import
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ImportResponse
     */
    public post(body: ImportPostRequestBody | undefined, requestConfiguration?: ImportRequestBuilderPostRequestConfiguration | undefined) : Promise<ImportResponse | undefined> {
        if(!body) throw new Error("body cannot be undefined");
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
     * Invoke action import
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: ImportPostRequestBody | undefined, requestConfiguration?: ImportRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeImportPostRequestBody);
        return requestInfo;
    };
}
