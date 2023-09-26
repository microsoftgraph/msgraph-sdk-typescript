import { type LicenseDetailsCollectionResponse } from '../../models/';
import { createLicenseDetailsFromDiscriminatorValue, deserializeIntoLicenseDetails, serializeLicenseDetails, type LicenseDetails } from '../../models/licenseDetails';
import { createLicenseDetailsCollectionResponseFromDiscriminatorValue } from '../../models/licenseDetailsCollectionResponse';
import { type ODataError } from '../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../models/oDataErrors/oDataError';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { LicenseDetailsItemRequestBuilder } from './item/licenseDetailsItemRequestBuilder';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface LicenseDetailsRequestBuilderGetQueryParameters {
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
export interface LicenseDetailsRequestBuilderGetRequestConfiguration {
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
    queryParameters?: LicenseDetailsRequestBuilderGetQueryParameters;
}
export interface LicenseDetailsRequestBuilderPostRequestConfiguration {
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
 * Provides operations to manage the licenseDetails property of the microsoft.graph.user entity.
 */
export class LicenseDetailsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the licenseDetails property of the microsoft.graph.user entity.
     * @param licenseDetailsId The unique identifier of licenseDetails
     * @returns a LicenseDetailsItemRequestBuilder
     */
    public byLicenseDetailsId(licenseDetailsId: string) : LicenseDetailsItemRequestBuilder {
        if(!licenseDetailsId) throw new Error("licenseDetailsId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["licenseDetails%2Did"] = licenseDetailsId
        return new LicenseDetailsItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new LicenseDetailsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/me/licenseDetails{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Retrieve a list of licenseDetails objects for enterprise users. This API returns details for licenses that are directly assigned and those transitively assigned through memberships in licensed groups.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of LicenseDetailsCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/user-list-licensedetails?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: LicenseDetailsRequestBuilderGetRequestConfiguration | undefined) : Promise<LicenseDetailsCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<LicenseDetailsCollectionResponse>(requestInfo, createLicenseDetailsCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to licenseDetails for me
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of LicenseDetails
     */
    public post(body: LicenseDetails, requestConfiguration?: LicenseDetailsRequestBuilderPostRequestConfiguration | undefined) : Promise<LicenseDetails | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<LicenseDetails>(requestInfo, createLicenseDetailsFromDiscriminatorValue, errorMapping);
    };
    /**
     * Retrieve a list of licenseDetails objects for enterprise users. This API returns details for licenses that are directly assigned and those transitively assigned through memberships in licensed groups.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: LicenseDetailsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to licenseDetails for me
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: LicenseDetails, requestConfiguration?: LicenseDetailsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeLicenseDetails);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a licenseDetailsRequestBuilder
     */
    public withUrl(rawUrl: string) : LicenseDetailsRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new LicenseDetailsRequestBuilder(rawUrl, this.requestAdapter);
    };
}
