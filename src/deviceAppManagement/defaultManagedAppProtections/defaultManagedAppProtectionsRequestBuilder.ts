import { type DefaultManagedAppProtectionCollectionResponse } from '../../models/';
import { createDefaultManagedAppProtectionFromDiscriminatorValue, deserializeIntoDefaultManagedAppProtection, serializeDefaultManagedAppProtection, type DefaultManagedAppProtection } from '../../models/defaultManagedAppProtection';
import { createDefaultManagedAppProtectionCollectionResponseFromDiscriminatorValue } from '../../models/defaultManagedAppProtectionCollectionResponse';
import { type ODataError } from '../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../models/oDataErrors/oDataError';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { DefaultManagedAppProtectionItemRequestBuilder } from './item/defaultManagedAppProtectionItemRequestBuilder';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface DefaultManagedAppProtectionsRequestBuilderGetQueryParameters {
    /**
     * Include count of items
     */
    count?: boolean;
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Filter items by property values
     */
    filter?: string;
    /**
     * Order items by property values
     */
    orderby?: string[];
    /**
     * Search items by search phrases
     */
    search?: string;
    /**
     * Select properties to be returned
     */
    select?: string[];
    /**
     * Skip the first n items
     */
    skip?: number;
    /**
     * Show only the first n items
     */
    top?: number;
}
export interface DefaultManagedAppProtectionsRequestBuilderGetRequestConfiguration {
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
    queryParameters?: DefaultManagedAppProtectionsRequestBuilderGetQueryParameters;
}
export interface DefaultManagedAppProtectionsRequestBuilderPostRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]>;
    /**
     * Request options
     */
    options?: RequestOption[];
}
/**
 * Provides operations to manage the defaultManagedAppProtections property of the microsoft.graph.deviceAppManagement entity.
 */
export class DefaultManagedAppProtectionsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the defaultManagedAppProtections property of the microsoft.graph.deviceAppManagement entity.
     * @param defaultManagedAppProtectionId The unique identifier of defaultManagedAppProtection
     * @returns a DefaultManagedAppProtectionItemRequestBuilder
     */
    public byDefaultManagedAppProtectionId(defaultManagedAppProtectionId: string) : DefaultManagedAppProtectionItemRequestBuilder {
        if(!defaultManagedAppProtectionId) throw new Error("defaultManagedAppProtectionId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["defaultManagedAppProtection%2Did"] = defaultManagedAppProtectionId
        return new DefaultManagedAppProtectionItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new DefaultManagedAppProtectionsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceAppManagement/defaultManagedAppProtections{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * List properties and relationships of the defaultManagedAppProtection objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DefaultManagedAppProtectionCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/intune-mam-defaultmanagedappprotection-list?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: DefaultManagedAppProtectionsRequestBuilderGetRequestConfiguration | undefined) : Promise<DefaultManagedAppProtectionCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DefaultManagedAppProtectionCollectionResponse>(requestInfo, createDefaultManagedAppProtectionCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create a new defaultManagedAppProtection object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DefaultManagedAppProtection
     * @see {@link https://learn.microsoft.com/graph/api/intune-mam-defaultmanagedappprotection-create?view=graph-rest-1.0|Find more info here}
     */
    public post(body: DefaultManagedAppProtection, requestConfiguration?: DefaultManagedAppProtectionsRequestBuilderPostRequestConfiguration | undefined) : Promise<DefaultManagedAppProtection | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DefaultManagedAppProtection>(requestInfo, createDefaultManagedAppProtectionFromDiscriminatorValue, errorMapping);
    };
    /**
     * List properties and relationships of the defaultManagedAppProtection objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: DefaultManagedAppProtectionsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new defaultManagedAppProtection object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: DefaultManagedAppProtection, requestConfiguration?: DefaultManagedAppProtectionsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeDefaultManagedAppProtection);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a defaultManagedAppProtectionsRequestBuilder
     */
    public withUrl(rawUrl: string) : DefaultManagedAppProtectionsRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new DefaultManagedAppProtectionsRequestBuilder(rawUrl, this.requestAdapter);
    };
}
