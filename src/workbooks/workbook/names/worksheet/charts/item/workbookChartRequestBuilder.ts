import {WorkbookChart} from '../../../../workbookChart';
import {AxesRequestBuilder} from '../axes/axesRequestBuilder';
import {DataLabelsRequestBuilder} from '../dataLabels/dataLabelsRequestBuilder';
import {FormatRequestBuilder} from '../format/formatRequestBuilder';
import {LegendRequestBuilder} from '../legend/legendRequestBuilder';
import {WorkbookChartSeriesRequestBuilder} from '../series/item/workbookChartSeriesRequestBuilder';
import {SeriesRequestBuilder} from '../series/seriesRequestBuilder';
import {SetDataRequestBuilder} from '../setData/setDataRequestBuilder';
import {SetPositionRequestBuilder} from '../setPosition/setPositionRequestBuilder';
import {TitleRequestBuilder} from '../title/titleRequestBuilder';
import {WorksheetRequestBuilder} from '../worksheet/worksheetRequestBuilder';
import {HttpCore, HttpMethod, RequestInformation, ResponseHandler, MiddlewareOption} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /workbooks/{driveItem-id}/workbook/names/{workbookNamedItem-id}/worksheet/charts/{workbookChart-id}  */
export class WorkbookChartRequestBuilder {
    public get axes(): AxesRequestBuilder {
        return new AxesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /** Current path for the request  */
    private readonly currentPath: string;
    public get dataLabels(): DataLabelsRequestBuilder {
        return new DataLabelsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get format(): FormatRequestBuilder {
        return new FormatRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /** The http core service to use to execute the requests.  */
    private readonly httpCore: HttpCore;
    /** Whether the current path is a raw URL  */
    private readonly isRawUrl: boolean;
    public get legend(): LegendRequestBuilder {
        return new LegendRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /** Path segment to use to build the URL for the current request builder  */
    private readonly pathSegment: string;
    public get series(): SeriesRequestBuilder {
        return new SeriesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get setData(): SetDataRequestBuilder {
        return new SetDataRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get setPosition(): SetPositionRequestBuilder {
        return new SetPositionRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get title(): TitleRequestBuilder {
        return new TitleRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get worksheet(): WorksheetRequestBuilder {
        return new WorksheetRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /**
     * Instantiates a new WorkbookChartRequestBuilder and sets the default values.
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
     * Returns collection of charts that are part of the worksheet. Read-only.
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
     * Returns collection of charts that are part of the worksheet. Read-only.
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
     * Returns collection of charts that are part of the worksheet. Read-only.
     * @param body 
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: WorkbookChart | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined) : RequestInformation {
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
     * Returns collection of charts that are part of the worksheet. Read-only.
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
     * Returns collection of charts that are part of the worksheet. Read-only.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of WorkbookChart
     */
    public get(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<WorkbookChart | undefined> {
        const requestInfo = this.createGetRequestInformation(
            q, h, o
        );
        return this.httpCore?.sendAsync<WorkbookChart>(requestInfo, WorkbookChart, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Builds and executes requests for operations under /workbooks/{driveItem-id}/workbook/names/{workbookNamedItem-id}/worksheet/charts/{workbookChart-id}/microsoft.graph.image()
     * @returns a imageRequestBuilder
     */
    public image() : ImageRequestBuilder {
        return new ImageRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    /**
     * Returns collection of charts that are part of the worksheet. Read-only.
     * @param body 
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: WorkbookChart | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, h, o
        );
        return this.httpCore?.sendNoResponseContentAsync(requestInfo, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.workbooks.workbook.names.worksheet.charts.series collection
     * @param id Unique identifier of the item
     * @returns a workbookChartSeriesRequestBuilder
     */
    public seriesById(id: String) : WorkbookChartSeriesRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new WorkbookChartSeriesRequestBuilder(this.currentPath + this.pathSegment + "/series/" + id, this.httpCore, false);
    };
}
