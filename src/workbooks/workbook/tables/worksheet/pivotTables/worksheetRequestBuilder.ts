import {WorkbookWorksheet} from '../../../../../../workbookWorksheet';
import {CellWithRowWithColumnRequestBuilder} from './cellWithRowWithColumn/cellWithRowWithColumnRequestBuilder';
import {RangeRequestBuilder} from './range/rangeRequestBuilder';
import {RangeWithAddressRequestBuilder} from './rangeWithAddress/rangeWithAddressRequestBuilder';
import {UsedRangeRequestBuilder} from './usedRange/usedRangeRequestBuilder';
import {UsedRangeWithValuesOnlyRequestBuilder} from './usedRangeWithValuesOnly/usedRangeWithValuesOnlyRequestBuilder';
import {HttpCore, HttpMethod, RequestInformation, ResponseHandler, MiddlewareOption} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /workbooks/{driveItem-id}/workbook/tables/{workbookTable-id}/worksheet/pivotTables/{workbookPivotTable-id}/worksheet  */
export class WorksheetRequestBuilder {
    /** Current path for the request  */
    private readonly currentPath: string;
    /** The http core service to use to execute the requests.  */
    private readonly httpCore: HttpCore;
    /** Whether the current path is a raw URL  */
    private readonly isRawUrl: boolean;
    /** Path segment to use to build the URL for the current request builder  */
    private readonly pathSegment: string;
    /**
     * Builds and executes requests for operations under /workbooks/{driveItem-id}/workbook/tables/{workbookTable-id}/worksheet/pivotTables/{workbookPivotTable-id}/worksheet/microsoft.graph.cell(row={row},column={column})
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
     * The worksheet containing the current PivotTable. Read-only.
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
     * The worksheet containing the current PivotTable. Read-only.
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
     * The worksheet containing the current PivotTable. Read-only.
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
     * The worksheet containing the current PivotTable. Read-only.
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
     * The worksheet containing the current PivotTable. Read-only.
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
     * The worksheet containing the current PivotTable. Read-only.
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
     * Builds and executes requests for operations under /workbooks/{driveItem-id}/workbook/tables/{workbookTable-id}/worksheet/pivotTables/{workbookPivotTable-id}/worksheet/microsoft.graph.range()
     * @returns a rangeRequestBuilder
     */
    public range() : RangeRequestBuilder {
        return new RangeRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    /**
     * Builds and executes requests for operations under /workbooks/{driveItem-id}/workbook/tables/{workbookTable-id}/worksheet/pivotTables/{workbookPivotTable-id}/worksheet/microsoft.graph.range(address='{address}')
     * @param address Usage: address={address}
     * @returns a rangeWithAddressRequestBuilder
     */
    public rangeWithAddress(address: string | undefined) : RangeWithAddressRequestBuilder {
        if(!address) throw new Error("address cannot be undefined");
        return new RangeWithAddressRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, address, false);
    };
    /**
     * Builds and executes requests for operations under /workbooks/{driveItem-id}/workbook/tables/{workbookTable-id}/worksheet/pivotTables/{workbookPivotTable-id}/worksheet/microsoft.graph.usedRange()
     * @returns a usedRangeRequestBuilder
     */
    public usedRange() : UsedRangeRequestBuilder {
        return new UsedRangeRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    /**
     * Builds and executes requests for operations under /workbooks/{driveItem-id}/workbook/tables/{workbookTable-id}/worksheet/pivotTables/{workbookPivotTable-id}/worksheet/microsoft.graph.usedRange(valuesOnly={valuesOnly})
     * @param valuesOnly Usage: valuesOnly={valuesOnly}
     * @returns a usedRangeWithValuesOnlyRequestBuilder
     */
    public usedRangeWithValuesOnly(valuesOnly: boolean | undefined) : UsedRangeWithValuesOnlyRequestBuilder {
        if(!valuesOnly) throw new Error("valuesOnly cannot be undefined");
        return new UsedRangeWithValuesOnlyRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, valuesOnly, false);
    };
}
