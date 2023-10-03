import { type WorkbookWorksheetCollectionResponse } from '../../../../../../models/';
import { type ODataError } from '../../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../../../../../models/oDataErrors/oDataError';
import { createWorkbookWorksheetFromDiscriminatorValue, deserializeIntoWorkbookWorksheet, serializeWorkbookWorksheet, type WorkbookWorksheet } from '../../../../../../models/workbookWorksheet';
import { createWorkbookWorksheetCollectionResponseFromDiscriminatorValue } from '../../../../../../models/workbookWorksheetCollectionResponse';
import { AddRequestBuilder } from './add/addRequestBuilder';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { WorkbookWorksheetItemRequestBuilder } from './item/workbookWorksheetItemRequestBuilder';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface WorksheetsRequestBuilderGetQueryParameters {
    /**
     * Include count of items
     */
    count?: boolean;
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Filter items by property values
     */
    filter?: string;
    /**
     * Order items by property values
     */
    orderby?: string[];
    /**
     * Search items by search phrases
     */
    search?: string;
    /**
     * Select properties to be returned
     */
    select?: string[];
    /**
     * Skip the first n items
     */
    skip?: number;
    /**
     * Show only the first n items
     */
    top?: number;
}
export interface WorksheetsRequestBuilderGetRequestConfiguration {
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
    queryParameters?: WorksheetsRequestBuilderGetQueryParameters;
}
export interface WorksheetsRequestBuilderPostRequestConfiguration {
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
     * Retrieve a list of worksheet objects. This API is supported in the following national cloud deployments.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of WorkbookWorksheetCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/workbook-list-worksheets?view=graph-rest-1.0|Find more info here}
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
     * Retrieve a list of worksheet objects. This API is supported in the following national cloud deployments.
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
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a worksheetsRequestBuilder
     */
    public withUrl(rawUrl: string) : WorksheetsRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new WorksheetsRequestBuilder(rawUrl, this.requestAdapter);
    };
}
