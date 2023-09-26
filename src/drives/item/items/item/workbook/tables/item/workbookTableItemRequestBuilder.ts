import { type ODataError } from '../../../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../../../../../../models/oDataErrors/oDataError';
import { createWorkbookTableFromDiscriminatorValue, deserializeIntoWorkbookTable, serializeWorkbookTable, type WorkbookTable } from '../../../../../../../models/workbookTable';
import { ClearFiltersRequestBuilder } from './clearFilters/clearFiltersRequestBuilder';
import { ColumnsRequestBuilder } from './columns/columnsRequestBuilder';
import { ConvertToRangeRequestBuilder } from './convertToRange/convertToRangeRequestBuilder';
import { DataBodyRangeRequestBuilder } from './dataBodyRange/dataBodyRangeRequestBuilder';
import { HeaderRowRangeRequestBuilder } from './headerRowRange/headerRowRangeRequestBuilder';
import { RangeRequestBuilder } from './range/rangeRequestBuilder';
import { ReapplyFiltersRequestBuilder } from './reapplyFilters/reapplyFiltersRequestBuilder';
import { RowsRequestBuilder } from './rows/rowsRequestBuilder';
import { SortRequestBuilder } from './sort/sortRequestBuilder';
import { TotalRowRangeRequestBuilder } from './totalRowRange/totalRowRangeRequestBuilder';
import { WorksheetRequestBuilder } from './worksheet/worksheetRequestBuilder';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface WorkbookTableItemRequestBuilderDeleteRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]>;
    /**
     * Request options
     */
    options?: RequestOption[];
}
export interface WorkbookTableItemRequestBuilderGetQueryParameters {
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Select properties to be returned
     */
    select?: string[];
}
export interface WorkbookTableItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: WorkbookTableItemRequestBuilderGetQueryParameters;
}
export interface WorkbookTableItemRequestBuilderPatchRequestConfiguration {
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
 * Provides operations to manage the tables property of the microsoft.graph.workbook entity.
 */
export class WorkbookTableItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to call the clearFilters method.
     */
    public get clearFilters(): ClearFiltersRequestBuilder {
        return new ClearFiltersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the columns property of the microsoft.graph.workbookTable entity.
     */
    public get columns(): ColumnsRequestBuilder {
        return new ColumnsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the convertToRange method.
     */
    public get convertToRange(): ConvertToRangeRequestBuilder {
        return new ConvertToRangeRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the dataBodyRange method.
     */
    public get dataBodyRange(): DataBodyRangeRequestBuilder {
        return new DataBodyRangeRequestBuilder(this.pathParameters, this.requestAdapter);
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
     * Provides operations to call the reapplyFilters method.
     */
    public get reapplyFilters(): ReapplyFiltersRequestBuilder {
        return new ReapplyFiltersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the rows property of the microsoft.graph.workbookTable entity.
     */
    public get rows(): RowsRequestBuilder {
        return new RowsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the sort property of the microsoft.graph.workbookTable entity.
     */
    public get sort(): SortRequestBuilder {
        return new SortRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the totalRowRange method.
     */
    public get totalRowRange(): TotalRowRangeRequestBuilder {
        return new TotalRowRangeRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the worksheet property of the microsoft.graph.workbookTable entity.
     */
    public get worksheet(): WorksheetRequestBuilder {
        return new WorksheetRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new WorkbookTableItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/tables/{workbookTable%2Did}{?%24select,%24expand}");
    };
    /**
     * Deletes the table.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/table-delete?view=graph-rest-1.0|Find more info here}
     */
    public delete(requestConfiguration?: WorkbookTableItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Retrieve the properties and relationships of table object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of WorkbookTable
     * @see {@link https://learn.microsoft.com/graph/api/table-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: WorkbookTableItemRequestBuilderGetRequestConfiguration | undefined) : Promise<WorkbookTable | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<WorkbookTable>(requestInfo, createWorkbookTableFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the properties of table object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of WorkbookTable
     * @see {@link https://learn.microsoft.com/graph/api/table-update?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: WorkbookTable, requestConfiguration?: WorkbookTableItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<WorkbookTable | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<WorkbookTable>(requestInfo, createWorkbookTableFromDiscriminatorValue, errorMapping);
    };
    /**
     * Deletes the table.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: WorkbookTableItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Retrieve the properties and relationships of table object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: WorkbookTableItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the properties of table object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: WorkbookTable, requestConfiguration?: WorkbookTableItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeWorkbookTable);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a WorkbookTableItemRequestBuilder
     */
    public withUrl(rawUrl: string) : WorkbookTableItemRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new WorkbookTableItemRequestBuilder(rawUrl, this.requestAdapter);
    };
}
