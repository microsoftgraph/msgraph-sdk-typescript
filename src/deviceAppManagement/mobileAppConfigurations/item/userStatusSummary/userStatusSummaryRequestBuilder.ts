import { createManagedDeviceMobileAppConfigurationUserSummaryFromDiscriminatorValue, deserializeIntoManagedDeviceMobileAppConfigurationUserSummary, serializeManagedDeviceMobileAppConfigurationUserSummary, type ManagedDeviceMobileAppConfigurationUserSummary } from '../../../../models/managedDeviceMobileAppConfigurationUserSummary';
import { type ODataError } from '../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../../../models/oDataErrors/oDataError';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface UserStatusSummaryRequestBuilderDeleteRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]>;
    /**
     * Request options
     */
    options?: RequestOption[];
}
export interface UserStatusSummaryRequestBuilderGetQueryParameters {
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Select properties to be returned
     */
    select?: string[];
}
export interface UserStatusSummaryRequestBuilderGetRequestConfiguration {
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
    queryParameters?: UserStatusSummaryRequestBuilderGetQueryParameters;
}
export interface UserStatusSummaryRequestBuilderPatchRequestConfiguration {
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
 * Provides operations to manage the userStatusSummary property of the microsoft.graph.managedDeviceMobileAppConfiguration entity.
 */
export class UserStatusSummaryRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new UserStatusSummaryRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration%2Did}/userStatusSummary{?%24select,%24expand}");
    };
    /**
     * Delete navigation property userStatusSummary for deviceAppManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: UserStatusSummaryRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Read properties and relationships of the managedDeviceMobileAppConfigurationUserSummary object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ManagedDeviceMobileAppConfigurationUserSummary
     * @see {@link https://learn.microsoft.com/graph/api/intune-apps-manageddevicemobileappconfigurationusersummary-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: UserStatusSummaryRequestBuilderGetRequestConfiguration | undefined) : Promise<ManagedDeviceMobileAppConfigurationUserSummary | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ManagedDeviceMobileAppConfigurationUserSummary>(requestInfo, createManagedDeviceMobileAppConfigurationUserSummaryFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the properties of a managedDeviceMobileAppConfigurationUserSummary object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ManagedDeviceMobileAppConfigurationUserSummary
     * @see {@link https://learn.microsoft.com/graph/api/intune-apps-manageddevicemobileappconfigurationusersummary-update?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: ManagedDeviceMobileAppConfigurationUserSummary, requestConfiguration?: UserStatusSummaryRequestBuilderPatchRequestConfiguration | undefined) : Promise<ManagedDeviceMobileAppConfigurationUserSummary | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ManagedDeviceMobileAppConfigurationUserSummary>(requestInfo, createManagedDeviceMobileAppConfigurationUserSummaryFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property userStatusSummary for deviceAppManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: UserStatusSummaryRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Read properties and relationships of the managedDeviceMobileAppConfigurationUserSummary object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: UserStatusSummaryRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the properties of a managedDeviceMobileAppConfigurationUserSummary object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: ManagedDeviceMobileAppConfigurationUserSummary, requestConfiguration?: UserStatusSummaryRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeManagedDeviceMobileAppConfigurationUserSummary);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a userStatusSummaryRequestBuilder
     */
    public withUrl(rawUrl: string) : UserStatusSummaryRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new UserStatusSummaryRequestBuilder(rawUrl, this.requestAdapter);
    };
}
