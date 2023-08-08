import {createWorkbookChartAxisTitleFromDiscriminatorValue} from '../../../../../../../../../../../../models/createWorkbookChartAxisTitleFromDiscriminatorValue';
import {deserializeIntoWorkbookChartAxisTitle} from '../../../../../../../../../../../../models/deserializeIntoWorkbookChartAxisTitle';
import {ODataError} from '../../../../../../../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../../../../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../../../../../../../../models/oDataErrors/serializeODataError';
import {serializeWorkbookChartAxisTitle} from '../../../../../../../../../../../../models/serializeWorkbookChartAxisTitle';
import type {WorkbookChartAxisTitle} from '../../../../../../../../../../../../models/workbookChartAxisTitle';
import {FormatRequestBuilder} from './format/formatRequestBuilder';
import {TitleRequestBuilderDeleteRequestConfiguration} from './titleRequestBuilderDeleteRequestConfiguration';
import {TitleRequestBuilderGetRequestConfiguration} from './titleRequestBuilderGetRequestConfiguration';
import {TitleRequestBuilderPatchRequestConfiguration} from './titleRequestBuilderPatchRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the title property of the microsoft.graph.workbookChartAxis entity.
 */
export class TitleRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the format property of the microsoft.graph.workbookChartAxisTitle entity.
     */
    public get format(): FormatRequestBuilder {
        return new FormatRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new TitleRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/worksheets/{workbookWorksheet%2Did}/charts/{workbookChart%2Did}/axes/seriesAxis/title{?%24select,%24expand}");
    };
    /**
     * Delete navigation property title for drives
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: TitleRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Retrieve the properties and relationships of chartaxistitle object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of WorkbookChartAxisTitle
     * @see {@link https://learn.microsoft.com/graph/api/chartaxistitle-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: TitleRequestBuilderGetRequestConfiguration | undefined) : Promise<WorkbookChartAxisTitle | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<WorkbookChartAxisTitle>(requestInfo, createWorkbookChartAxisTitleFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the properties of chartaxistitle object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of WorkbookChartAxisTitle
     * @see {@link https://learn.microsoft.com/graph/api/chartaxistitle-update?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: WorkbookChartAxisTitle, requestConfiguration?: TitleRequestBuilderPatchRequestConfiguration | undefined) : Promise<WorkbookChartAxisTitle | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<WorkbookChartAxisTitle>(requestInfo, createWorkbookChartAxisTitleFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property title for drives
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: TitleRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Retrieve the properties and relationships of chartaxistitle object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: TitleRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the properties of chartaxistitle object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: WorkbookChartAxisTitle, requestConfiguration?: TitleRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeWorkbookChartAxisTitle);
        return requestInfo;
    };
}
