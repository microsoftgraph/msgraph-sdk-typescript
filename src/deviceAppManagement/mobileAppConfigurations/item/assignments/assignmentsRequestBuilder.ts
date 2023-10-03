import { type ManagedDeviceMobileAppConfigurationAssignmentCollectionResponse } from '../../../../models/';
import { createManagedDeviceMobileAppConfigurationAssignmentFromDiscriminatorValue, deserializeIntoManagedDeviceMobileAppConfigurationAssignment, serializeManagedDeviceMobileAppConfigurationAssignment, type ManagedDeviceMobileAppConfigurationAssignment } from '../../../../models/managedDeviceMobileAppConfigurationAssignment';
import { createManagedDeviceMobileAppConfigurationAssignmentCollectionResponseFromDiscriminatorValue } from '../../../../models/managedDeviceMobileAppConfigurationAssignmentCollectionResponse';
import { type ODataError } from '../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../../../models/oDataErrors/oDataError';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { ManagedDeviceMobileAppConfigurationAssignmentItemRequestBuilder } from './item/managedDeviceMobileAppConfigurationAssignmentItemRequestBuilder';
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
 * Provides operations to manage the assignments property of the microsoft.graph.managedDeviceMobileAppConfiguration entity.
 */
export class AssignmentsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the assignments property of the microsoft.graph.managedDeviceMobileAppConfiguration entity.
     * @param managedDeviceMobileAppConfigurationAssignmentId The unique identifier of managedDeviceMobileAppConfigurationAssignment
     * @returns a ManagedDeviceMobileAppConfigurationAssignmentItemRequestBuilder
     */
    public byManagedDeviceMobileAppConfigurationAssignmentId(managedDeviceMobileAppConfigurationAssignmentId: string) : ManagedDeviceMobileAppConfigurationAssignmentItemRequestBuilder {
        if(!managedDeviceMobileAppConfigurationAssignmentId) throw new Error("managedDeviceMobileAppConfigurationAssignmentId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["managedDeviceMobileAppConfigurationAssignment%2Did"] = managedDeviceMobileAppConfigurationAssignmentId
        return new ManagedDeviceMobileAppConfigurationAssignmentItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new AssignmentsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration%2Did}/assignments{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * List properties and relationships of the managedDeviceMobileAppConfigurationAssignment objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ManagedDeviceMobileAppConfigurationAssignmentCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/intune-apps-manageddevicemobileappconfigurationassignment-list?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: AssignmentsRequestBuilderGetRequestConfiguration | undefined) : Promise<ManagedDeviceMobileAppConfigurationAssignmentCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ManagedDeviceMobileAppConfigurationAssignmentCollectionResponse>(requestInfo, createManagedDeviceMobileAppConfigurationAssignmentCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create a new managedDeviceMobileAppConfigurationAssignment object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ManagedDeviceMobileAppConfigurationAssignment
     * @see {@link https://learn.microsoft.com/graph/api/intune-apps-manageddevicemobileappconfigurationassignment-create?view=graph-rest-1.0|Find more info here}
     */
    public post(body: ManagedDeviceMobileAppConfigurationAssignment, requestConfiguration?: AssignmentsRequestBuilderPostRequestConfiguration | undefined) : Promise<ManagedDeviceMobileAppConfigurationAssignment | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ManagedDeviceMobileAppConfigurationAssignment>(requestInfo, createManagedDeviceMobileAppConfigurationAssignmentFromDiscriminatorValue, errorMapping);
    };
    /**
     * List properties and relationships of the managedDeviceMobileAppConfigurationAssignment objects.
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
     * Create a new managedDeviceMobileAppConfigurationAssignment object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: ManagedDeviceMobileAppConfigurationAssignment, requestConfiguration?: AssignmentsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeManagedDeviceMobileAppConfigurationAssignment);
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
