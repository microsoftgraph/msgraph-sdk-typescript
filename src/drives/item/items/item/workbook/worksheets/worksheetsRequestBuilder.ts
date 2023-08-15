import {WorkbookWorksheetCollectionResponse} from '../../../../../../models/';
import {createWorkbookWorksheetCollectionResponseFromDiscriminatorValue} from '../../../../../../models/createWorkbookWorksheetCollectionResponseFromDiscriminatorValue';
import {createWorkbookWorksheetFromDiscriminatorValue} from '../../../../../../models/createWorkbookWorksheetFromDiscriminatorValue';
import {deserializeIntoWorkbookWorksheet} from '../../../../../../models/deserializeIntoWorkbookWorksheet';
import {ODataError} from '../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../../models/oDataErrors/serializeODataError';
import {serializeWorkbookWorksheet} from '../../../../../../models/serializeWorkbookWorksheet';
import type {WorkbookWorksheet} from '../../../../../../models/workbookWorksheet';
import {AddRequestBuilder} from './add/addRequestBuilder';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {WorkbookWorksheetItemRequestBuilder} from './item/workbookWorksheetItemRequestBuilder';
import {WorksheetsRequestBuilderGetRequestConfiguration} from './worksheetsRequestBuilderGetRequestConfiguration';
import {WorksheetsRequestBuilderPostRequestConfiguration} from './worksheetsRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the worksheets property of the microsoft.graph.workbook entity.
 */
export class WorksheetsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to call the add method.
     */
    public get add(): AddRequestBuilder {
        return new AddRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the worksheets property of the microsoft.graph.workbook entity.
     * @param workbookWorksheetId The unique identifier of workbookWorksheet
     * @returns a WorkbookWorksheetItemRequestBuilder
     */
    public byWorkbookWorksheetId(workbookWorksheetId: string) : WorkbookWorksheetItemRequestBuilder {
        if(!workbookWorksheetId) throw new Error("workbookWorksheetId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["workbookWorksheet%2Did"] = workbookWorksheetId
        return new WorkbookWorksheetItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new WorksheetsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/worksheets{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Retrieve a list of worksheet objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of WorkbookWorksheetCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/worksheet-list?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: WorksheetsRequestBuilderGetRequestConfiguration | undefined) : Promise<WorkbookWorksheetCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<WorkbookWorksheetCollectionResponse>(requestInfo, createWorkbookWorksheetCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to worksheets for drives
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of WorkbookWorksheet
     */
    public post(body: WorkbookWorksheet, requestConfiguration?: WorksheetsRequestBuilderPostRequestConfiguration | undefined) : Promise<WorkbookWorksheet | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<WorkbookWorksheet>(requestInfo, createWorkbookWorksheetFromDiscriminatorValue, errorMapping);
    };
    /**
     * Retrieve a list of worksheet objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: WorksheetsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to worksheets for drives
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: WorkbookWorksheet, requestConfiguration?: WorksheetsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeWorkbookWorksheet);
        return requestInfo;
    };
}
