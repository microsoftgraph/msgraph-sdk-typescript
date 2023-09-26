import { type TelecomExpenseManagementPartnerCollectionResponse } from '../../models/';
import { type ODataError } from '../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../models/oDataErrors/oDataError';
import { createTelecomExpenseManagementPartnerFromDiscriminatorValue, deserializeIntoTelecomExpenseManagementPartner, serializeTelecomExpenseManagementPartner, type TelecomExpenseManagementPartner } from '../../models/telecomExpenseManagementPartner';
import { createTelecomExpenseManagementPartnerCollectionResponseFromDiscriminatorValue } from '../../models/telecomExpenseManagementPartnerCollectionResponse';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { TelecomExpenseManagementPartnerItemRequestBuilder } from './item/telecomExpenseManagementPartnerItemRequestBuilder';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface TelecomExpenseManagementPartnersRequestBuilderGetQueryParameters {
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
export interface TelecomExpenseManagementPartnersRequestBuilderGetRequestConfiguration {
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
    queryParameters?: TelecomExpenseManagementPartnersRequestBuilderGetQueryParameters;
}
export interface TelecomExpenseManagementPartnersRequestBuilderPostRequestConfiguration {
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
 * Provides operations to manage the telecomExpenseManagementPartners property of the microsoft.graph.deviceManagement entity.
 */
export class TelecomExpenseManagementPartnersRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the telecomExpenseManagementPartners property of the microsoft.graph.deviceManagement entity.
     * @param telecomExpenseManagementPartnerId The unique identifier of telecomExpenseManagementPartner
     * @returns a TelecomExpenseManagementPartnerItemRequestBuilder
     */
    public byTelecomExpenseManagementPartnerId(telecomExpenseManagementPartnerId: string) : TelecomExpenseManagementPartnerItemRequestBuilder {
        if(!telecomExpenseManagementPartnerId) throw new Error("telecomExpenseManagementPartnerId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["telecomExpenseManagementPartner%2Did"] = telecomExpenseManagementPartnerId
        return new TelecomExpenseManagementPartnerItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new TelecomExpenseManagementPartnersRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceManagement/telecomExpenseManagementPartners{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * List properties and relationships of the telecomExpenseManagementPartner objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of TelecomExpenseManagementPartnerCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/intune-tem-telecomexpensemanagementpartner-list?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: TelecomExpenseManagementPartnersRequestBuilderGetRequestConfiguration | undefined) : Promise<TelecomExpenseManagementPartnerCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<TelecomExpenseManagementPartnerCollectionResponse>(requestInfo, createTelecomExpenseManagementPartnerCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create a new telecomExpenseManagementPartner object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of TelecomExpenseManagementPartner
     * @see {@link https://learn.microsoft.com/graph/api/intune-tem-telecomexpensemanagementpartner-create?view=graph-rest-1.0|Find more info here}
     */
    public post(body: TelecomExpenseManagementPartner, requestConfiguration?: TelecomExpenseManagementPartnersRequestBuilderPostRequestConfiguration | undefined) : Promise<TelecomExpenseManagementPartner | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<TelecomExpenseManagementPartner>(requestInfo, createTelecomExpenseManagementPartnerFromDiscriminatorValue, errorMapping);
    };
    /**
     * List properties and relationships of the telecomExpenseManagementPartner objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: TelecomExpenseManagementPartnersRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new telecomExpenseManagementPartner object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: TelecomExpenseManagementPartner, requestConfiguration?: TelecomExpenseManagementPartnersRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeTelecomExpenseManagementPartner);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a telecomExpenseManagementPartnersRequestBuilder
     */
    public withUrl(rawUrl: string) : TelecomExpenseManagementPartnersRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new TelecomExpenseManagementPartnersRequestBuilder(rawUrl, this.requestAdapter);
    };
}
