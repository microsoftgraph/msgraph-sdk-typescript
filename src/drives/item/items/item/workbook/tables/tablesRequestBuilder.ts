import {WorkbookTableCollectionResponse} from '../../../../../../models/';
import {createWorkbookTableCollectionResponseFromDiscriminatorValue} from '../../../../../../models/createWorkbookTableCollectionResponseFromDiscriminatorValue';
import {createWorkbookTableFromDiscriminatorValue} from '../../../../../../models/createWorkbookTableFromDiscriminatorValue';
import {deserializeIntoWorkbookTable} from '../../../../../../models/deserializeIntoWorkbookTable';
import {ODataError} from '../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../../models/oDataErrors/serializeODataError';
import {serializeWorkbookTable} from '../../../../../../models/serializeWorkbookTable';
import type {WorkbookTable} from '../../../../../../models/workbookTable';
import {AddRequestBuilder} from './add/addRequestBuilder';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {WorkbookTableItemRequestBuilder} from './item/workbookTableItemRequestBuilder';
import {ItemAtWithIndexRequestBuilder} from './itemAtWithIndex/itemAtWithIndexRequestBuilder';
import {TablesRequestBuilderGetRequestConfiguration} from './tablesRequestBuilderGetRequestConfiguration';
import {TablesRequestBuilderPostRequestConfiguration} from './tablesRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the tables property of the microsoft.graph.workbook entity.
 */
export class TablesRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to call the add method.
     */
    public get add(): AddRequestBuilder {
        return new AddRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the count method.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the tables property of the microsoft.graph.workbook entity.
     * @param workbookTableId The unique identifier of workbookTable
     * @returns a WorkbookTableItemRequestBuilder
     */
    public byWorkbookTableId(workbookTableId: string) : WorkbookTableItemRequestBuilder {
        if(!workbookTableId) throw new Error("workbookTableId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["workbookTable%2Did"] = workbookTableId
        return new WorkbookTableItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new TablesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/tables{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Retrieve a list of table objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of WorkbookTableCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/workbook-list-tables?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: TablesRequestBuilderGetRequestConfiguration | undefined) : Promise<WorkbookTableCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<WorkbookTableCollectionResponse>(requestInfo, createWorkbookTableCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Provides operations to call the itemAt method.
     * @param index Usage: index={index}
     * @returns a itemAtWithIndexRequestBuilder
     */
    public itemAtWithIndex(index: number | undefined) : ItemAtWithIndexRequestBuilder {
        if(!index) throw new Error("index cannot be undefined");
        return new ItemAtWithIndexRequestBuilder(this.pathParameters, this.requestAdapter, index);
    };
    /**
     * Create new navigation property to tables for drives
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of WorkbookTable
     */
    public post(body: WorkbookTable, requestConfiguration?: TablesRequestBuilderPostRequestConfiguration | undefined) : Promise<WorkbookTable | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<WorkbookTable>(requestInfo, createWorkbookTableFromDiscriminatorValue, errorMapping);
    };
    /**
     * Retrieve a list of table objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: TablesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to tables for drives
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: WorkbookTable, requestConfiguration?: TablesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeWorkbookTable);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a tablesRequestBuilder
     */
    public withUrl(rawUrl: string) : TablesRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new TablesRequestBuilder(rawUrl, this.requestAdapter);
    };
}
