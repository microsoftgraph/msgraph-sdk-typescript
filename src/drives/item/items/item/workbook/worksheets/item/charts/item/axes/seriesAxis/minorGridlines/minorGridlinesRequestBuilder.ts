import {createWorkbookChartGridlinesFromDiscriminatorValue} from '../../../../../../../../../../../../models/createWorkbookChartGridlinesFromDiscriminatorValue';
import {deserializeIntoWorkbookChartGridlines} from '../../../../../../../../../../../../models/deserializeIntoWorkbookChartGridlines';
import {ODataError} from '../../../../../../../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../../../../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../../../../../../../../models/oDataErrors/serializeODataError';
import {serializeWorkbookChartGridlines} from '../../../../../../../../../../../../models/serializeWorkbookChartGridlines';
import type {WorkbookChartGridlines} from '../../../../../../../../../../../../models/workbookChartGridlines';
import {FormatRequestBuilder} from './format/formatRequestBuilder';
import {MinorGridlinesRequestBuilderDeleteRequestConfiguration} from './minorGridlinesRequestBuilderDeleteRequestConfiguration';
import {MinorGridlinesRequestBuilderGetRequestConfiguration} from './minorGridlinesRequestBuilderGetRequestConfiguration';
import {MinorGridlinesRequestBuilderPatchRequestConfiguration} from './minorGridlinesRequestBuilderPatchRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the minorGridlines property of the microsoft.graph.workbookChartAxis entity.
 */
export class MinorGridlinesRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the format property of the microsoft.graph.workbookChartGridlines entity.
     */
    public get format(): FormatRequestBuilder {
        return new FormatRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new MinorGridlinesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/worksheets/{workbookWorksheet%2Did}/charts/{workbookChart%2Did}/axes/seriesAxis/minorGridlines{?%24select,%24expand}");
    };
    /**
     * Delete navigation property minorGridlines for drives
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: MinorGridlinesRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Retrieve the properties and relationships of chartgridlines object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of WorkbookChartGridlines
     * @see {@link https://learn.microsoft.com/graph/api/chartgridlines-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: MinorGridlinesRequestBuilderGetRequestConfiguration | undefined) : Promise<WorkbookChartGridlines | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<WorkbookChartGridlines>(requestInfo, createWorkbookChartGridlinesFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the properties of chartgridlines object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of WorkbookChartGridlines
     * @see {@link https://learn.microsoft.com/graph/api/chartgridlines-update?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: WorkbookChartGridlines, requestConfiguration?: MinorGridlinesRequestBuilderPatchRequestConfiguration | undefined) : Promise<WorkbookChartGridlines | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<WorkbookChartGridlines>(requestInfo, createWorkbookChartGridlinesFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property minorGridlines for drives
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: MinorGridlinesRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Retrieve the properties and relationships of chartgridlines object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: MinorGridlinesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the properties of chartgridlines object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: WorkbookChartGridlines, requestConfiguration?: MinorGridlinesRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeWorkbookChartGridlines);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a minorGridlinesRequestBuilder
     */
    public withUrl(rawUrl: string) : MinorGridlinesRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new MinorGridlinesRequestBuilder(rawUrl, this.requestAdapter);
    };
}
