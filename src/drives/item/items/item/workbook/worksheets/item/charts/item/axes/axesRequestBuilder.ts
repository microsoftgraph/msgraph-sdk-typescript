import {createWorkbookChartAxesFromDiscriminatorValue} from '../../../../../../../../../../models/createWorkbookChartAxesFromDiscriminatorValue';
import {deserializeIntoWorkbookChartAxes} from '../../../../../../../../../../models/deserializeIntoWorkbookChartAxes';
import {ODataError} from '../../../../../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../../../../../../models/oDataErrors/serializeODataError';
import {serializeWorkbookChartAxes} from '../../../../../../../../../../models/serializeWorkbookChartAxes';
import type {WorkbookChartAxes} from '../../../../../../../../../../models/workbookChartAxes';
import {AxesRequestBuilderDeleteRequestConfiguration} from './axesRequestBuilderDeleteRequestConfiguration';
import {AxesRequestBuilderGetRequestConfiguration} from './axesRequestBuilderGetRequestConfiguration';
import {AxesRequestBuilderPatchRequestConfiguration} from './axesRequestBuilderPatchRequestConfiguration';
import {CategoryAxisRequestBuilder} from './categoryAxis/categoryAxisRequestBuilder';
import {SeriesAxisRequestBuilder} from './seriesAxis/seriesAxisRequestBuilder';
import {ValueAxisRequestBuilder} from './valueAxis/valueAxisRequestBuilder';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the axes property of the microsoft.graph.workbookChart entity.
 */
export class AxesRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the categoryAxis property of the microsoft.graph.workbookChartAxes entity.
     */
    public get categoryAxis(): CategoryAxisRequestBuilder {
        return new CategoryAxisRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the seriesAxis property of the microsoft.graph.workbookChartAxes entity.
     */
    public get seriesAxis(): SeriesAxisRequestBuilder {
        return new SeriesAxisRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the valueAxis property of the microsoft.graph.workbookChartAxes entity.
     */
    public get valueAxis(): ValueAxisRequestBuilder {
        return new ValueAxisRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new AxesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/worksheets/{workbookWorksheet%2Did}/charts/{workbookChart%2Did}/axes{?%24select,%24expand}");
    };
    /**
     * Delete navigation property axes for drives
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: AxesRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Represents chart axes. Read-only.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of WorkbookChartAxes
     */
    public get(requestConfiguration?: AxesRequestBuilderGetRequestConfiguration | undefined) : Promise<WorkbookChartAxes | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<WorkbookChartAxes>(requestInfo, createWorkbookChartAxesFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property axes in drives
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of WorkbookChartAxes
     */
    public patch(body: WorkbookChartAxes, requestConfiguration?: AxesRequestBuilderPatchRequestConfiguration | undefined) : Promise<WorkbookChartAxes | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<WorkbookChartAxes>(requestInfo, createWorkbookChartAxesFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property axes for drives
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: AxesRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Represents chart axes. Read-only.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: AxesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property axes in drives
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: WorkbookChartAxes, requestConfiguration?: AxesRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeWorkbookChartAxes);
        return requestInfo;
    };
}
