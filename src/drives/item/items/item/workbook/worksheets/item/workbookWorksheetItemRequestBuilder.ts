import {WorkbookWorksheet} from '../../../../../../../models/';
import {createWorkbookWorksheetFromDiscriminatorValue} from '../../../../../../../models/createWorkbookWorksheetFromDiscriminatorValue';
import {ODataError} from '../../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {ChartsRequestBuilder} from './charts/chartsRequestBuilder';
import {WorkbookChartItemRequestBuilder} from './charts/item/workbookChartItemRequestBuilder';
import {CellWithRowWithColumnRequestBuilder} from './microsoftGraphCellWithRowWithColumn/cellWithRowWithColumnRequestBuilder';
import {RangeRequestBuilder} from './microsoftGraphRange/rangeRequestBuilder';
import {RangeWithAddressRequestBuilder} from './microsoftGraphRangeWithAddress/rangeWithAddressRequestBuilder';
import {UsedRangeRequestBuilder} from './microsoftGraphUsedRange/usedRangeRequestBuilder';
import {UsedRangeWithValuesOnlyRequestBuilder} from './microsoftGraphUsedRangeWithValuesOnly/usedRangeWithValuesOnlyRequestBuilder';
import {WorkbookNamedItemItemRequestBuilder} from './names/item/workbookNamedItemItemRequestBuilder';
import {NamesRequestBuilder} from './names/namesRequestBuilder';
import {WorkbookPivotTableItemRequestBuilder} from './pivotTables/item/workbookPivotTableItemRequestBuilder';
import {PivotTablesRequestBuilder} from './pivotTables/pivotTablesRequestBuilder';
import {ProtectionRequestBuilder} from './protection/protectionRequestBuilder';
import {WorkbookTableItemRequestBuilder} from './tables/item/workbookTableItemRequestBuilder';
import {TablesRequestBuilder} from './tables/tablesRequestBuilder';
import {WorkbookWorksheetItemRequestBuilderDeleteRequestConfiguration} from './workbookWorksheetItemRequestBuilderDeleteRequestConfiguration';
import {WorkbookWorksheetItemRequestBuilderGetRequestConfiguration} from './workbookWorksheetItemRequestBuilderGetRequestConfiguration';
import {WorkbookWorksheetItemRequestBuilderPatchRequestConfiguration} from './workbookWorksheetItemRequestBuilderPatchRequestConfiguration';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the worksheets property of the microsoft.graph.workbook entity.
 */
