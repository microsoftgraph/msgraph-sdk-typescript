import {createWorkbookChartAxisFromDiscriminatorValue} from '../../../../../../../../../../../models/createWorkbookChartAxisFromDiscriminatorValue';
import {deserializeIntoWorkbookChartAxis} from '../../../../../../../../../../../models/deserializeIntoWorkbookChartAxis';
import {ODataError} from '../../../../../../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../../../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../../../../../../../models/oDataErrors/serializeODataError';
import {serializeWorkbookChartAxis} from '../../../../../../../../../../../models/serializeWorkbookChartAxis';
import type {WorkbookChartAxis} from '../../../../../../../../../../../models/workbookChartAxis';
import {FormatRequestBuilder} from './format/formatRequestBuilder';
import {MajorGridlinesRequestBuilder} from './majorGridlines/majorGridlinesRequestBuilder';
import {MinorGridlinesRequestBuilder} from './minorGridlines/minorGridlinesRequestBuilder';
import {SeriesAxisRequestBuilderDeleteRequestConfiguration} from './seriesAxisRequestBuilderDeleteRequestConfiguration';
import {SeriesAxisRequestBuilderGetRequestConfiguration} from './seriesAxisRequestBuilderGetRequestConfiguration';
import {SeriesAxisRequestBuilderPatchRequestConfiguration} from './seriesAxisRequestBuilderPatchRequestConfiguration';
import {TitleRequestBuilder} from './title/titleRequestBuilder';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the seriesAxis property of the microsoft.graph.workbookChartAxes entity.
 */
export class SeriesAxisRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the format property of the microsoft.graph.workbookChartAxis entity.
     */
    public get format(): FormatRequestBuilder {
        return new FormatRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the majorGridlines property of the microsoft.graph.workbookChartAxis entity.
     */
    public get majorGridlines(): MajorGridlinesRequestBuilder {
        return new MajorGridlinesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the minorGridlines property of the microsoft.graph.workbookChartAxis entity.
     */
    public get minorGridlines(): MinorGridlinesRequestBuilder {
        return new MinorGridlinesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the title property of the microsoft.graph.workbookChartAxis entity.
     */
    public get title(): TitleRequestBuilder {
        return new TitleRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new SeriesAxisRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/worksheets/{workbookWorksheet%2Did}/charts/{workbookChart%2Did}/axes/seriesAxis{?%24select,%24expand}");
    };
    /**
     * Delete navigation property seriesAxis for drives
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: SeriesAxisRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Represents the series axis of a 3-dimensional chart. Read-only.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of WorkbookChartAxis
     */
    public get(requestConfiguration?: SeriesAxisRequestBuilderGetRequestConfiguration | undefined) : Promise<WorkbookChartAxis | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<WorkbookChartAxis>(requestInfo, createWorkbookChartAxisFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property seriesAxis in drives
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of WorkbookChartAxis
     */
    public patch(body: WorkbookChartAxis, requestConfiguration?: SeriesAxisRequestBuilderPatchRequestConfiguration | undefined) : Promise<WorkbookChartAxis | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<WorkbookChartAxis>(requestInfo, createWorkbookChartAxisFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property seriesAxis for drives
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: SeriesAxisRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Represents the series axis of a 3-dimensional chart. Read-only.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: SeriesAxisRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property seriesAxis in drives
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: WorkbookChartAxis, requestConfiguration?: SeriesAxisRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeWorkbookChartAxis);
        return requestInfo;
    };
}
