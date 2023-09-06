import { type WorkbookOperationCollectionResponse } from '../../../../../../models/';
import { createWorkbookOperationCollectionResponseFromDiscriminatorValue } from '../../../../../../models/createWorkbookOperationCollectionResponseFromDiscriminatorValue';
import { createWorkbookOperationFromDiscriminatorValue } from '../../../../../../models/createWorkbookOperationFromDiscriminatorValue';
import { deserializeIntoWorkbookOperation } from '../../../../../../models/deserializeIntoWorkbookOperation';
import { type ODataError } from '../../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../../../../models/oDataErrors/serializeODataError';
import { serializeWorkbookOperation } from '../../../../../../models/serializeWorkbookOperation';
import { type WorkbookOperation } from '../../../../../../models/workbookOperation';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { WorkbookOperationItemRequestBuilder } from './item/workbookOperationItemRequestBuilder';
import { type OperationsRequestBuilderGetRequestConfiguration } from './operationsRequestBuilderGetRequestConfiguration';
import { type OperationsRequestBuilderPostRequestConfiguration } from './operationsRequestBuilderPostRequestConfiguration';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the operations property of the microsoft.graph.workbook entity.
 */
export class OperationsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the operations property of the microsoft.graph.workbook entity.
     * @param workbookOperationId The unique identifier of workbookOperation
     * @returns a WorkbookOperationItemRequestBuilder
     */
    public byWorkbookOperationId(workbookOperationId: string) : WorkbookOperationItemRequestBuilder {
        if(!workbookOperationId) throw new Error("workbookOperationId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["workbookOperation%2Did"] = workbookOperationId
        return new WorkbookOperationItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new OperationsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/operations{?%24search,%24orderby,%24select,%24expand}");
    };
    /**
     * Meaningless if this url is called independently. This request is part of all async requests for excel. This is used to retrieve the status of a workbookOperation object. Currently not all requests support async. Take Create session request as an example. Issue an async Create session request, follow the documentation and you may get status code 202 Accepted, async operation starts from here and you can find the url this document required from the response header, from the location part.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of WorkbookOperationCollectionResponse
     */
    public get(requestConfiguration?: OperationsRequestBuilderGetRequestConfiguration | undefined) : Promise<WorkbookOperationCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<WorkbookOperationCollectionResponse>(requestInfo, createWorkbookOperationCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to operations for drives
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of WorkbookOperation
     */
    public post(body: WorkbookOperation, requestConfiguration?: OperationsRequestBuilderPostRequestConfiguration | undefined) : Promise<WorkbookOperation | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<WorkbookOperation>(requestInfo, createWorkbookOperationFromDiscriminatorValue, errorMapping);
    };
    /**
     * Meaningless if this url is called independently. This request is part of all async requests for excel. This is used to retrieve the status of a workbookOperation object. Currently not all requests support async. Take Create session request as an example. Issue an async Create session request, follow the documentation and you may get status code 202 Accepted, async operation starts from here and you can find the url this document required from the response header, from the location part.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: OperationsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to operations for drives
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: WorkbookOperation, requestConfiguration?: OperationsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeWorkbookOperation);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a operationsRequestBuilder
     */
    public withUrl(rawUrl: string) : OperationsRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new OperationsRequestBuilder(rawUrl, this.requestAdapter);
    };
}
