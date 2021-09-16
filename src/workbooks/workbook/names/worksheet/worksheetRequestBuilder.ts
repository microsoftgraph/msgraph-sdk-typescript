import {WorkbookWorksheet} from '../../../../workbookWorksheet';
import {CellWithRowWithColumnRequestBuilder} from './cellWithRowWithColumn/cellWithRowWithColumnRequestBuilder';
import {ChartsRequestBuilder} from './charts/chartsRequestBuilder';
import {WorkbookChartRequestBuilder} from './charts/item/workbookChartRequestBuilder';
import {WorkbookNamedItemRequestBuilder} from './names/item/workbookNamedItemRequestBuilder';
import {NamesRequestBuilder} from './names/namesRequestBuilder';
import {WorkbookPivotTableRequestBuilder} from './pivotTables/item/workbookPivotTableRequestBuilder';
import {PivotTablesRequestBuilder} from './pivotTables/pivotTablesRequestBuilder';
import {ProtectionRequestBuilder} from './protection/protectionRequestBuilder';
import {RangeRequestBuilder} from './range/rangeRequestBuilder';
import {RangeWithAddressRequestBuilder} from './rangeWithAddress/rangeWithAddressRequestBuilder';
import {WorkbookTableRequestBuilder} from './tables/item/workbookTableRequestBuilder';
import {TablesRequestBuilder} from './tables/tablesRequestBuilder';
import {UsedRangeRequestBuilder} from './usedRange/usedRangeRequestBuilder';
import {UsedRangeWithValuesOnlyRequestBuilder} from './usedRangeWithValuesOnly/usedRangeWithValuesOnlyRequestBuilder';
import {HttpCore, HttpMethod, RequestInformation, ResponseHandler, MiddlewareOption} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /workbooks/{driveItem-id}/workbook/names/{workbookNamedItem-id}/worksheet  */
export class WorksheetRequestBuilder {
    public get charts(): ChartsRequestBuilder {
        return new ChartsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /** Current path for the request  */
    private readonly currentPath: string;
    /** The http core service to use to execute the requests.  */
    private readonly httpCore: HttpCore;
    /** Whether the current path is a raw URL  */
    private readonly isRawUrl: boolean;
    public get names(): NamesRequestBuilder {
        return new NamesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /** Path segment to use to build the URL for the current request builder  */
    private readonly pathSegment: string;
    public get pivotTables(): PivotTablesRequestBuilder {
        return new PivotTablesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get protection(): ProtectionRequestBuilder {
        return new ProtectionRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get tables(): TablesRequestBuilder {
        return new TablesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /**
     * Builds and executes requests for operations under /workbooks/{driveItem-id}/workbook/names/{workbookNamedItem-id}/worksheet/microsoft.graph.cell(row={row},column={column})
     * @param column Usage: column={column}
     * @param row Usage: row={row}
     * @returns a cellWithRowWithColumnRequestBuilder
     */
    public cellWithRowWithColumn(row: number | undefined, column: number | undefined) : CellWithRowWithColumnRequestBuilder {
        if(!column) throw new Error("column cannot be undefined");
        if(!row) throw new Error("row cannot be undefined");
        return new CellWithRowWithColumnRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, row, column, false);
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.workbooks.workbook.names.worksheet.charts collection
     * @param id Unique identifier of the item
     * @returns a workbookChartRequestBuilder
     */
    public chartsById(id: String) : WorkbookChartRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new WorkbookChartRequestBuilder(this.currentPath + this.pathSegment + "/charts/" + id, this.httpCore, false);
    };
    /**
     * Instantiates a new WorksheetRequestBuilder and sets the default values.
     * @param currentPath Current path for the request
     * @param httpCore The http core service to use to execute the requests.
     * @param isRawUrl Whether the current path is a raw URL
     */
    public constructor(currentPath: string, httpCore: HttpCore, isRawUrl: boolean = true) {
        if(!currentPath) throw new Error("currentPath cannot be undefined");
        if(!httpCore) throw new Error("httpCore cannot be undefined");
        this.pathSegment = "/worksheet";
        this.httpCore = httpCore;
        this.currentPath = currentPath;
        this.isRawUrl = isRawUrl;
    };
    /**
     * Returns the worksheet on which the named item is scoped to. Available only if the item is scoped to the worksheet. Read-only.
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
     * Returns the worksheet on which the named item is scoped to. Available only if the item is scoped to the worksheet. Read-only.
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
     * Returns the worksheet on which the named item is scoped to. Available only if the item is scoped to the worksheet. Read-only.
     * @param body 
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: WorkbookWorksheet | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined) : RequestInformation {
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
     * Returns the worksheet on which the named item is scoped to. Available only if the item is scoped to the worksheet. Read-only.
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
     * Returns the worksheet on which the named item is scoped to. Available only if the item is scoped to the worksheet. Read-only.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of WorkbookWorksheet
     */
    public get(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<WorkbookWorksheet | undefined> {
        const requestInfo = this.createGetRequestInformation(
            q, h, o
        );
        return this.httpCore?.sendAsync<WorkbookWorksheet>(requestInfo, WorkbookWorksheet, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.workbooks.workbook.names.worksheet.names collection
     * @param id Unique identifier of the item
     * @returns a workbookNamedItemRequestBuilder
     */
    public namesById(id: String) : WorkbookNamedItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new WorkbookNamedItemRequestBuilder(this.currentPath + this.pathSegment + "/names/" + id, this.httpCore, false);
    };
    /**
     * Returns the worksheet on which the named item is scoped to. Available only if the item is scoped to the worksheet. Read-only.
     * @param body 
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: WorkbookWorksheet | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, h, o
        );
        return this.httpCore?.sendNoResponseContentAsync(requestInfo, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.workbooks.workbook.names.worksheet.pivotTables collection
     * @param id Unique identifier of the item
     * @returns a workbookPivotTableRequestBuilder
     */
    public pivotTablesById(id: String) : WorkbookPivotTableRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new WorkbookPivotTableRequestBuilder(this.currentPath + this.pathSegment + "/pivotTables/" + id, this.httpCore, false);
    };
    /**
     * Builds and executes requests for operations under /workbooks/{driveItem-id}/workbook/names/{workbookNamedItem-id}/worksheet/microsoft.graph.range()
     * @returns a rangeRequestBuilder
     */
    public range() : RangeRequestBuilder {
        return new RangeRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    /**
     * Builds and executes requests for operations under /workbooks/{driveItem-id}/workbook/names/{workbookNamedItem-id}/worksheet/microsoft.graph.range(address='{address}')
     * @param address Usage: address={address}
     * @returns a rangeWithAddressRequestBuilder
     */
    public rangeWithAddress(address: string | undefined) : RangeWithAddressRequestBuilder {
        if(!address) throw new Error("address cannot be undefined");
        return new RangeWithAddressRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, address, false);
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.workbooks.workbook.names.worksheet.tables collection
     * @param id Unique identifier of the item
     * @returns a workbookTableRequestBuilder
     */
    public tablesById(id: String) : WorkbookTableRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new WorkbookTableRequestBuilder(this.currentPath + this.pathSegment + "/tables/" + id, this.httpCore, false);
    };
    /**
     * Builds and executes requests for operations under /workbooks/{driveItem-id}/workbook/names/{workbookNamedItem-id}/worksheet/microsoft.graph.usedRange()
     * @returns a usedRangeRequestBuilder
     */
    public usedRange() : UsedRangeRequestBuilder {
        return new UsedRangeRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    /**
     * Builds and executes requests for operations under /workbooks/{driveItem-id}/workbook/names/{workbookNamedItem-id}/worksheet/microsoft.graph.usedRange(valuesOnly={valuesOnly})
     * @param valuesOnly Usage: valuesOnly={valuesOnly}
     * @returns a usedRangeWithValuesOnlyRequestBuilder
     */
    public usedRangeWithValuesOnly(valuesOnly: boolean | undefined) : UsedRangeWithValuesOnlyRequestBuilder {
        if(!valuesOnly) throw new Error("valuesOnly cannot be undefined");
        return new UsedRangeWithValuesOnlyRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, valuesOnly, false);
    };
}
