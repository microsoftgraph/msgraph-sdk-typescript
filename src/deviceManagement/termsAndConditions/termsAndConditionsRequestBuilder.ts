import { type TermsAndConditionsCollectionResponse } from '../../models/';
import { type ODataError } from '../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../models/oDataErrors/oDataError';
import { createTermsAndConditionsFromDiscriminatorValue, deserializeIntoTermsAndConditions, serializeTermsAndConditions, type TermsAndConditions } from '../../models/termsAndConditions';
import { createTermsAndConditionsCollectionResponseFromDiscriminatorValue } from '../../models/termsAndConditionsCollectionResponse';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { TermsAndConditionsItemRequestBuilder } from './item/termsAndConditionsItemRequestBuilder';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface TermsAndConditionsRequestBuilderGetQueryParameters {
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
export interface TermsAndConditionsRequestBuilderGetRequestConfiguration {
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
    queryParameters?: TermsAndConditionsRequestBuilderGetQueryParameters;
}
export interface TermsAndConditionsRequestBuilderPostRequestConfiguration {
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
 * Provides operations to manage the termsAndConditions property of the microsoft.graph.deviceManagement entity.
 */
export class TermsAndConditionsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the termsAndConditions property of the microsoft.graph.deviceManagement entity.
     * @param termsAndConditionsId The unique identifier of termsAndConditions
     * @returns a TermsAndConditionsItemRequestBuilder
     */
    public byTermsAndConditionsId(termsAndConditionsId: string) : TermsAndConditionsItemRequestBuilder {
        if(!termsAndConditionsId) throw new Error("termsAndConditionsId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["termsAndConditions%2Did"] = termsAndConditionsId
        return new TermsAndConditionsItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new TermsAndConditionsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceManagement/termsAndConditions{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * List properties and relationships of the termsAndConditions objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of TermsAndConditionsCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/intune-companyterms-termsandconditions-list?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: TermsAndConditionsRequestBuilderGetRequestConfiguration | undefined) : Promise<TermsAndConditionsCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<TermsAndConditionsCollectionResponse>(requestInfo, createTermsAndConditionsCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create a new termsAndConditions object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of TermsAndConditions
     * @see {@link https://learn.microsoft.com/graph/api/intune-companyterms-termsandconditions-create?view=graph-rest-1.0|Find more info here}
     */
    public post(body: TermsAndConditions, requestConfiguration?: TermsAndConditionsRequestBuilderPostRequestConfiguration | undefined) : Promise<TermsAndConditions | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<TermsAndConditions>(requestInfo, createTermsAndConditionsFromDiscriminatorValue, errorMapping);
    };
    /**
     * List properties and relationships of the termsAndConditions objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: TermsAndConditionsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new termsAndConditions object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: TermsAndConditions, requestConfiguration?: TermsAndConditionsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeTermsAndConditions);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a termsAndConditionsRequestBuilder
     */
    public withUrl(rawUrl: string) : TermsAndConditionsRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new TermsAndConditionsRequestBuilder(rawUrl, this.requestAdapter);
    };
}
