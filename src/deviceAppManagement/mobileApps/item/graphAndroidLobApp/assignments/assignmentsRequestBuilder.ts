import { type MobileAppAssignmentCollectionResponse } from '../../../../../models/';
import { createMobileAppAssignmentFromDiscriminatorValue, deserializeIntoMobileAppAssignment, serializeMobileAppAssignment, type MobileAppAssignment } from '../../../../../models/mobileAppAssignment';
import { createMobileAppAssignmentCollectionResponseFromDiscriminatorValue } from '../../../../../models/mobileAppAssignmentCollectionResponse';
import { type ODataError } from '../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../../../../models/oDataErrors/oDataError';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { MobileAppAssignmentItemRequestBuilder } from './item/mobileAppAssignmentItemRequestBuilder';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface AssignmentsRequestBuilderGetQueryParameters {
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
export interface AssignmentsRequestBuilderGetRequestConfiguration {
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
    queryParameters?: AssignmentsRequestBuilderGetQueryParameters;
}
export interface AssignmentsRequestBuilderPostRequestConfiguration {
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
 * Provides operations to manage the assignments property of the microsoft.graph.mobileApp entity.
 */
export class AssignmentsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the assignments property of the microsoft.graph.mobileApp entity.
     * @param mobileAppAssignmentId The unique identifier of mobileAppAssignment
     * @returns a MobileAppAssignmentItemRequestBuilder
     */
    public byMobileAppAssignmentId(mobileAppAssignmentId: string) : MobileAppAssignmentItemRequestBuilder {
        if(!mobileAppAssignmentId) throw new Error("mobileAppAssignmentId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["mobileAppAssignment%2Did"] = mobileAppAssignmentId
        return new MobileAppAssignmentItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new AssignmentsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceAppManagement/mobileApps/{mobileApp%2Did}/graph.androidLobApp/assignments{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * List properties and relationships of the mobileAppAssignment objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of MobileAppAssignmentCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/intune-apps-mobileappassignment-list?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: AssignmentsRequestBuilderGetRequestConfiguration | undefined) : Promise<MobileAppAssignmentCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<MobileAppAssignmentCollectionResponse>(requestInfo, createMobileAppAssignmentCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create a new mobileAppAssignment object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of MobileAppAssignment
     * @see {@link https://learn.microsoft.com/graph/api/intune-apps-mobileappassignment-create?view=graph-rest-1.0|Find more info here}
     */
    public post(body: MobileAppAssignment, requestConfiguration?: AssignmentsRequestBuilderPostRequestConfiguration | undefined) : Promise<MobileAppAssignment | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<MobileAppAssignment>(requestInfo, createMobileAppAssignmentFromDiscriminatorValue, errorMapping);
    };
    /**
     * List properties and relationships of the mobileAppAssignment objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: AssignmentsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new mobileAppAssignment object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: MobileAppAssignment, requestConfiguration?: AssignmentsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeMobileAppAssignment);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a assignmentsRequestBuilder
     */
    public withUrl(rawUrl: string) : AssignmentsRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new AssignmentsRequestBuilder(rawUrl, this.requestAdapter);
    };
}
