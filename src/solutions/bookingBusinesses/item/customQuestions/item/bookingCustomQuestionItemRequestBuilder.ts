import type {BookingCustomQuestion} from '../../../../../models/bookingCustomQuestion';
import {createBookingCustomQuestionFromDiscriminatorValue} from '../../../../../models/createBookingCustomQuestionFromDiscriminatorValue';
import {deserializeIntoBookingCustomQuestion} from '../../../../../models/deserializeIntoBookingCustomQuestion';
import {ODataError} from '../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../models/oDataErrors/serializeODataError';
import {serializeBookingCustomQuestion} from '../../../../../models/serializeBookingCustomQuestion';
import {BookingCustomQuestionItemRequestBuilderDeleteRequestConfiguration} from './bookingCustomQuestionItemRequestBuilderDeleteRequestConfiguration';
import {BookingCustomQuestionItemRequestBuilderGetRequestConfiguration} from './bookingCustomQuestionItemRequestBuilderGetRequestConfiguration';
import {BookingCustomQuestionItemRequestBuilderPatchRequestConfiguration} from './bookingCustomQuestionItemRequestBuilderPatchRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the customQuestions property of the microsoft.graph.bookingBusiness entity.
 */
export class BookingCustomQuestionItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new BookingCustomQuestionItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/solutions/bookingBusinesses/{bookingBusiness%2Did}/customQuestions/{bookingCustomQuestion%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete a bookingCustomQuestion object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/bookingcustomquestion-delete?view=graph-rest-1.0|Find more info here}
     */
    public delete(requestConfiguration?: BookingCustomQuestionItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
        const requestInfo = this.toDeleteRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendNoResponseContentAsync(requestInfo, errorMapping);
    };
    /**
     * Read the properties and relationships of a bookingCustomQuestion object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of BookingCustomQuestion
     * @see {@link https://learn.microsoft.com/graph/api/bookingcustomquestion-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: BookingCustomQuestionItemRequestBuilderGetRequestConfiguration | undefined) : Promise<BookingCustomQuestion | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<BookingCustomQuestion>(requestInfo, createBookingCustomQuestionFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the properties of a bookingCustomQuestion object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of BookingCustomQuestion
     * @see {@link https://learn.microsoft.com/graph/api/bookingcustomquestion-update?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: BookingCustomQuestion, requestConfiguration?: BookingCustomQuestionItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<BookingCustomQuestion | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<BookingCustomQuestion>(requestInfo, createBookingCustomQuestionFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete a bookingCustomQuestion object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: BookingCustomQuestionItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.DELETE;
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
    /**
     * Read the properties and relationships of a bookingCustomQuestion object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: BookingCustomQuestionItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the properties of a bookingCustomQuestion object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: BookingCustomQuestion, requestConfiguration?: BookingCustomQuestionItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.PATCH;
        requestInfo.headers["Accept"] = ["application/json"];
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeBookingCustomQuestion);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a BookingCustomQuestionItemRequestBuilder
     */
    public withUrl(rawUrl: string) : BookingCustomQuestionItemRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new BookingCustomQuestionItemRequestBuilder(rawUrl, this.requestAdapter);
    };
}