export class WorkbookWorksheetItemRequestBuilder {
    /** Provides operations to manage the charts property of the microsoft.graph.workbookWorksheet entity. */
    public get charts(): ChartsRequestBuilder {
        return new ChartsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the range method. */
    public get microsoftGraphRange(): RangeRequestBuilder {
        return new RangeRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the usedRange method. */
    public get microsoftGraphUsedRange(): UsedRangeRequestBuilder {
        return new UsedRangeRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the names property of the microsoft.graph.workbookWorksheet entity. */
    public get names(): NamesRequestBuilder {
        return new NamesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private pathParameters: Record<string, unknown>;
    /** Provides operations to manage the pivotTables property of the microsoft.graph.workbookWorksheet entity. */
    public get pivotTables(): PivotTablesRequestBuilder {
        return new PivotTablesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the protection property of the microsoft.graph.workbookWorksheet entity. */
    public get protection(): ProtectionRequestBuilder {
        return new ProtectionRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The request adapter to use to execute the requests. */
    private requestAdapter: RequestAdapter;
    /** Provides operations to manage the tables property of the microsoft.graph.workbookWorksheet entity. */
    public get tables(): TablesRequestBuilder {
        return new TablesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder */
    private urlTemplate: string;
    /**
     * Provides operations to manage the charts property of the microsoft.graph.workbookWorksheet entity.
     * @param id Unique identifier of the item
     * @returns a WorkbookChartItemRequestBuilder
     */
    public chartsById(id: string) : WorkbookChartItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["workbookChart%2Did"] = id
        return new WorkbookChartItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new WorkbookWorksheetItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     * @param workbookWorksheetId key: id of workbookWorksheet
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter, workbookWorksheetId?: string | undefined) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/worksheets/{workbookWorksheet%2Did}{?%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        urlTplParams["workbookWorksheet%2Did"] = workbookWorksheetId
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Delete navigation property worksheets for drives
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(requestConfiguration?: WorkbookWorksheetItemRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.toDeleteRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Represents a collection of worksheets associated with the workbook. Read-only.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of WorkbookWorksheet
     */
    public get(requestConfiguration?: WorkbookWorksheetItemRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<WorkbookWorksheet | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<WorkbookWorksheet>(requestInfo, createWorkbookWorksheetFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Provides operations to call the cell method.
     * @param column Usage: column={column}
     * @param row Usage: row={row}
     * @returns a cellWithRowWithColumnRequestBuilder
     */
    public microsoftGraphCellWithRowWithColumn(column: number | undefined, row: number | undefined) : CellWithRowWithColumnRequestBuilder {
        if(!column) throw new Error("column cannot be undefined");
        if(!row) throw new Error("row cannot be undefined");
        return new CellWithRowWithColumnRequestBuilder(this.pathParameters, this.requestAdapter, column, row);
    };
    /**
     * Provides operations to call the range method.
     * @param address Usage: address='{address}'
     * @returns a rangeWithAddressRequestBuilder
     */
    public microsoftGraphRangeWithAddress(address: string | undefined) : RangeWithAddressRequestBuilder {
        if(!address) throw new Error("address cannot be undefined");
        return new RangeWithAddressRequestBuilder(this.pathParameters, this.requestAdapter, address);
    };
    /**
     * Provides operations to call the usedRange method.
     * @param valuesOnly Usage: valuesOnly={valuesOnly}
     * @returns a usedRangeWithValuesOnlyRequestBuilder
     */
    public microsoftGraphUsedRangeWithValuesOnly(valuesOnly: boolean | undefined) : UsedRangeWithValuesOnlyRequestBuilder {
        if(!valuesOnly) throw new Error("valuesOnly cannot be undefined");
        return new UsedRangeWithValuesOnlyRequestBuilder(this.pathParameters, this.requestAdapter, valuesOnly);
    };
    /**
     * Provides operations to manage the names property of the microsoft.graph.workbookWorksheet entity.
     * @param id Unique identifier of the item
     * @returns a WorkbookNamedItemItemRequestBuilder
     */
    public namesById(id: string) : WorkbookNamedItemItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["workbookNamedItem%2Did"] = id
        return new WorkbookNamedItemItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Update the navigation property worksheets in drives
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of WorkbookWorksheet
     */
    public patch(body: WorkbookWorksheet | undefined, requestConfiguration?: WorkbookWorksheetItemRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<WorkbookWorksheet | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<WorkbookWorksheet>(requestInfo, createWorkbookWorksheetFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Provides operations to manage the pivotTables property of the microsoft.graph.workbookWorksheet entity.
     * @param id Unique identifier of the item
     * @returns a WorkbookPivotTableItemRequestBuilder
     */
    public pivotTablesById(id: string) : WorkbookPivotTableItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["workbookPivotTable%2Did"] = id
        return new WorkbookPivotTableItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the tables property of the microsoft.graph.workbookWorksheet entity.
     * @param id Unique identifier of the item
     * @returns a WorkbookTableItemRequestBuilder
     */
    public tablesById(id: string) : WorkbookTableItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["workbookTable%2Did"] = id
        return new WorkbookTableItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Delete navigation property worksheets for drives
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
     * Represents a collection of worksheets associated with the workbook. Read-only.
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
     * Update the navigation property worksheets in drives
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: WorkbookWorksheet | undefined, requestConfiguration?: WorkbookWorksheetItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        return requestInfo;
    };
}
