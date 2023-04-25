import {BookingCustomQuestion, BookingCustomQuestionCollectionResponse} from '../../../../models/';
import {createBookingCustomQuestionCollectionResponseFromDiscriminatorValue} from '../../../../models/createBookingCustomQuestionCollectionResponseFromDiscriminatorValue';
import {createBookingCustomQuestionFromDiscriminatorValue} from '../../../../models/createBookingCustomQuestionFromDiscriminatorValue';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {CustomQuestionsRequestBuilderGetRequestConfiguration} from './customQuestionsRequestBuilderGetRequestConfiguration';
import {CustomQuestionsRequestBuilderPostRequestConfiguration} from './customQuestionsRequestBuilderPostRequestConfiguration';
import {BookingCustomQuestionItemRequestBuilder} from './item/bookingCustomQuestionItemRequestBuilder';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the customQuestions property of the microsoft.graph.bookingBusiness entity.
 */
export class CustomQuestionsRequestBuilder extends BaseRequestBuilder {
    /** Provides operations to count the resources in the collection. */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the customQuestions property of the microsoft.graph.bookingBusiness entity.
     * @param bookingCustomQuestionId Unique identifier of the item
     * @returns a BookingCustomQuestionItemRequestBuilder
     */
    public byBookingCustomQuestionId(bookingCustomQuestionId: string) : BookingCustomQuestionItemRequestBuilder {
        if(!bookingCustomQuestionId) throw new Error("bookingCustomQuestionId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["bookingCustomQuestion%2Did"] = bookingCustomQuestionId
        return new BookingCustomQuestionItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new CustomQuestionsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/solutions/bookingBusinesses/{bookingBusiness%2Did}/customQuestions{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * All the custom questions of this business. Read-only. Nullable.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of BookingCustomQuestionCollectionResponse
     */
    public get(requestConfiguration?: CustomQuestionsRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<BookingCustomQuestionCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<BookingCustomQuestionCollectionResponse>(requestInfo, createBookingCustomQuestionCollectionResponseFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Create new navigation property to customQuestions for solutions
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of BookingCustomQuestion
     */
    public post(body: BookingCustomQuestion | undefined, requestConfiguration?: CustomQuestionsRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<BookingCustomQuestion | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<BookingCustomQuestion>(requestInfo, createBookingCustomQuestionFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * All the custom questions of this business. Read-only. Nullable.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: CustomQuestionsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to customQuestions for solutions
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: BookingCustomQuestion | undefined, requestConfiguration?: CustomQuestionsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
