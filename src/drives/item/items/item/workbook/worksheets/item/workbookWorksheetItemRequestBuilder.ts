import { type ODataError } from '../../../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../../../../../../models/oDataErrors/oDataError';
import { createWorkbookWorksheetFromDiscriminatorValue, deserializeIntoWorkbookWorksheet, serializeWorkbookWorksheet, type WorkbookWorksheet } from '../../../../../../../models/workbookWorksheet';
import { CellWithRowWithColumnRequestBuilder } from './cellWithRowWithColumn/cellWithRowWithColumnRequestBuilder';
import { ChartsRequestBuilder } from './charts/chartsRequestBuilder';
import { NamesRequestBuilder } from './names/namesRequestBuilder';
import { PivotTablesRequestBuilder } from './pivotTables/pivotTablesRequestBuilder';
import { ProtectionRequestBuilder } from './protection/protectionRequestBuilder';
import { RangeRequestBuilder } from './range/rangeRequestBuilder';
import { RangeWithAddressRequestBuilder } from './rangeWithAddress/rangeWithAddressRequestBuilder';
import { TablesRequestBuilder } from './tables/tablesRequestBuilder';
import { UsedRangeRequestBuilder } from './usedRange/usedRangeRequestBuilder';
import { UsedRangeWithValuesOnlyRequestBuilder } from './usedRangeWithValuesOnly/usedRangeWithValuesOnlyRequestBuilder';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface WorkbookWorksheetItemRequestBuilderDeleteRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]>;
    /**
     * Request options
     */
    options?: RequestOption[];
}
export interface WorkbookWorksheetItemRequestBuilderGetQueryParameters {
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Select properties to be returned
     */
    select?: string[];
}
export interface WorkbookWorksheetItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: WorkbookWorksheetItemRequestBuilderGetQueryParameters;
}
export interface WorkbookWorksheetItemRequestBuilderPatchRequestConfiguration {
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
 * Provides operations to manage the worksheets property of the microsoft.graph.workbook entity.
 */
export class WorkbookWorksheetItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the charts property of the microsoft.graph.workbookWorksheet entity.
     */
    public get charts(): ChartsRequestBuilder {
        return new ChartsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the names property of the microsoft.graph.workbookWorksheet entity.
     */
    public get names(): NamesRequestBuilder {
        return new NamesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the pivotTables property of the microsoft.graph.workbookWorksheet entity.
     */
    public get pivotTables(): PivotTablesRequestBuilder {
        return new PivotTablesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the protection property of the microsoft.graph.workbookWorksheet entity.
     */
    public get protection(): ProtectionRequestBuilder {
        return new ProtectionRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the range method.
     */
    public get range(): RangeRequestBuilder {
        return new RangeRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the tables property of the microsoft.graph.workbookWorksheet entity.
     */
    public get tables(): TablesRequestBuilder {
        return new TablesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the usedRange method.
     */
    public get usedRange(): UsedRangeRequestBuilder {
        return new UsedRangeRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the cell method.
     * @param column Usage: column={column}
     * @param row Usage: row={row}
     * @returns a cellWithRowWithColumnRequestBuilder
     */
    public cellWithRowWithColumn(column: number | undefined, row: number | undefined) : CellWithRowWithColumnRequestBuilder {
        if(!column) throw new Error("column cannot be undefined");
        if(!row) throw new Error("row cannot be undefined");
        return new CellWithRowWithColumnRequestBuilder(this.pathParameters, this.requestAdapter, column, row);
    };
    /**
     * Instantiates a new WorkbookWorksheetItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/worksheets/{workbookWorksheet%2Did}{?%24select,%24expand}");
    };
    /**
     * Deletes the worksheet from the workbook. This API is supported in the following national cloud deployments.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/worksheet-delete?view=graph-rest-1.0|Find more info here}
     */
    public delete(requestConfiguration?: WorkbookWorksheetItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Retrieve the properties and relationships of worksheet object. This API is supported in the following national cloud deployments.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of WorkbookWorksheet
     * @see {@link https://learn.microsoft.com/graph/api/worksheet-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: WorkbookWorksheetItemRequestBuilderGetRequestConfiguration | undefined) : Promise<WorkbookWorksheet | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<WorkbookWorksheet>(requestInfo, createWorkbookWorksheetFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the properties of worksheet object. This API is supported in the following national cloud deployments.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of WorkbookWorksheet
     * @see {@link https://learn.microsoft.com/graph/api/worksheet-update?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: WorkbookWorksheet, requestConfiguration?: WorkbookWorksheetItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<WorkbookWorksheet | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<WorkbookWorksheet>(requestInfo, createWorkbookWorksheetFromDiscriminatorValue, errorMapping);
    };
    /**
     * Provides operations to call the range method.
     * @param address Usage: address='{address}'
     * @returns a rangeWithAddressRequestBuilder
     */
    public rangeWithAddress(address: string | undefined) : RangeWithAddressRequestBuilder {
        if(!address) throw new Error("address cannot be undefined");
        return new RangeWithAddressRequestBuilder(this.pathParameters, this.requestAdapter, address);
    };
    /**
     * Deletes the worksheet from the workbook. This API is supported in the following national cloud deployments.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: WorkbookWorksheetItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Retrieve the properties and relationships of worksheet object. This API is supported in the following national cloud deployments.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: WorkbookWorksheetItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the properties of worksheet object. This API is supported in the following national cloud deployments.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: WorkbookWorksheet, requestConfiguration?: WorkbookWorksheetItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeWorkbookWorksheet);
        return requestInfo;
    };
    /**
     * Provides operations to call the usedRange method.
     * @param valuesOnly Usage: valuesOnly={valuesOnly}
     * @returns a usedRangeWithValuesOnlyRequestBuilder
     */
    public usedRangeWithValuesOnly(valuesOnly: boolean | undefined) : UsedRangeWithValuesOnlyRequestBuilder {
        if(!valuesOnly) throw new Error("valuesOnly cannot be undefined");
        return new UsedRangeWithValuesOnlyRequestBuilder(this.pathParameters, this.requestAdapter, valuesOnly);
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a WorkbookWorksheetItemRequestBuilder
     */
    public withUrl(rawUrl: string) : WorkbookWorksheetItemRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new WorkbookWorksheetItemRequestBuilder(rawUrl, this.requestAdapter);
    };
}
