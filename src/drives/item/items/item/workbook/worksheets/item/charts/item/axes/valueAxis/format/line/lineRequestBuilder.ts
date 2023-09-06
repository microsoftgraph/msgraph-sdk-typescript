import { createWorkbookChartLineFormatFromDiscriminatorValue } from '../../../../../../../../../../../../../models/createWorkbookChartLineFormatFromDiscriminatorValue';
import { deserializeIntoWorkbookChartLineFormat } from '../../../../../../../../../../../../../models/deserializeIntoWorkbookChartLineFormat';
import { type ODataError } from '../../../../../../../../../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../../../../../../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../../../../../../../../../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../../../../../../../../../../../models/oDataErrors/serializeODataError';
import { serializeWorkbookChartLineFormat } from '../../../../../../../../../../../../../models/serializeWorkbookChartLineFormat';
import { type WorkbookChartLineFormat } from '../../../../../../../../../../../../../models/workbookChartLineFormat';
import { ClearRequestBuilder } from './clear/clearRequestBuilder';
import { type LineRequestBuilderDeleteRequestConfiguration } from './lineRequestBuilderDeleteRequestConfiguration';
import { type LineRequestBuilderGetRequestConfiguration } from './lineRequestBuilderGetRequestConfiguration';
import { type LineRequestBuilderPatchRequestConfiguration } from './lineRequestBuilderPatchRequestConfiguration';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the line property of the microsoft.graph.workbookChartAxisFormat entity.
 */
export class LineRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to call the clear method.
     */
    public get clear(): ClearRequestBuilder {
        return new ClearRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new LineRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/worksheets/{workbookWorksheet%2Did}/charts/{workbookChart%2Did}/axes/valueAxis/format/line{?%24select,%24expand}");
    };
    /**
     * Delete navigation property line for drives
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: LineRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Retrieve the properties and relationships of chartlineformat object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of WorkbookChartLineFormat
     * @see {@link https://learn.microsoft.com/graph/api/chartlineformat-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: LineRequestBuilderGetRequestConfiguration | undefined) : Promise<WorkbookChartLineFormat | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<WorkbookChartLineFormat>(requestInfo, createWorkbookChartLineFormatFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the properties of chartlineformat object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of WorkbookChartLineFormat
     * @see {@link https://learn.microsoft.com/graph/api/chartlineformat-update?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: WorkbookChartLineFormat, requestConfiguration?: LineRequestBuilderPatchRequestConfiguration | undefined) : Promise<WorkbookChartLineFormat | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<WorkbookChartLineFormat>(requestInfo, createWorkbookChartLineFormatFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property line for drives
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: LineRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Retrieve the properties and relationships of chartlineformat object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: LineRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the properties of chartlineformat object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: WorkbookChartLineFormat, requestConfiguration?: LineRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeWorkbookChartLineFormat);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a lineRequestBuilder
     */
    public withUrl(rawUrl: string) : LineRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new LineRequestBuilder(rawUrl, this.requestAdapter);
    };
}
