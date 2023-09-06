import { createManagedDeviceMobileAppConfigurationAssignmentFromDiscriminatorValue } from '../../../../../models/createManagedDeviceMobileAppConfigurationAssignmentFromDiscriminatorValue';
import { deserializeIntoManagedDeviceMobileAppConfigurationAssignment } from '../../../../../models/deserializeIntoManagedDeviceMobileAppConfigurationAssignment';
import { type ManagedDeviceMobileAppConfigurationAssignment } from '../../../../../models/managedDeviceMobileAppConfigurationAssignment';
import { type ODataError } from '../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../../../models/oDataErrors/serializeODataError';
import { serializeManagedDeviceMobileAppConfigurationAssignment } from '../../../../../models/serializeManagedDeviceMobileAppConfigurationAssignment';
import { type ManagedDeviceMobileAppConfigurationAssignmentItemRequestBuilderDeleteRequestConfiguration } from './managedDeviceMobileAppConfigurationAssignmentItemRequestBuilderDeleteRequestConfiguration';
import { type ManagedDeviceMobileAppConfigurationAssignmentItemRequestBuilderGetRequestConfiguration } from './managedDeviceMobileAppConfigurationAssignmentItemRequestBuilderGetRequestConfiguration';
import { type ManagedDeviceMobileAppConfigurationAssignmentItemRequestBuilderPatchRequestConfiguration } from './managedDeviceMobileAppConfigurationAssignmentItemRequestBuilderPatchRequestConfiguration';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the assignments property of the microsoft.graph.managedDeviceMobileAppConfiguration entity.
 */
export class ManagedDeviceMobileAppConfigurationAssignmentItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new ManagedDeviceMobileAppConfigurationAssignmentItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration%2Did}/assignments/{managedDeviceMobileAppConfigurationAssignment%2Did}{?%24select,%24expand}");
    };
    /**
     * Deletes a managedDeviceMobileAppConfigurationAssignment.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/intune-apps-manageddevicemobileappconfigurationassignment-delete?view=graph-rest-1.0|Find more info here}
     */
    public delete(requestConfiguration?: ManagedDeviceMobileAppConfigurationAssignmentItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Read properties and relationships of the managedDeviceMobileAppConfigurationAssignment object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ManagedDeviceMobileAppConfigurationAssignment
     * @see {@link https://learn.microsoft.com/graph/api/intune-apps-manageddevicemobileappconfigurationassignment-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: ManagedDeviceMobileAppConfigurationAssignmentItemRequestBuilderGetRequestConfiguration | undefined) : Promise<ManagedDeviceMobileAppConfigurationAssignment | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ManagedDeviceMobileAppConfigurationAssignment>(requestInfo, createManagedDeviceMobileAppConfigurationAssignmentFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the properties of a managedDeviceMobileAppConfigurationAssignment object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ManagedDeviceMobileAppConfigurationAssignment
     * @see {@link https://learn.microsoft.com/graph/api/intune-apps-manageddevicemobileappconfigurationassignment-update?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: ManagedDeviceMobileAppConfigurationAssignment, requestConfiguration?: ManagedDeviceMobileAppConfigurationAssignmentItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<ManagedDeviceMobileAppConfigurationAssignment | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ManagedDeviceMobileAppConfigurationAssignment>(requestInfo, createManagedDeviceMobileAppConfigurationAssignmentFromDiscriminatorValue, errorMapping);
    };
    /**
     * Deletes a managedDeviceMobileAppConfigurationAssignment.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: ManagedDeviceMobileAppConfigurationAssignmentItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Read properties and relationships of the managedDeviceMobileAppConfigurationAssignment object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ManagedDeviceMobileAppConfigurationAssignmentItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the properties of a managedDeviceMobileAppConfigurationAssignment object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: ManagedDeviceMobileAppConfigurationAssignment, requestConfiguration?: ManagedDeviceMobileAppConfigurationAssignmentItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeManagedDeviceMobileAppConfigurationAssignment);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a ManagedDeviceMobileAppConfigurationAssignmentItemRequestBuilder
     */
    public withUrl(rawUrl: string) : ManagedDeviceMobileAppConfigurationAssignmentItemRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new ManagedDeviceMobileAppConfigurationAssignmentItemRequestBuilder(rawUrl, this.requestAdapter);
    };
}
