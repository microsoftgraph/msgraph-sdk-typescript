import {WorkbookChartPointCollectionResponse} from '../../../../../../../../../../../../models/';
import {createWorkbookChartPointCollectionResponseFromDiscriminatorValue} from '../../../../../../../../../../../../models/createWorkbookChartPointCollectionResponseFromDiscriminatorValue';
import {createWorkbookChartPointFromDiscriminatorValue} from '../../../../../../../../../../../../models/createWorkbookChartPointFromDiscriminatorValue';
import {deserializeIntoWorkbookChartPoint} from '../../../../../../../../../../../../models/deserializeIntoWorkbookChartPoint';
import {ODataError} from '../../../../../../../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../../../../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../../../../../../../../models/oDataErrors/serializeODataError';
import {serializeWorkbookChartPoint} from '../../../../../../../../../../../../models/serializeWorkbookChartPoint';
import {WorkbookChartPoint} from '../../../../../../../../../../../../models/workbookChartPoint';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {WorkbookChartPointItemRequestBuilder} from './item/workbookChartPointItemRequestBuilder';
import {ItemAtWithIndexRequestBuilder} from './itemAtWithIndex/itemAtWithIndexRequestBuilder';
import {PointsRequestBuilderGetRequestConfiguration} from './pointsRequestBuilderGetRequestConfiguration';
import {PointsRequestBuilderPostRequestConfiguration} from './pointsRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the points property of the microsoft.graph.workbookChartSeries entity.
 */
export class PointsRequestBuilder extends BaseRequestBuilder {
    /** Provides operations to call the count method. */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the points property of the microsoft.graph.workbookChartSeries entity.
     * @param workbookChartPointId Unique identifier of the item
     * @returns a WorkbookChartPointItemRequestBuilder
     */
    public byWorkbookChartPointId(workbookChartPointId: string) : WorkbookChartPointItemRequestBuilder {
        if(!workbookChartPointId) throw new Error("workbookChartPointId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["workbookChartPoint%2Did"] = workbookChartPointId
        return new WorkbookChartPointItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new PointsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/worksheets/{workbookWorksheet%2Did}/charts/{workbookChart%2Did}/series/{workbookChartSeries%2Did}/points{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Represents a collection of all points in the series. Read-only.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of WorkbookChartPointCollectionResponse
     */
    public get(requestConfiguration?: PointsRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<WorkbookChartPointCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter?.sendAsync<WorkbookChartPointCollectionResponse>(requestInfo, createWorkbookChartPointCollectionResponseFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
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
     * Create new navigation property to points for drives
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of WorkbookChartPoint
     */
    public post(body: WorkbookChartPoint | undefined, requestConfiguration?: PointsRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<WorkbookChartPoint | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter?.sendAsync<WorkbookChartPoint>(requestInfo, createWorkbookChartPointFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Represents a collection of all points in the series. Read-only.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: PointsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to points for drives
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: WorkbookChartPoint | undefined, requestConfiguration?: PointsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeWorkbookChartPoint);
        return requestInfo;
    };
}
