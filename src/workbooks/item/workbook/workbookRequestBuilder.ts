import {Workbook} from '../../../models/microsoft/graph/workbook';
import {ApplicationRequestBuilder} from './application/applicationRequestBuilder';
import {CloseSessionRequestBuilder} from './closeSession/closeSessionRequestBuilder';
import {CommentsRequestBuilder} from './comments/commentsRequestBuilder';
import {WorkbookCommentItemRequestBuilder} from './comments/item/workbookCommentItemRequestBuilder';
import {CreateSessionRequestBuilder} from './createSession/createSessionRequestBuilder';
import {FunctionsRequestBuilder} from './functions/functionsRequestBuilder';
import {WorkbookNamedItemItemRequestBuilder} from './names/item/workbookNamedItemItemRequestBuilder';
import {NamesRequestBuilder} from './names/namesRequestBuilder';
import {WorkbookOperationItemRequestBuilder} from './operations/item/workbookOperationItemRequestBuilder';
import {OperationsRequestBuilder} from './operations/operationsRequestBuilder';
import {RefreshSessionRequestBuilder} from './refreshSession/refreshSessionRequestBuilder';
import {SessionInfoResourceWithKeyRequestBuilder} from './sessionInfoResourceWithKey/sessionInfoResourceWithKeyRequestBuilder';
import {TableRowOperationResultWithKeyRequestBuilder} from './tableRowOperationResultWithKey/tableRowOperationResultWithKeyRequestBuilder';
import {WorkbookTableItemRequestBuilder} from './tables/item/workbookTableItemRequestBuilder';
import {TablesRequestBuilder} from './tables/tablesRequestBuilder';
import {WorkbookWorksheetItemRequestBuilder} from './worksheets/item/workbookWorksheetItemRequestBuilder';
import {WorksheetsRequestBuilder} from './worksheets/worksheetsRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /workbooks/{driveItem-id}/workbook  */
export class WorkbookRequestBuilder {
    public get application(): ApplicationRequestBuilder {
        return new ApplicationRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get closeSession(): CloseSessionRequestBuilder {
        return new CloseSessionRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get comments(): CommentsRequestBuilder {
        return new CommentsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get createSession(): CreateSessionRequestBuilder {
        return new CreateSessionRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get functions(): FunctionsRequestBuilder {
        return new FunctionsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get names(): NamesRequestBuilder {
        return new NamesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get operations(): OperationsRequestBuilder {
        return new OperationsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request  */
    private readonly pathParameters: Record<string, unknown>;
    public get refreshSession(): RefreshSessionRequestBuilder {
        return new RefreshSessionRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The request adapter to use to execute the requests.  */
    private readonly requestAdapter: RequestAdapter;
    public get tables(): TablesRequestBuilder {
        return new TablesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder  */
    private readonly urlTemplate: string;
    public get worksheets(): WorksheetsRequestBuilder {
        return new WorksheetsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.workbooks.item.workbook.comments.item collection
     * @param id Unique identifier of the item
     * @returns a workbookCommentItemRequestBuilder
     */
    public commentsById(id: string) : WorkbookCommentItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["workbookComment_id"] = id
        return new WorkbookCommentItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new WorkbookRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/workbooks/{driveItem_id}/workbook{?expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * For files that are Excel spreadsheets, accesses the workbook API to work with the spreadsheet's contents. Nullable.
     * @param h Request headers
     * @param o Request options
     * @returns a RequestInformation
     */
    public createDeleteRequestInformation(h?: Record<string, string> | undefined, o?: RequestOption[] | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.DELETE;
        if(h) requestInfo.headers = h;
        o && requestInfo.addRequestOptions(...o);
        return requestInfo;
    };
    /**
     * For files that are Excel spreadsheets, accesses the workbook API to work with the spreadsheet's contents. Nullable.
     * @param h Request headers
     * @param o Request options
     * @param q Request query parameters
     * @returns a RequestInformation
     */
    public createGetRequestInformation(q?: {
                    expand?: string[]
                    } | undefined, h?: Record<string, string> | undefined, o?: RequestOption[] | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        if(h) requestInfo.headers = h;
        q && requestInfo.setQueryStringParametersFromRawObject(q);
        o && requestInfo.addRequestOptions(...o);
        return requestInfo;
    };
    /**
     * For files that are Excel spreadsheets, accesses the workbook API to work with the spreadsheet's contents. Nullable.
     * @param body 
     * @param h Request headers
     * @param o Request options
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: Workbook | undefined, h?: Record<string, string> | undefined, o?: RequestOption[] | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.PATCH;
        if(h) requestInfo.headers = h;
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        o && requestInfo.addRequestOptions(...o);
        return requestInfo;
    };
    /**
     * For files that are Excel spreadsheets, accesses the workbook API to work with the spreadsheet's contents. Nullable.
     * @param h Request headers
     * @param o Request options
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(h?: Record<string, string> | undefined, o?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.createDeleteRequestInformation(
            h, o
        );
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, undefined) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * For files that are Excel spreadsheets, accesses the workbook API to work with the spreadsheet's contents. Nullable.
     * @param h Request headers
     * @param o Request options
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Workbook
     */
    public get(q?: {
                    expand?: string[]
                    } | undefined, h?: Record<string, string> | undefined, o?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Workbook | undefined> {
        const requestInfo = this.createGetRequestInformation(
            q, h, o
        );
        return this.requestAdapter?.sendAsync<Workbook>(requestInfo, Workbook, responseHandler, undefined) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.workbooks.item.workbook.names.item collection
     * @param id Unique identifier of the item
     * @returns a workbookNamedItemItemRequestBuilder
     */
    public namesById(id: string) : WorkbookNamedItemItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["workbookNamedItem_id"] = id
        return new WorkbookNamedItemItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.workbooks.item.workbook.operations.item collection
     * @param id Unique identifier of the item
     * @returns a workbookOperationItemRequestBuilder
     */
    public operationsById(id: string) : WorkbookOperationItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["workbookOperation_id"] = id
        return new WorkbookOperationItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * For files that are Excel spreadsheets, accesses the workbook API to work with the spreadsheet's contents. Nullable.
     * @param body 
     * @param h Request headers
     * @param o Request options
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: Workbook | undefined, h?: Record<string, string> | undefined, o?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, h, o
        );
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, undefined) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Builds and executes requests for operations under /workbooks/{driveItem-id}/workbook/microsoft.graph.sessionInfoResource(key='{key}')
     * @param key Usage: key={key}
     * @returns a sessionInfoResourceWithKeyRequestBuilder
     */
    public sessionInfoResourceWithKey(key: string | undefined) : SessionInfoResourceWithKeyRequestBuilder {
        if(!key) throw new Error("key cannot be undefined");
        return new SessionInfoResourceWithKeyRequestBuilder(this.pathParameters, this.requestAdapter, key);
    };
    /**
     * Builds and executes requests for operations under /workbooks/{driveItem-id}/workbook/microsoft.graph.tableRowOperationResult(key='{key}')
     * @param key Usage: key={key}
     * @returns a tableRowOperationResultWithKeyRequestBuilder
     */
    public tableRowOperationResultWithKey(key: string | undefined) : TableRowOperationResultWithKeyRequestBuilder {
        if(!key) throw new Error("key cannot be undefined");
        return new TableRowOperationResultWithKeyRequestBuilder(this.pathParameters, this.requestAdapter, key);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.workbooks.item.workbook.tables.item collection
     * @param id Unique identifier of the item
     * @returns a workbookTableItemRequestBuilder
     */
    public tablesById(id: string) : WorkbookTableItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["workbookTable_id"] = id
        return new WorkbookTableItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.workbooks.item.workbook.worksheets.item collection
     * @param id Unique identifier of the item
     * @returns a workbookWorksheetItemRequestBuilder
     */
    public worksheetsById(id: string) : WorkbookWorksheetItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["workbookWorksheet_id"] = id
        return new WorkbookWorksheetItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
}
