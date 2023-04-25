import {SharedDriveItem, SharedDriveItemCollectionResponse} from '../models/';
import {createSharedDriveItemCollectionResponseFromDiscriminatorValue} from '../models/createSharedDriveItemCollectionResponseFromDiscriminatorValue';
import {createSharedDriveItemFromDiscriminatorValue} from '../models/createSharedDriveItemFromDiscriminatorValue';
import {ODataError} from '../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {SharedDriveItemItemRequestBuilder} from './item/sharedDriveItemItemRequestBuilder';
import {SharesRequestBuilderGetRequestConfiguration} from './sharesRequestBuilderGetRequestConfiguration';
import {SharesRequestBuilderPostRequestConfiguration} from './sharesRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the collection of sharedDriveItem entities.
 */
export class SharesRequestBuilder extends BaseRequestBuilder {
    /** Provides operations to count the resources in the collection. */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the collection of sharedDriveItem entities.
     * @param sharedDriveItemId Unique identifier of the item
     * @returns a SharedDriveItemItemRequestBuilder
     */
    public bySharedDriveItemId(sharedDriveItemId: string) : SharedDriveItemItemRequestBuilder {
        if(!sharedDriveItemId) throw new Error("sharedDriveItemId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["sharedDriveItem%2Did"] = sharedDriveItemId
        return new SharedDriveItemItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new SharesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/shares{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Access a shared DriveItem or a collection of shared items by using a **shareId** or sharing URL. To use a sharing URL with this API, your app needs to transform the URL into a sharing token.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of SharedDriveItemCollectionResponse
     */
    public get(requestConfiguration?: SharesRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<SharedDriveItemCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<SharedDriveItemCollectionResponse>(requestInfo, createSharedDriveItemCollectionResponseFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Add new entity to shares
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of SharedDriveItem
     */
    public post(body: SharedDriveItem | undefined, requestConfiguration?: SharesRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<SharedDriveItem | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<SharedDriveItem>(requestInfo, createSharedDriveItemFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Access a shared DriveItem or a collection of shared items by using a **shareId** or sharing URL. To use a sharing URL with this API, your app needs to transform the URL into a sharing token.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: SharesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Add new entity to shares
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: SharedDriveItem | undefined, requestConfiguration?: SharesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        return requestInfo;
    };
}
