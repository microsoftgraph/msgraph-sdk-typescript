import {SubscriptionCollectionResponse} from '../../../../../models/';
import {createSubscriptionCollectionResponseFromDiscriminatorValue} from '../../../../../models/createSubscriptionCollectionResponseFromDiscriminatorValue';
import {createSubscriptionFromDiscriminatorValue} from '../../../../../models/createSubscriptionFromDiscriminatorValue';
import {deserializeIntoSubscription} from '../../../../../models/deserializeIntoSubscription';
import {ODataError} from '../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../models/oDataErrors/serializeODataError';
import {serializeSubscription} from '../../../../../models/serializeSubscription';
import type {Subscription} from '../../../../../models/subscription';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {SubscriptionItemRequestBuilder} from './item/subscriptionItemRequestBuilder';
import {SubscriptionsRequestBuilderGetRequestConfiguration} from './subscriptionsRequestBuilderGetRequestConfiguration';
import {SubscriptionsRequestBuilderPostRequestConfiguration} from './subscriptionsRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the subscriptions property of the microsoft.graph.driveItem entity.
 */
export class SubscriptionsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the subscriptions property of the microsoft.graph.driveItem entity.
     * @param subscriptionId The unique identifier of subscription
     * @returns a SubscriptionItemRequestBuilder
     */
    public bySubscriptionId(subscriptionId: string) : SubscriptionItemRequestBuilder {
        if(!subscriptionId) throw new Error("subscriptionId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["subscription%2Did"] = subscriptionId
        return new SubscriptionItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new SubscriptionsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/subscriptions{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * The set of subscriptions on the item. Only supported on the root of a drive.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of SubscriptionCollectionResponse
     */
    public get(requestConfiguration?: SubscriptionsRequestBuilderGetRequestConfiguration | undefined) : Promise<SubscriptionCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<SubscriptionCollectionResponse>(requestInfo, createSubscriptionCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to subscriptions for drives
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Subscription
     */
    public post(body: Subscription, requestConfiguration?: SubscriptionsRequestBuilderPostRequestConfiguration | undefined) : Promise<Subscription | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<Subscription>(requestInfo, createSubscriptionFromDiscriminatorValue, errorMapping);
    };
    /**
     * The set of subscriptions on the item. Only supported on the root of a drive.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: SubscriptionsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to subscriptions for drives
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: Subscription, requestConfiguration?: SubscriptionsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeSubscription);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a subscriptionsRequestBuilder
     */
    public withUrl(rawUrl: string) : SubscriptionsRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new SubscriptionsRequestBuilder(rawUrl, this.requestAdapter);
    };
}
