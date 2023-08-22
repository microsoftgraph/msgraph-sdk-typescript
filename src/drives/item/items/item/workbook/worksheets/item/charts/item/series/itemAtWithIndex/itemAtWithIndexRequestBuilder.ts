import {WorkbookChartSeries} from '../../../../../../../../../../../models/';
import {createWorkbookChartSeriesFromDiscriminatorValue} from '../../../../../../../../../../../models/createWorkbookChartSeriesFromDiscriminatorValue';
import {ODataError} from '../../../../../../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../../../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../../../../../../../models/oDataErrors/serializeODataError';
import {ItemAtWithIndexRequestBuilderGetRequestConfiguration} from './itemAtWithIndexRequestBuilderGetRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the itemAt method.
 */
export class ItemAtWithIndexRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new ItemAtWithIndexRequestBuilder and sets the default values.
     * @param index Usage: index={index}
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter, index?: number | undefined) {
        super(pathParameters, requestAdapter, "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/worksheets/{workbookWorksheet%2Did}/charts/{workbookChart%2Did}/series/itemAt(index={index})");
        this.pathParameters["index"] = index
    };
    /**
     * Invoke function itemAt
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of WorkbookChartSeries
     * @see {@link https://learn.microsoft.com/graph/api/chartseriescollection-itemat?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: ItemAtWithIndexRequestBuilderGetRequestConfiguration | undefined) : Promise<WorkbookChartSeries | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<WorkbookChartSeries>(requestInfo, createWorkbookChartSeriesFromDiscriminatorValue, errorMapping);
    };
    /**
     * Invoke function itemAt
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ItemAtWithIndexRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        requestInfo.headers["Accept"] = ["application/json"];
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
}
