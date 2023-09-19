import { type WorkbookTableRowCollectionResponse } from '../../../../../../../../models/';
import { createWorkbookTableRowCollectionResponseFromDiscriminatorValue } from '../../../../../../../../models/createWorkbookTableRowCollectionResponseFromDiscriminatorValue';
import { createWorkbookTableRowFromDiscriminatorValue } from '../../../../../../../../models/createWorkbookTableRowFromDiscriminatorValue';
import { deserializeIntoWorkbookTableRow } from '../../../../../../../../models/deserializeIntoWorkbookTableRow';
import { type ODataError } from '../../../../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../../../../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../../../../../../models/oDataErrors/serializeODataError';
import { serializeWorkbookTableRow } from '../../../../../../../../models/serializeWorkbookTableRow';
import { type WorkbookTableRow } from '../../../../../../../../models/workbookTableRow';
import { AddRequestBuilder } from './add/addRequestBuilder';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { WorkbookTableRowItemRequestBuilder } from './item/workbookTableRowItemRequestBuilder';
import { ItemAtWithIndexRequestBuilder } from './itemAtWithIndex/itemAtWithIndexRequestBuilder';
import { type RowsRequestBuilderGetRequestConfiguration } from './rowsRequestBuilderGetRequestConfiguration';
import { type RowsRequestBuilderPostRequestConfiguration } from './rowsRequestBuilderPostRequestConfiguration';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the rows property of the microsoft.graph.workbookTable entity.
 */
export class RowsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to call the add method.
     */
    public get add(): AddRequestBuilder {
        return new AddRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the count method.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the rows property of the microsoft.graph.workbookTable entity.
     * @param workbookTableRowId The unique identifier of workbookTableRow
     * @returns a WorkbookTableRowItemRequestBuilder
     */
    public byWorkbookTableRowId(workbookTableRowId: string) : WorkbookTableRowItemRequestBuilder {
        if(!workbookTableRowId) throw new Error("workbookTableRowId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["workbookTableRow%2Did"] = workbookTableRowId
        return new WorkbookTableRowItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new RowsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/tables/{workbookTable%2Did}/rows{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Retrieve a list of tablerow objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of WorkbookTableRowCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/table-list-rows?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: RowsRequestBuilderGetRequestConfiguration | undefined) : Promise<WorkbookTableRowCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<WorkbookTableRowCollectionResponse>(requestInfo, createWorkbookTableRowCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Provides operations to call the itemAt method.
     * @param index Usage: index={index}
     * @returns a itemAtWithIndexRequestBuilder
     */
    public itemAtWithIndex(index: number | undefined) : ItemAtWithIndexRequestBuilder {
        if(!index) throw new Error("index cannot be undefined");
        return new ItemAtWithIndexRequestBuilder(this.pathParameters, this.requestAdapter, index);
    };
    /**
     * Adds rows to the end of a table.  Note that this API can accept multiple rows of data. Adding one row at a time can affect performance. The recommended approach is to batch the rows together in a single call rather than inserting single rows. For best results, collect the rows to be inserted on the application side and perform a single row add operation. Experiment with the number of rows to determine the ideal number of rows to use in a single API call.  This request might occasionally result in a 504 HTTP error. The appropriate response to this error is to repeat the request.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of WorkbookTableRow
     * @see {@link https://learn.microsoft.com/graph/api/table-post-rows?view=graph-rest-1.0|Find more info here}
     */
    public post(body: WorkbookTableRow, requestConfiguration?: RowsRequestBuilderPostRequestConfiguration | undefined) : Promise<WorkbookTableRow | undefined> {
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
     * Retrieve a list of tablerow objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: RowsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        requestInfo.headers["Accept"] = ["application/json"];
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.setQueryStringParametersFromRawObject(requestConfiguration.queryParameters);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
    /**
     * Adds rows to the end of a table.  Note that this API can accept multiple rows of data. Adding one row at a time can affect performance. The recommended approach is to batch the rows together in a single call rather than inserting single rows. For best results, collect the rows to be inserted on the application side and perform a single row add operation. Experiment with the number of rows to determine the ideal number of rows to use in a single API call.  This request might occasionally result in a 504 HTTP error. The appropriate response to this error is to repeat the request.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: WorkbookTableRow, requestConfiguration?: RowsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeWorkbookTableRow);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a rowsRequestBuilder
     */
    public withUrl(rawUrl: string) : RowsRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new RowsRequestBuilder(rawUrl, this.requestAdapter);
    };
}
