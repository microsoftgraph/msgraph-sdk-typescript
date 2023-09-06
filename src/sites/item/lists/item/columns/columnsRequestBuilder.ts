import { type ColumnDefinitionCollectionResponse } from '../../../../../models/';
import { type ColumnDefinition } from '../../../../../models/columnDefinition';
import { createColumnDefinitionCollectionResponseFromDiscriminatorValue } from '../../../../../models/createColumnDefinitionCollectionResponseFromDiscriminatorValue';
import { createColumnDefinitionFromDiscriminatorValue } from '../../../../../models/createColumnDefinitionFromDiscriminatorValue';
import { deserializeIntoColumnDefinition } from '../../../../../models/deserializeIntoColumnDefinition';
import { type ODataError } from '../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../../../models/oDataErrors/serializeODataError';
import { serializeColumnDefinition } from '../../../../../models/serializeColumnDefinition';
import { type ColumnsRequestBuilderGetRequestConfiguration } from './columnsRequestBuilderGetRequestConfiguration';
import { type ColumnsRequestBuilderPostRequestConfiguration } from './columnsRequestBuilderPostRequestConfiguration';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { ColumnDefinitionItemRequestBuilder } from './item/columnDefinitionItemRequestBuilder';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the columns property of the microsoft.graph.list entity.
 */
export class ColumnsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the columns property of the microsoft.graph.list entity.
     * @param columnDefinitionId The unique identifier of columnDefinition
     * @returns a ColumnDefinitionItemRequestBuilder
     */
    public byColumnDefinitionId(columnDefinitionId: string) : ColumnDefinitionItemRequestBuilder {
        if(!columnDefinitionId) throw new Error("columnDefinitionId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["columnDefinition%2Did"] = columnDefinitionId
        return new ColumnDefinitionItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new ColumnsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/sites/{site%2Did}/lists/{list%2Did}/columns{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Get the collection of columns represented as [columnDefinition][columnDefinition] resources in a [list][list].
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ColumnDefinitionCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/list-list-columns?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: ColumnsRequestBuilderGetRequestConfiguration | undefined) : Promise<ColumnDefinitionCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ColumnDefinitionCollectionResponse>(requestInfo, createColumnDefinitionCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create a column for a [list][list] with a request that specifies a [columnDefinition][columnDefinition].
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ColumnDefinition
     * @see {@link https://learn.microsoft.com/graph/api/list-post-columns?view=graph-rest-1.0|Find more info here}
     */
    public post(body: ColumnDefinition, requestConfiguration?: ColumnsRequestBuilderPostRequestConfiguration | undefined) : Promise<ColumnDefinition | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ColumnDefinition>(requestInfo, createColumnDefinitionFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get the collection of columns represented as [columnDefinition][columnDefinition] resources in a [list][list].
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ColumnsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a column for a [list][list] with a request that specifies a [columnDefinition][columnDefinition].
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: ColumnDefinition, requestConfiguration?: ColumnsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeColumnDefinition);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a columnsRequestBuilder
     */
    public withUrl(rawUrl: string) : ColumnsRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new ColumnsRequestBuilder(rawUrl, this.requestAdapter);
    };
}
