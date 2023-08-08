import {BookingStaffMemberBaseCollectionResponse} from '../../../../models/';
import type {BookingStaffMemberBase} from '../../../../models/bookingStaffMemberBase';
import {createBookingStaffMemberBaseCollectionResponseFromDiscriminatorValue} from '../../../../models/createBookingStaffMemberBaseCollectionResponseFromDiscriminatorValue';
import {createBookingStaffMemberBaseFromDiscriminatorValue} from '../../../../models/createBookingStaffMemberBaseFromDiscriminatorValue';
import {deserializeIntoBookingStaffMemberBase} from '../../../../models/deserializeIntoBookingStaffMemberBase';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../models/oDataErrors/serializeODataError';
import {serializeBookingStaffMemberBase} from '../../../../models/serializeBookingStaffMemberBase';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {BookingStaffMemberBaseItemRequestBuilder} from './item/bookingStaffMemberBaseItemRequestBuilder';
import {StaffMembersRequestBuilderGetRequestConfiguration} from './staffMembersRequestBuilderGetRequestConfiguration';
import {StaffMembersRequestBuilderPostRequestConfiguration} from './staffMembersRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the staffMembers property of the microsoft.graph.bookingBusiness entity.
 */
export class StaffMembersRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the staffMembers property of the microsoft.graph.bookingBusiness entity.
     * @param bookingStaffMemberBaseId Unique identifier of the item
     * @returns a BookingStaffMemberBaseItemRequestBuilder
     */
    public byBookingStaffMemberBaseId(bookingStaffMemberBaseId: string) : BookingStaffMemberBaseItemRequestBuilder {
        if(!bookingStaffMemberBaseId) throw new Error("bookingStaffMemberBaseId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["bookingStaffMemberBase%2Did"] = bookingStaffMemberBaseId
        return new BookingStaffMemberBaseItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new StaffMembersRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/solutions/bookingBusinesses/{bookingBusiness%2Did}/staffMembers{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Get a list of bookingStaffMember objects in the specified bookingBusiness.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of BookingStaffMemberBaseCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/bookingbusiness-list-staffmembers?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: StaffMembersRequestBuilderGetRequestConfiguration | undefined) : Promise<BookingStaffMemberBaseCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<BookingStaffMemberBaseCollectionResponse>(requestInfo, createBookingStaffMemberBaseCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create a new bookingStaffMember in the specified bookingBusiness.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of BookingStaffMemberBase
     * @see {@link https://learn.microsoft.com/graph/api/bookingbusiness-post-staffmembers?view=graph-rest-1.0|Find more info here}
     */
    public post(body: BookingStaffMemberBase, requestConfiguration?: StaffMembersRequestBuilderPostRequestConfiguration | undefined) : Promise<BookingStaffMemberBase | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<BookingStaffMemberBase>(requestInfo, createBookingStaffMemberBaseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get a list of bookingStaffMember objects in the specified bookingBusiness.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: StaffMembersRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new bookingStaffMember in the specified bookingBusiness.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: BookingStaffMemberBase, requestConfiguration?: StaffMembersRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeBookingStaffMemberBase);
        return requestInfo;
    };
}
