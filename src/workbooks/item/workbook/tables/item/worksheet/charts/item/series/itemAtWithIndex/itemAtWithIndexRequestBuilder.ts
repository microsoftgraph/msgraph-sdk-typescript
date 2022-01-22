import {WorkbookChartSeries} from '../../../../../../../../../../models/microsoft/graph/workbookChartSeries';
import {getPathParameters, HttpMethod, Parsable, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /workbooks/{driveItem-id}/workbook/tables/{workbookTable-id}/worksheet/charts/{workbookChart-id}/series/microsoft.graph.itemAt(index={index})  */
export class ItemAtWithIndexRequestBuilder {
    /** Path parameters for the request  */
    private readonly pathParameters: Map<string, unknown>;
    /** The request adapter to use to execute the requests.  */
    private readonly requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder  */
    private readonly urlTemplate: string;
    /**
     * Instantiates a new ItemAtWithIndexRequestBuilder and sets the default values.
     * @param index Usage: index={index}
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Map<string, unknown> | string | undefined, requestAdapter: RequestAdapter, index?: number | undefined) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/workbooks/{driveItem_id}/workbook/tables/{workbookTable_id}/worksheet/charts/{workbookChart_id}/series/microsoft.graph.itemAt(index={index})";
        const urlTplParams = getPathParameters(pathParameters);
        index && urlTplParams.set("index", index);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Invoke function itemAt
     * @param h Request headers
     * @param o Request options
     * @returns a RequestInformation
     */
    public createGetRequestInformation(h?: object | undefined, o?: RequestOption[] | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        h && requestInfo.setHeadersFromRawObject(h);
        o && requestInfo.addRequestOptions(...o);
        return requestInfo;
    };
    /**
     * Invoke function itemAt
     * @param h Request headers
     * @param o Request options
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of ItemAtWithIndexResponse
     */
    public get(h?: object | undefined, o?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<WorkbookChartSeries | undefined> {
        const requestInfo = this.createGetRequestInformation(
            h, o
        );
        return this.requestAdapter?.sendAsync<WorkbookChartSeries>(requestInfo, WorkbookChartSeries, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
}
