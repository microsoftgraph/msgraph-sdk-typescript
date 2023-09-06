import { createWorkbookTableSortFromDiscriminatorValue } from '../../../../../../../../../../models/createWorkbookTableSortFromDiscriminatorValue';
import { deserializeIntoWorkbookTableSort } from '../../../../../../../../../../models/deserializeIntoWorkbookTableSort';
import { type ODataError } from '../../../../../../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../../../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../../../../../../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../../../../../../../../models/oDataErrors/serializeODataError';
import { serializeWorkbookTableSort } from '../../../../../../../../../../models/serializeWorkbookTableSort';
import { type WorkbookTableSort } from '../../../../../../../../../../models/workbookTableSort';
import { ApplyRequestBuilder } from './apply/applyRequestBuilder';
import { ClearRequestBuilder } from './clear/clearRequestBuilder';
import { ReapplyRequestBuilder } from './reapply/reapplyRequestBuilder';
import { type SortRequestBuilderDeleteRequestConfiguration } from './sortRequestBuilderDeleteRequestConfiguration';
import { type SortRequestBuilderGetRequestConfiguration } from './sortRequestBuilderGetRequestConfiguration';
import { type SortRequestBuilderPatchRequestConfiguration } from './sortRequestBuilderPatchRequestConfiguration';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the sort property of the microsoft.graph.workbookTable entity.
 */
export class SortRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to call the apply method.
     */
    public get apply(): ApplyRequestBuilder {
        return new ApplyRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the clear method.
     */
    public get clear(): ClearRequestBuilder {
        return new ClearRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the reapply method.
     */
    public get reapply(): ReapplyRequestBuilder {
        return new ReapplyRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new SortRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/worksheets/{workbookWorksheet%2Did}/tables/{workbookTable%2Did}/sort{?%24select,%24expand}");
    };
    /**
     * Delete navigation property sort for drives
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: SortRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Retrieve the properties and relationships of tablesort object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of WorkbookTableSort
     * @see {@link https://learn.microsoft.com/graph/api/tablesort-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: SortRequestBuilderGetRequestConfiguration | undefined) : Promise<WorkbookTableSort | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<WorkbookTableSort>(requestInfo, createWorkbookTableSortFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property sort in drives
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of WorkbookTableSort
     */
    public patch(body: WorkbookTableSort, requestConfiguration?: SortRequestBuilderPatchRequestConfiguration | undefined) : Promise<WorkbookTableSort | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<WorkbookTableSort>(requestInfo, createWorkbookTableSortFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property sort for drives
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: SortRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Retrieve the properties and relationships of tablesort object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: SortRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property sort in drives
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: WorkbookTableSort, requestConfiguration?: SortRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeWorkbookTableSort);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a sortRequestBuilder
     */
    public withUrl(rawUrl: string) : SortRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new SortRequestBuilder(rawUrl, this.requestAdapter);
    };
}
