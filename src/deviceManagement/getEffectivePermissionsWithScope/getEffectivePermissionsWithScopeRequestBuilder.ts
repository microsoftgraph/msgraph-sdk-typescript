import { type ODataError } from '../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../models/oDataErrors/oDataError';
import { createGetEffectivePermissionsWithScopeGetResponseFromDiscriminatorValue } from './getEffectivePermissionsWithScopeGetResponse';
import { type GetEffectivePermissionsWithScopeGetResponse } from './index';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface GetEffectivePermissionsWithScopeRequestBuilderGetQueryParameters {
    /**
     * Include count of items
     */
    count?: boolean;
    /**
     * Filter items by property values
     */
    filter?: string;
    /**
     * Search items by search phrases
     */
    search?: string;
    /**
     * Skip the first n items
     */
    skip?: number;
    /**
     * Show only the first n items
     */
    top?: number;
}
export interface GetEffectivePermissionsWithScopeRequestBuilderGetRequestConfiguration {
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
    queryParameters?: GetEffectivePermissionsWithScopeRequestBuilderGetQueryParameters;
}
/**
 * Provides operations to call the getEffectivePermissions method.
 */
export class GetEffectivePermissionsWithScopeRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new GetEffectivePermissionsWithScopeRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     * @param scope Usage: scope='{scope}'
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter, scope?: string | undefined) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceManagement/getEffectivePermissions(scope='{scope}'){?%24top,%24skip,%24search,%24filter,%24count}");
        this.pathParameters["scope"] = scope
    };
    /**
     * Retrieves the effective permissions of the currently authenticated user
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of GetEffectivePermissionsWithScopeGetResponse
     */
    public get(requestConfiguration?: GetEffectivePermissionsWithScopeRequestBuilderGetRequestConfiguration | undefined) : Promise<GetEffectivePermissionsWithScopeGetResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<GetEffectivePermissionsWithScopeGetResponse>(requestInfo, createGetEffectivePermissionsWithScopeGetResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Retrieves the effective permissions of the currently authenticated user
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: GetEffectivePermissionsWithScopeRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * @returns a getEffectivePermissionsWithScopeRequestBuilder
     */
    public withUrl(rawUrl: string) : GetEffectivePermissionsWithScopeRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new GetEffectivePermissionsWithScopeRequestBuilder(rawUrl, this.requestAdapter);
    };
}
