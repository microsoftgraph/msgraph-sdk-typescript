import { type ODataError } from '../../../../../../../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../../../../../../../../../../models/oDataErrors/oDataError';
import { createWorkbookTableColumnFromDiscriminatorValue, deserializeIntoWorkbookTableColumn, serializeWorkbookTableColumn, type WorkbookTableColumn } from '../../../../../../../../../../../models/workbookTableColumn';
import { DataBodyRangeRequestBuilder } from './dataBodyRange/dataBodyRangeRequestBuilder';
import { FilterRequestBuilder } from './filter/filterRequestBuilder';
import { HeaderRowRangeRequestBuilder } from './headerRowRange/headerRowRangeRequestBuilder';
import { RangeRequestBuilder } from './range/rangeRequestBuilder';
import { TotalRowRangeRequestBuilder } from './totalRowRange/totalRowRangeRequestBuilder';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface WorkbookTableColumnItemRequestBuilderDeleteRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]>;
    /**
     * Request options
     */
    options?: RequestOption[];
}
export interface WorkbookTableColumnItemRequestBuilderGetQueryParameters {
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Select properties to be returned
     */
    select?: string[];
}
export interface WorkbookTableColumnItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: WorkbookTableColumnItemRequestBuilderGetQueryParameters;
}
export interface WorkbookTableColumnItemRequestBuilderPatchRequestConfiguration {
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
 * Provides operations to manage the columns property of the microsoft.graph.workbookTable entity.
 */
export class WorkbookTableColumnItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to call the dataBodyRange method.
     */
    public get dataBodyRange(): DataBodyRangeRequestBuilder {
        return new DataBodyRangeRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the filter property of the microsoft.graph.workbookTableColumn entity.
     */
    public get filter(): FilterRequestBuilder {
        return new FilterRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the headerRowRange method.
     */
    public get headerRowRange(): HeaderRowRangeRequestBuilder {
        return new HeaderRowRangeRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the range method.
     */
    public get range(): RangeRequestBuilder {
        return new RangeRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the totalRowRange method.
     */
    public get totalRowRange(): TotalRowRangeRequestBuilder {
        return new TotalRowRangeRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new WorkbookTableColumnItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/worksheets/{workbookWorksheet%2Did}/tables/{workbookTable%2Did}/columns/{workbookTableColumn%2Did}{?%24select,%24expand}");
    };
    /**
     * Deletes the column from the table.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/tablecolumn-delete?view=graph-rest-1.0|Find more info here}
     */
    public delete(requestConfiguration?: WorkbookTableColumnItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Retrieve the properties and relationships of tablecolumn object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of WorkbookTableColumn
     * @see {@link https://learn.microsoft.com/graph/api/tablecolumn-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: WorkbookTableColumnItemRequestBuilderGetRequestConfiguration | undefined) : Promise<WorkbookTableColumn | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<WorkbookTableColumn>(requestInfo, createWorkbookTableColumnFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the properties of tablecolumn object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of WorkbookTableColumn
     * @see {@link https://learn.microsoft.com/graph/api/tablecolumn-update?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: WorkbookTableColumn, requestConfiguration?: WorkbookTableColumnItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<WorkbookTableColumn | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<WorkbookTableColumn>(requestInfo, createWorkbookTableColumnFromDiscriminatorValue, errorMapping);
    };
    /**
     * Deletes the column from the table.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: WorkbookTableColumnItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Retrieve the properties and relationships of tablecolumn object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: WorkbookTableColumnItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the properties of tablecolumn object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: WorkbookTableColumn, requestConfiguration?: WorkbookTableColumnItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeWorkbookTableColumn);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a WorkbookTableColumnItemRequestBuilder
     */
    public withUrl(rawUrl: string) : WorkbookTableColumnItemRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new WorkbookTableColumnItemRequestBuilder(rawUrl, this.requestAdapter);
    };
}
