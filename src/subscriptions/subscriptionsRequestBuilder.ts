import {SubscriptionCollectionResponse} from '../models/';
import {createSubscriptionCollectionResponseFromDiscriminatorValue} from '../models/createSubscriptionCollectionResponseFromDiscriminatorValue';
import {createSubscriptionFromDiscriminatorValue} from '../models/createSubscriptionFromDiscriminatorValue';
import {deserializeIntoSubscription} from '../models/deserializeIntoSubscription';
import {ODataError} from '../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../models/oDataErrors/serializeODataError';
import {serializeSubscription} from '../models/serializeSubscription';
import {Subscription} from '../models/subscription';
import {SubscriptionItemRequestBuilder} from './item/subscriptionItemRequestBuilder';
import {SubscriptionsRequestBuilderGetRequestConfiguration} from './subscriptionsRequestBuilderGetRequestConfiguration';
import {SubscriptionsRequestBuilderPostRequestConfiguration} from './subscriptionsRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the collection of subscription entities.
 */
export class SubscriptionsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the collection of subscription entities.
     * @param subscriptionId Unique identifier of the item
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
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of SubscriptionCollectionResponse
     * @see {@link https://docs.microsoft.com/graph/api/subscription-list?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: SubscriptionsRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<SubscriptionCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter?.sendAsync<SubscriptionCollectionResponse>(requestInfo, createSubscriptionCollectionResponseFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Subscribes a listener application to receive change notifications when the requested type of changes occur to the specified resource in Microsoft Graph. See the table in the Permissions section for the list of resources that support subscribing to change notifications.  Some resources support the option to include encrypted resource data in change notifications. These resources include chatMessage, contact, event, message, and presence. For more information, see Set up change notifications that include resource data and Change notifications for Outlook resources in Microsoft Graph.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Subscription
     * @see {@link https://docs.microsoft.com/graph/api/subscription-post-subscriptions?view=graph-rest-1.0|Find more info here}
     */
    public post(body: Subscription | undefined, requestConfiguration?: SubscriptionsRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Subscription | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter?.sendAsync<Subscription>(requestInfo, createSubscriptionFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
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
     * Subscribes a listener application to receive change notifications when the requested type of changes occur to the specified resource in Microsoft Graph. See the table in the Permissions section for the list of resources that support subscribing to change notifications.  Some resources support the option to include encrypted resource data in change notifications. These resources include chatMessage, contact, event, message, and presence. For more information, see Set up change notifications that include resource data and Change notifications for Outlook resources in Microsoft Graph.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: Subscription | undefined, requestConfiguration?: SubscriptionsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeSubscription);
        return requestInfo;
    };
}
