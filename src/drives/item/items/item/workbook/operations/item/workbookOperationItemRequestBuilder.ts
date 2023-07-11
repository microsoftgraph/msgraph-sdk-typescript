import {createWorkbookOperationFromDiscriminatorValue} from '../../../../../../../models/createWorkbookOperationFromDiscriminatorValue';
import {deserializeIntoWorkbookOperation} from '../../../../../../../models/deserializeIntoWorkbookOperation';
import {ODataError} from '../../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../../../models/oDataErrors/serializeODataError';
import {serializeWorkbookOperation} from '../../../../../../../models/serializeWorkbookOperation';
import {WorkbookOperation} from '../../../../../../../models/workbookOperation';
import {WorkbookOperationItemRequestBuilderDeleteRequestConfiguration} from './workbookOperationItemRequestBuilderDeleteRequestConfiguration';
import {WorkbookOperationItemRequestBuilderGetRequestConfiguration} from './workbookOperationItemRequestBuilderGetRequestConfiguration';
import {WorkbookOperationItemRequestBuilderPatchRequestConfiguration} from './workbookOperationItemRequestBuilderPatchRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the operations property of the microsoft.graph.workbook entity.
 */
export class WorkbookOperationItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new WorkbookOperationItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/operations/{workbookOperation%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete navigation property operations for drives
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: WorkbookOperationItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Meaningless if this url is called independently. This request is part of all async requests for excel. This is used to retrieve the status of a workbookOperation object. Currently not all requests support async. Take Create session request as an example. Issue an async Create session request, follow the documentation and you may get status code `202 Accepted`, async operation starts from here and you can find the url this document required from the response header, from the **location** part.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of WorkbookOperation
     * @see {@link https://docs.microsoft.com/graph/api/workbookoperation-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: WorkbookOperationItemRequestBuilderGetRequestConfiguration | undefined) : Promise<WorkbookOperation | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<WorkbookOperation>(requestInfo, createWorkbookOperationFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property operations in drives
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of WorkbookOperation
     */
    public patch(body: WorkbookOperation | undefined, requestConfiguration?: WorkbookOperationItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<WorkbookOperation | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<WorkbookOperation>(requestInfo, createWorkbookOperationFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property operations for drives
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: WorkbookOperationItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Meaningless if this url is called independently. This request is part of all async requests for excel. This is used to retrieve the status of a workbookOperation object. Currently not all requests support async. Take Create session request as an example. Issue an async Create session request, follow the documentation and you may get status code `202 Accepted`, async operation starts from here and you can find the url this document required from the response header, from the **location** part.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: WorkbookOperationItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property operations in drives
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: WorkbookOperation | undefined, requestConfiguration?: WorkbookOperationItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeWorkbookOperation);
        return requestInfo;
    };
}
