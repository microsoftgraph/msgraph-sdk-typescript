import {BookingCurrencyCollectionResponse} from '../../models/';
import type {BookingCurrency} from '../../models/bookingCurrency';
import {createBookingCurrencyCollectionResponseFromDiscriminatorValue} from '../../models/createBookingCurrencyCollectionResponseFromDiscriminatorValue';
import {createBookingCurrencyFromDiscriminatorValue} from '../../models/createBookingCurrencyFromDiscriminatorValue';
import {deserializeIntoBookingCurrency} from '../../models/deserializeIntoBookingCurrency';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../models/oDataErrors/serializeODataError';
import {serializeBookingCurrency} from '../../models/serializeBookingCurrency';
import {BookingCurrenciesRequestBuilderGetRequestConfiguration} from './bookingCurrenciesRequestBuilderGetRequestConfiguration';
import {BookingCurrenciesRequestBuilderPostRequestConfiguration} from './bookingCurrenciesRequestBuilderPostRequestConfiguration';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {BookingCurrencyItemRequestBuilder} from './item/bookingCurrencyItemRequestBuilder';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the bookingCurrencies property of the microsoft.graph.solutionsRoot entity.
 */
export class BookingCurrenciesRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the bookingCurrencies property of the microsoft.graph.solutionsRoot entity.
     * @param bookingCurrencyId The unique identifier of bookingCurrency
     * @returns a BookingCurrencyItemRequestBuilder
     */
    public byBookingCurrencyId(bookingCurrencyId: string) : BookingCurrencyItemRequestBuilder {
        if(!bookingCurrencyId) throw new Error("bookingCurrencyId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["bookingCurrency%2Did"] = bookingCurrencyId
        return new BookingCurrencyItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new BookingCurrenciesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/solutions/bookingCurrencies{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Get a list of bookingCurrency objects available to a Microsoft Bookings business.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of BookingCurrencyCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/bookingcurrency-list?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: BookingCurrenciesRequestBuilderGetRequestConfiguration | undefined) : Promise<BookingCurrencyCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<BookingCurrencyCollectionResponse>(requestInfo, createBookingCurrencyCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to bookingCurrencies for solutions
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of BookingCurrency
     */
    public post(body: BookingCurrency, requestConfiguration?: BookingCurrenciesRequestBuilderPostRequestConfiguration | undefined) : Promise<BookingCurrency | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<BookingCurrency>(requestInfo, createBookingCurrencyFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get a list of bookingCurrency objects available to a Microsoft Bookings business.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: BookingCurrenciesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to bookingCurrencies for solutions
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: BookingCurrency, requestConfiguration?: BookingCurrenciesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeBookingCurrency);
        return requestInfo;
    };
}
