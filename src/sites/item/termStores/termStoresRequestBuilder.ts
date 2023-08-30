import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../models/oDataErrors/serializeODataError';
import {StoreCollectionResponse} from '../../../models/termStore/';
import {createStoreCollectionResponseFromDiscriminatorValue} from '../../../models/termStore/createStoreCollectionResponseFromDiscriminatorValue';
import {createStoreFromDiscriminatorValue} from '../../../models/termStore/createStoreFromDiscriminatorValue';
import {deserializeIntoStore} from '../../../models/termStore/deserializeIntoStore';
import {serializeStore} from '../../../models/termStore/serializeStore';
import type {Store} from '../../../models/termStore/store';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {StoreItemRequestBuilder} from './item/storeItemRequestBuilder';
import {TermStoresRequestBuilderGetRequestConfiguration} from './termStoresRequestBuilderGetRequestConfiguration';
import {TermStoresRequestBuilderPostRequestConfiguration} from './termStoresRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the termStores property of the microsoft.graph.site entity.
 */
export class TermStoresRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the termStores property of the microsoft.graph.site entity.
     * @param storeId The unique identifier of store
     * @returns a StoreItemRequestBuilder
     */
    public byStoreId(storeId: string) : StoreItemRequestBuilder {
        if(!storeId) throw new Error("storeId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["store%2Did"] = storeId
        return new StoreItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new TermStoresRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/sites/{site%2Did}/termStores{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * The collection of termStores under this site.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of StoreCollectionResponse
     */
    public get(requestConfiguration?: TermStoresRequestBuilderGetRequestConfiguration | undefined) : Promise<StoreCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<StoreCollectionResponse>(requestInfo, createStoreCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to termStores for sites
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Store
     */
    public post(body: Store, requestConfiguration?: TermStoresRequestBuilderPostRequestConfiguration | undefined) : Promise<Store | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<Store>(requestInfo, createStoreFromDiscriminatorValue, errorMapping);
    };
    /**
     * The collection of termStores under this site.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: TermStoresRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to termStores for sites
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: Store, requestConfiguration?: TermStoresRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeStore);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a termStoresRequestBuilder
     */
    public withUrl(rawUrl: string) : TermStoresRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new TermStoresRequestBuilder(rawUrl, this.requestAdapter);
    };
}
