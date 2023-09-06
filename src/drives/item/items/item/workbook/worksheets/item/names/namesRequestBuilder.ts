import { type WorkbookNamedItemCollectionResponse } from '../../../../../../../../models/';
import { createWorkbookNamedItemCollectionResponseFromDiscriminatorValue } from '../../../../../../../../models/createWorkbookNamedItemCollectionResponseFromDiscriminatorValue';
import { createWorkbookNamedItemFromDiscriminatorValue } from '../../../../../../../../models/createWorkbookNamedItemFromDiscriminatorValue';
import { deserializeIntoWorkbookNamedItem } from '../../../../../../../../models/deserializeIntoWorkbookNamedItem';
import { type ODataError } from '../../../../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../../../../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../../../../../../models/oDataErrors/serializeODataError';
import { serializeWorkbookNamedItem } from '../../../../../../../../models/serializeWorkbookNamedItem';
import { type WorkbookNamedItem } from '../../../../../../../../models/workbookNamedItem';
import { AddRequestBuilder } from './add/addRequestBuilder';
import { AddFormulaLocalRequestBuilder } from './addFormulaLocal/addFormulaLocalRequestBuilder';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { WorkbookNamedItemItemRequestBuilder } from './item/workbookNamedItemItemRequestBuilder';
import { type NamesRequestBuilderGetRequestConfiguration } from './namesRequestBuilderGetRequestConfiguration';
import { type NamesRequestBuilderPostRequestConfiguration } from './namesRequestBuilderPostRequestConfiguration';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the names property of the microsoft.graph.workbookWorksheet entity.
 */
export class NamesRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to call the add method.
     */
    public get add(): AddRequestBuilder {
        return new AddRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the addFormulaLocal method.
     */
    public get addFormulaLocal(): AddFormulaLocalRequestBuilder {
        return new AddFormulaLocalRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the names property of the microsoft.graph.workbookWorksheet entity.
     * @param workbookNamedItemId The unique identifier of workbookNamedItem
     * @returns a WorkbookNamedItemItemRequestBuilder
     */
    public byWorkbookNamedItemId(workbookNamedItemId: string) : WorkbookNamedItemItemRequestBuilder {
        if(!workbookNamedItemId) throw new Error("workbookNamedItemId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["workbookNamedItem%2Did"] = workbookNamedItemId
        return new WorkbookNamedItemItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new NamesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/worksheets/{workbookWorksheet%2Did}/names{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Retrieve a list of named item associated with the worksheet. 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of WorkbookNamedItemCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/worksheet-list-names?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: NamesRequestBuilderGetRequestConfiguration | undefined) : Promise<WorkbookNamedItemCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<WorkbookNamedItemCollectionResponse>(requestInfo, createWorkbookNamedItemCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to names for drives
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of WorkbookNamedItem
     */
    public post(body: WorkbookNamedItem, requestConfiguration?: NamesRequestBuilderPostRequestConfiguration | undefined) : Promise<WorkbookNamedItem | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<WorkbookNamedItem>(requestInfo, createWorkbookNamedItemFromDiscriminatorValue, errorMapping);
    };
    /**
     * Retrieve a list of named item associated with the worksheet. 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: NamesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to names for drives
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: WorkbookNamedItem, requestConfiguration?: NamesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeWorkbookNamedItem);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a namesRequestBuilder
     */
    public withUrl(rawUrl: string) : NamesRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new NamesRequestBuilder(rawUrl, this.requestAdapter);
    };
}
