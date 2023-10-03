import { type AgreementAcceptanceCollectionResponse } from '../../models/';
import { createAgreementAcceptanceCollectionResponseFromDiscriminatorValue } from '../../models/agreementAcceptanceCollectionResponse';
import { type ODataError } from '../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../models/oDataErrors/oDataError';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { AgreementAcceptanceItemRequestBuilder } from './item/agreementAcceptanceItemRequestBuilder';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface AgreementAcceptancesRequestBuilderGetQueryParameters {
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
export interface AgreementAcceptancesRequestBuilderGetRequestConfiguration {
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
    queryParameters?: AgreementAcceptancesRequestBuilderGetQueryParameters;
}
/**
 * Provides operations to manage the agreementAcceptances property of the microsoft.graph.user entity.
 */
export class AgreementAcceptancesRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the agreementAcceptances property of the microsoft.graph.user entity.
     * @param agreementAcceptanceId The unique identifier of agreementAcceptance
     * @returns a AgreementAcceptanceItemRequestBuilder
     */
    public byAgreementAcceptanceId(agreementAcceptanceId: string) : AgreementAcceptanceItemRequestBuilder {
        if(!agreementAcceptanceId) throw new Error("agreementAcceptanceId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["agreementAcceptance%2Did"] = agreementAcceptanceId
        return new AgreementAcceptanceItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new AgreementAcceptancesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/me/agreementAcceptances{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Retrieve the signed-in user's agreementAcceptance objects. This API is supported in the following national cloud deployments.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AgreementAcceptanceCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/user-list-agreementacceptances?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: AgreementAcceptancesRequestBuilderGetRequestConfiguration | undefined) : Promise<AgreementAcceptanceCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AgreementAcceptanceCollectionResponse>(requestInfo, createAgreementAcceptanceCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Retrieve the signed-in user's agreementAcceptance objects. This API is supported in the following national cloud deployments.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: AgreementAcceptancesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * @returns a agreementAcceptancesRequestBuilder
     */
    public withUrl(rawUrl: string) : AgreementAcceptancesRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new AgreementAcceptancesRequestBuilder(rawUrl, this.requestAdapter);
    };
}
