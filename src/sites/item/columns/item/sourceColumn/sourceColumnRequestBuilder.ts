import { type ColumnDefinition } from '../../../../../models/';
import { createColumnDefinitionFromDiscriminatorValue } from '../../../../../models/createColumnDefinitionFromDiscriminatorValue';
import { type ODataError } from '../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../../../models/oDataErrors/serializeODataError';
import { type SourceColumnRequestBuilderGetRequestConfiguration } from './sourceColumnRequestBuilderGetRequestConfiguration';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the sourceColumn property of the microsoft.graph.columnDefinition entity.
 */
export class SourceColumnRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new SourceColumnRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/sites/{site%2Did}/columns/{columnDefinition%2Did}/sourceColumn{?%24select,%24expand}");
    };
    /**
     * The source column for the content type column.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ColumnDefinition
     */
    public get(requestConfiguration?: SourceColumnRequestBuilderGetRequestConfiguration | undefined) : Promise<ColumnDefinition | undefined> {
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
     * The source column for the content type column.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: SourceColumnRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a sourceColumnRequestBuilder
     */
    public withUrl(rawUrl: string) : SourceColumnRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new SourceColumnRequestBuilder(rawUrl, this.requestAdapter);
    };
}
