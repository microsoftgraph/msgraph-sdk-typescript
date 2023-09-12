import { createWorkbookChartAxisTitleFormatFromDiscriminatorValue } from '../../../../../../../../../../../../../models/createWorkbookChartAxisTitleFormatFromDiscriminatorValue';
import { deserializeIntoWorkbookChartAxisTitleFormat } from '../../../../../../../../../../../../../models/deserializeIntoWorkbookChartAxisTitleFormat';
import { type ODataError } from '../../../../../../../../../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../../../../../../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../../../../../../../../../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../../../../../../../../../../../models/oDataErrors/serializeODataError';
import { serializeWorkbookChartAxisTitleFormat } from '../../../../../../../../../../../../../models/serializeWorkbookChartAxisTitleFormat';
import { type WorkbookChartAxisTitleFormat } from '../../../../../../../../../../../../../models/workbookChartAxisTitleFormat';
import { FontRequestBuilder } from './font/fontRequestBuilder';
import { type FormatRequestBuilderDeleteRequestConfiguration } from './formatRequestBuilderDeleteRequestConfiguration';
import { type FormatRequestBuilderGetRequestConfiguration } from './formatRequestBuilderGetRequestConfiguration';
import { type FormatRequestBuilderPatchRequestConfiguration } from './formatRequestBuilderPatchRequestConfiguration';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the format property of the microsoft.graph.workbookChartAxisTitle entity.
 */
export class FormatRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the font property of the microsoft.graph.workbookChartAxisTitleFormat entity.
     */
    public get font(): FontRequestBuilder {
        return new FontRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new FormatRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/worksheets/{workbookWorksheet%2Did}/charts/{workbookChart%2Did}/axes/seriesAxis/title/format{?%24select,%24expand}");
    };
    /**
     * Delete navigation property format for drives
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: FormatRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Represents the formatting of chart axis title. Read-only.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of WorkbookChartAxisTitleFormat
     */
    public get(requestConfiguration?: FormatRequestBuilderGetRequestConfiguration | undefined) : Promise<WorkbookChartAxisTitleFormat | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<WorkbookChartAxisTitleFormat>(requestInfo, createWorkbookChartAxisTitleFormatFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property format in drives
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of WorkbookChartAxisTitleFormat
     */
    public patch(body: WorkbookChartAxisTitleFormat, requestConfiguration?: FormatRequestBuilderPatchRequestConfiguration | undefined) : Promise<WorkbookChartAxisTitleFormat | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<WorkbookChartAxisTitleFormat>(requestInfo, createWorkbookChartAxisTitleFormatFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property format for drives
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: FormatRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Represents the formatting of chart axis title. Read-only.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: FormatRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property format in drives
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: WorkbookChartAxisTitleFormat, requestConfiguration?: FormatRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeWorkbookChartAxisTitleFormat);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a formatRequestBuilder
     */
    public withUrl(rawUrl: string) : FormatRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new FormatRequestBuilder(rawUrl, this.requestAdapter);
    };
}
