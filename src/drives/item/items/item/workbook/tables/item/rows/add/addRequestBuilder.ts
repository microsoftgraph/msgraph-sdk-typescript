import {createWorkbookTableRowFromDiscriminatorValue} from '../../../../../../../../../models/createWorkbookTableRowFromDiscriminatorValue';
import {deserializeIntoWorkbookTableRow} from '../../../../../../../../../models/deserializeIntoWorkbookTableRow';
import {ODataError} from '../../../../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../../../../../models/oDataErrors/serializeODataError';
import {serializeWorkbookTableRow} from '../../../../../../../../../models/serializeWorkbookTableRow';
import type {WorkbookTableRow} from '../../../../../../../../../models/workbookTableRow';
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
        super(pathParameters, requestAdapter, "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/tables/{workbookTable%2Did}/rows/add");
    };
    /**
     * Adds rows to the end of the table. Note that the API can accept multiple rows data using this API. Adding one row at a time could lead to performance degradation. The recommended approach would be to batch the rows together in a single call rather than doing single row insertion. For best results, collect the rows to be inserted on the application side and perform single rows add operation. Experiment with the number of rows to determine the ideal number of rows to use in single API call. 
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of WorkbookTableRow
     * @see {@link https://learn.microsoft.com/graph/api/tablerowcollection-add?view=graph-rest-1.0|Find more info here}
     */
    public post(body: AddPostRequestBody, requestConfiguration?: AddRequestBuilderPostRequestConfiguration | undefined) : Promise<WorkbookTableRow | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<WorkbookTableRow>(requestInfo, createWorkbookTableRowFromDiscriminatorValue, errorMapping);
    };
    /**
     * Adds rows to the end of the table. Note that the API can accept multiple rows data using this API. Adding one row at a time could lead to performance degradation. The recommended approach would be to batch the rows together in a single call rather than doing single row insertion. For best results, collect the rows to be inserted on the application side and perform single rows add operation. Experiment with the number of rows to determine the ideal number of rows to use in single API call. 
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
}
