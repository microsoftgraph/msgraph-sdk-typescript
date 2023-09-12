import { createWorkbookTableFromDiscriminatorValue } from '../../../../../../../../../models/createWorkbookTableFromDiscriminatorValue';
import { deserializeIntoWorkbookTable } from '../../../../../../../../../models/deserializeIntoWorkbookTable';
import { type ODataError } from '../../../../../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../../../../../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../../../../../../../models/oDataErrors/serializeODataError';
import { serializeWorkbookTable } from '../../../../../../../../../models/serializeWorkbookTable';
import { type WorkbookTable } from '../../../../../../../../../models/workbookTable';
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
import { type WorkbookTableItemRequestBuilderDeleteRequestConfiguration } from './workbookTableItemRequestBuilderDeleteRequestConfiguration';
import { type WorkbookTableItemRequestBuilderGetRequestConfiguration } from './workbookTableItemRequestBuilderGetRequestConfiguration';
import { type WorkbookTableItemRequestBuilderPatchRequestConfiguration } from './workbookTableItemRequestBuilderPatchRequestConfiguration';
import { WorksheetRequestBuilder } from './worksheet/worksheetRequestBuilder';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the tables property of the microsoft.graph.workbookWorksheet entity.
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
        super(pathParameters, requestAdapter, "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/worksheets/{workbookWorksheet%2Did}/tables/{workbookTable%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete navigation property tables for drives
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
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
     * Collection of tables that are part of the worksheet. Read-only.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of WorkbookTable
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
     * Update the navigation property tables in drives
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of WorkbookTable
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
     * Delete navigation property tables for drives
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
     * Collection of tables that are part of the worksheet. Read-only.
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
     * Update the navigation property tables in drives
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
