import {ApplicationRequestBuilder} from './application/applicationRequestBuilder';
import {CommentsRequestBuilder} from './comments/commentsRequestBuilder';
import {WorkbookCommentRequestBuilder} from './comments/item/workbookCommentRequestBuilder';
import {FunctionsRequestBuilder} from './functions/functionsRequestBuilder';
import {Microsoft.graph.closeSessionRequestBuilder} from './microsoft/graph/closeSession/microsoft.graph.closeSessionRequestBuilder';
import {Microsoft.graph.createSessionRequestBuilder} from './microsoft/graph/createSession/microsoft.graph.createSessionRequestBuilder';
import {Microsoft.graph.refreshSessionRequestBuilder} from './microsoft/graph/refreshSession/microsoft.graph.refreshSessionRequestBuilder';
import {WorkbookNamedItemRequestBuilder} from './names/item/workbookNamedItemRequestBuilder';
import {NamesRequestBuilder} from './names/namesRequestBuilder';
import {WorkbookOperationRequestBuilder} from './operations/item/workbookOperationRequestBuilder';
import {OperationsRequestBuilder} from './operations/operationsRequestBuilder';
import {WorkbookTableRequestBuilder} from './tables/item/workbookTableRequestBuilder';
import {TablesRequestBuilder} from './tables/tablesRequestBuilder';
import {Workbook} from './workbook';
import {WorkbookWorksheetRequestBuilder} from './worksheets/item/workbookWorksheetRequestBuilder';
import {WorksheetsRequestBuilder} from './worksheets/worksheetsRequestBuilder';
import {HttpCore, HttpMethod, RequestInfo, ResponseHandler, MiddlewareOption} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /workbooks/{driveItem-id}/workbook  */
export class WorkbookRequestBuilder {
    public get application(): ApplicationRequestBuilder {
        return new ApplicationRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get comments(): CommentsRequestBuilder {
        return new CommentsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /** Current path for the request  */
    private readonly currentPath: string;
    public get functions(): FunctionsRequestBuilder {
        return new FunctionsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /** The http core service to use to execute the requests.  */
    private readonly httpCore: HttpCore;
    /** Whether the current path is a raw URL  */
    private readonly isRawUrl: boolean;
    public get microsoft.graph.closeSession(): Microsoft.graph.closeSessionRequestBuilder {
        return new Microsoft.graph.closeSessionRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get microsoft.graph.createSession(): Microsoft.graph.createSessionRequestBuilder {
        return new Microsoft.graph.createSessionRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get microsoft.graph.refreshSession(): Microsoft.graph.refreshSessionRequestBuilder {
        return new Microsoft.graph.refreshSessionRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get names(): NamesRequestBuilder {
        return new NamesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get operations(): OperationsRequestBuilder {
        return new OperationsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /** Path segment to use to build the URL for the current request builder  */
    private readonly pathSegment: string;
    public get tables(): TablesRequestBuilder {
        return new TablesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get worksheets(): WorksheetsRequestBuilder {
        return new WorksheetsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /**
     * Gets an item from the MicrosoftGraph.workbooks.workbook.comments collection
     * @param id Unique identifier of the item
     * @returns a WorkbookCommentRequestBuilder
     */
    public commentsById(id: String) : WorkbookCommentRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new WorkbookCommentRequestBuilder(this.currentPath + this.pathSegment + "/comments/" + id, this.httpCore, false);
    };
    /**
     * Instantiates a new WorkbookRequestBuilder and sets the default values.
     * @param currentPath Current path for the request
     * @param httpCore The http core service to use to execute the requests.
     * @param isRawUrl Whether the current path is a raw URL
     */
    public constructor(currentPath: string, httpCore: HttpCore, isRawUrl: boolean = true) {
        if(!currentPath) throw new Error("currentPath cannot be undefined");
        if(!httpCore) throw new Error("httpCore cannot be undefined");
        this.pathSegment = "/workbook";
        this.httpCore = httpCore;
        this.currentPath = currentPath;
        this.isRawUrl = isRawUrl;
    };
    /**
     * For files that are Excel spreadsheets, accesses the workbook API to work with the spreadsheet's contents. Nullable.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @returns a RequestInfo
     */
    public createDeleteRequestInfo(h?: object | undefined, o?: MiddlewareOption[] | undefined) : RequestInfo {
        const requestInfo = new RequestInfo();
        requestInfo.setUri(this.currentPath, this.pathSegment, this.isRawUrl);
        requestInfo.httpMethod = HttpMethod.DELETE;
        h && requestInfo.setHeadersFromRawObject(h);
        o && requestInfo.addMiddlewareOptions(...o);
        return requestInfo;
    };
    /**
     * For files that are Excel spreadsheets, accesses the workbook API to work with the spreadsheet's contents. Nullable.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @returns a RequestInfo
     */
    public createGetRequestInfo(q?: {
                    expand?: string[]
                    } | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined) : RequestInfo {
        const requestInfo = new RequestInfo();
        requestInfo.setUri(this.currentPath, this.pathSegment, this.isRawUrl);
        requestInfo.httpMethod = HttpMethod.GET;
        h && requestInfo.setHeadersFromRawObject(h);
        q && requestInfo.setQueryStringParametersFromRawObject(q);
        o && requestInfo.addMiddlewareOptions(...o);
        return requestInfo;
    };
    /**
     * For files that are Excel spreadsheets, accesses the workbook API to work with the spreadsheet's contents. Nullable.
     * @param body 
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @returns a RequestInfo
     */
    public createPatchRequestInfo(body: Workbook | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined) : RequestInfo {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInfo();
        requestInfo.setUri(this.currentPath, this.pathSegment, this.isRawUrl);
        requestInfo.httpMethod = HttpMethod.PATCH;
        h && requestInfo.setHeadersFromRawObject(h);
        requestInfo.setContentFromParsable(this.httpCore, "application/json", body);
        o && requestInfo.addMiddlewareOptions(...o);
        return requestInfo;
    };
    /**
     * For files that are Excel spreadsheets, accesses the workbook API to work with the spreadsheet's contents. Nullable.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(h?: object | undefined, o?: MiddlewareOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.createDeleteRequestInfo(
            h, o
        );
        return this.httpCore?.sendNoResponseContentAsync(requestInfo, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * For files that are Excel spreadsheets, accesses the workbook API to work with the spreadsheet's contents. Nullable.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Workbook
     */
    public get(q?: {
                    expand?: string[]
                    } | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Workbook | undefined> {
        const requestInfo = this.createGetRequestInfo(
            q, h, o
        );
        return this.httpCore?.sendAsync<Workbook>(requestInfo, Workbook, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the MicrosoftGraph.workbooks.workbook.names collection
     * @param id Unique identifier of the item
     * @returns a WorkbookNamedItemRequestBuilder
     */
    public namesById(id: String) : WorkbookNamedItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new WorkbookNamedItemRequestBuilder(this.currentPath + this.pathSegment + "/names/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the MicrosoftGraph.workbooks.workbook.operations collection
     * @param id Unique identifier of the item
     * @returns a WorkbookOperationRequestBuilder
     */
    public operationsById(id: String) : WorkbookOperationRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new WorkbookOperationRequestBuilder(this.currentPath + this.pathSegment + "/operations/" + id, this.httpCore, false);
    };
    /**
     * For files that are Excel spreadsheets, accesses the workbook API to work with the spreadsheet's contents. Nullable.
     * @param body 
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: Workbook | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInfo(
            body, h, o
        );
        return this.httpCore?.sendNoResponseContentAsync(requestInfo, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the MicrosoftGraph.workbooks.workbook.tables collection
     * @param id Unique identifier of the item
     * @returns a WorkbookTableRequestBuilder
     */
    public tablesById(id: String) : WorkbookTableRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new WorkbookTableRequestBuilder(this.currentPath + this.pathSegment + "/tables/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the MicrosoftGraph.workbooks.workbook.worksheets collection
     * @param id Unique identifier of the item
     * @returns a WorkbookWorksheetRequestBuilder
     */
    public worksheetsById(id: String) : WorkbookWorksheetRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new WorkbookWorksheetRequestBuilder(this.currentPath + this.pathSegment + "/worksheets/" + id, this.httpCore, false);
    };
}
