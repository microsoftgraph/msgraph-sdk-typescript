import {WorkbookWorksheet} from '../../../../workbookWorksheet';
import {Worksheet} from '../../names/worksheet/worksheet';
import {ChartsRequestBuilder} from './charts/chartsRequestBuilder';
import {WorkbookChartRequestBuilder} from './charts/item/workbookChartRequestBuilder';
import {WorkbookNamedItemRequestBuilder} from './names/item/workbookNamedItemRequestBuilder';
import {NamesRequestBuilder} from './names/namesRequestBuilder';
import {WorkbookPivotTableRequestBuilder} from './pivotTables/item/workbookPivotTableRequestBuilder';
import {PivotTablesRequestBuilder} from './pivotTables/pivotTablesRequestBuilder';
import {ProtectionRequestBuilder} from './protection/protectionRequestBuilder';
import {WorkbookTableRequestBuilder} from './tables/item/workbookTableRequestBuilder';
import {TablesRequestBuilder} from './tables/tablesRequestBuilder';
import {HttpCore, HttpMethod, RequestInformation, ResponseHandler, MiddlewareOption} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /workbooks/{driveItem-id}/workbook/tables/{workbookTable-id}/worksheet  */
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
     * Gets an item from the graphtypescriptv4.utilities.workbooks.workbook.tables.worksheet.charts collection
     * @param id Unique identifier of the item
     * @returns a WorkbookChartRequestBuilder
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
     * The worksheet containing the current table. Read-only.
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
     * The worksheet containing the current table. Read-only.
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
     * The worksheet containing the current table. Read-only.
     * @param body 
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: Worksheet | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined) : RequestInformation {
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
     * The worksheet containing the current table. Read-only.
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
     * The worksheet containing the current table. Read-only.
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
     * Gets an item from the graphtypescriptv4.utilities.workbooks.workbook.tables.worksheet.names collection
     * @param id Unique identifier of the item
     * @returns a WorkbookNamedItemRequestBuilder
     */
    public namesById(id: String) : WorkbookNamedItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new WorkbookNamedItemRequestBuilder(this.currentPath + this.pathSegment + "/names/" + id, this.httpCore, false);
    };
    /**
     * The worksheet containing the current table. Read-only.
     * @param body 
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: Worksheet | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, h, o
        );
        return this.httpCore?.sendNoResponseContentAsync(requestInfo, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.workbooks.workbook.tables.worksheet.pivotTables collection
     * @param id Unique identifier of the item
     * @returns a WorkbookPivotTableRequestBuilder
     */
    public pivotTablesById(id: String) : WorkbookPivotTableRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new WorkbookPivotTableRequestBuilder(this.currentPath + this.pathSegment + "/pivotTables/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.workbooks.workbook.tables.worksheet.tables collection
     * @param id Unique identifier of the item
     * @returns a WorkbookTableRequestBuilder
     */
    public tablesById(id: String) : WorkbookTableRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new WorkbookTableRequestBuilder(this.currentPath + this.pathSegment + "/tables/" + id, this.httpCore, false);
    };
}
