import {WorkbookFilter} from '../../../../../../workbookFilter';
import {Filter} from '../../../../names/worksheet/tables/columns/filter/filter';
import {ApplyRequestBuilder} from './apply/applyRequestBuilder';
import {ApplyBottomItemsFilterRequestBuilder} from './applyBottomItemsFilter/applyBottomItemsFilterRequestBuilder';
import {ApplyBottomPercentFilterRequestBuilder} from './applyBottomPercentFilter/applyBottomPercentFilterRequestBuilder';
import {ApplyCellColorFilterRequestBuilder} from './applyCellColorFilter/applyCellColorFilterRequestBuilder';
import {ApplyCustomFilterRequestBuilder} from './applyCustomFilter/applyCustomFilterRequestBuilder';
import {ApplyDynamicFilterRequestBuilder} from './applyDynamicFilter/applyDynamicFilterRequestBuilder';
import {ApplyFontColorFilterRequestBuilder} from './applyFontColorFilter/applyFontColorFilterRequestBuilder';
import {ApplyIconFilterRequestBuilder} from './applyIconFilter/applyIconFilterRequestBuilder';
import {ApplyTopItemsFilterRequestBuilder} from './applyTopItemsFilter/applyTopItemsFilterRequestBuilder';
import {ApplyTopPercentFilterRequestBuilder} from './applyTopPercentFilter/applyTopPercentFilterRequestBuilder';
import {ApplyValuesFilterRequestBuilder} from './applyValuesFilter/applyValuesFilterRequestBuilder';
import {ClearRequestBuilder} from './clear/clearRequestBuilder';
import {HttpCore, HttpMethod, RequestInformation, ResponseHandler, MiddlewareOption} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /workbooks/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter  */
export class FilterRequestBuilder {
    public get apply(): ApplyRequestBuilder {
        return new ApplyRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get applyBottomItemsFilter(): ApplyBottomItemsFilterRequestBuilder {
        return new ApplyBottomItemsFilterRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get applyBottomPercentFilter(): ApplyBottomPercentFilterRequestBuilder {
        return new ApplyBottomPercentFilterRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get applyCellColorFilter(): ApplyCellColorFilterRequestBuilder {
        return new ApplyCellColorFilterRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get applyCustomFilter(): ApplyCustomFilterRequestBuilder {
        return new ApplyCustomFilterRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get applyDynamicFilter(): ApplyDynamicFilterRequestBuilder {
        return new ApplyDynamicFilterRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get applyFontColorFilter(): ApplyFontColorFilterRequestBuilder {
        return new ApplyFontColorFilterRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get applyIconFilter(): ApplyIconFilterRequestBuilder {
        return new ApplyIconFilterRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get applyTopItemsFilter(): ApplyTopItemsFilterRequestBuilder {
        return new ApplyTopItemsFilterRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get applyTopPercentFilter(): ApplyTopPercentFilterRequestBuilder {
        return new ApplyTopPercentFilterRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get applyValuesFilter(): ApplyValuesFilterRequestBuilder {
        return new ApplyValuesFilterRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get clear(): ClearRequestBuilder {
        return new ClearRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /** Current path for the request  */
    private readonly currentPath: string;
    /** The http core service to use to execute the requests.  */
    private readonly httpCore: HttpCore;
    /** Whether the current path is a raw URL  */
    private readonly isRawUrl: boolean;
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
     * Retrieve the filter applied to the column. Read-only.
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
     * Retrieve the filter applied to the column. Read-only.
     * @param body 
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: Filter | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined) : RequestInformation {
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
     * Retrieve the filter applied to the column. Read-only.
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
        const requestInfo = this.createGetRequestInformation(
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
        const requestInfo = this.createPatchRequestInformation(
            body, h, o
        );
        return this.httpCore?.sendNoResponseContentAsync(requestInfo, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
}
