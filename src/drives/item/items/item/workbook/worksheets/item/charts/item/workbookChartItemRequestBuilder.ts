import {createWorkbookChartFromDiscriminatorValue} from '../../../../../../../../../models/createWorkbookChartFromDiscriminatorValue';
import {deserializeIntoWorkbookChart} from '../../../../../../../../../models/deserializeIntoWorkbookChart';
import {ODataError} from '../../../../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../../../../../models/oDataErrors/serializeODataError';
import {serializeWorkbookChart} from '../../../../../../../../../models/serializeWorkbookChart';
import type {WorkbookChart} from '../../../../../../../../../models/workbookChart';
import {AxesRequestBuilder} from './axes/axesRequestBuilder';
import {DataLabelsRequestBuilder} from './dataLabels/dataLabelsRequestBuilder';
import {FormatRequestBuilder} from './format/formatRequestBuilder';
import {ImageRequestBuilder} from './image/imageRequestBuilder';
import {ImageWithWidthRequestBuilder} from './imageWithWidth/imageWithWidthRequestBuilder';
import {ImageWithWidthWithHeightRequestBuilder} from './imageWithWidthWithHeight/imageWithWidthWithHeightRequestBuilder';
import {ImageWithWidthWithHeightWithFittingModeRequestBuilder} from './imageWithWidthWithHeightWithFittingMode/imageWithWidthWithHeightWithFittingModeRequestBuilder';
import {LegendRequestBuilder} from './legend/legendRequestBuilder';
import {SeriesRequestBuilder} from './series/seriesRequestBuilder';
import {SetDataRequestBuilder} from './setData/setDataRequestBuilder';
import {SetPositionRequestBuilder} from './setPosition/setPositionRequestBuilder';
import {TitleRequestBuilder} from './title/titleRequestBuilder';
import {WorkbookChartItemRequestBuilderDeleteRequestConfiguration} from './workbookChartItemRequestBuilderDeleteRequestConfiguration';
import {WorkbookChartItemRequestBuilderGetRequestConfiguration} from './workbookChartItemRequestBuilderGetRequestConfiguration';
import {WorkbookChartItemRequestBuilderPatchRequestConfiguration} from './workbookChartItemRequestBuilderPatchRequestConfiguration';
import {WorksheetRequestBuilder} from './worksheet/worksheetRequestBuilder';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the charts property of the microsoft.graph.workbookWorksheet entity.
 */
export class WorkbookChartItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the axes property of the microsoft.graph.workbookChart entity.
     */
    public get axes(): AxesRequestBuilder {
        return new AxesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the dataLabels property of the microsoft.graph.workbookChart entity.
     */
    public get dataLabels(): DataLabelsRequestBuilder {
        return new DataLabelsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the format property of the microsoft.graph.workbookChart entity.
     */
    public get format(): FormatRequestBuilder {
        return new FormatRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the image method.
     */
    public get image(): ImageRequestBuilder {
        return new ImageRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the legend property of the microsoft.graph.workbookChart entity.
     */
    public get legend(): LegendRequestBuilder {
        return new LegendRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the series property of the microsoft.graph.workbookChart entity.
     */
    public get series(): SeriesRequestBuilder {
        return new SeriesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the setData method.
     */
    public get setData(): SetDataRequestBuilder {
        return new SetDataRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the setPosition method.
     */
    public get setPosition(): SetPositionRequestBuilder {
        return new SetPositionRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the title property of the microsoft.graph.workbookChart entity.
     */
    public get title(): TitleRequestBuilder {
        return new TitleRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the worksheet property of the microsoft.graph.workbookChart entity.
     */
    public get worksheet(): WorksheetRequestBuilder {
        return new WorksheetRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new WorkbookChartItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/worksheets/{workbookWorksheet%2Did}/charts/{workbookChart%2Did}{?%24select,%24expand}");
    };
    /**
     * Deletes the chart object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/chart-delete?view=graph-rest-1.0|Find more info here}
     */
    public delete(requestConfiguration?: WorkbookChartItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
        const requestInfo = this.toDeleteRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendNoResponseContentAsync(requestInfo, errorMapping);
    };
    /**
     * Retrieve the properties and relationships of chart object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of WorkbookChart
     * @see {@link https://learn.microsoft.com/graph/api/chart-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: WorkbookChartItemRequestBuilderGetRequestConfiguration | undefined) : Promise<WorkbookChart | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<WorkbookChart>(requestInfo, createWorkbookChartFromDiscriminatorValue, errorMapping);
    };
    /**
     * Provides operations to call the image method.
     * @param width Usage: width={width}
     * @returns a imageWithWidthRequestBuilder
     */
    public imageWithWidth(width: number | undefined) : ImageWithWidthRequestBuilder {
        if(!width) throw new Error("width cannot be undefined");
        return new ImageWithWidthRequestBuilder(this.pathParameters, this.requestAdapter, width);
    };
    /**
     * Provides operations to call the image method.
     * @param height Usage: height={height}
     * @param width Usage: width={width}
     * @returns a imageWithWidthWithHeightRequestBuilder
     */
    public imageWithWidthWithHeight(height: number | undefined, width: number | undefined) : ImageWithWidthWithHeightRequestBuilder {
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
    public imageWithWidthWithHeightWithFittingMode(fittingMode: string | undefined, height: number | undefined, width: number | undefined) : ImageWithWidthWithHeightWithFittingModeRequestBuilder {
        if(!fittingMode) throw new Error("fittingMode cannot be undefined");
        if(!height) throw new Error("height cannot be undefined");
        if(!width) throw new Error("width cannot be undefined");
        return new ImageWithWidthWithHeightWithFittingModeRequestBuilder(this.pathParameters, this.requestAdapter, fittingMode, height, width);
    };
    /**
     * Update the properties of chart object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of WorkbookChart
     * @see {@link https://learn.microsoft.com/graph/api/chart-update?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: WorkbookChart | undefined, requestConfiguration?: WorkbookChartItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<WorkbookChart | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<WorkbookChart>(requestInfo, createWorkbookChartFromDiscriminatorValue, errorMapping);
    };
    /**
     * Deletes the chart object.
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
     * Retrieve the properties and relationships of chart object.
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
     * Update the properties of chart object.
     * @param body The request body
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeWorkbookChart);
        return requestInfo;
    };
}
