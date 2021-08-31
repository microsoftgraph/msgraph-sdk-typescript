import {Filter} from './filter';
import {Microsoft.graph.applyRequestBuilder} from './microsoft/graph/apply/microsoft.graph.applyRequestBuilder';
import {Microsoft.graph.applyBottomItemsFilterRequestBuilder} from './microsoft/graph/applyBottomItemsFilter/microsoft.graph.applyBottomItemsFilterRequestBuilder';
import {Microsoft.graph.applyBottomPercentFilterRequestBuilder} from './microsoft/graph/applyBottomPercentFilter/microsoft.graph.applyBottomPercentFilterRequestBuilder';
import {Microsoft.graph.applyCellColorFilterRequestBuilder} from './microsoft/graph/applyCellColorFilter/microsoft.graph.applyCellColorFilterRequestBuilder';
import {Microsoft.graph.applyCustomFilterRequestBuilder} from './microsoft/graph/applyCustomFilter/microsoft.graph.applyCustomFilterRequestBuilder';
import {Microsoft.graph.applyDynamicFilterRequestBuilder} from './microsoft/graph/applyDynamicFilter/microsoft.graph.applyDynamicFilterRequestBuilder';
import {Microsoft.graph.applyFontColorFilterRequestBuilder} from './microsoft/graph/applyFontColorFilter/microsoft.graph.applyFontColorFilterRequestBuilder';
import {Microsoft.graph.applyIconFilterRequestBuilder} from './microsoft/graph/applyIconFilter/microsoft.graph.applyIconFilterRequestBuilder';
import {Microsoft.graph.applyTopItemsFilterRequestBuilder} from './microsoft/graph/applyTopItemsFilter/microsoft.graph.applyTopItemsFilterRequestBuilder';
import {Microsoft.graph.applyTopPercentFilterRequestBuilder} from './microsoft/graph/applyTopPercentFilter/microsoft.graph.applyTopPercentFilterRequestBuilder';
import {Microsoft.graph.applyValuesFilterRequestBuilder} from './microsoft/graph/applyValuesFilter/microsoft.graph.applyValuesFilterRequestBuilder';
import {Microsoft.graph.clearRequestBuilder} from './microsoft/graph/clear/microsoft.graph.clearRequestBuilder';
import {WorkbookFilter} from './workbookFilter';
import {HttpCore, HttpMethod, RequestInfo, ResponseHandler, MiddlewareOption} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /workbooks/{driveItem-id}/workbook/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter  */
export class FilterRequestBuilder {
    /** Current path for the request  */
    private readonly currentPath: string;
    /** The http core service to use to execute the requests.  */
    private readonly httpCore: HttpCore;
    /** Whether the current path is a raw URL  */
    private readonly isRawUrl: boolean;
    public get microsoft.graph.apply(): Microsoft.graph.applyRequestBuilder {
        return new Microsoft.graph.applyRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get microsoft.graph.applyBottomItemsFilter(): Microsoft.graph.applyBottomItemsFilterRequestBuilder {
        return new Microsoft.graph.applyBottomItemsFilterRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get microsoft.graph.applyBottomPercentFilter(): Microsoft.graph.applyBottomPercentFilterRequestBuilder {
        return new Microsoft.graph.applyBottomPercentFilterRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get microsoft.graph.applyCellColorFilter(): Microsoft.graph.applyCellColorFilterRequestBuilder {
        return new Microsoft.graph.applyCellColorFilterRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get microsoft.graph.applyCustomFilter(): Microsoft.graph.applyCustomFilterRequestBuilder {
        return new Microsoft.graph.applyCustomFilterRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get microsoft.graph.applyDynamicFilter(): Microsoft.graph.applyDynamicFilterRequestBuilder {
        return new Microsoft.graph.applyDynamicFilterRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get microsoft.graph.applyFontColorFilter(): Microsoft.graph.applyFontColorFilterRequestBuilder {
        return new Microsoft.graph.applyFontColorFilterRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get microsoft.graph.applyIconFilter(): Microsoft.graph.applyIconFilterRequestBuilder {
        return new Microsoft.graph.applyIconFilterRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get microsoft.graph.applyTopItemsFilter(): Microsoft.graph.applyTopItemsFilterRequestBuilder {
        return new Microsoft.graph.applyTopItemsFilterRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get microsoft.graph.applyTopPercentFilter(): Microsoft.graph.applyTopPercentFilterRequestBuilder {
        return new Microsoft.graph.applyTopPercentFilterRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get microsoft.graph.applyValuesFilter(): Microsoft.graph.applyValuesFilterRequestBuilder {
        return new Microsoft.graph.applyValuesFilterRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get microsoft.graph.clear(): Microsoft.graph.clearRequestBuilder {
        return new Microsoft.graph.clearRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /** Path segment to use to build the URL for the current request builder  */
    private readonly pathSegment: string;
    /**
     * Instantiates a new FilterRequestBuilder and sets the default values.
     * @param currentPath Current path for the request
     * @param httpCore The http core service to use to execute the requests.
     * @param isRawUrl Whether the current path is a raw URL
     */
    public constructor(currentPath: string, httpCore: HttpCore, isRawUrl: boolean = true) {
        if(!currentPath) throw new Error("currentPath cannot be undefined");
        if(!httpCore) throw new Error("httpCore cannot be undefined");
        this.pathSegment = "/filter";
        this.httpCore = httpCore;
        this.currentPath = currentPath;
        this.isRawUrl = isRawUrl;
    };
    /**
     * Retrieve the filter applied to the column. Read-only.
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
     * Retrieve the filter applied to the column. Read-only.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @returns a RequestInfo
     */
    public createGetRequestInfo(q?: {
                    expand?: string[],
                    select?: string[]
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
     * Retrieve the filter applied to the column. Read-only.
     * @param body 
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @returns a RequestInfo
     */
    public createPatchRequestInfo(body: Filter | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined) : RequestInfo {
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
     * Retrieve the filter applied to the column. Read-only.
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
     * Retrieve the filter applied to the column. Read-only.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of WorkbookFilter
     */
    public get(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<WorkbookFilter | undefined> {
        const requestInfo = this.createGetRequestInfo(
            q, h, o
        );
        return this.httpCore?.sendAsync<WorkbookFilter>(requestInfo, WorkbookFilter, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Retrieve the filter applied to the column. Read-only.
     * @param body 
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: Filter | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInfo(
            body, h, o
        );
        return this.httpCore?.sendNoResponseContentAsync(requestInfo, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
}
