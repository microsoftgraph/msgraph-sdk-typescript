import { type ColumnDefinition } from '../../../../../models/columnDefinition';
import { createColumnDefinitionFromDiscriminatorValue } from '../../../../../models/createColumnDefinitionFromDiscriminatorValue';
import { deserializeIntoColumnDefinition } from '../../../../../models/deserializeIntoColumnDefinition';
import { type ODataError } from '../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../../../models/oDataErrors/serializeODataError';
import { serializeColumnDefinition } from '../../../../../models/serializeColumnDefinition';
import { type ColumnDefinitionItemRequestBuilderDeleteRequestConfiguration } from './columnDefinitionItemRequestBuilderDeleteRequestConfiguration';
import { type ColumnDefinitionItemRequestBuilderGetRequestConfiguration } from './columnDefinitionItemRequestBuilderGetRequestConfiguration';
import { type ColumnDefinitionItemRequestBuilderPatchRequestConfiguration } from './columnDefinitionItemRequestBuilderPatchRequestConfiguration';
import { SourceColumnRequestBuilder } from './sourceColumn/sourceColumnRequestBuilder';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the columns property of the microsoft.graph.list entity.
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
        super(pathParameters, requestAdapter, "{+baseurl}/shares/{sharedDriveItem%2Did}/list/columns/{columnDefinition%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete navigation property columns for shares
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
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
     * The collection of field definitions for this list.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ColumnDefinition
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
     * Update the navigation property columns in shares
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ColumnDefinition
     */
    public patch(body: ColumnDefinition, requestConfiguration?: ColumnDefinitionItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<ColumnDefinition | undefined> {
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
     * Delete navigation property columns for shares
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
     * The collection of field definitions for this list.
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
     * Update the navigation property columns in shares
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: ColumnDefinition, requestConfiguration?: ColumnDefinitionItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeColumnDefinition);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a ColumnDefinitionItemRequestBuilder
     */
    public withUrl(rawUrl: string) : ColumnDefinitionItemRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new ColumnDefinitionItemRequestBuilder(rawUrl, this.requestAdapter);
    };
}
