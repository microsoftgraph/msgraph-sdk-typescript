import {WorkbookChartSeries, WorkbookChartSeriesCollectionResponse} from '../../../../../../../../../../models/';
import {createWorkbookChartSeriesCollectionResponseFromDiscriminatorValue} from '../../../../../../../../../../models/createWorkbookChartSeriesCollectionResponseFromDiscriminatorValue';
import {createWorkbookChartSeriesFromDiscriminatorValue} from '../../../../../../../../../../models/createWorkbookChartSeriesFromDiscriminatorValue';
import {ODataError} from '../../../../../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {WorkbookChartSeriesItemRequestBuilder} from './item/workbookChartSeriesItemRequestBuilder';
import {ItemAtWithIndexRequestBuilder} from './itemAtWithIndex/itemAtWithIndexRequestBuilder';
import {SeriesRequestBuilderGetRequestConfiguration} from './seriesRequestBuilderGetRequestConfiguration';
import {SeriesRequestBuilderPostRequestConfiguration} from './seriesRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the series property of the microsoft.graph.workbookChart entity.
 */
export class SeriesRequestBuilder extends BaseRequestBuilder {
    /** Provides operations to call the count method. */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the series property of the microsoft.graph.workbookChart entity.
     * @param workbookChartSeriesId Unique identifier of the item
     * @returns a WorkbookChartSeriesItemRequestBuilder
     */
    public byWorkbookChartSeriesId(workbookChartSeriesId: string) : WorkbookChartSeriesItemRequestBuilder {
        if(!workbookChartSeriesId) throw new Error("workbookChartSeriesId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["workbookChartSeries%2Did"] = workbookChartSeriesId
        return new WorkbookChartSeriesItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new SeriesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/worksheets/{workbookWorksheet%2Did}/charts/{workbookChart%2Did}/series{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Represents either a single series or collection of series in the chart. Read-only.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of WorkbookChartSeriesCollectionResponse
     */
    public get(requestConfiguration?: SeriesRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<WorkbookChartSeriesCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<WorkbookChartSeriesCollectionResponse>(requestInfo, createWorkbookChartSeriesCollectionResponseFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Provides operations to call the itemAt method.
     * @param index Usage: index={index}
     * @returns a itemAtWithIndexRequestBuilder
     */
    public itemAtWithIndex(index: number | undefined) : ItemAtWithIndexRequestBuilder {
        if(!index) throw new Error("index cannot be undefined");
        return new ItemAtWithIndexRequestBuilder(this.pathParameters, this.requestAdapter, index);
    };
    /**
     * Create new navigation property to series for drives
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of WorkbookChartSeries
     */
    public post(body: WorkbookChartSeries | undefined, requestConfiguration?: SeriesRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<WorkbookChartSeries | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<WorkbookChartSeries>(requestInfo, createWorkbookChartSeriesFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Represents either a single series or collection of series in the chart. Read-only.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: SeriesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to series for drives
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: WorkbookChartSeries | undefined, requestConfiguration?: SeriesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.POST;
        requestInfo.headers["Accept"] = ["application/json"];
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        return requestInfo;
    };
}
