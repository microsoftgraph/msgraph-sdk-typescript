import {DeviceAppManagement} from '../models/';
import {createDeviceAppManagementFromDiscriminatorValue} from '../models/createDeviceAppManagementFromDiscriminatorValue';
import {ODataError} from '../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {AndroidManagedAppProtectionsRequestBuilder} from './androidManagedAppProtections/androidManagedAppProtectionsRequestBuilder';
import {AndroidManagedAppProtectionItemRequestBuilder} from './androidManagedAppProtections/item/androidManagedAppProtectionItemRequestBuilder';
import {DefaultManagedAppProtectionsRequestBuilder} from './defaultManagedAppProtections/defaultManagedAppProtectionsRequestBuilder';
import {DefaultManagedAppProtectionItemRequestBuilder} from './defaultManagedAppProtections/item/defaultManagedAppProtectionItemRequestBuilder';
import {DeviceAppManagementRequestBuilderGetRequestConfiguration} from './deviceAppManagementRequestBuilderGetRequestConfiguration';
import {DeviceAppManagementRequestBuilderPatchRequestConfiguration} from './deviceAppManagementRequestBuilderPatchRequestConfiguration';
import {IosManagedAppProtectionsRequestBuilder} from './iosManagedAppProtections/iosManagedAppProtectionsRequestBuilder';
import {IosManagedAppProtectionItemRequestBuilder} from './iosManagedAppProtections/item/iosManagedAppProtectionItemRequestBuilder';
import {ManagedAppPolicyItemRequestBuilder} from './managedAppPolicies/item/managedAppPolicyItemRequestBuilder';
import {ManagedAppPoliciesRequestBuilder} from './managedAppPolicies/managedAppPoliciesRequestBuilder';
import {ManagedAppRegistrationItemRequestBuilder} from './managedAppRegistrations/item/managedAppRegistrationItemRequestBuilder';
import {ManagedAppRegistrationsRequestBuilder} from './managedAppRegistrations/managedAppRegistrationsRequestBuilder';
import {ManagedAppStatusItemRequestBuilder} from './managedAppStatuses/item/managedAppStatusItemRequestBuilder';
import {ManagedAppStatusesRequestBuilder} from './managedAppStatuses/managedAppStatusesRequestBuilder';
import {ManagedEBookItemRequestBuilder} from './managedEBooks/item/managedEBookItemRequestBuilder';
import {ManagedEBooksRequestBuilder} from './managedEBooks/managedEBooksRequestBuilder';
import {MdmWindowsInformationProtectionPolicyItemRequestBuilder} from './mdmWindowsInformationProtectionPolicies/item/mdmWindowsInformationProtectionPolicyItemRequestBuilder';
import {MdmWindowsInformationProtectionPoliciesRequestBuilder} from './mdmWindowsInformationProtectionPolicies/mdmWindowsInformationProtectionPoliciesRequestBuilder';
import {MobileAppCategoryItemRequestBuilder} from './mobileAppCategories/item/mobileAppCategoryItemRequestBuilder';
import {MobileAppCategoriesRequestBuilder} from './mobileAppCategories/mobileAppCategoriesRequestBuilder';
import {ManagedDeviceMobileAppConfigurationItemRequestBuilder} from './mobileAppConfigurations/item/managedDeviceMobileAppConfigurationItemRequestBuilder';
import {MobileAppConfigurationsRequestBuilder} from './mobileAppConfigurations/mobileAppConfigurationsRequestBuilder';
import {MobileAppItemRequestBuilder} from './mobileApps/item/mobileAppItemRequestBuilder';
import {MobileAppsRequestBuilder} from './mobileApps/mobileAppsRequestBuilder';
import {SyncMicrosoftStoreForBusinessAppsRequestBuilder} from './syncMicrosoftStoreForBusinessApps/syncMicrosoftStoreForBusinessAppsRequestBuilder';
import {TargetedManagedAppConfigurationItemRequestBuilder} from './targetedManagedAppConfigurations/item/targetedManagedAppConfigurationItemRequestBuilder';
import {TargetedManagedAppConfigurationsRequestBuilder} from './targetedManagedAppConfigurations/targetedManagedAppConfigurationsRequestBuilder';
import {VppTokenItemRequestBuilder} from './vppTokens/item/vppTokenItemRequestBuilder';
import {VppTokensRequestBuilder} from './vppTokens/vppTokensRequestBuilder';
import {WindowsInformationProtectionPolicyItemRequestBuilder} from './windowsInformationProtectionPolicies/item/windowsInformationProtectionPolicyItemRequestBuilder';
import {WindowsInformationProtectionPoliciesRequestBuilder} from './windowsInformationProtectionPolicies/windowsInformationProtectionPoliciesRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the deviceAppManagement singleton. */
export class DeviceAppManagementRequestBuilder {
    /** Provides operations to manage the androidManagedAppProtections property of the microsoft.graph.deviceAppManagement entity. */
    public get androidManagedAppProtections(): AndroidManagedAppProtectionsRequestBuilder {
        return new AndroidManagedAppProtectionsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the defaultManagedAppProtections property of the microsoft.graph.deviceAppManagement entity. */
    public get defaultManagedAppProtections(): DefaultManagedAppProtectionsRequestBuilder {
        return new DefaultManagedAppProtectionsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the iosManagedAppProtections property of the microsoft.graph.deviceAppManagement entity. */
    public get iosManagedAppProtections(): IosManagedAppProtectionsRequestBuilder {
        return new IosManagedAppProtectionsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the managedAppPolicies property of the microsoft.graph.deviceAppManagement entity. */
    public get managedAppPolicies(): ManagedAppPoliciesRequestBuilder {
        return new ManagedAppPoliciesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the managedAppRegistrations property of the microsoft.graph.deviceAppManagement entity. */
    public get managedAppRegistrations(): ManagedAppRegistrationsRequestBuilder {
        return new ManagedAppRegistrationsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the managedAppStatuses property of the microsoft.graph.deviceAppManagement entity. */
    public get managedAppStatuses(): ManagedAppStatusesRequestBuilder {
        return new ManagedAppStatusesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the managedEBooks property of the microsoft.graph.deviceAppManagement entity. */
    public get managedEBooks(): ManagedEBooksRequestBuilder {
        return new ManagedEBooksRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the mdmWindowsInformationProtectionPolicies property of the microsoft.graph.deviceAppManagement entity. */
    public get mdmWindowsInformationProtectionPolicies(): MdmWindowsInformationProtectionPoliciesRequestBuilder {
        return new MdmWindowsInformationProtectionPoliciesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the mobileAppCategories property of the microsoft.graph.deviceAppManagement entity. */
    public get mobileAppCategories(): MobileAppCategoriesRequestBuilder {
        return new MobileAppCategoriesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the mobileAppConfigurations property of the microsoft.graph.deviceAppManagement entity. */
    public get mobileAppConfigurations(): MobileAppConfigurationsRequestBuilder {
        return new MobileAppConfigurationsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the mobileApps property of the microsoft.graph.deviceAppManagement entity. */
    public get mobileApps(): MobileAppsRequestBuilder {
        return new MobileAppsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private readonly pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private readonly requestAdapter: RequestAdapter;
    /** Provides operations to call the syncMicrosoftStoreForBusinessApps method. */
    public get syncMicrosoftStoreForBusinessApps(): SyncMicrosoftStoreForBusinessAppsRequestBuilder {
        return new SyncMicrosoftStoreForBusinessAppsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the targetedManagedAppConfigurations property of the microsoft.graph.deviceAppManagement entity. */
    public get targetedManagedAppConfigurations(): TargetedManagedAppConfigurationsRequestBuilder {
        return new TargetedManagedAppConfigurationsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder */
    private readonly urlTemplate: string;
    /** Provides operations to manage the vppTokens property of the microsoft.graph.deviceAppManagement entity. */
    public get vppTokens(): VppTokensRequestBuilder {
        return new VppTokensRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the windowsInformationProtectionPolicies property of the microsoft.graph.deviceAppManagement entity. */
    public get windowsInformationProtectionPolicies(): WindowsInformationProtectionPoliciesRequestBuilder {
        return new WindowsInformationProtectionPoliciesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the androidManagedAppProtections property of the microsoft.graph.deviceAppManagement entity.
     * @param id Unique identifier of the item
     * @returns a AndroidManagedAppProtectionItemRequestBuilder
     */
    public androidManagedAppProtectionsById(id: string) : AndroidManagedAppProtectionItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["androidManagedAppProtection%2Did"] = id
        return new AndroidManagedAppProtectionItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new DeviceAppManagementRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/deviceAppManagement{?%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Get deviceAppManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: DeviceAppManagementRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        requestInfo.headers["Accept"] = "application/json";
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.setQueryStringParametersFromRawObject(requestConfiguration.queryParameters);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
    /**
     * Update deviceAppManagement
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: DeviceAppManagement | undefined, requestConfiguration?: DeviceAppManagementRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.PATCH;
        requestInfo.headers["Accept"] = "application/json";
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        return requestInfo;
    };
    /**
     * Provides operations to manage the defaultManagedAppProtections property of the microsoft.graph.deviceAppManagement entity.
     * @param id Unique identifier of the item
     * @returns a DefaultManagedAppProtectionItemRequestBuilder
     */
    public defaultManagedAppProtectionsById(id: string) : DefaultManagedAppProtectionItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["defaultManagedAppProtection%2Did"] = id
        return new DefaultManagedAppProtectionItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Get deviceAppManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of DeviceAppManagement
     */
    public get(requestConfiguration?: DeviceAppManagementRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<DeviceAppManagement | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<DeviceAppManagement>(requestInfo, createDeviceAppManagementFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Provides operations to manage the iosManagedAppProtections property of the microsoft.graph.deviceAppManagement entity.
     * @param id Unique identifier of the item
     * @returns a IosManagedAppProtectionItemRequestBuilder
     */
    public iosManagedAppProtectionsById(id: string) : IosManagedAppProtectionItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["iosManagedAppProtection%2Did"] = id
        return new IosManagedAppProtectionItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the managedAppPolicies property of the microsoft.graph.deviceAppManagement entity.
     * @param id Unique identifier of the item
     * @returns a ManagedAppPolicyItemRequestBuilder
     */
    public managedAppPoliciesById(id: string) : ManagedAppPolicyItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["managedAppPolicy%2Did"] = id
        return new ManagedAppPolicyItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the managedAppRegistrations property of the microsoft.graph.deviceAppManagement entity.
     * @param id Unique identifier of the item
     * @returns a ManagedAppRegistrationItemRequestBuilder
     */
    public managedAppRegistrationsById(id: string) : ManagedAppRegistrationItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["managedAppRegistration%2Did"] = id
        return new ManagedAppRegistrationItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the managedAppStatuses property of the microsoft.graph.deviceAppManagement entity.
     * @param id Unique identifier of the item
     * @returns a ManagedAppStatusItemRequestBuilder
     */
    public managedAppStatusesById(id: string) : ManagedAppStatusItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["managedAppStatus%2Did"] = id
        return new ManagedAppStatusItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the managedEBooks property of the microsoft.graph.deviceAppManagement entity.
     * @param id Unique identifier of the item
     * @returns a ManagedEBookItemRequestBuilder
     */
    public managedEBooksById(id: string) : ManagedEBookItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["managedEBook%2Did"] = id
        return new ManagedEBookItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the mdmWindowsInformationProtectionPolicies property of the microsoft.graph.deviceAppManagement entity.
     * @param id Unique identifier of the item
     * @returns a MdmWindowsInformationProtectionPolicyItemRequestBuilder
     */
    public mdmWindowsInformationProtectionPoliciesById(id: string) : MdmWindowsInformationProtectionPolicyItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["mdmWindowsInformationProtectionPolicy%2Did"] = id
        return new MdmWindowsInformationProtectionPolicyItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the mobileAppCategories property of the microsoft.graph.deviceAppManagement entity.
     * @param id Unique identifier of the item
     * @returns a MobileAppCategoryItemRequestBuilder
     */
    public mobileAppCategoriesById(id: string) : MobileAppCategoryItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["mobileAppCategory%2Did"] = id
        return new MobileAppCategoryItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the mobileAppConfigurations property of the microsoft.graph.deviceAppManagement entity.
     * @param id Unique identifier of the item
     * @returns a ManagedDeviceMobileAppConfigurationItemRequestBuilder
     */
    public mobileAppConfigurationsById(id: string) : ManagedDeviceMobileAppConfigurationItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["managedDeviceMobileAppConfiguration%2Did"] = id
        return new ManagedDeviceMobileAppConfigurationItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the mobileApps property of the microsoft.graph.deviceAppManagement entity.
     * @param id Unique identifier of the item
     * @returns a MobileAppItemRequestBuilder
     */
    public mobileAppsById(id: string) : MobileAppItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["mobileApp%2Did"] = id
        return new MobileAppItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Update deviceAppManagement
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of DeviceAppManagement
     */
    public patch(body: DeviceAppManagement | undefined, requestConfiguration?: DeviceAppManagementRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<DeviceAppManagement | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<DeviceAppManagement>(requestInfo, createDeviceAppManagementFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Provides operations to manage the targetedManagedAppConfigurations property of the microsoft.graph.deviceAppManagement entity.
     * @param id Unique identifier of the item
     * @returns a TargetedManagedAppConfigurationItemRequestBuilder
     */
    public targetedManagedAppConfigurationsById(id: string) : TargetedManagedAppConfigurationItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["targetedManagedAppConfiguration%2Did"] = id
        return new TargetedManagedAppConfigurationItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the vppTokens property of the microsoft.graph.deviceAppManagement entity.
     * @param id Unique identifier of the item
     * @returns a VppTokenItemRequestBuilder
     */
    public vppTokensById(id: string) : VppTokenItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["vppToken%2Did"] = id
        return new VppTokenItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the windowsInformationProtectionPolicies property of the microsoft.graph.deviceAppManagement entity.
     * @param id Unique identifier of the item
     * @returns a WindowsInformationProtectionPolicyItemRequestBuilder
     */
    public windowsInformationProtectionPoliciesById(id: string) : WindowsInformationProtectionPolicyItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["windowsInformationProtectionPolicy%2Did"] = id
        return new WindowsInformationProtectionPolicyItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
}
