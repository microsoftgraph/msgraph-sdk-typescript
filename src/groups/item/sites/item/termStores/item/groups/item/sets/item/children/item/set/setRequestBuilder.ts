import { type ODataError } from '../../../../../../../../../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../../../../../../../../../../../../models/oDataErrors/oDataError';
import { type Set } from '../../../../../../../../../../../../../models/termStore/';
import { createSetFromDiscriminatorValue } from '../../../../../../../../../../../../../models/termStore/set';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface SetRequestBuilderGetQueryParameters {
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Select properties to be returned
     */
    select?: string[];
}
export interface SetRequestBuilderGetRequestConfiguration {
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
    queryParameters?: SetRequestBuilderGetQueryParameters;
}
/**
 * Provides operations to manage the set property of the microsoft.graph.termStore.term entity.
 */
export class SetRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new SetRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/groups/{group%2Did}/sites/{site%2Did}/termStores/{store%2Did}/groups/{group%2Did1}/sets/{set%2Did}/children/{term%2Did}/set{?%24select,%24expand}");
    };
    /**
     * The [set] in which the term is created.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Set
     */
    public get(requestConfiguration?: SetRequestBuilderGetRequestConfiguration | undefined) : Promise<Set | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<Set>(requestInfo, createSetFromDiscriminatorValue, errorMapping);
    };
    /**
     * The [set] in which the term is created.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: SetRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * @returns a setRequestBuilder
     */
    public withUrl(rawUrl: string) : SetRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new SetRequestBuilder(rawUrl, this.requestAdapter);
    };
}
