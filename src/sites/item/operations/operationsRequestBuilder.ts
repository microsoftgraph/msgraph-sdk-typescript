import {RichLongRunningOperationCollectionResponse} from '../../../models/';
import {createRichLongRunningOperationCollectionResponseFromDiscriminatorValue} from '../../../models/createRichLongRunningOperationCollectionResponseFromDiscriminatorValue';
import {createRichLongRunningOperationFromDiscriminatorValue} from '../../../models/createRichLongRunningOperationFromDiscriminatorValue';
import {deserializeIntoRichLongRunningOperation} from '../../../models/deserializeIntoRichLongRunningOperation';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../models/oDataErrors/serializeODataError';
import type {RichLongRunningOperation} from '../../../models/richLongRunningOperation';
import {serializeRichLongRunningOperation} from '../../../models/serializeRichLongRunningOperation';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {RichLongRunningOperationItemRequestBuilder} from './item/richLongRunningOperationItemRequestBuilder';
import {OperationsRequestBuilderGetRequestConfiguration} from './operationsRequestBuilderGetRequestConfiguration';
import {OperationsRequestBuilderPostRequestConfiguration} from './operationsRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the operations property of the microsoft.graph.site entity.
 */
export class OperationsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the operations property of the microsoft.graph.site entity.
     * @param richLongRunningOperationId The unique identifier of richLongRunningOperation
     * @returns a RichLongRunningOperationItemRequestBuilder
     */
    public byRichLongRunningOperationId(richLongRunningOperationId: string) : RichLongRunningOperationItemRequestBuilder {
        if(!richLongRunningOperationId) throw new Error("richLongRunningOperationId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["richLongRunningOperation%2Did"] = richLongRunningOperationId
        return new RichLongRunningOperationItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new OperationsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/sites/{site%2Did}/operations{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Get a list of rich long-running operations associated with a site.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of RichLongRunningOperationCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/site-list-operations?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: OperationsRequestBuilderGetRequestConfiguration | undefined) : Promise<RichLongRunningOperationCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<RichLongRunningOperationCollectionResponse>(requestInfo, createRichLongRunningOperationCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to operations for sites
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of RichLongRunningOperation
     */
    public post(body: RichLongRunningOperation, requestConfiguration?: OperationsRequestBuilderPostRequestConfiguration | undefined) : Promise<RichLongRunningOperation | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<RichLongRunningOperation>(requestInfo, createRichLongRunningOperationFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get a list of rich long-running operations associated with a site.
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
     * Create new navigation property to operations for sites
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: RichLongRunningOperation, requestConfiguration?: OperationsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeRichLongRunningOperation);
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
