import {AndroidManagedAppProtectionsRequestBuilder} from './androidManagedAppProtections/androidManagedAppProtectionsRequestBuilder';
import {AndroidManagedAppProtectionRequestBuilder} from './androidManagedAppProtections/item/androidManagedAppProtectionRequestBuilder';
import {DefaultManagedAppProtectionsRequestBuilder} from './defaultManagedAppProtections/defaultManagedAppProtectionsRequestBuilder';
import {DefaultManagedAppProtectionRequestBuilder} from './defaultManagedAppProtections/item/defaultManagedAppProtectionRequestBuilder';
import {DeviceAppManagement} from './deviceAppManagement';
import {IosManagedAppProtectionsRequestBuilder} from './iosManagedAppProtections/iosManagedAppProtectionsRequestBuilder';
import {IosManagedAppProtectionRequestBuilder} from './iosManagedAppProtections/item/iosManagedAppProtectionRequestBuilder';
import {ManagedAppPolicyRequestBuilder} from './managedAppPolicies/item/managedAppPolicyRequestBuilder';
import {ManagedAppPoliciesRequestBuilder} from './managedAppPolicies/managedAppPoliciesRequestBuilder';
import {ManagedAppRegistrationRequestBuilder} from './managedAppRegistrations/item/managedAppRegistrationRequestBuilder';
import {ManagedAppRegistrationsRequestBuilder} from './managedAppRegistrations/managedAppRegistrationsRequestBuilder';
import {ManagedAppStatusRequestBuilder} from './managedAppStatuses/item/managedAppStatusRequestBuilder';
import {ManagedAppStatusesRequestBuilder} from './managedAppStatuses/managedAppStatusesRequestBuilder';
import {ManagedEBookRequestBuilder} from './managedEBooks/item/managedEBookRequestBuilder';
import {ManagedEBooksRequestBuilder} from './managedEBooks/managedEBooksRequestBuilder';
import {MdmWindowsInformationProtectionPolicyRequestBuilder} from './mdmWindowsInformationProtectionPolicies/item/mdmWindowsInformationProtectionPolicyRequestBuilder';
import {MdmWindowsInformationProtectionPoliciesRequestBuilder} from './mdmWindowsInformationProtectionPolicies/mdmWindowsInformationProtectionPoliciesRequestBuilder';
import {MobileAppCategoryRequestBuilder} from './mobileAppCategories/item/mobileAppCategoryRequestBuilder';
import {MobileAppCategoriesRequestBuilder} from './mobileAppCategories/mobileAppCategoriesRequestBuilder';
import {ManagedDeviceMobileAppConfigurationRequestBuilder} from './mobileAppConfigurations/item/managedDeviceMobileAppConfigurationRequestBuilder';
import {MobileAppConfigurationsRequestBuilder} from './mobileAppConfigurations/mobileAppConfigurationsRequestBuilder';
import {MobileAppRequestBuilder} from './mobileApps/item/mobileAppRequestBuilder';
import {MobileAppsRequestBuilder} from './mobileApps/mobileAppsRequestBuilder';
import {SyncMicrosoftStoreForBusinessAppsRequestBuilder} from './syncMicrosoftStoreForBusinessApps/syncMicrosoftStoreForBusinessAppsRequestBuilder';
import {TargetedManagedAppConfigurationRequestBuilder} from './targetedManagedAppConfigurations/item/targetedManagedAppConfigurationRequestBuilder';
import {TargetedManagedAppConfigurationsRequestBuilder} from './targetedManagedAppConfigurations/targetedManagedAppConfigurationsRequestBuilder';
import {VppTokenRequestBuilder} from './vppTokens/item/vppTokenRequestBuilder';
import {VppTokensRequestBuilder} from './vppTokens/vppTokensRequestBuilder';
import {WindowsInformationProtectionPolicyRequestBuilder} from './windowsInformationProtectionPolicies/item/windowsInformationProtectionPolicyRequestBuilder';
import {WindowsInformationProtectionPoliciesRequestBuilder} from './windowsInformationProtectionPolicies/windowsInformationProtectionPoliciesRequestBuilder';
import {HttpCore, HttpMethod, RequestInformation, ResponseHandler, MiddlewareOption} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /deviceAppManagement  */
export class DeviceAppManagementRequestBuilder {
    public get androidManagedAppProtections(): AndroidManagedAppProtectionsRequestBuilder {
        return new AndroidManagedAppProtectionsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /** Current path for the request  */
    private readonly currentPath: string;
    public get defaultManagedAppProtections(): DefaultManagedAppProtectionsRequestBuilder {
        return new DefaultManagedAppProtectionsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /** The http core service to use to execute the requests.  */
    private readonly httpCore: HttpCore;
    public get iosManagedAppProtections(): IosManagedAppProtectionsRequestBuilder {
        return new IosManagedAppProtectionsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /** Whether the current path is a raw URL  */
    private readonly isRawUrl: boolean;
    public get managedAppPolicies(): ManagedAppPoliciesRequestBuilder {
        return new ManagedAppPoliciesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get managedAppRegistrations(): ManagedAppRegistrationsRequestBuilder {
        return new ManagedAppRegistrationsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get managedAppStatuses(): ManagedAppStatusesRequestBuilder {
        return new ManagedAppStatusesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get managedEBooks(): ManagedEBooksRequestBuilder {
        return new ManagedEBooksRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get mdmWindowsInformationProtectionPolicies(): MdmWindowsInformationProtectionPoliciesRequestBuilder {
        return new MdmWindowsInformationProtectionPoliciesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get mobileAppCategories(): MobileAppCategoriesRequestBuilder {
        return new MobileAppCategoriesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get mobileAppConfigurations(): MobileAppConfigurationsRequestBuilder {
        return new MobileAppConfigurationsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get mobileApps(): MobileAppsRequestBuilder {
        return new MobileAppsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /** Path segment to use to build the URL for the current request builder  */
    private readonly pathSegment: string;
    public get syncMicrosoftStoreForBusinessApps(): SyncMicrosoftStoreForBusinessAppsRequestBuilder {
        return new SyncMicrosoftStoreForBusinessAppsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get targetedManagedAppConfigurations(): TargetedManagedAppConfigurationsRequestBuilder {
        return new TargetedManagedAppConfigurationsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get vppTokens(): VppTokensRequestBuilder {
        return new VppTokensRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get windowsInformationProtectionPolicies(): WindowsInformationProtectionPoliciesRequestBuilder {
        return new WindowsInformationProtectionPoliciesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /**
     * Gets an item from the graphtypescriptv4.utilities.deviceAppManagement.androidManagedAppProtections collection
     * @param id Unique identifier of the item
     * @returns a androidManagedAppProtectionRequestBuilder
     */
    public androidManagedAppProtectionsById(id: String) : AndroidManagedAppProtectionRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new AndroidManagedAppProtectionRequestBuilder(this.currentPath + this.pathSegment + "/androidManagedAppProtections/" + id, this.httpCore, false);
    };
    /**
     * Instantiates a new DeviceAppManagementRequestBuilder and sets the default values.
     * @param currentPath Current path for the request
     * @param httpCore The http core service to use to execute the requests.
     * @param isRawUrl Whether the current path is a raw URL
     */
    public constructor(currentPath: string, httpCore: HttpCore, isRawUrl: boolean = true) {
        if(!currentPath) throw new Error("currentPath cannot be undefined");
        if(!httpCore) throw new Error("httpCore cannot be undefined");
        this.pathSegment = "/deviceAppManagement";
        this.httpCore = httpCore;
        this.currentPath = currentPath;
        this.isRawUrl = isRawUrl;
    };
    /**
     * Get deviceAppManagement
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @returns a RequestInformation
     */
    public createGetRequestInformation(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.setUri(this.currentPath, this.pathSegment, this.isRawUrl);
        requestInfo.httpMethod = HttpMethod.GET;
        h && requestInfo.setHeadersFromRawObject(h);
        q && requestInfo.setQueryStringParametersFromRawObject(q);
        o && requestInfo.addMiddlewareOptions(...o);
        return requestInfo;
    };
    /**
     * Update deviceAppManagement
     * @param body 
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: DeviceAppManagement | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.setUri(this.currentPath, this.pathSegment, this.isRawUrl);
        requestInfo.httpMethod = HttpMethod.PATCH;
        h && requestInfo.setHeadersFromRawObject(h);
        requestInfo.setContentFromParsable(this.httpCore, "application/json", body);
        o && requestInfo.addMiddlewareOptions(...o);
        return requestInfo;
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.deviceAppManagement.defaultManagedAppProtections collection
     * @param id Unique identifier of the item
     * @returns a defaultManagedAppProtectionRequestBuilder
     */
    public defaultManagedAppProtectionsById(id: String) : DefaultManagedAppProtectionRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new DefaultManagedAppProtectionRequestBuilder(this.currentPath + this.pathSegment + "/defaultManagedAppProtections/" + id, this.httpCore, false);
    };
    /**
     * Get deviceAppManagement
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of DeviceAppManagement
     */
    public get(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<DeviceAppManagement | undefined> {
        const requestInfo = this.createGetRequestInformation(
            q, h, o
        );
        return this.httpCore?.sendAsync<DeviceAppManagement>(requestInfo, DeviceAppManagement, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.deviceAppManagement.iosManagedAppProtections collection
     * @param id Unique identifier of the item
     * @returns a iosManagedAppProtectionRequestBuilder
     */
    public iosManagedAppProtectionsById(id: String) : IosManagedAppProtectionRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new IosManagedAppProtectionRequestBuilder(this.currentPath + this.pathSegment + "/iosManagedAppProtections/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.deviceAppManagement.managedAppPolicies collection
     * @param id Unique identifier of the item
     * @returns a managedAppPolicyRequestBuilder
     */
    public managedAppPoliciesById(id: String) : ManagedAppPolicyRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new ManagedAppPolicyRequestBuilder(this.currentPath + this.pathSegment + "/managedAppPolicies/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.deviceAppManagement.managedAppRegistrations collection
     * @param id Unique identifier of the item
     * @returns a managedAppRegistrationRequestBuilder
     */
    public managedAppRegistrationsById(id: String) : ManagedAppRegistrationRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new ManagedAppRegistrationRequestBuilder(this.currentPath + this.pathSegment + "/managedAppRegistrations/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.deviceAppManagement.managedAppStatuses collection
     * @param id Unique identifier of the item
     * @returns a managedAppStatusRequestBuilder
     */
    public managedAppStatusesById(id: String) : ManagedAppStatusRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new ManagedAppStatusRequestBuilder(this.currentPath + this.pathSegment + "/managedAppStatuses/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.deviceAppManagement.managedEBooks collection
     * @param id Unique identifier of the item
     * @returns a managedEBookRequestBuilder
     */
    public managedEBooksById(id: String) : ManagedEBookRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new ManagedEBookRequestBuilder(this.currentPath + this.pathSegment + "/managedEBooks/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.deviceAppManagement.mdmWindowsInformationProtectionPolicies collection
     * @param id Unique identifier of the item
     * @returns a mdmWindowsInformationProtectionPolicyRequestBuilder
     */
    public mdmWindowsInformationProtectionPoliciesById(id: String) : MdmWindowsInformationProtectionPolicyRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new MdmWindowsInformationProtectionPolicyRequestBuilder(this.currentPath + this.pathSegment + "/mdmWindowsInformationProtectionPolicies/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.deviceAppManagement.mobileAppCategories collection
     * @param id Unique identifier of the item
     * @returns a mobileAppCategoryRequestBuilder
     */
    public mobileAppCategoriesById(id: String) : MobileAppCategoryRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new MobileAppCategoryRequestBuilder(this.currentPath + this.pathSegment + "/mobileAppCategories/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.deviceAppManagement.mobileAppConfigurations collection
     * @param id Unique identifier of the item
     * @returns a managedDeviceMobileAppConfigurationRequestBuilder
     */
    public mobileAppConfigurationsById(id: String) : ManagedDeviceMobileAppConfigurationRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new ManagedDeviceMobileAppConfigurationRequestBuilder(this.currentPath + this.pathSegment + "/mobileAppConfigurations/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.deviceAppManagement.mobileApps collection
     * @param id Unique identifier of the item
     * @returns a mobileAppRequestBuilder
     */
    public mobileAppsById(id: String) : MobileAppRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new MobileAppRequestBuilder(this.currentPath + this.pathSegment + "/mobileApps/" + id, this.httpCore, false);
    };
    /**
     * Update deviceAppManagement
     * @param body 
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: DeviceAppManagement | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, h, o
        );
        return this.httpCore?.sendNoResponseContentAsync(requestInfo, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.deviceAppManagement.targetedManagedAppConfigurations collection
     * @param id Unique identifier of the item
     * @returns a targetedManagedAppConfigurationRequestBuilder
     */
    public targetedManagedAppConfigurationsById(id: String) : TargetedManagedAppConfigurationRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new TargetedManagedAppConfigurationRequestBuilder(this.currentPath + this.pathSegment + "/targetedManagedAppConfigurations/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.deviceAppManagement.vppTokens collection
     * @param id Unique identifier of the item
     * @returns a vppTokenRequestBuilder
     */
    public vppTokensById(id: String) : VppTokenRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new VppTokenRequestBuilder(this.currentPath + this.pathSegment + "/vppTokens/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.deviceAppManagement.windowsInformationProtectionPolicies collection
     * @param id Unique identifier of the item
     * @returns a windowsInformationProtectionPolicyRequestBuilder
     */
    public windowsInformationProtectionPoliciesById(id: String) : WindowsInformationProtectionPolicyRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new WindowsInformationProtectionPolicyRequestBuilder(this.currentPath + this.pathSegment + "/windowsInformationProtectionPolicies/" + id, this.httpCore, false);
    };
}
