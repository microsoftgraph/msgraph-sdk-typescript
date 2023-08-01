import type {ColumnDefinition} from '../../../../../../models/columnDefinition';
import {createColumnDefinitionFromDiscriminatorValue} from '../../../../../../models/createColumnDefinitionFromDiscriminatorValue';
import {deserializeIntoColumnDefinition} from '../../../../../../models/deserializeIntoColumnDefinition';
import {ODataError} from '../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../../models/oDataErrors/serializeODataError';
import {serializeColumnDefinition} from '../../../../../../models/serializeColumnDefinition';
import {ColumnDefinitionItemRequestBuilderDeleteRequestConfiguration} from './columnDefinitionItemRequestBuilderDeleteRequestConfiguration';
import {ColumnDefinitionItemRequestBuilderGetRequestConfiguration} from './columnDefinitionItemRequestBuilderGetRequestConfiguration';
import {ColumnDefinitionItemRequestBuilderPatchRequestConfiguration} from './columnDefinitionItemRequestBuilderPatchRequestConfiguration';
import {SourceColumnRequestBuilder} from './sourceColumn/sourceColumnRequestBuilder';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the columns property of the microsoft.graph.contentType entity.
 */
export class ColumnDefinitionItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the sourceColumn property of the microsoft.graph.columnDefinition entity.
     */
    public get sourceColumn(): SourceColumnRequestBuilder {
        return new SourceColumnRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new ColumnDefinitionItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/sites/{site%2Did}/contentTypes/{contentType%2Did}/columns/{columnDefinition%2Did}{?%24select,%24expand}");
    };
    /**
     * Remove a [column][columndefinition] from a [site][], a [list][], or a [content type][contentType].
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/columndefinition-delete?view=graph-rest-1.0|Find more info here}
     */
    public delete(requestConfiguration?: ColumnDefinitionItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Retrieve the metadata for a [site][], a [list][], or a [contentType][] [column][columnDefinition].
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ColumnDefinition
     * @see {@link https://learn.microsoft.com/graph/api/columndefinition-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: ColumnDefinitionItemRequestBuilderGetRequestConfiguration | undefined) : Promise<ColumnDefinition | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ColumnDefinition>(requestInfo, createColumnDefinitionFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update a [site][], a [list][], or a [content type][contentType] [column][columnDefinition].
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ColumnDefinition
     * @see {@link https://learn.microsoft.com/graph/api/columndefinition-update?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: ColumnDefinition | undefined, requestConfiguration?: ColumnDefinitionItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<ColumnDefinition | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ColumnDefinition>(requestInfo, createColumnDefinitionFromDiscriminatorValue, errorMapping);
    };
    /**
     * Remove a [column][columndefinition] from a [site][], a [list][], or a [content type][contentType].
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: ColumnDefinitionItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Retrieve the metadata for a [site][], a [list][], or a [contentType][] [column][columnDefinition].
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ColumnDefinitionItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update a [site][], a [list][], or a [content type][contentType] [column][columnDefinition].
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: ColumnDefinition | undefined, requestConfiguration?: ColumnDefinitionItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeColumnDefinition);
        return requestInfo;
    };
}
