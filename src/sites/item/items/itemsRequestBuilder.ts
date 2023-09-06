import { type BaseItemCollectionResponse } from '../../../models/';
import { createBaseItemCollectionResponseFromDiscriminatorValue } from '../../../models/createBaseItemCollectionResponseFromDiscriminatorValue';
import { type ODataError } from '../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../models/oDataErrors/serializeODataError';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { BaseItemItemRequestBuilder } from './item/baseItemItemRequestBuilder';
import { type ItemsRequestBuilderGetRequestConfiguration } from './itemsRequestBuilderGetRequestConfiguration';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the items property of the microsoft.graph.site entity.
 */
export class ItemsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the items property of the microsoft.graph.site entity.
     * @param baseItemId The unique identifier of baseItem
     * @returns a BaseItemItemRequestBuilder
     */
    public byBaseItemId(baseItemId: string) : BaseItemItemRequestBuilder {
        if(!baseItemId) throw new Error("baseItemId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["baseItem%2Did"] = baseItemId
        return new BaseItemItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new ItemsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/sites/{site%2Did}/items{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Used to address any item contained in this site. This collection can't be enumerated.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of BaseItemCollectionResponse
     */
    public get(requestConfiguration?: ItemsRequestBuilderGetRequestConfiguration | undefined) : Promise<BaseItemCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<BaseItemCollectionResponse>(requestInfo, createBaseItemCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Used to address any item contained in this site. This collection can't be enumerated.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ItemsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * @returns a itemsRequestBuilder
     */
    public withUrl(rawUrl: string) : ItemsRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new ItemsRequestBuilder(rawUrl, this.requestAdapter);
    };
}
