import {BookingCustomerBaseCollectionResponse} from '../../../../models/';
import {BookingCustomerBase} from '../../../../models/bookingCustomerBase';
import {createBookingCustomerBaseCollectionResponseFromDiscriminatorValue} from '../../../../models/createBookingCustomerBaseCollectionResponseFromDiscriminatorValue';
import {createBookingCustomerBaseFromDiscriminatorValue} from '../../../../models/createBookingCustomerBaseFromDiscriminatorValue';
import {deserializeIntoBookingCustomerBase} from '../../../../models/deserializeIntoBookingCustomerBase';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../models/oDataErrors/serializeODataError';
import {serializeBookingCustomerBase} from '../../../../models/serializeBookingCustomerBase';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {CustomersRequestBuilderGetRequestConfiguration} from './customersRequestBuilderGetRequestConfiguration';
import {CustomersRequestBuilderPostRequestConfiguration} from './customersRequestBuilderPostRequestConfiguration';
import {BookingCustomerBaseItemRequestBuilder} from './item/bookingCustomerBaseItemRequestBuilder';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the customers property of the microsoft.graph.bookingBusiness entity.
 */
export class CustomersRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the customers property of the microsoft.graph.bookingBusiness entity.
     * @param bookingCustomerBaseId Unique identifier of the item
     * @returns a BookingCustomerBaseItemRequestBuilder
     */
    public byBookingCustomerBaseId(bookingCustomerBaseId: string) : BookingCustomerBaseItemRequestBuilder {
        if(!bookingCustomerBaseId) throw new Error("bookingCustomerBaseId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["bookingCustomerBase%2Did"] = bookingCustomerBaseId
        return new BookingCustomerBaseItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new CustomersRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/solutions/bookingBusinesses/{bookingBusiness%2Did}/customers{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Get a list of bookingCustomer objects of a business.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of BookingCustomerBaseCollectionResponse
     * @see {@link https://docs.microsoft.com/graph/api/bookingbusiness-list-customers?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: CustomersRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<BookingCustomerBaseCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter?.sendAsync<BookingCustomerBaseCollectionResponse>(requestInfo, createBookingCustomerBaseCollectionResponseFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Create a new bookingCustomer object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of BookingCustomerBase
     * @see {@link https://docs.microsoft.com/graph/api/bookingbusiness-post-customers?view=graph-rest-1.0|Find more info here}
     */
    public post(body: BookingCustomerBase | undefined, requestConfiguration?: CustomersRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<BookingCustomerBase | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter?.sendAsync<BookingCustomerBase>(requestInfo, createBookingCustomerBaseFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Get a list of bookingCustomer objects of a business.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: CustomersRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new bookingCustomer object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: BookingCustomerBase | undefined, requestConfiguration?: CustomersRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeBookingCustomerBase);
        return requestInfo;
    };
}
