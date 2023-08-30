import {createDeviceAppManagementFromDiscriminatorValue} from '../models/createDeviceAppManagementFromDiscriminatorValue';
import {deserializeIntoDeviceAppManagement} from '../models/deserializeIntoDeviceAppManagement';
import type {DeviceAppManagement} from '../models/deviceAppManagement';
import {ODataError} from '../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../models/oDataErrors/serializeODataError';
import {serializeDeviceAppManagement} from '../models/serializeDeviceAppManagement';
import {AndroidManagedAppProtectionsRequestBuilder} from './androidManagedAppProtections/androidManagedAppProtectionsRequestBuilder';
import {DefaultManagedAppProtectionsRequestBuilder} from './defaultManagedAppProtections/defaultManagedAppProtectionsRequestBuilder';
import {DeviceAppManagementRequestBuilderGetRequestConfiguration} from './deviceAppManagementRequestBuilderGetRequestConfiguration';
import {DeviceAppManagementRequestBuilderPatchRequestConfiguration} from './deviceAppManagementRequestBuilderPatchRequestConfiguration';
import {IosManagedAppProtectionsRequestBuilder} from './iosManagedAppProtections/iosManagedAppProtectionsRequestBuilder';
import {ManagedAppPoliciesRequestBuilder} from './managedAppPolicies/managedAppPoliciesRequestBuilder';
import {ManagedAppRegistrationsRequestBuilder} from './managedAppRegistrations/managedAppRegistrationsRequestBuilder';
import {ManagedAppStatusesRequestBuilder} from './managedAppStatuses/managedAppStatusesRequestBuilder';
import {ManagedEBooksRequestBuilder} from './managedEBooks/managedEBooksRequestBuilder';
import {MdmWindowsInformationProtectionPoliciesRequestBuilder} from './mdmWindowsInformationProtectionPolicies/mdmWindowsInformationProtectionPoliciesRequestBuilder';
import {MobileAppCategoriesRequestBuilder} from './mobileAppCategories/mobileAppCategoriesRequestBuilder';
import {MobileAppConfigurationsRequestBuilder} from './mobileAppConfigurations/mobileAppConfigurationsRequestBuilder';
import {MobileAppsRequestBuilder} from './mobileApps/mobileAppsRequestBuilder';
import {SyncMicrosoftStoreForBusinessAppsRequestBuilder} from './syncMicrosoftStoreForBusinessApps/syncMicrosoftStoreForBusinessAppsRequestBuilder';
import {TargetedManagedAppConfigurationsRequestBuilder} from './targetedManagedAppConfigurations/targetedManagedAppConfigurationsRequestBuilder';
import {VppTokensRequestBuilder} from './vppTokens/vppTokensRequestBuilder';
import {WindowsInformationProtectionPoliciesRequestBuilder} from './windowsInformationProtectionPolicies/windowsInformationProtectionPoliciesRequestBuilder';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the deviceAppManagement singleton.
 */
export class DeviceAppManagementRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the androidManagedAppProtections property of the microsoft.graph.deviceAppManagement entity.
     */
    public get androidManagedAppProtections(): AndroidManagedAppProtectionsRequestBuilder {
        return new AndroidManagedAppProtectionsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the defaultManagedAppProtections property of the microsoft.graph.deviceAppManagement entity.
     */
    public get defaultManagedAppProtections(): DefaultManagedAppProtectionsRequestBuilder {
        return new DefaultManagedAppProtectionsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the iosManagedAppProtections property of the microsoft.graph.deviceAppManagement entity.
     */
    public get iosManagedAppProtections(): IosManagedAppProtectionsRequestBuilder {
        return new IosManagedAppProtectionsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the managedAppPolicies property of the microsoft.graph.deviceAppManagement entity.
     */
    public get managedAppPolicies(): ManagedAppPoliciesRequestBuilder {
        return new ManagedAppPoliciesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the managedAppRegistrations property of the microsoft.graph.deviceAppManagement entity.
     */
    public get managedAppRegistrations(): ManagedAppRegistrationsRequestBuilder {
        return new ManagedAppRegistrationsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the managedAppStatuses property of the microsoft.graph.deviceAppManagement entity.
     */
    public get managedAppStatuses(): ManagedAppStatusesRequestBuilder {
        return new ManagedAppStatusesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the managedEBooks property of the microsoft.graph.deviceAppManagement entity.
     */
    public get managedEBooks(): ManagedEBooksRequestBuilder {
        return new ManagedEBooksRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the mdmWindowsInformationProtectionPolicies property of the microsoft.graph.deviceAppManagement entity.
     */
    public get mdmWindowsInformationProtectionPolicies(): MdmWindowsInformationProtectionPoliciesRequestBuilder {
        return new MdmWindowsInformationProtectionPoliciesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the mobileAppCategories property of the microsoft.graph.deviceAppManagement entity.
     */
    public get mobileAppCategories(): MobileAppCategoriesRequestBuilder {
        return new MobileAppCategoriesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the mobileAppConfigurations property of the microsoft.graph.deviceAppManagement entity.
     */
    public get mobileAppConfigurations(): MobileAppConfigurationsRequestBuilder {
        return new MobileAppConfigurationsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the mobileApps property of the microsoft.graph.deviceAppManagement entity.
     */
    public get mobileApps(): MobileAppsRequestBuilder {
        return new MobileAppsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the syncMicrosoftStoreForBusinessApps method.
     */
    public get syncMicrosoftStoreForBusinessApps(): SyncMicrosoftStoreForBusinessAppsRequestBuilder {
        return new SyncMicrosoftStoreForBusinessAppsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the targetedManagedAppConfigurations property of the microsoft.graph.deviceAppManagement entity.
     */
    public get targetedManagedAppConfigurations(): TargetedManagedAppConfigurationsRequestBuilder {
        return new TargetedManagedAppConfigurationsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the vppTokens property of the microsoft.graph.deviceAppManagement entity.
     */
    public get vppTokens(): VppTokensRequestBuilder {
        return new VppTokensRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the windowsInformationProtectionPolicies property of the microsoft.graph.deviceAppManagement entity.
     */
    public get windowsInformationProtectionPolicies(): WindowsInformationProtectionPoliciesRequestBuilder {
        return new WindowsInformationProtectionPoliciesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new DeviceAppManagementRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceAppManagement{?%24select,%24expand}");
    };
    /**
     * Read properties and relationships of the deviceAppManagement object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DeviceAppManagement
     * @see {@link https://learn.microsoft.com/graph/api/intune-partnerintegration-deviceappmanagement-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: DeviceAppManagementRequestBuilderGetRequestConfiguration | undefined) : Promise<DeviceAppManagement | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DeviceAppManagement>(requestInfo, createDeviceAppManagementFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the properties of a deviceAppManagement object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DeviceAppManagement
     * @see {@link https://learn.microsoft.com/graph/api/intune-books-deviceappmanagement-update?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: DeviceAppManagement, requestConfiguration?: DeviceAppManagementRequestBuilderPatchRequestConfiguration | undefined) : Promise<DeviceAppManagement | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DeviceAppManagement>(requestInfo, createDeviceAppManagementFromDiscriminatorValue, errorMapping);
    };
    /**
     * Read properties and relationships of the deviceAppManagement object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: DeviceAppManagementRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the properties of a deviceAppManagement object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: DeviceAppManagement, requestConfiguration?: DeviceAppManagementRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeDeviceAppManagement);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a deviceAppManagementRequestBuilder
     */
    public withUrl(rawUrl: string) : DeviceAppManagementRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new DeviceAppManagementRequestBuilder(rawUrl, this.requestAdapter);
    };
}
