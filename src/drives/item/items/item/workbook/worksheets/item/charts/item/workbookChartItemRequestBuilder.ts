import {WorkbookChart} from '../../../../../../../../../models/';
import {createWorkbookChartFromDiscriminatorValue} from '../../../../../../../../../models/createWorkbookChartFromDiscriminatorValue';
import {ODataError} from '../../../../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {AxesRequestBuilder} from './axes/axesRequestBuilder';
import {DataLabelsRequestBuilder} from './dataLabels/dataLabelsRequestBuilder';
import {FormatRequestBuilder} from './format/formatRequestBuilder';
import {LegendRequestBuilder} from './legend/legendRequestBuilder';
import {ImageRequestBuilder} from './microsoftGraphImage/imageRequestBuilder';
import {ImageWithWidthRequestBuilder} from './microsoftGraphImageWithWidth/imageWithWidthRequestBuilder';
import {ImageWithWidthWithHeightRequestBuilder} from './microsoftGraphImageWithWidthWithHeight/imageWithWidthWithHeightRequestBuilder';
import {ImageWithWidthWithHeightWithFittingModeRequestBuilder} from './microsoftGraphImageWithWidthWithHeightWithFittingMode/imageWithWidthWithHeightWithFittingModeRequestBuilder';
import {SetDataRequestBuilder} from './microsoftGraphSetData/setDataRequestBuilder';
import {SetPositionRequestBuilder} from './microsoftGraphSetPosition/setPositionRequestBuilder';
import {WorkbookChartSeriesItemRequestBuilder} from './series/item/workbookChartSeriesItemRequestBuilder';
import {SeriesRequestBuilder} from './series/seriesRequestBuilder';
import {TitleRequestBuilder} from './title/titleRequestBuilder';
import {WorkbookChartItemRequestBuilderDeleteRequestConfiguration} from './workbookChartItemRequestBuilderDeleteRequestConfiguration';
import {WorkbookChartItemRequestBuilderGetRequestConfiguration} from './workbookChartItemRequestBuilderGetRequestConfiguration';
import {WorkbookChartItemRequestBuilderPatchRequestConfiguration} from './workbookChartItemRequestBuilderPatchRequestConfiguration';
import {WorksheetRequestBuilder} from './worksheet/worksheetRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the charts property of the microsoft.graph.workbookWorksheet entity.
 */
export class WorkbookChartItemRequestBuilder {
    /** Provides operations to manage the axes property of the microsoft.graph.workbookChart entity. */
    public get axes(): AxesRequestBuilder {
        return new AxesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the dataLabels property of the microsoft.graph.workbookChart entity. */
    public get dataLabels(): DataLabelsRequestBuilder {
        return new DataLabelsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the format property of the microsoft.graph.workbookChart entity. */
    public get format(): FormatRequestBuilder {
        return new FormatRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the legend property of the microsoft.graph.workbookChart entity. */
    public get legend(): LegendRequestBuilder {
        return new LegendRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the image method. */
    public get microsoftGraphImage(): ImageRequestBuilder {
        return new ImageRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the setData method. */
    public get microsoftGraphSetData(): SetDataRequestBuilder {
        return new SetDataRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the setPosition method. */
    public get microsoftGraphSetPosition(): SetPositionRequestBuilder {
        return new SetPositionRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private requestAdapter: RequestAdapter;
    /** Provides operations to manage the series property of the microsoft.graph.workbookChart entity. */
    public get series(): SeriesRequestBuilder {
        return new SeriesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the title property of the microsoft.graph.workbookChart entity. */
    public get title(): TitleRequestBuilder {
        return new TitleRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder */
    private urlTemplate: string;
    /** Provides operations to manage the worksheet property of the microsoft.graph.workbookChart entity. */
    public get worksheet(): WorksheetRequestBuilder {
        return new WorksheetRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new WorkbookChartItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     * @param workbookChartId key: id of workbookChart
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter, workbookChartId?: string | undefined) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/worksheets/{workbookWorksheet%2Did}/charts/{workbookChart%2Did}{?%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        urlTplParams["workbookChart%2Did"] = workbookChartId
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Delete navigation property charts for drives
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(requestConfiguration?: WorkbookChartItemRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.toDeleteRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Returns collection of charts that are part of the worksheet. Read-only.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of WorkbookChart
     */
    public get(requestConfiguration?: WorkbookChartItemRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<WorkbookChart | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<WorkbookChart>(requestInfo, createWorkbookChartFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Provides operations to call the image method.
     * @param width Usage: width={width}
     * @returns a imageWithWidthRequestBuilder
     */
    public microsoftGraphImageWithWidth(width: number | undefined) : ImageWithWidthRequestBuilder {
        if(!width) throw new Error("width cannot be undefined");
        return new ImageWithWidthRequestBuilder(this.pathParameters, this.requestAdapter, width);
    };
    /**
     * Provides operations to call the image method.
     * @param height Usage: height={height}
     * @param width Usage: width={width}
     * @returns a imageWithWidthWithHeightRequestBuilder
     */
    public microsoftGraphImageWithWidthWithHeight(height: number | undefined, width: number | undefined) : ImageWithWidthWithHeightRequestBuilder {
        if(!height) throw new Error("height cannot be undefined");
        if(!width) throw new Error("width cannot be undefined");
        return new ImageWithWidthWithHeightRequestBuilder(this.pathParameters, this.requestAdapter, height, width);
    };
    /**
     * Provides operations to call the image method.
     * @param fittingMode Usage: fittingMode='{fittingMode}'
     * @param height Usage: height={height}
     * @param width Usage: width={width}
     * @returns a imageWithWidthWithHeightWithFittingModeRequestBuilder
     */
    public microsoftGraphImageWithWidthWithHeightWithFittingMode(fittingMode: string | undefined, height: number | undefined, width: number | undefined) : ImageWithWidthWithHeightWithFittingModeRequestBuilder {
        if(!fittingMode) throw new Error("fittingMode cannot be undefined");
        if(!height) throw new Error("height cannot be undefined");
        if(!width) throw new Error("width cannot be undefined");
        return new ImageWithWidthWithHeightWithFittingModeRequestBuilder(this.pathParameters, this.requestAdapter, fittingMode, height, width);
    };
    /**
     * Update the navigation property charts in drives
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of WorkbookChart
     */
    public patch(body: WorkbookChart | undefined, requestConfiguration?: WorkbookChartItemRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<WorkbookChart | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<WorkbookChart>(requestInfo, createWorkbookChartFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Provides operations to manage the series property of the microsoft.graph.workbookChart entity.
     * @param id Unique identifier of the item
     * @returns a WorkbookChartSeriesItemRequestBuilder
     */
    public seriesById(id: string) : WorkbookChartSeriesItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["workbookChartSeries%2Did"] = id
        return new WorkbookChartSeriesItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Delete navigation property charts for drives
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: WorkbookChartItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Returns collection of charts that are part of the worksheet. Read-only.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: WorkbookChartItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property charts in drives
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: WorkbookChart | undefined, requestConfiguration?: WorkbookChartItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
}
