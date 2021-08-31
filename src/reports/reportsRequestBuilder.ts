import {DailyPrintUsageByPrinterRequestBuilder} from './dailyPrintUsageByPrinter/dailyPrintUsageByPrinterRequestBuilder';
import {PrintUsageByPrinterRequestBuilder} from './dailyPrintUsageByPrinter/item/printUsageByPrinterRequestBuilder';
import {DailyPrintUsageByUserRequestBuilder} from './dailyPrintUsageByUser/dailyPrintUsageByUserRequestBuilder';
import {PrintUsageByUserRequestBuilder} from './dailyPrintUsageByUser/item/printUsageByUserRequestBuilder';
import {PrintUsageByPrinterRequestBuilder} from './monthlyPrintUsageByPrinter/item/printUsageByPrinterRequestBuilder';
import {MonthlyPrintUsageByPrinterRequestBuilder} from './monthlyPrintUsageByPrinter/monthlyPrintUsageByPrinterRequestBuilder';
import {PrintUsageByUserRequestBuilder} from './monthlyPrintUsageByUser/item/printUsageByUserRequestBuilder';
import {MonthlyPrintUsageByUserRequestBuilder} from './monthlyPrintUsageByUser/monthlyPrintUsageByUserRequestBuilder';
import {ReportRoot} from './reportRoot';
import {Reports} from './reports';
import {HttpCore, HttpMethod, RequestInfo, ResponseHandler, MiddlewareOption} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /reports  */
export class ReportsRequestBuilder {
    /** Current path for the request  */
    private readonly currentPath: string;
    public get dailyPrintUsageByPrinter(): DailyPrintUsageByPrinterRequestBuilder {
        return new DailyPrintUsageByPrinterRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get dailyPrintUsageByUser(): DailyPrintUsageByUserRequestBuilder {
        return new DailyPrintUsageByUserRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /** The http core service to use to execute the requests.  */
    private readonly httpCore: HttpCore;
    /** Whether the current path is a raw URL  */
    private readonly isRawUrl: boolean;
    public get monthlyPrintUsageByPrinter(): MonthlyPrintUsageByPrinterRequestBuilder {
        return new MonthlyPrintUsageByPrinterRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get monthlyPrintUsageByUser(): MonthlyPrintUsageByUserRequestBuilder {
        return new MonthlyPrintUsageByUserRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /** Path segment to use to build the URL for the current request builder  */
    private readonly pathSegment: string;
    /**
     * Instantiates a new ReportsRequestBuilder and sets the default values.
     * @param currentPath Current path for the request
     * @param httpCore The http core service to use to execute the requests.
     * @param isRawUrl Whether the current path is a raw URL
     */
    public constructor(currentPath: string, httpCore: HttpCore, isRawUrl: boolean = true) {
        if(!currentPath) throw new Error("currentPath cannot be undefined");
        if(!httpCore) throw new Error("httpCore cannot be undefined");
        this.pathSegment = "/reports";
        this.httpCore = httpCore;
        this.currentPath = currentPath;
        this.isRawUrl = isRawUrl;
    };
    /**
     * Get reports
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
     * Update reports
     * @param body 
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @returns a RequestInfo
     */
    public createPatchRequestInfo(body: Reports | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined) : RequestInfo {
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
     * Gets an item from the MicrosoftGraph.reports.dailyPrintUsageByPrinter collection
     * @param id Unique identifier of the item
     * @returns a PrintUsageByPrinterRequestBuilder
     */
    public dailyPrintUsageByPrinterById(id: String) : PrintUsageByPrinterRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new PrintUsageByPrinterRequestBuilder(this.currentPath + this.pathSegment + "/dailyPrintUsageByPrinter/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the MicrosoftGraph.reports.dailyPrintUsageByUser collection
     * @param id Unique identifier of the item
     * @returns a PrintUsageByUserRequestBuilder
     */
    public dailyPrintUsageByUserById(id: String) : PrintUsageByUserRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new PrintUsageByUserRequestBuilder(this.currentPath + this.pathSegment + "/dailyPrintUsageByUser/" + id, this.httpCore, false);
    };
    /**
     * Get reports
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of ReportRoot
     */
    public get(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<ReportRoot | undefined> {
        const requestInfo = this.createGetRequestInfo(
            q, h, o
        );
        return this.httpCore?.sendAsync<ReportRoot>(requestInfo, ReportRoot, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the MicrosoftGraph.reports.monthlyPrintUsageByPrinter collection
     * @param id Unique identifier of the item
     * @returns a PrintUsageByPrinterRequestBuilder
     */
    public monthlyPrintUsageByPrinterById(id: String) : PrintUsageByPrinterRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new PrintUsageByPrinterRequestBuilder(this.currentPath + this.pathSegment + "/monthlyPrintUsageByPrinter/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the MicrosoftGraph.reports.monthlyPrintUsageByUser collection
     * @param id Unique identifier of the item
     * @returns a PrintUsageByUserRequestBuilder
     */
    public monthlyPrintUsageByUserById(id: String) : PrintUsageByUserRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new PrintUsageByUserRequestBuilder(this.currentPath + this.pathSegment + "/monthlyPrintUsageByUser/" + id, this.httpCore, false);
    };
    /**
     * Update reports
     * @param body 
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: Reports | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInfo(
            body, h, o
        );
        return this.httpCore?.sendNoResponseContentAsync(requestInfo, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
}
