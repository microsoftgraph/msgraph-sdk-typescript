import {createManagedDeviceMobileAppConfigurationUserSummaryFromDiscriminatorValue} from '../../../../models/createManagedDeviceMobileAppConfigurationUserSummaryFromDiscriminatorValue';
import {deserializeIntoManagedDeviceMobileAppConfigurationUserSummary} from '../../../../models/deserializeIntoManagedDeviceMobileAppConfigurationUserSummary';
import {ManagedDeviceMobileAppConfigurationUserSummary} from '../../../../models/managedDeviceMobileAppConfigurationUserSummary';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../models/oDataErrors/serializeODataError';
import {serializeManagedDeviceMobileAppConfigurationUserSummary} from '../../../../models/serializeManagedDeviceMobileAppConfigurationUserSummary';
import {UserStatusSummaryRequestBuilderDeleteRequestConfiguration} from './userStatusSummaryRequestBuilderDeleteRequestConfiguration';
import {UserStatusSummaryRequestBuilderGetRequestConfiguration} from './userStatusSummaryRequestBuilderGetRequestConfiguration';
import {UserStatusSummaryRequestBuilderPatchRequestConfiguration} from './userStatusSummaryRequestBuilderPatchRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

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
     * App configuration user status summary.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ManagedDeviceMobileAppConfigurationUserSummary
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
     * Update the navigation property userStatusSummary in deviceAppManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ManagedDeviceMobileAppConfigurationUserSummary
     */
    public patch(body: ManagedDeviceMobileAppConfigurationUserSummary | undefined, requestConfiguration?: UserStatusSummaryRequestBuilderPatchRequestConfiguration | undefined) : Promise<ManagedDeviceMobileAppConfigurationUserSummary | undefined> {
        if(!body) throw new Error("body cannot be undefined");
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
     * App configuration user status summary.
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
     * Update the navigation property userStatusSummary in deviceAppManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: ManagedDeviceMobileAppConfigurationUserSummary | undefined, requestConfiguration?: UserStatusSummaryRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeManagedDeviceMobileAppConfigurationUserSummary);
        return requestInfo;
    };
}
