import {WorkbookChartPoint} from '../../../../../../../../../../../../../models/';
import {createWorkbookChartPointFromDiscriminatorValue} from '../../../../../../../../../../../../../models/createWorkbookChartPointFromDiscriminatorValue';
import {ODataError} from '../../../../../../../../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../../../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {ItemAtWithIndexRequestBuilderGetRequestConfiguration} from './itemAtWithIndexRequestBuilderGetRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

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
        super(pathParameters, requestAdapter, "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/worksheets/{workbookWorksheet%2Did}/charts/{workbookChart%2Did}/series/{workbookChartSeries%2Did}/points/itemAt(index={index})");
        this.pathParameters["index"] = index
    };
    /**
     * Invoke function itemAt
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of WorkbookChartPoint
     */
    public get(requestConfiguration?: ItemAtWithIndexRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<WorkbookChartPoint | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<WorkbookChartPoint>(requestInfo, createWorkbookChartPointFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
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
