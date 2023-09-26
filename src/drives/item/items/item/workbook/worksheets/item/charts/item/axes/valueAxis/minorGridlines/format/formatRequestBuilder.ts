import { type ODataError } from '../../../../../../../../../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../../../../../../../../../../../../models/oDataErrors/oDataError';
import { createWorkbookChartGridlinesFormatFromDiscriminatorValue, deserializeIntoWorkbookChartGridlinesFormat, serializeWorkbookChartGridlinesFormat, type WorkbookChartGridlinesFormat } from '../../../../../../../../../../../../../models/workbookChartGridlinesFormat';
import { LineRequestBuilder } from './line/lineRequestBuilder';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface FormatRequestBuilderDeleteRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]>;
    /**
     * Request options
     */
    options?: RequestOption[];
}
export interface FormatRequestBuilderGetQueryParameters {
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Select properties to be returned
     */
    select?: string[];
}
export interface FormatRequestBuilderGetRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]>;
    /**
     * Request options
     */
    options?: RequestOption[];
    /**
     * Request query parameters
     */
    queryParameters?: FormatRequestBuilderGetQueryParameters;
}
export interface FormatRequestBuilderPatchRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]>;
    /**
     * Request options
     */
    options?: RequestOption[];
}
/**
 * Provides operations to manage the format property of the microsoft.graph.workbookChartGridlines entity.
 */
export class FormatRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the line property of the microsoft.graph.workbookChartGridlinesFormat entity.
     */
    public get line(): LineRequestBuilder {
        return new LineRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new FormatRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/worksheets/{workbookWorksheet%2Did}/charts/{workbookChart%2Did}/axes/valueAxis/minorGridlines/format{?%24select,%24expand}");
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
     * Represents the formatting of chart gridlines. Read-only.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of WorkbookChartGridlinesFormat
     */
    public get(requestConfiguration?: FormatRequestBuilderGetRequestConfiguration | undefined) : Promise<WorkbookChartGridlinesFormat | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<WorkbookChartGridlinesFormat>(requestInfo, createWorkbookChartGridlinesFormatFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property format in drives
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of WorkbookChartGridlinesFormat
     */
    public patch(body: WorkbookChartGridlinesFormat, requestConfiguration?: FormatRequestBuilderPatchRequestConfiguration | undefined) : Promise<WorkbookChartGridlinesFormat | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<WorkbookChartGridlinesFormat>(requestInfo, createWorkbookChartGridlinesFormatFromDiscriminatorValue, errorMapping);
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
     * Represents the formatting of chart gridlines. Read-only.
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
    public toPatchRequestInformation(body: WorkbookChartGridlinesFormat, requestConfiguration?: FormatRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeWorkbookChartGridlinesFormat);
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
