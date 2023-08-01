import {SubscribedSkuCollectionResponse} from '../models/';
import {createSubscribedSkuCollectionResponseFromDiscriminatorValue} from '../models/createSubscribedSkuCollectionResponseFromDiscriminatorValue';
import {createSubscribedSkuFromDiscriminatorValue} from '../models/createSubscribedSkuFromDiscriminatorValue';
import {deserializeIntoSubscribedSku} from '../models/deserializeIntoSubscribedSku';
import {ODataError} from '../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../models/oDataErrors/serializeODataError';
import {serializeSubscribedSku} from '../models/serializeSubscribedSku';
import type {SubscribedSku} from '../models/subscribedSku';
import {SubscribedSkuItemRequestBuilder} from './item/subscribedSkuItemRequestBuilder';
import {SubscribedSkusRequestBuilderGetRequestConfiguration} from './subscribedSkusRequestBuilderGetRequestConfiguration';
import {SubscribedSkusRequestBuilderPostRequestConfiguration} from './subscribedSkusRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, getPathParameters} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the collection of subscribedSku entities.
 */
export class SubscribedSkusRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the collection of subscribedSku entities.
     * @param subscribedSkuId Unique identifier of the item
     * @returns a SubscribedSkuItemRequestBuilder
     */
    public bySubscribedSkuId(subscribedSkuId: string) : SubscribedSkuItemRequestBuilder {
        if(!subscribedSkuId) throw new Error("subscribedSkuId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["subscribedSku%2Did"] = subscribedSkuId
        return new SubscribedSkuItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new SubscribedSkusRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/subscribedSkus{?%24search,%24orderby,%24select}");
    };
    /**
     * Get the list of commercial subscriptions that an organization has acquired. For the mapping of license names as displayed on the Azure portal or the Microsoft 365 admin center against their Microsoft Graph skuId and skuPartNumber properties, see Product names and service plan identifiers for licensing.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of SubscribedSkuCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/subscribedsku-list?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: SubscribedSkusRequestBuilderGetRequestConfiguration | undefined) : Promise<SubscribedSkuCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<SubscribedSkuCollectionResponse>(requestInfo, createSubscribedSkuCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Add new entity to subscribedSkus
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of SubscribedSku
     */
    public post(body: SubscribedSku | undefined, requestConfiguration?: SubscribedSkusRequestBuilderPostRequestConfiguration | undefined) : Promise<SubscribedSku | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<SubscribedSku>(requestInfo, createSubscribedSkuFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get the list of commercial subscriptions that an organization has acquired. For the mapping of license names as displayed on the Azure portal or the Microsoft 365 admin center against their Microsoft Graph skuId and skuPartNumber properties, see Product names and service plan identifiers for licensing.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: SubscribedSkusRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Add new entity to subscribedSkus
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: SubscribedSku | undefined, requestConfiguration?: SubscribedSkusRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeSubscribedSku);
        return requestInfo;
    };
}
