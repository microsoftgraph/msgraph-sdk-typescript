import { createBookingStaffMemberBaseFromDiscriminatorValue, deserializeIntoBookingStaffMemberBase, serializeBookingStaffMemberBase, type BookingStaffMemberBase } from '../../../../../models/bookingStaffMemberBase';
import { type ODataError } from '../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../../../../models/oDataErrors/oDataError';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface BookingStaffMemberBaseItemRequestBuilderDeleteRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]>;
    /**
     * Request options
     */
    options?: RequestOption[];
}
export interface BookingStaffMemberBaseItemRequestBuilderGetQueryParameters {
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Select properties to be returned
     */
    select?: string[];
}
export interface BookingStaffMemberBaseItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: BookingStaffMemberBaseItemRequestBuilderGetQueryParameters;
}
export interface BookingStaffMemberBaseItemRequestBuilderPatchRequestConfiguration {
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
export class BookingStaffMemberBaseItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new BookingStaffMemberBaseItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/solutions/bookingBusinesses/{bookingBusiness%2Did}/staffMembers/{bookingStaffMemberBase%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete a bookingStaffMember in the specified bookingBusiness.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/bookingstaffmember-delete?view=graph-rest-1.0|Find more info here}
     */
    public delete(requestConfiguration?: BookingStaffMemberBaseItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Get the properties and relationships of a bookingStaffMember in the specified bookingBusiness.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of BookingStaffMemberBase
     * @see {@link https://learn.microsoft.com/graph/api/bookingstaffmember-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: BookingStaffMemberBaseItemRequestBuilderGetRequestConfiguration | undefined) : Promise<BookingStaffMemberBase | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<BookingStaffMemberBase>(requestInfo, createBookingStaffMemberBaseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the properties of a bookingStaffMember in the specified bookingBusiness.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of BookingStaffMemberBase
     * @see {@link https://learn.microsoft.com/graph/api/bookingstaffmember-update?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: BookingStaffMemberBase, requestConfiguration?: BookingStaffMemberBaseItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<BookingStaffMemberBase | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<BookingStaffMemberBase>(requestInfo, createBookingStaffMemberBaseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete a bookingStaffMember in the specified bookingBusiness.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: BookingStaffMemberBaseItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Get the properties and relationships of a bookingStaffMember in the specified bookingBusiness.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: BookingStaffMemberBaseItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the properties of a bookingStaffMember in the specified bookingBusiness.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: BookingStaffMemberBase, requestConfiguration?: BookingStaffMemberBaseItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeBookingStaffMemberBase);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a BookingStaffMemberBaseItemRequestBuilder
     */
    public withUrl(rawUrl: string) : BookingStaffMemberBaseItemRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new BookingStaffMemberBaseItemRequestBuilder(rawUrl, this.requestAdapter);
    };
}
