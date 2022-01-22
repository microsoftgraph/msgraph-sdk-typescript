import {WorkbookWorksheet} from '../../../../../../models/microsoft/graph/workbookWorksheet';
import {CellWithRowWithColumnRequestBuilder} from './cellWithRowWithColumn/cellWithRowWithColumnRequestBuilder';
import {ChartsRequestBuilder} from './charts/chartsRequestBuilder';
import {WorkbookChartRequestBuilder} from './charts/item/workbookChartRequestBuilder';
import {WorkbookNamedItemRequestBuilder} from './names/item/workbookNamedItemRequestBuilder';
import {NamesRequestBuilder} from './names/namesRequestBuilder';
import {WorkbookPivotTableRequestBuilder} from './pivotTables/item/workbookPivotTableRequestBuilder';
import {PivotTablesRequestBuilder} from './pivotTables/pivotTablesRequestBuilder';
import {ProtectionRequestBuilder} from './protection/protectionRequestBuilder';
import {RangeRequestBuilder} from './range/rangeRequestBuilder';
import {RangeWithAddressRequestBuilder} from './rangeWithAddress/rangeWithAddressRequestBuilder';
import {WorkbookTableRequestBuilder} from './tables/item/workbookTableRequestBuilder';
import {TablesRequestBuilder} from './tables/tablesRequestBuilder';
import {UsedRangeRequestBuilder} from './usedRange/usedRangeRequestBuilder';
import {UsedRangeWithValuesOnlyRequestBuilder} from './usedRangeWithValuesOnly/usedRangeWithValuesOnlyRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /workbooks/{driveItem-id}/workbook/names/{workbookNamedItem-id}/worksheet  */
export class WorksheetRequestBuilder {
    public get charts(): ChartsRequestBuilder {
        return new ChartsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get names(): NamesRequestBuilder {
        return new NamesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request  */
    private readonly pathParameters: Map<string, unknown>;
    public get pivotTables(): PivotTablesRequestBuilder {
        return new PivotTablesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get protection(): ProtectionRequestBuilder {
        return new ProtectionRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The request adapter to use to execute the requests.  */
    private readonly requestAdapter: RequestAdapter;
    public get tables(): TablesRequestBuilder {
        return new TablesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder  */
    private readonly urlTemplate: string;
    /**
     * Builds and executes requests for operations under /workbooks/{driveItem-id}/workbook/names/{workbookNamedItem-id}/worksheet/microsoft.graph.cell(row={row},column={column})
     * @param column Usage: column={column}
     * @param row Usage: row={row}
     * @returns a cellWithRowWithColumnRequestBuilder
     */
    public cellWithRowWithColumn(row: number | undefined, column: number | undefined) : CellWithRowWithColumnRequestBuilder {
        if(!column) throw new Error("column cannot be undefined");
        if(!row) throw new Error("row cannot be undefined");
        return new CellWithRowWithColumnRequestBuilder(this.pathParameters, this.requestAdapter, row, column);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.workbooks.item.workbook.names.item.worksheet.charts.item collection
     * @param id Unique identifier of the item
     * @returns a workbookChartRequestBuilder
     */
    public chartsById(id: string) : WorkbookChartRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        id && urlTplParams.set("workbookChart_id", id);
        return new WorkbookChartRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new WorksheetRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Map<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/workbooks/{driveItem_id}/workbook/names/{workbookNamedItem_id}/worksheet{?select,expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Returns the worksheet on which the named item is scoped to. Available only if the item is scoped to the worksheet. Read-only.
     * @param h Request headers
     * @param o Request options
     * @returns a RequestInformation
     */
    public createDeleteRequestInformation(h?: object | undefined, o?: RequestOption[] | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.DELETE;
        h && requestInfo.setHeadersFromRawObject(h);
        o && requestInfo.addRequestOptions(...o);
        return requestInfo;
    };
    /**
     * Returns the worksheet on which the named item is scoped to. Available only if the item is scoped to the worksheet. Read-only.
     * @param h Request headers
     * @param o Request options
     * @param q Request query parameters
     * @returns a RequestInformation
     */
    public createGetRequestInformation(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: object | undefined, o?: RequestOption[] | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        h && requestInfo.setHeadersFromRawObject(h);
        q && requestInfo.setQueryStringParametersFromRawObject(q);
        o && requestInfo.addRequestOptions(...o);
        return requestInfo;
    };
    /**
     * Returns the worksheet on which the named item is scoped to. Available only if the item is scoped to the worksheet. Read-only.
     * @param body 
     * @param h Request headers
     * @param o Request options
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: WorkbookWorksheet | undefined, h?: object | undefined, o?: RequestOption[] | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.PATCH;
        h && requestInfo.setHeadersFromRawObject(h);
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        o && requestInfo.addRequestOptions(...o);
        return requestInfo;
    };
    /**
     * Returns the worksheet on which the named item is scoped to. Available only if the item is scoped to the worksheet. Read-only.
     * @param h Request headers
     * @param o Request options
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(h?: object | undefined, o?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.createDeleteRequestInformation(
            h, o
        );
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Returns the worksheet on which the named item is scoped to. Available only if the item is scoped to the worksheet. Read-only.
     * @param h Request headers
     * @param o Request options
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of WorkbookWorksheet
     */
    public get(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: object | undefined, o?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<WorkbookWorksheet | undefined> {
        const requestInfo = this.createGetRequestInformation(
            q, h, o
        );
        return this.requestAdapter?.sendAsync<WorkbookWorksheet>(requestInfo, WorkbookWorksheet, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.workbooks.item.workbook.names.item.worksheet.names.item collection
     * @param id Unique identifier of the item
     * @returns a workbookNamedItemRequestBuilder
     */
    public namesById(id: string) : WorkbookNamedItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        id && urlTplParams.set("workbookNamedItem_id1", id);
        return new WorkbookNamedItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Returns the worksheet on which the named item is scoped to. Available only if the item is scoped to the worksheet. Read-only.
     * @param body 
     * @param h Request headers
     * @param o Request options
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: WorkbookWorksheet | undefined, h?: object | undefined, o?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, h, o
        );
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.workbooks.item.workbook.names.item.worksheet.pivotTables.item collection
     * @param id Unique identifier of the item
     * @returns a workbookPivotTableRequestBuilder
     */
    public pivotTablesById(id: string) : WorkbookPivotTableRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        id && urlTplParams.set("workbookPivotTable_id", id);
        return new WorkbookPivotTableRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Builds and executes requests for operations under /workbooks/{driveItem-id}/workbook/names/{workbookNamedItem-id}/worksheet/microsoft.graph.range()
     * @returns a rangeRequestBuilder
     */
    public range() : RangeRequestBuilder {
        return new RangeRequestBuilder(this.pathParameters, this.requestAdapter);
    };
    /**
     * Builds and executes requests for operations under /workbooks/{driveItem-id}/workbook/names/{workbookNamedItem-id}/worksheet/microsoft.graph.range(address='{address}')
     * @param address Usage: address={address}
     * @returns a rangeWithAddressRequestBuilder
     */
    public rangeWithAddress(address: string | undefined) : RangeWithAddressRequestBuilder {
        if(!address) throw new Error("address cannot be undefined");
        return new RangeWithAddressRequestBuilder(this.pathParameters, this.requestAdapter, address);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.workbooks.item.workbook.names.item.worksheet.tables.item collection
     * @param id Unique identifier of the item
     * @returns a workbookTableRequestBuilder
     */
    public tablesById(id: string) : WorkbookTableRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        id && urlTplParams.set("workbookTable_id", id);
        return new WorkbookTableRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Builds and executes requests for operations under /workbooks/{driveItem-id}/workbook/names/{workbookNamedItem-id}/worksheet/microsoft.graph.usedRange()
     * @returns a usedRangeRequestBuilder
     */
    public usedRange() : UsedRangeRequestBuilder {
        return new UsedRangeRequestBuilder(this.pathParameters, this.requestAdapter);
    };
    /**
     * Builds and executes requests for operations under /workbooks/{driveItem-id}/workbook/names/{workbookNamedItem-id}/worksheet/microsoft.graph.usedRange(valuesOnly={valuesOnly})
     * @param valuesOnly Usage: valuesOnly={valuesOnly}
     * @returns a usedRangeWithValuesOnlyRequestBuilder
     */
    public usedRangeWithValuesOnly(valuesOnly: boolean | undefined) : UsedRangeWithValuesOnlyRequestBuilder {
        if(!valuesOnly) throw new Error("valuesOnly cannot be undefined");
        return new UsedRangeWithValuesOnlyRequestBuilder(this.pathParameters, this.requestAdapter, valuesOnly);
    };
}
