import {createEntitlementManagementSettingsFromDiscriminatorValue} from '../../../models/createEntitlementManagementSettingsFromDiscriminatorValue';
import {deserializeIntoEntitlementManagementSettings} from '../../../models/deserializeIntoEntitlementManagementSettings';
import type {EntitlementManagementSettings} from '../../../models/entitlementManagementSettings';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../models/oDataErrors/serializeODataError';
import {serializeEntitlementManagementSettings} from '../../../models/serializeEntitlementManagementSettings';
import {SettingsRequestBuilderDeleteRequestConfiguration} from './settingsRequestBuilderDeleteRequestConfiguration';
import {SettingsRequestBuilderGetRequestConfiguration} from './settingsRequestBuilderGetRequestConfiguration';
import {SettingsRequestBuilderPatchRequestConfiguration} from './settingsRequestBuilderPatchRequestConfiguration';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the settings property of the microsoft.graph.entitlementManagement entity.
 */
export class SettingsRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new SettingsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/identityGovernance/entitlementManagement/settings{?%24select,%24expand}");
    };
    /**
     * Delete navigation property settings for identityGovernance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: SettingsRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Retrieve the properties of an entitlementManagementSettings object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of EntitlementManagementSettings
     * @see {@link https://learn.microsoft.com/graph/api/entitlementmanagementsettings-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: SettingsRequestBuilderGetRequestConfiguration | undefined) : Promise<EntitlementManagementSettings | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<EntitlementManagementSettings>(requestInfo, createEntitlementManagementSettingsFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update an existing entitlementManagementSettings object to change one or more of its properties.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of EntitlementManagementSettings
     * @see {@link https://learn.microsoft.com/graph/api/entitlementmanagementsettings-update?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: EntitlementManagementSettings, requestConfiguration?: SettingsRequestBuilderPatchRequestConfiguration | undefined) : Promise<EntitlementManagementSettings | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<EntitlementManagementSettings>(requestInfo, createEntitlementManagementSettingsFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property settings for identityGovernance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: SettingsRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Retrieve the properties of an entitlementManagementSettings object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: SettingsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update an existing entitlementManagementSettings object to change one or more of its properties.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: EntitlementManagementSettings, requestConfiguration?: SettingsRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeEntitlementManagementSettings);
        return requestInfo;
    };
}
