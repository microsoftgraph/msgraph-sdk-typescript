import {AndroidManagedAppProtection} from './androidManagedAppProtection';
import {createAndroidManagedAppProtectionFromDiscriminatorValue} from './createAndroidManagedAppProtectionFromDiscriminatorValue';
import {createDefaultManagedAppProtectionFromDiscriminatorValue} from './createDefaultManagedAppProtectionFromDiscriminatorValue';
import {createIosManagedAppProtectionFromDiscriminatorValue} from './createIosManagedAppProtectionFromDiscriminatorValue';
import {createManagedAppPolicyFromDiscriminatorValue} from './createManagedAppPolicyFromDiscriminatorValue';
import {createManagedAppRegistrationFromDiscriminatorValue} from './createManagedAppRegistrationFromDiscriminatorValue';
import {createManagedAppStatusFromDiscriminatorValue} from './createManagedAppStatusFromDiscriminatorValue';
import {createManagedDeviceMobileAppConfigurationFromDiscriminatorValue} from './createManagedDeviceMobileAppConfigurationFromDiscriminatorValue';
import {createManagedEBookFromDiscriminatorValue} from './createManagedEBookFromDiscriminatorValue';
import {createMdmWindowsInformationProtectionPolicyFromDiscriminatorValue} from './createMdmWindowsInformationProtectionPolicyFromDiscriminatorValue';
import {createMobileAppCategoryFromDiscriminatorValue} from './createMobileAppCategoryFromDiscriminatorValue';
import {createMobileAppFromDiscriminatorValue} from './createMobileAppFromDiscriminatorValue';
import {createTargetedManagedAppConfigurationFromDiscriminatorValue} from './createTargetedManagedAppConfigurationFromDiscriminatorValue';
import {createVppTokenFromDiscriminatorValue} from './createVppTokenFromDiscriminatorValue';
import {createWindowsInformationProtectionPolicyFromDiscriminatorValue} from './createWindowsInformationProtectionPolicyFromDiscriminatorValue';
import {DefaultManagedAppProtection} from './defaultManagedAppProtection';
import {DeviceAppManagement} from './deviceAppManagement';
import {AndroidManagedAppProtectionImpl, DefaultManagedAppProtectionImpl, EntityImpl, IosManagedAppProtectionImpl, ManagedAppPolicyImpl, ManagedAppRegistrationImpl, ManagedAppStatusImpl, ManagedDeviceMobileAppConfigurationImpl, ManagedEBookImpl, MdmWindowsInformationProtectionPolicyImpl, MobileAppCategoryImpl, MobileAppImpl, TargetedManagedAppConfigurationImpl, VppTokenImpl, WindowsInformationProtectionPolicyImpl} from './index';
import {IosManagedAppProtection} from './iosManagedAppProtection';
import {ManagedAppPolicy} from './managedAppPolicy';
import {ManagedAppRegistration} from './managedAppRegistration';
import {ManagedAppStatus} from './managedAppStatus';
import {ManagedDeviceMobileAppConfiguration} from './managedDeviceMobileAppConfiguration';
import {ManagedEBook} from './managedEBook';
import {MdmWindowsInformationProtectionPolicy} from './mdmWindowsInformationProtectionPolicy';
import {MobileApp} from './mobileApp';
import {MobileAppCategory} from './mobileAppCategory';
import {TargetedManagedAppConfiguration} from './targetedManagedAppConfiguration';
import {VppToken} from './vppToken';
import {WindowsInformationProtectionPolicy} from './windowsInformationProtectionPolicy';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Singleton entity that acts as a container for all device app management functionality. */
export class DeviceAppManagementImpl extends EntityImpl implements DeviceAppManagement, Parsable {
    /** Android managed app policies. */
    public androidManagedAppProtections?: AndroidManagedAppProtection[] | undefined;
    /** Default managed app policies. */
    public defaultManagedAppProtections?: DefaultManagedAppProtection[] | undefined;
    /** iOS managed app policies. */
    public iosManagedAppProtections?: IosManagedAppProtection[] | undefined;
    /** Whether the account is enabled for syncing applications from the Microsoft Store for Business. */
    public isEnabledForMicrosoftStoreForBusiness?: boolean | undefined;
    /** Managed app policies. */
    public managedAppPolicies?: ManagedAppPolicy[] | undefined;
    /** The managed app registrations. */
    public managedAppRegistrations?: ManagedAppRegistration[] | undefined;
    /** The managed app statuses. */
    public managedAppStatuses?: ManagedAppStatus[] | undefined;
    /** The Managed eBook. */
    public managedEBooks?: ManagedEBook[] | undefined;
    /** Windows information protection for apps running on devices which are MDM enrolled. */
    public mdmWindowsInformationProtectionPolicies?: MdmWindowsInformationProtectionPolicy[] | undefined;
    /** The locale information used to sync applications from the Microsoft Store for Business. Cultures that are specific to a country/region. The names of these cultures follow RFC 4646 (Windows Vista and later). The format is -<country/regioncode2>, where  is a lowercase two-letter code derived from ISO 639-1 and <country/regioncode2> is an uppercase two-letter code derived from ISO 3166. For example, en-US for English (United States) is a specific culture. */
    public microsoftStoreForBusinessLanguage?: string | undefined;
    /** The last time an application sync from the Microsoft Store for Business was completed. */
    public microsoftStoreForBusinessLastCompletedApplicationSyncTime?: Date | undefined;
    /** The last time the apps from the Microsoft Store for Business were synced successfully for the account. */
    public microsoftStoreForBusinessLastSuccessfulSyncDateTime?: Date | undefined;
    /** The mobile app categories. */
    public mobileAppCategories?: MobileAppCategory[] | undefined;
    /** The Managed Device Mobile Application Configurations. */
    public mobileAppConfigurations?: ManagedDeviceMobileAppConfiguration[] | undefined;
    /** The mobile apps. */
    public mobileApps?: MobileApp[] | undefined;
    /** Targeted managed app configurations. */
    public targetedManagedAppConfigurations?: TargetedManagedAppConfiguration[] | undefined;
    /** List of Vpp tokens for this organization. */
    public vppTokens?: VppToken[] | undefined;
    /** Windows information protection for apps running on devices which are not MDM enrolled. */
    public windowsInformationProtectionPolicies?: WindowsInformationProtectionPolicy[] | undefined;
    /**
     * Instantiates a new deviceAppManagement and sets the default values.
     * @param deviceAppManagementParameterValue 
     */
    public constructor(deviceAppManagementParameterValue?: DeviceAppManagement | undefined) {
        super();
        this.androidManagedAppProtections = deviceAppManagementParameterValue?.androidManagedAppProtections ;
        this.defaultManagedAppProtections = deviceAppManagementParameterValue?.defaultManagedAppProtections ;
        this.iosManagedAppProtections = deviceAppManagementParameterValue?.iosManagedAppProtections ;
        this.isEnabledForMicrosoftStoreForBusiness = deviceAppManagementParameterValue?.isEnabledForMicrosoftStoreForBusiness ;
        this.managedAppPolicies = deviceAppManagementParameterValue?.managedAppPolicies ;
        this.managedAppRegistrations = deviceAppManagementParameterValue?.managedAppRegistrations ;
        this.managedAppStatuses = deviceAppManagementParameterValue?.managedAppStatuses ;
        this.managedEBooks = deviceAppManagementParameterValue?.managedEBooks ;
        this.mdmWindowsInformationProtectionPolicies = deviceAppManagementParameterValue?.mdmWindowsInformationProtectionPolicies ;
        this.microsoftStoreForBusinessLanguage = deviceAppManagementParameterValue?.microsoftStoreForBusinessLanguage ;
        this.microsoftStoreForBusinessLastCompletedApplicationSyncTime = deviceAppManagementParameterValue?.microsoftStoreForBusinessLastCompletedApplicationSyncTime ;
        this.microsoftStoreForBusinessLastSuccessfulSyncDateTime = deviceAppManagementParameterValue?.microsoftStoreForBusinessLastSuccessfulSyncDateTime ;
        this.mobileAppCategories = deviceAppManagementParameterValue?.mobileAppCategories ;
        this.mobileAppConfigurations = deviceAppManagementParameterValue?.mobileAppConfigurations ;
        this.mobileApps = deviceAppManagementParameterValue?.mobileApps ;
        this.targetedManagedAppConfigurations = deviceAppManagementParameterValue?.targetedManagedAppConfigurations ;
        this.vppTokens = deviceAppManagementParameterValue?.vppTokens ;
        this.windowsInformationProtectionPolicies = deviceAppManagementParameterValue?.windowsInformationProtectionPolicies ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "androidManagedAppProtections": n => { this.androidManagedAppProtections = n.getCollectionOfObjectValues<AndroidManagedAppProtectionImpl>(createAndroidManagedAppProtectionFromDiscriminatorValue); },
            "defaultManagedAppProtections": n => { this.defaultManagedAppProtections = n.getCollectionOfObjectValues<DefaultManagedAppProtectionImpl>(createDefaultManagedAppProtectionFromDiscriminatorValue); },
            "iosManagedAppProtections": n => { this.iosManagedAppProtections = n.getCollectionOfObjectValues<IosManagedAppProtectionImpl>(createIosManagedAppProtectionFromDiscriminatorValue); },
            "isEnabledForMicrosoftStoreForBusiness": n => { this.isEnabledForMicrosoftStoreForBusiness = n.getBooleanValue(); },
            "managedAppPolicies": n => { this.managedAppPolicies = n.getCollectionOfObjectValues<ManagedAppPolicyImpl>(createManagedAppPolicyFromDiscriminatorValue); },
            "managedAppRegistrations": n => { this.managedAppRegistrations = n.getCollectionOfObjectValues<ManagedAppRegistrationImpl>(createManagedAppRegistrationFromDiscriminatorValue); },
            "managedAppStatuses": n => { this.managedAppStatuses = n.getCollectionOfObjectValues<ManagedAppStatusImpl>(createManagedAppStatusFromDiscriminatorValue); },
            "managedEBooks": n => { this.managedEBooks = n.getCollectionOfObjectValues<ManagedEBookImpl>(createManagedEBookFromDiscriminatorValue); },
            "mdmWindowsInformationProtectionPolicies": n => { this.mdmWindowsInformationProtectionPolicies = n.getCollectionOfObjectValues<MdmWindowsInformationProtectionPolicyImpl>(createMdmWindowsInformationProtectionPolicyFromDiscriminatorValue); },
            "microsoftStoreForBusinessLanguage": n => { this.microsoftStoreForBusinessLanguage = n.getStringValue(); },
            "microsoftStoreForBusinessLastCompletedApplicationSyncTime": n => { this.microsoftStoreForBusinessLastCompletedApplicationSyncTime = n.getDateValue(); },
            "microsoftStoreForBusinessLastSuccessfulSyncDateTime": n => { this.microsoftStoreForBusinessLastSuccessfulSyncDateTime = n.getDateValue(); },
            "mobileAppCategories": n => { this.mobileAppCategories = n.getCollectionOfObjectValues<MobileAppCategoryImpl>(createMobileAppCategoryFromDiscriminatorValue); },
            "mobileAppConfigurations": n => { this.mobileAppConfigurations = n.getCollectionOfObjectValues<ManagedDeviceMobileAppConfigurationImpl>(createManagedDeviceMobileAppConfigurationFromDiscriminatorValue); },
            "mobileApps": n => { this.mobileApps = n.getCollectionOfObjectValues<MobileAppImpl>(createMobileAppFromDiscriminatorValue); },
            "targetedManagedAppConfigurations": n => { this.targetedManagedAppConfigurations = n.getCollectionOfObjectValues<TargetedManagedAppConfigurationImpl>(createTargetedManagedAppConfigurationFromDiscriminatorValue); },
            "vppTokens": n => { this.vppTokens = n.getCollectionOfObjectValues<VppTokenImpl>(createVppTokenFromDiscriminatorValue); },
            "windowsInformationProtectionPolicies": n => { this.windowsInformationProtectionPolicies = n.getCollectionOfObjectValues<WindowsInformationProtectionPolicyImpl>(createWindowsInformationProtectionPolicyFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.androidManagedAppProtections && this.androidManagedAppProtections.length != 0){        const androidManagedAppProtectionsArrValue: AndroidManagedAppProtectionImpl[] = []; this.androidManagedAppProtections?.forEach(element => {androidManagedAppProtectionsArrValue.push(new AndroidManagedAppProtectionImpl(element));});
        writer.writeCollectionOfObjectValues<AndroidManagedAppProtectionImpl>("androidManagedAppProtections", androidManagedAppProtectionsArrValue);
        }
        if(this.defaultManagedAppProtections && this.defaultManagedAppProtections.length != 0){        const defaultManagedAppProtectionsArrValue: DefaultManagedAppProtectionImpl[] = []; this.defaultManagedAppProtections?.forEach(element => {defaultManagedAppProtectionsArrValue.push(new DefaultManagedAppProtectionImpl(element));});
        writer.writeCollectionOfObjectValues<DefaultManagedAppProtectionImpl>("defaultManagedAppProtections", defaultManagedAppProtectionsArrValue);
        }
        if(this.iosManagedAppProtections && this.iosManagedAppProtections.length != 0){        const iosManagedAppProtectionsArrValue: IosManagedAppProtectionImpl[] = []; this.iosManagedAppProtections?.forEach(element => {iosManagedAppProtectionsArrValue.push(new IosManagedAppProtectionImpl(element));});
        writer.writeCollectionOfObjectValues<IosManagedAppProtectionImpl>("iosManagedAppProtections", iosManagedAppProtectionsArrValue);
        }
        if(this.isEnabledForMicrosoftStoreForBusiness){
        writer.writeBooleanValue("isEnabledForMicrosoftStoreForBusiness", this.isEnabledForMicrosoftStoreForBusiness);
        }
        if(this.managedAppPolicies && this.managedAppPolicies.length != 0){        const managedAppPoliciesArrValue: ManagedAppPolicyImpl[] = []; this.managedAppPolicies?.forEach(element => {managedAppPoliciesArrValue.push(new ManagedAppPolicyImpl(element));});
        writer.writeCollectionOfObjectValues<ManagedAppPolicyImpl>("managedAppPolicies", managedAppPoliciesArrValue);
        }
        if(this.managedAppRegistrations && this.managedAppRegistrations.length != 0){        const managedAppRegistrationsArrValue: ManagedAppRegistrationImpl[] = []; this.managedAppRegistrations?.forEach(element => {managedAppRegistrationsArrValue.push(new ManagedAppRegistrationImpl(element));});
        writer.writeCollectionOfObjectValues<ManagedAppRegistrationImpl>("managedAppRegistrations", managedAppRegistrationsArrValue);
        }
        if(this.managedAppStatuses && this.managedAppStatuses.length != 0){        const managedAppStatusesArrValue: ManagedAppStatusImpl[] = []; this.managedAppStatuses?.forEach(element => {managedAppStatusesArrValue.push(new ManagedAppStatusImpl(element));});
        writer.writeCollectionOfObjectValues<ManagedAppStatusImpl>("managedAppStatuses", managedAppStatusesArrValue);
        }
        if(this.managedEBooks && this.managedEBooks.length != 0){        const managedEBooksArrValue: ManagedEBookImpl[] = []; this.managedEBooks?.forEach(element => {managedEBooksArrValue.push(new ManagedEBookImpl(element));});
        writer.writeCollectionOfObjectValues<ManagedEBookImpl>("managedEBooks", managedEBooksArrValue);
        }
        if(this.mdmWindowsInformationProtectionPolicies && this.mdmWindowsInformationProtectionPolicies.length != 0){        const mdmWindowsInformationProtectionPoliciesArrValue: MdmWindowsInformationProtectionPolicyImpl[] = []; this.mdmWindowsInformationProtectionPolicies?.forEach(element => {mdmWindowsInformationProtectionPoliciesArrValue.push(new MdmWindowsInformationProtectionPolicyImpl(element));});
        writer.writeCollectionOfObjectValues<MdmWindowsInformationProtectionPolicyImpl>("mdmWindowsInformationProtectionPolicies", mdmWindowsInformationProtectionPoliciesArrValue);
        }
        if(this.microsoftStoreForBusinessLanguage){
        writer.writeStringValue("microsoftStoreForBusinessLanguage", this.microsoftStoreForBusinessLanguage);
        }
        if(this.microsoftStoreForBusinessLastCompletedApplicationSyncTime){
        writer.writeDateValue("microsoftStoreForBusinessLastCompletedApplicationSyncTime", this.microsoftStoreForBusinessLastCompletedApplicationSyncTime);
        }
        if(this.microsoftStoreForBusinessLastSuccessfulSyncDateTime){
        writer.writeDateValue("microsoftStoreForBusinessLastSuccessfulSyncDateTime", this.microsoftStoreForBusinessLastSuccessfulSyncDateTime);
        }
        if(this.mobileAppCategories && this.mobileAppCategories.length != 0){        const mobileAppCategoriesArrValue: MobileAppCategoryImpl[] = []; this.mobileAppCategories?.forEach(element => {mobileAppCategoriesArrValue.push(new MobileAppCategoryImpl(element));});
        writer.writeCollectionOfObjectValues<MobileAppCategoryImpl>("mobileAppCategories", mobileAppCategoriesArrValue);
        }
        if(this.mobileAppConfigurations && this.mobileAppConfigurations.length != 0){        const mobileAppConfigurationsArrValue: ManagedDeviceMobileAppConfigurationImpl[] = []; this.mobileAppConfigurations?.forEach(element => {mobileAppConfigurationsArrValue.push(new ManagedDeviceMobileAppConfigurationImpl(element));});
        writer.writeCollectionOfObjectValues<ManagedDeviceMobileAppConfigurationImpl>("mobileAppConfigurations", mobileAppConfigurationsArrValue);
        }
        if(this.mobileApps && this.mobileApps.length != 0){        const mobileAppsArrValue: MobileAppImpl[] = []; this.mobileApps?.forEach(element => {mobileAppsArrValue.push(new MobileAppImpl(element));});
        writer.writeCollectionOfObjectValues<MobileAppImpl>("mobileApps", mobileAppsArrValue);
        }
        if(this.targetedManagedAppConfigurations && this.targetedManagedAppConfigurations.length != 0){        const targetedManagedAppConfigurationsArrValue: TargetedManagedAppConfigurationImpl[] = []; this.targetedManagedAppConfigurations?.forEach(element => {targetedManagedAppConfigurationsArrValue.push(new TargetedManagedAppConfigurationImpl(element));});
        writer.writeCollectionOfObjectValues<TargetedManagedAppConfigurationImpl>("targetedManagedAppConfigurations", targetedManagedAppConfigurationsArrValue);
        }
        if(this.vppTokens && this.vppTokens.length != 0){        const vppTokensArrValue: VppTokenImpl[] = []; this.vppTokens?.forEach(element => {vppTokensArrValue.push(new VppTokenImpl(element));});
        writer.writeCollectionOfObjectValues<VppTokenImpl>("vppTokens", vppTokensArrValue);
        }
        if(this.windowsInformationProtectionPolicies && this.windowsInformationProtectionPolicies.length != 0){        const windowsInformationProtectionPoliciesArrValue: WindowsInformationProtectionPolicyImpl[] = []; this.windowsInformationProtectionPolicies?.forEach(element => {windowsInformationProtectionPoliciesArrValue.push(new WindowsInformationProtectionPolicyImpl(element));});
        writer.writeCollectionOfObjectValues<WindowsInformationProtectionPolicyImpl>("windowsInformationProtectionPolicies", windowsInformationProtectionPoliciesArrValue);
        }
    };
}
