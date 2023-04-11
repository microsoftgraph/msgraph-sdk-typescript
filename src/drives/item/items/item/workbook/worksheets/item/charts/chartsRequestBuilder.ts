import {WorkbookChart, WorkbookChartCollectionResponse} from '../../../../../../../../models/';
import {createWorkbookChartCollectionResponseFromDiscriminatorValue} from '../../../../../../../../models/createWorkbookChartCollectionResponseFromDiscriminatorValue';
import {createWorkbookChartFromDiscriminatorValue} from '../../../../../../../../models/createWorkbookChartFromDiscriminatorValue';
import {ODataError} from '../../../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {AddRequestBuilder} from './add/addRequestBuilder';
import {ChartsRequestBuilderGetRequestConfiguration} from './chartsRequestBuilderGetRequestConfiguration';
import {ChartsRequestBuilderPostRequestConfiguration} from './chartsRequestBuilderPostRequestConfiguration';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {ItemAtWithIndexRequestBuilder} from './itemAtWithIndex/itemAtWithIndexRequestBuilder';
import {ItemWithNameRequestBuilder} from './itemWithName/itemWithNameRequestBuilder';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the charts property of the microsoft.graph.workbookWorksheet entity.
 */
export class ChartsRequestBuilder extends BaseRequestBuilder {
    /** Provides operations to call the add method. */
    public get add(): AddRequestBuilder {
        return new AddRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the count method. */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new ChartsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/worksheets/{workbookWorksheet%2Did}/charts{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Retrieve a list of chart objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of WorkbookChartCollectionResponse
     * @see {@link https://docs.microsoft.com/graph/api/chart-list?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: ChartsRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<WorkbookChartCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<WorkbookChartCollectionResponse>(requestInfo, createWorkbookChartCollectionResponseFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
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
     * Provides operations to call the item method.
     * @param name Usage: name='{name}'
     * @returns a itemWithNameRequestBuilder
     */
    public itemWithName(name: string | undefined) : ItemWithNameRequestBuilder {
        if(!name) throw new Error("name cannot be undefined");
        return new ItemWithNameRequestBuilder(this.pathParameters, this.requestAdapter, name);
    };
    /**
     * Use this API to create a new Chart.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of WorkbookChart
     * @see {@link https://docs.microsoft.com/graph/api/worksheet-post-charts?view=graph-rest-1.0|Find more info here}
     */
    public post(body: WorkbookChart | undefined, requestConfiguration?: ChartsRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<WorkbookChart | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<WorkbookChart>(requestInfo, createWorkbookChartFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Retrieve a list of chart objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ChartsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Use this API to create a new Chart.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: WorkbookChart | undefined, requestConfiguration?: ChartsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
