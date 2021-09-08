import {RangeRequestBuilder} from '../../../../names/worksheet/range/rangeRequestBuilder';
import {DataBodyRangeRequestBuilder} from '../../../../names/worksheet/tables/dataBodyRange/dataBodyRangeRequestBuilder';
import {HeaderRowRangeRequestBuilder} from '../../../../names/worksheet/tables/headerRowRange/headerRowRangeRequestBuilder';
import {TotalRowRangeRequestBuilder} from '../../../../names/worksheet/tables/totalRowRange/totalRowRangeRequestBuilder';
import {WorkbookTableColumn} from '../../../../workbookTableColumn';
import {FilterRequestBuilder} from '../filter/filterRequestBuilder';
import {HttpCore, HttpMethod, RequestInformation, ResponseHandler, MiddlewareOption} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /workbooks/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}  */
export class WorkbookTableColumnRequestBuilder {
    /** Current path for the request  */
    private readonly currentPath: string;
    public get filter(): FilterRequestBuilder {
        return new FilterRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /** The http core service to use to execute the requests.  */
    private readonly httpCore: HttpCore;
    /** Whether the current path is a raw URL  */
    private readonly isRawUrl: boolean;
    /** Path segment to use to build the URL for the current request builder  */
    private readonly pathSegment: string;
    /**
     * Instantiates a new WorkbookTableColumnRequestBuilder and sets the default values.
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
     * Represents a collection of all the columns in the table. Read-only.
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
     * Represents a collection of all the columns in the table. Read-only.
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
     * Represents a collection of all the columns in the table. Read-only.
     * @param body 
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: WorkbookTableColumn | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined) : RequestInformation {
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
     * Builds and executes requests for operations under /workbooks/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/microsoft.graph.dataBodyRange()
     * @returns a dataBodyRangeRequestBuilder
     */
    public dataBodyRange() : DataBodyRangeRequestBuilder {
        return new DataBodyRangeRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    /**
     * Represents a collection of all the columns in the table. Read-only.
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
     * Represents a collection of all the columns in the table. Read-only.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of WorkbookTableColumn
     */
    public get(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<WorkbookTableColumn | undefined> {
        const requestInfo = this.createGetRequestInformation(
            q, h, o
        );
        return this.httpCore?.sendAsync<WorkbookTableColumn>(requestInfo, WorkbookTableColumn, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Builds and executes requests for operations under /workbooks/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/microsoft.graph.headerRowRange()
     * @returns a headerRowRangeRequestBuilder
     */
    public headerRowRange() : HeaderRowRangeRequestBuilder {
        return new HeaderRowRangeRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    /**
     * Represents a collection of all the columns in the table. Read-only.
     * @param body 
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: WorkbookTableColumn | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, h, o
        );
        return this.httpCore?.sendNoResponseContentAsync(requestInfo, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Builds and executes requests for operations under /workbooks/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/microsoft.graph.range()
     * @returns a rangeRequestBuilder
     */
    public range() : RangeRequestBuilder {
        return new RangeRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    /**
     * Builds and executes requests for operations under /workbooks/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/microsoft.graph.totalRowRange()
     * @returns a totalRowRangeRequestBuilder
     */
    public totalRowRange() : TotalRowRangeRequestBuilder {
        return new TotalRowRangeRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
}
