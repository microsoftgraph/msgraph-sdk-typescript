import {WorkbookPivotTableCollectionResponse} from '../../../../../../../../models/';
import {createWorkbookPivotTableCollectionResponseFromDiscriminatorValue} from '../../../../../../../../models/createWorkbookPivotTableCollectionResponseFromDiscriminatorValue';
import {createWorkbookPivotTableFromDiscriminatorValue} from '../../../../../../../../models/createWorkbookPivotTableFromDiscriminatorValue';
import {deserializeIntoWorkbookPivotTable} from '../../../../../../../../models/deserializeIntoWorkbookPivotTable';
import {ODataError} from '../../../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../../../../models/oDataErrors/serializeODataError';
import {serializeWorkbookPivotTable} from '../../../../../../../../models/serializeWorkbookPivotTable';
import type {WorkbookPivotTable} from '../../../../../../../../models/workbookPivotTable';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {WorkbookPivotTableItemRequestBuilder} from './item/workbookPivotTableItemRequestBuilder';
import {PivotTablesRequestBuilderGetRequestConfiguration} from './pivotTablesRequestBuilderGetRequestConfiguration';
import {PivotTablesRequestBuilderPostRequestConfiguration} from './pivotTablesRequestBuilderPostRequestConfiguration';
import {RefreshAllRequestBuilder} from './refreshAll/refreshAllRequestBuilder';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the pivotTables property of the microsoft.graph.workbookWorksheet entity.
 */
export class PivotTablesRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the refreshAll method.
     */
    public get refreshAll(): RefreshAllRequestBuilder {
        return new RefreshAllRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the pivotTables property of the microsoft.graph.workbookWorksheet entity.
     * @param workbookPivotTableId The unique identifier of workbookPivotTable
     * @returns a WorkbookPivotTableItemRequestBuilder
     */
    public byWorkbookPivotTableId(workbookPivotTableId: string) : WorkbookPivotTableItemRequestBuilder {
        if(!workbookPivotTableId) throw new Error("workbookPivotTableId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["workbookPivotTable%2Did"] = workbookPivotTableId
        return new WorkbookPivotTableItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new PivotTablesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/worksheets/{workbookWorksheet%2Did}/pivotTables{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Retrieve a list of workbookpivottable objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of WorkbookPivotTableCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/workbookworksheet-list-pivottables?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: PivotTablesRequestBuilderGetRequestConfiguration | undefined) : Promise<WorkbookPivotTableCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<WorkbookPivotTableCollectionResponse>(requestInfo, createWorkbookPivotTableCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to pivotTables for drives
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of WorkbookPivotTable
     */
    public post(body: WorkbookPivotTable, requestConfiguration?: PivotTablesRequestBuilderPostRequestConfiguration | undefined) : Promise<WorkbookPivotTable | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<WorkbookPivotTable>(requestInfo, createWorkbookPivotTableFromDiscriminatorValue, errorMapping);
    };
    /**
     * Retrieve a list of workbookpivottable objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: PivotTablesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to pivotTables for drives
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: WorkbookPivotTable, requestConfiguration?: PivotTablesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.POST;
        requestInfo.headers["Accept"] = ["application/json"];
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeWorkbookPivotTable);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a pivotTablesRequestBuilder
     */
    public withUrl(rawUrl: string) : PivotTablesRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new PivotTablesRequestBuilder(rawUrl, this.requestAdapter);
    };
}
