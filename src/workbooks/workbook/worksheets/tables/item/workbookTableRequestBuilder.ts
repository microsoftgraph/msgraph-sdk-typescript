import {WorkbookTable} from '../../../../../workbookTable';
import {ClearFiltersRequestBuilder} from '../clearFilters/clearFiltersRequestBuilder';
import {ColumnsRequestBuilder} from '../columns/columnsRequestBuilder';
import {WorkbookTableColumnRequestBuilder} from '../columns/item/workbookTableColumnRequestBuilder';
import {ConvertToRangeRequestBuilder} from '../convertToRange/convertToRangeRequestBuilder';
import {ReapplyFiltersRequestBuilder} from '../reapplyFilters/reapplyFiltersRequestBuilder';
import {WorkbookTableRowRequestBuilder} from '../rows/item/workbookTableRowRequestBuilder';
import {RowsRequestBuilder} from '../rows/rowsRequestBuilder';
import {SortRequestBuilder} from '../sort/sortRequestBuilder';
import {WorksheetRequestBuilder} from '../worksheet/worksheetRequestBuilder';
import {HttpCore, HttpMethod, RequestInformation, ResponseHandler, MiddlewareOption} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /workbooks/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}  */
export class WorkbookTableRequestBuilder {
    public get clearFilters(): ClearFiltersRequestBuilder {
        return new ClearFiltersRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get columns(): ColumnsRequestBuilder {
        return new ColumnsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get convertToRange(): ConvertToRangeRequestBuilder {
        return new ConvertToRangeRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /** Current path for the request  */
    private readonly currentPath: string;
    /** The http core service to use to execute the requests.  */
    private readonly httpCore: HttpCore;
    /** Whether the current path is a raw URL  */
    private readonly isRawUrl: boolean;
    /** Path segment to use to build the URL for the current request builder  */
    private readonly pathSegment: string;
    public get reapplyFilters(): ReapplyFiltersRequestBuilder {
        return new ReapplyFiltersRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get rows(): RowsRequestBuilder {
        return new RowsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get sort(): SortRequestBuilder {
        return new SortRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get worksheet(): WorksheetRequestBuilder {
        return new WorksheetRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /**
     * Gets an item from the graphtypescriptv4.utilities.workbooks.workbook.worksheets.tables.columns collection
     * @param id Unique identifier of the item
     * @returns a WorkbookTableColumnRequestBuilder
     */
    public columnsById(id: String) : WorkbookTableColumnRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new WorkbookTableColumnRequestBuilder(this.currentPath + this.pathSegment + "/columns/" + id, this.httpCore, false);
    };
    /**
     * Instantiates a new WorkbookTableRequestBuilder and sets the default values.
     * @param currentPath Current path for the request
     * @param httpCore The http core service to use to execute the requests.
     * @param isRawUrl Whether the current path is a raw URL
     */
    public constructor(currentPath: string, httpCore: HttpCore, isRawUrl: boolean = true) {
        if(!currentPath) throw new Error("currentPath cannot be undefined");
        if(!httpCore) throw new Error("httpCore cannot be undefined");
        this.pathSegment = "";
        this.httpCore = httpCore;
        this.currentPath = currentPath;
        this.isRawUrl = isRawUrl;
    };
    /**
     * Collection of tables that are part of the worksheet. Read-only.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @returns a RequestInformation
     */
    public createDeleteRequestInformation(h?: object | undefined, o?: MiddlewareOption[] | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.setUri(this.currentPath, this.pathSegment, this.isRawUrl);
        requestInfo.httpMethod = HttpMethod.DELETE;
        h && requestInfo.setHeadersFromRawObject(h);
        o && requestInfo.addMiddlewareOptions(...o);
        return requestInfo;
    };
    /**
     * Collection of tables that are part of the worksheet. Read-only.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @returns a RequestInformation
     */
    public createGetRequestInformation(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.setUri(this.currentPath, this.pathSegment, this.isRawUrl);
        requestInfo.httpMethod = HttpMethod.GET;
        h && requestInfo.setHeadersFromRawObject(h);
        q && requestInfo.setQueryStringParametersFromRawObject(q);
        o && requestInfo.addMiddlewareOptions(...o);
        return requestInfo;
    };
    /**
     * Collection of tables that are part of the worksheet. Read-only.
     * @param body 
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: WorkbookTable | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.setUri(this.currentPath, this.pathSegment, this.isRawUrl);
        requestInfo.httpMethod = HttpMethod.PATCH;
        h && requestInfo.setHeadersFromRawObject(h);
        requestInfo.setContentFromParsable(this.httpCore, "application/json", body);
        o && requestInfo.addMiddlewareOptions(...o);
        return requestInfo;
    };
    /**
     * Collection of tables that are part of the worksheet. Read-only.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(h?: object | undefined, o?: MiddlewareOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.createDeleteRequestInformation(
            h, o
        );
        return this.httpCore?.sendNoResponseContentAsync(requestInfo, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Collection of tables that are part of the worksheet. Read-only.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of WorkbookTable
     */
    public get(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<WorkbookTable | undefined> {
        const requestInfo = this.createGetRequestInformation(
            q, h, o
        );
        return this.httpCore?.sendAsync<WorkbookTable>(requestInfo, WorkbookTable, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Collection of tables that are part of the worksheet. Read-only.
     * @param body 
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: WorkbookTable | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, h, o
        );
        return this.httpCore?.sendNoResponseContentAsync(requestInfo, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.workbooks.workbook.worksheets.tables.rows collection
     * @param id Unique identifier of the item
     * @returns a WorkbookTableRowRequestBuilder
     */
    public rowsById(id: String) : WorkbookTableRowRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new WorkbookTableRowRequestBuilder(this.currentPath + this.pathSegment + "/rows/" + id, this.httpCore, false);
    };
}
