import { type BookingStaffMemberBaseCollectionResponse } from '../../../../models/';
import { createBookingStaffMemberBaseFromDiscriminatorValue, deserializeIntoBookingStaffMemberBase, serializeBookingStaffMemberBase, type BookingStaffMemberBase } from '../../../../models/bookingStaffMemberBase';
import { createBookingStaffMemberBaseCollectionResponseFromDiscriminatorValue } from '../../../../models/bookingStaffMemberBaseCollectionResponse';
import { type ODataError } from '../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../../../models/oDataErrors/oDataError';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { BookingStaffMemberBaseItemRequestBuilder } from './item/bookingStaffMemberBaseItemRequestBuilder';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface StaffMembersRequestBuilderGetQueryParameters {
    /**
     * Include count of items
     */
    count?: boolean;
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Filter items by property values
     */
    filter?: string;
    /**
     * Order items by property values
     */
    orderby?: string[];
    /**
     * Search items by search phrases
     */
    search?: string;
    /**
     * Select properties to be returned
     */
    select?: string[];
    /**
     * Skip the first n items
     */
    skip?: number;
    /**
     * Show only the first n items
     */
    top?: number;
}
export interface StaffMembersRequestBuilderGetRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]>;
    /**
     * Request options
     */
    options?: RequestOption[];
    /**
     * Request query parameters
     */
    queryParameters?: StaffMembersRequestBuilderGetQueryParameters;
}
export interface StaffMembersRequestBuilderPostRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]>;
    /**
     * Request options
     */
    options?: RequestOption[];
}
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
     * @param bookingStaffMemberBaseId The unique identifier of bookingStaffMemberBase
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
     * Get a list of bookingStaffMember objects in the specified bookingBusiness. This API is supported in the following national cloud deployments.
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
     * Create a new bookingStaffMember in the specified bookingBusiness. This API is supported in the following national cloud deployments.
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
     * Get a list of bookingStaffMember objects in the specified bookingBusiness. This API is supported in the following national cloud deployments.
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
     * Create a new bookingStaffMember in the specified bookingBusiness. This API is supported in the following national cloud deployments.
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
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a staffMembersRequestBuilder
     */
    public withUrl(rawUrl: string) : StaffMembersRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new StaffMembersRequestBuilder(rawUrl, this.requestAdapter);
    };
}
