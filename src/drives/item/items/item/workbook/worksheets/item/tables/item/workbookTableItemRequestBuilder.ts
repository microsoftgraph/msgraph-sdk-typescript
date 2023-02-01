import {WorkbookTable} from '../../../../../../../../../models/';
import {createWorkbookTableFromDiscriminatorValue} from '../../../../../../../../../models/createWorkbookTableFromDiscriminatorValue';
import {ODataError} from '../../../../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {ColumnsRequestBuilder} from './columns/columnsRequestBuilder';
import {WorkbookTableColumnItemRequestBuilder} from './columns/item/workbookTableColumnItemRequestBuilder';
import {ClearFiltersRequestBuilder} from './microsoftGraphClearFilters/clearFiltersRequestBuilder';
import {ConvertToRangeRequestBuilder} from './microsoftGraphConvertToRange/convertToRangeRequestBuilder';
import {DataBodyRangeRequestBuilder} from './microsoftGraphDataBodyRange/dataBodyRangeRequestBuilder';
import {HeaderRowRangeRequestBuilder} from './microsoftGraphHeaderRowRange/headerRowRangeRequestBuilder';
import {RangeRequestBuilder} from './microsoftGraphRange/rangeRequestBuilder';
import {ReapplyFiltersRequestBuilder} from './microsoftGraphReapplyFilters/reapplyFiltersRequestBuilder';
import {TotalRowRangeRequestBuilder} from './microsoftGraphTotalRowRange/totalRowRangeRequestBuilder';
import {WorkbookTableRowItemRequestBuilder} from './rows/item/workbookTableRowItemRequestBuilder';
import {RowsRequestBuilder} from './rows/rowsRequestBuilder';
import {SortRequestBuilder} from './sort/sortRequestBuilder';
import {WorkbookTableItemRequestBuilderDeleteRequestConfiguration} from './workbookTableItemRequestBuilderDeleteRequestConfiguration';
import {WorkbookTableItemRequestBuilderGetRequestConfiguration} from './workbookTableItemRequestBuilderGetRequestConfiguration';
import {WorkbookTableItemRequestBuilderPatchRequestConfiguration} from './workbookTableItemRequestBuilderPatchRequestConfiguration';
import {WorksheetRequestBuilder} from './worksheet/worksheetRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the tables property of the microsoft.graph.workbookWorksheet entity.
 */
export class WorkbookTableItemRequestBuilder {
    /** Provides operations to manage the columns property of the microsoft.graph.workbookTable entity. */
    public get columns(): ColumnsRequestBuilder {
        return new ColumnsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the clearFilters method. */
    public get microsoftGraphClearFilters(): ClearFiltersRequestBuilder {
        return new ClearFiltersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the convertToRange method. */
    public get microsoftGraphConvertToRange(): ConvertToRangeRequestBuilder {
        return new ConvertToRangeRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the dataBodyRange method. */
    public get microsoftGraphDataBodyRange(): DataBodyRangeRequestBuilder {
        return new DataBodyRangeRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the headerRowRange method. */
    public get microsoftGraphHeaderRowRange(): HeaderRowRangeRequestBuilder {
        return new HeaderRowRangeRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the range method. */
    public get microsoftGraphRange(): RangeRequestBuilder {
        return new RangeRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the reapplyFilters method. */
    public get microsoftGraphReapplyFilters(): ReapplyFiltersRequestBuilder {
        return new ReapplyFiltersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the totalRowRange method. */
    public get microsoftGraphTotalRowRange(): TotalRowRangeRequestBuilder {
        return new TotalRowRangeRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private requestAdapter: RequestAdapter;
    /** Provides operations to manage the rows property of the microsoft.graph.workbookTable entity. */
    public get rows(): RowsRequestBuilder {
        return new RowsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the sort property of the microsoft.graph.workbookTable entity. */
    public get sort(): SortRequestBuilder {
        return new SortRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder */
    private urlTemplate: string;
    /** Provides operations to manage the worksheet property of the microsoft.graph.workbookTable entity. */
    public get worksheet(): WorksheetRequestBuilder {
        return new WorksheetRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the columns property of the microsoft.graph.workbookTable entity.
     * @param id Unique identifier of the item
     * @returns a WorkbookTableColumnItemRequestBuilder
     */
    public columnsById(id: string) : WorkbookTableColumnItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["workbookTableColumn%2Did"] = id
        return new WorkbookTableColumnItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new WorkbookTableItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     * @param workbookTableId key: id of workbookTable
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter, workbookTableId?: string | undefined) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/worksheets/{workbookWorksheet%2Did}/tables/{workbookTable%2Did}{?%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        urlTplParams["workbookTable%2Did"] = workbookTableId
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Delete navigation property tables for drives
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(requestConfiguration?: WorkbookTableItemRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.toDeleteRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Collection of tables that are part of the worksheet. Read-only.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of WorkbookTable
     */
    public get(requestConfiguration?: WorkbookTableItemRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<WorkbookTable | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<WorkbookTable>(requestInfo, createWorkbookTableFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Update the navigation property tables in drives
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of WorkbookTable
     */
    public patch(body: WorkbookTable | undefined, requestConfiguration?: WorkbookTableItemRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<WorkbookTable | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<WorkbookTable>(requestInfo, createWorkbookTableFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Provides operations to manage the rows property of the microsoft.graph.workbookTable entity.
     * @param id Unique identifier of the item
     * @returns a WorkbookTableRowItemRequestBuilder
     */
    public rowsById(id: string) : WorkbookTableRowItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["workbookTableRow%2Did"] = id
        return new WorkbookTableRowItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Delete navigation property tables for drives
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: WorkbookTableItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.DELETE;
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
    /**
     * Collection of tables that are part of the worksheet. Read-only.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: WorkbookTableItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property tables in drives
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: WorkbookTable | undefined, requestConfiguration?: WorkbookTableItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.PATCH;
        requestInfo.headers["Accept"] = ["application/json"];
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        return requestInfo;
    };
}
