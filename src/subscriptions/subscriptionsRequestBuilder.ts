import { type SubscriptionCollectionResponse } from '../models/';
import { createSubscriptionCollectionResponseFromDiscriminatorValue } from '../models/createSubscriptionCollectionResponseFromDiscriminatorValue';
import { createSubscriptionFromDiscriminatorValue } from '../models/createSubscriptionFromDiscriminatorValue';
import { deserializeIntoSubscription } from '../models/deserializeIntoSubscription';
import { type ODataError } from '../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../models/oDataErrors/serializeODataError';
import { serializeSubscription } from '../models/serializeSubscription';
import { type Subscription } from '../models/subscription';
import { SubscriptionItemRequestBuilder } from './item/subscriptionItemRequestBuilder';
import { type SubscriptionsRequestBuilderGetRequestConfiguration } from './subscriptionsRequestBuilderGetRequestConfiguration';
import { type SubscriptionsRequestBuilderPostRequestConfiguration } from './subscriptionsRequestBuilderPostRequestConfiguration';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the collection of subscription entities.
 */
export class SubscriptionsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the collection of subscription entities.
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
        super(pathParameters, requestAdapter, "{+baseurl}/subscriptions{?%24search,%24select}");
    };
    /**
     * Retrieve the properties and relationships of webhook subscriptions, based on the app ID, the user, and the user's role with a tenant. The content of the response depends on the context in which the app is calling; for details, see the scenarios in the Permissions section.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of SubscriptionCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/subscription-list?view=graph-rest-1.0|Find more info here}
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
     * Subscribes a listener application to receive change notifications when the requested type of changes occur to the specified resource in Microsoft Graph. To identify the resources for which you can create subscriptions and the limitations on subscriptions, see Set up notifications for changes in resource data: Supported resources. Some resources support rich notifications, that is, notifications that include resource data. For more information about these resources, see Set up change notifications that include resource data: Supported resources.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Subscription
     * @see {@link https://learn.microsoft.com/graph/api/subscription-post-subscriptions?view=graph-rest-1.0|Find more info here}
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
     * Retrieve the properties and relationships of webhook subscriptions, based on the app ID, the user, and the user's role with a tenant. The content of the response depends on the context in which the app is calling; for details, see the scenarios in the Permissions section.
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
     * Subscribes a listener application to receive change notifications when the requested type of changes occur to the specified resource in Microsoft Graph. To identify the resources for which you can create subscriptions and the limitations on subscriptions, see Set up notifications for changes in resource data: Supported resources. Some resources support rich notifications, that is, notifications that include resource data. For more information about these resources, see Set up change notifications that include resource data: Supported resources.
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
