import {Workbook} from '../../../../../models/';
import {createWorkbookFromDiscriminatorValue} from '../../../../../models/createWorkbookFromDiscriminatorValue';
import {ODataError} from '../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
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
import {WorkbookRequestBuilderDeleteRequestConfiguration} from './workbookRequestBuilderDeleteRequestConfiguration';
import {WorkbookRequestBuilderGetRequestConfiguration} from './workbookRequestBuilderGetRequestConfiguration';
import {WorkbookRequestBuilderPatchRequestConfiguration} from './workbookRequestBuilderPatchRequestConfiguration';
import {WorkbookWorksheetItemRequestBuilder} from './worksheets/item/workbookWorksheetItemRequestBuilder';
import {WorksheetsRequestBuilder} from './worksheets/worksheetsRequestBuilder';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the workbook property of the microsoft.graph.driveItem entity.
 */
export class WorkbookRequestBuilder extends BaseRequestBuilder {
    /** Provides operations to manage the application property of the microsoft.graph.workbook entity. */
    public get application(): ApplicationRequestBuilder {
        return new ApplicationRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the closeSession method. */
    public get closeSession(): CloseSessionRequestBuilder {
        return new CloseSessionRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the comments property of the microsoft.graph.workbook entity. */
    public get comments(): CommentsRequestBuilder {
        return new CommentsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the createSession method. */
    public get createSession(): CreateSessionRequestBuilder {
        return new CreateSessionRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the functions property of the microsoft.graph.workbook entity. */
    public get functions(): FunctionsRequestBuilder {
        return new FunctionsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the names property of the microsoft.graph.workbook entity. */
    public get names(): NamesRequestBuilder {
        return new NamesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the operations property of the microsoft.graph.workbook entity. */
    public get operations(): OperationsRequestBuilder {
        return new OperationsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the refreshSession method. */
    public get refreshSession(): RefreshSessionRequestBuilder {
        return new RefreshSessionRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the tables property of the microsoft.graph.workbook entity. */
    public get tables(): TablesRequestBuilder {
        return new TablesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the worksheets property of the microsoft.graph.workbook entity. */
    public get worksheets(): WorksheetsRequestBuilder {
        return new WorksheetsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the comments property of the microsoft.graph.workbook entity.
     * @param id Unique identifier of the item
     * @returns a WorkbookCommentItemRequestBuilder
     */
    public commentsById(id: string) : WorkbookCommentItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["workbookComment%2Did"] = id
        return new WorkbookCommentItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new WorkbookRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook{?%24select,%24expand}");
    };
    /**
     * Delete navigation property workbook for drives
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of ArrayBuffer
     */
    public delete(requestConfiguration?: WorkbookRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<ArrayBuffer | undefined> {
        const requestInfo = this.toDeleteRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendPrimitiveAsync<ArrayBuffer>(requestInfo, "ArrayBuffer", responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * For files that are Excel spreadsheets, accesses the workbook API to work with the spreadsheet's contents. Nullable.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Workbook
     */
    public get(requestConfiguration?: WorkbookRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Workbook | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<Workbook>(requestInfo, createWorkbookFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Provides operations to manage the names property of the microsoft.graph.workbook entity.
     * @param id Unique identifier of the item
     * @returns a WorkbookNamedItemItemRequestBuilder
     */
    public namesById(id: string) : WorkbookNamedItemItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["workbookNamedItem%2Did"] = id
        return new WorkbookNamedItemItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the operations property of the microsoft.graph.workbook entity.
     * @param id Unique identifier of the item
     * @returns a WorkbookOperationItemRequestBuilder
     */
    public operationsById(id: string) : WorkbookOperationItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["workbookOperation%2Did"] = id
        return new WorkbookOperationItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Update the navigation property workbook in drives
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Workbook
     */
    public patch(body: Workbook | undefined, requestConfiguration?: WorkbookRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Workbook | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<Workbook>(requestInfo, createWorkbookFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Provides operations to call the sessionInfoResource method.
     * @param key Usage: key='{key}'
     * @returns a sessionInfoResourceWithKeyRequestBuilder
     */
    public sessionInfoResourceWithKey(key: string | undefined) : SessionInfoResourceWithKeyRequestBuilder {
        if(!key) throw new Error("key cannot be undefined");
        return new SessionInfoResourceWithKeyRequestBuilder(this.pathParameters, this.requestAdapter, key);
    };
    /**
     * Provides operations to call the tableRowOperationResult method.
     * @param key Usage: key='{key}'
     * @returns a tableRowOperationResultWithKeyRequestBuilder
     */
    public tableRowOperationResultWithKey(key: string | undefined) : TableRowOperationResultWithKeyRequestBuilder {
        if(!key) throw new Error("key cannot be undefined");
        return new TableRowOperationResultWithKeyRequestBuilder(this.pathParameters, this.requestAdapter, key);
    };
    /**
     * Provides operations to manage the tables property of the microsoft.graph.workbook entity.
     * @param id Unique identifier of the item
     * @returns a WorkbookTableItemRequestBuilder
     */
    public tablesById(id: string) : WorkbookTableItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["workbookTable%2Did"] = id
        return new WorkbookTableItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Delete navigation property workbook for drives
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: WorkbookRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * For files that are Excel spreadsheets, accesses the workbook API to work with the spreadsheet's contents. Nullable.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: WorkbookRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property workbook in drives
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: Workbook | undefined, requestConfiguration?: WorkbookRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
    /**
     * Provides operations to manage the worksheets property of the microsoft.graph.workbook entity.
     * @param id Unique identifier of the item
     * @returns a WorkbookWorksheetItemRequestBuilder
     */
    public worksheetsById(id: string) : WorkbookWorksheetItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["workbookWorksheet%2Did"] = id
        return new WorkbookWorksheetItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
}
