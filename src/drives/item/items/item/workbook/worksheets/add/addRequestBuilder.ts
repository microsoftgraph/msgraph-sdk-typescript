import {createWorkbookWorksheetFromDiscriminatorValue} from '../../../../../../../models/createWorkbookWorksheetFromDiscriminatorValue';
import {deserializeIntoWorkbookWorksheet} from '../../../../../../../models/deserializeIntoWorkbookWorksheet';
import {ODataError} from '../../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../../../models/oDataErrors/serializeODataError';
import {serializeWorkbookWorksheet} from '../../../../../../../models/serializeWorkbookWorksheet';
import type {WorkbookWorksheet} from '../../../../../../../models/workbookWorksheet';
import type {AddPostRequestBody} from './addPostRequestBody';
import {AddRequestBuilderPostRequestConfiguration} from './addRequestBuilderPostRequestConfiguration';
import {deserializeIntoAddPostRequestBody} from './deserializeIntoAddPostRequestBody';
import {serializeAddPostRequestBody} from './serializeAddPostRequestBody';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the add method.
 */
export class AddRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new AddRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/worksheets/add");
    };
    /**
     * Adds a new worksheet to the workbook. The worksheet will be added at the end of existing worksheets. If you wish to activate the newly added worksheet, call .activate() on it.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of WorkbookWorksheet
     * @see {@link https://learn.microsoft.com/graph/api/worksheetcollection-add?view=graph-rest-1.0|Find more info here}
     */
    public post(body: AddPostRequestBody, requestConfiguration?: AddRequestBuilderPostRequestConfiguration | undefined) : Promise<WorkbookWorksheet | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<WorkbookWorksheet>(requestInfo, createWorkbookWorksheetFromDiscriminatorValue, errorMapping);
    };
    /**
     * Adds a new worksheet to the workbook. The worksheet will be added at the end of existing worksheets. If you wish to activate the newly added worksheet, call .activate() on it.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: AddPostRequestBody, requestConfiguration?: AddRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeAddPostRequestBody);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a addRequestBuilder
     */
    public withUrl(rawUrl: string) : AddRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new AddRequestBuilder(rawUrl, this.requestAdapter);
    };
}
