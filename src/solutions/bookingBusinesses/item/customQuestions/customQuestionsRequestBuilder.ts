import {BookingCustomQuestionCollectionResponse} from '../../../../models/';
import {BookingCustomQuestion} from '../../../../models/bookingCustomQuestion';
import {createBookingCustomQuestionCollectionResponseFromDiscriminatorValue} from '../../../../models/createBookingCustomQuestionCollectionResponseFromDiscriminatorValue';
import {createBookingCustomQuestionFromDiscriminatorValue} from '../../../../models/createBookingCustomQuestionFromDiscriminatorValue';
import {deserializeIntoBookingCustomQuestion} from '../../../../models/deserializeIntoBookingCustomQuestion';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../models/oDataErrors/serializeODataError';
import {serializeBookingCustomQuestion} from '../../../../models/serializeBookingCustomQuestion';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {CustomQuestionsRequestBuilderGetRequestConfiguration} from './customQuestionsRequestBuilderGetRequestConfiguration';
import {CustomQuestionsRequestBuilderPostRequestConfiguration} from './customQuestionsRequestBuilderPostRequestConfiguration';
import {BookingCustomQuestionItemRequestBuilder} from './item/bookingCustomQuestionItemRequestBuilder';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the customQuestions property of the microsoft.graph.bookingBusiness entity.
 */
export class CustomQuestionsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
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
     * Get the bookingCustomQuestion resources associated with a bookingBusiness.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of BookingCustomQuestionCollectionResponse
     * @see {@link https://docs.microsoft.com/graph/api/bookingbusiness-list-customquestions?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: CustomQuestionsRequestBuilderGetRequestConfiguration | undefined) : Promise<BookingCustomQuestionCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<BookingCustomQuestionCollectionResponse>(requestInfo, createBookingCustomQuestionCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create a new bookingCustomQuestion object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of BookingCustomQuestion
     * @see {@link https://docs.microsoft.com/graph/api/bookingbusiness-post-customquestions?view=graph-rest-1.0|Find more info here}
     */
    public post(body: BookingCustomQuestion | undefined, requestConfiguration?: CustomQuestionsRequestBuilderPostRequestConfiguration | undefined) : Promise<BookingCustomQuestion | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<BookingCustomQuestion>(requestInfo, createBookingCustomQuestionFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get the bookingCustomQuestion resources associated with a bookingBusiness.
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
     * Create a new bookingCustomQuestion object.
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeBookingCustomQuestion);
        return requestInfo;
    };
}
