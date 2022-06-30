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
export class DeviceAppManagementImpl extends EntityImpl implements DeviceAppManagement {
    /** Android managed app policies. */
    private _androidManagedAppProtections?: AndroidManagedAppProtection[] | undefined;
    /** Default managed app policies. */
    private _defaultManagedAppProtections?: DefaultManagedAppProtection[] | undefined;
    /** iOS managed app policies. */
    private _iosManagedAppProtections?: IosManagedAppProtection[] | undefined;
    /** Whether the account is enabled for syncing applications from the Microsoft Store for Business. */
    private _isEnabledForMicrosoftStoreForBusiness?: boolean | undefined;
    /** Managed app policies. */
    private _managedAppPolicies?: ManagedAppPolicy[] | undefined;
    /** The managed app registrations. */
    private _managedAppRegistrations?: ManagedAppRegistration[] | undefined;
    /** The managed app statuses. */
    private _managedAppStatuses?: ManagedAppStatus[] | undefined;
    /** The Managed eBook. */
    private _managedEBooks?: ManagedEBook[] | undefined;
    /** Windows information protection for apps running on devices which are MDM enrolled. */
    private _mdmWindowsInformationProtectionPolicies?: MdmWindowsInformationProtectionPolicy[] | undefined;
    /** The locale information used to sync applications from the Microsoft Store for Business. Cultures that are specific to a country/region. The names of these cultures follow RFC 4646 (Windows Vista and later). The format is <languagecode2>-<country/regioncode2>, where <languagecode2> is a lowercase two-letter code derived from ISO 639-1 and <country/regioncode2> is an uppercase two-letter code derived from ISO 3166. For example, en-US for English (United States) is a specific culture. */
    private _microsoftStoreForBusinessLanguage?: string | undefined;
    /** The last time an application sync from the Microsoft Store for Business was completed. */
    private _microsoftStoreForBusinessLastCompletedApplicationSyncTime?: Date | undefined;
    /** The last time the apps from the Microsoft Store for Business were synced successfully for the account. */
    private _microsoftStoreForBusinessLastSuccessfulSyncDateTime?: Date | undefined;
    /** The mobile app categories. */
    private _mobileAppCategories?: MobileAppCategory[] | undefined;
    /** The Managed Device Mobile Application Configurations. */
    private _mobileAppConfigurations?: ManagedDeviceMobileAppConfiguration[] | undefined;
    /** The mobile apps. */
    private _mobileApps?: MobileApp[] | undefined;
    /** Targeted managed app configurations. */
    private _targetedManagedAppConfigurations?: TargetedManagedAppConfiguration[] | undefined;
    /** List of Vpp tokens for this organization. */
    private _vppTokens?: VppToken[] | undefined;
    /** Windows information protection for apps running on devices which are not MDM enrolled. */
    private _windowsInformationProtectionPolicies?: WindowsInformationProtectionPolicy[] | undefined;
    /**
     * Gets the androidManagedAppProtections property value. Android managed app policies.
     * @returns a AndroidManagedAppProtectionInterface
     */
    public get androidManagedAppProtections() {
        return this._androidManagedAppProtections;
    };
    /**
     * Sets the androidManagedAppProtections property value. Android managed app policies.
     * @param value Value to set for the androidManagedAppProtections property.
     */
    public set androidManagedAppProtections(value: AndroidManagedAppProtection[] | undefined) {
        if(value) {
            const androidManagedAppProtectionsArrValue: AndroidManagedAppProtectionImpl[] = [];
            this.androidManagedAppProtections?.forEach(element => {
                androidManagedAppProtectionsArrValue.push((element instanceof AndroidManagedAppProtectionImpl? element:new AndroidManagedAppProtectionImpl(element)));
            });
            this._androidManagedAppProtections = androidManagedAppProtectionsArrValue;
        }
    };
    /**
     * Instantiates a new deviceAppManagement and sets the default values.
     * @param deviceAppManagementParameterValue 
     */
    public constructor(deviceAppManagementParameterValue?: DeviceAppManagement | undefined) {
        super(deviceAppManagementParameterValue);
        this._androidManagedAppProtections = deviceAppManagementParameterValue?.androidManagedAppProtections;
        this._defaultManagedAppProtections = deviceAppManagementParameterValue?.defaultManagedAppProtections;
        this._iosManagedAppProtections = deviceAppManagementParameterValue?.iosManagedAppProtections;
        this._isEnabledForMicrosoftStoreForBusiness = deviceAppManagementParameterValue?.isEnabledForMicrosoftStoreForBusiness;
        this._managedAppPolicies = deviceAppManagementParameterValue?.managedAppPolicies;
        this._managedAppRegistrations = deviceAppManagementParameterValue?.managedAppRegistrations;
        this._managedAppStatuses = deviceAppManagementParameterValue?.managedAppStatuses;
        this._managedEBooks = deviceAppManagementParameterValue?.managedEBooks;
        this._mdmWindowsInformationProtectionPolicies = deviceAppManagementParameterValue?.mdmWindowsInformationProtectionPolicies;
        this._microsoftStoreForBusinessLanguage = deviceAppManagementParameterValue?.microsoftStoreForBusinessLanguage;
        this._microsoftStoreForBusinessLastCompletedApplicationSyncTime = deviceAppManagementParameterValue?.microsoftStoreForBusinessLastCompletedApplicationSyncTime;
        this._microsoftStoreForBusinessLastSuccessfulSyncDateTime = deviceAppManagementParameterValue?.microsoftStoreForBusinessLastSuccessfulSyncDateTime;
        this._mobileAppCategories = deviceAppManagementParameterValue?.mobileAppCategories;
        this._mobileAppConfigurations = deviceAppManagementParameterValue?.mobileAppConfigurations;
        this._mobileApps = deviceAppManagementParameterValue?.mobileApps;
        this._targetedManagedAppConfigurations = deviceAppManagementParameterValue?.targetedManagedAppConfigurations;
        this._vppTokens = deviceAppManagementParameterValue?.vppTokens;
        this._windowsInformationProtectionPolicies = deviceAppManagementParameterValue?.windowsInformationProtectionPolicies;
    };
    /**
     * Gets the defaultManagedAppProtections property value. Default managed app policies.
     * @returns a DefaultManagedAppProtectionInterface
     */
    public get defaultManagedAppProtections() {
        return this._defaultManagedAppProtections;
    };
    /**
     * Sets the defaultManagedAppProtections property value. Default managed app policies.
     * @param value Value to set for the defaultManagedAppProtections property.
     */
    public set defaultManagedAppProtections(value: DefaultManagedAppProtection[] | undefined) {
        if(value) {
            const defaultManagedAppProtectionsArrValue: DefaultManagedAppProtectionImpl[] = [];
            this.defaultManagedAppProtections?.forEach(element => {
                defaultManagedAppProtectionsArrValue.push((element instanceof DefaultManagedAppProtectionImpl? element:new DefaultManagedAppProtectionImpl(element)));
            });
            this._defaultManagedAppProtections = defaultManagedAppProtectionsArrValue;
        }
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
     * Gets the iosManagedAppProtections property value. iOS managed app policies.
     * @returns a IosManagedAppProtectionInterface
     */
    public get iosManagedAppProtections() {
        return this._iosManagedAppProtections;
    };
    /**
     * Sets the iosManagedAppProtections property value. iOS managed app policies.
     * @param value Value to set for the iosManagedAppProtections property.
     */
    public set iosManagedAppProtections(value: IosManagedAppProtection[] | undefined) {
        if(value) {
            const iosManagedAppProtectionsArrValue: IosManagedAppProtectionImpl[] = [];
            this.iosManagedAppProtections?.forEach(element => {
                iosManagedAppProtectionsArrValue.push((element instanceof IosManagedAppProtectionImpl? element:new IosManagedAppProtectionImpl(element)));
            });
            this._iosManagedAppProtections = iosManagedAppProtectionsArrValue;
        }
    };
    /**
     * Gets the isEnabledForMicrosoftStoreForBusiness property value. Whether the account is enabled for syncing applications from the Microsoft Store for Business.
     * @returns a boolean
     */
    public get isEnabledForMicrosoftStoreForBusiness() {
        return this._isEnabledForMicrosoftStoreForBusiness;
    };
    /**
     * Sets the isEnabledForMicrosoftStoreForBusiness property value. Whether the account is enabled for syncing applications from the Microsoft Store for Business.
     * @param value Value to set for the isEnabledForMicrosoftStoreForBusiness property.
     */
    public set isEnabledForMicrosoftStoreForBusiness(value: boolean | undefined) {
        if(value) {
            this._isEnabledForMicrosoftStoreForBusiness = value;
        }
    };
    /**
     * Gets the managedAppPolicies property value. Managed app policies.
     * @returns a ManagedAppPolicyInterface
     */
    public get managedAppPolicies() {
        return this._managedAppPolicies;
    };
    /**
     * Sets the managedAppPolicies property value. Managed app policies.
     * @param value Value to set for the managedAppPolicies property.
     */
    public set managedAppPolicies(value: ManagedAppPolicy[] | undefined) {
        if(value) {
            const managedAppPoliciesArrValue: ManagedAppPolicyImpl[] = [];
            this.managedAppPolicies?.forEach(element => {
                managedAppPoliciesArrValue.push((element instanceof ManagedAppPolicyImpl? element:new ManagedAppPolicyImpl(element)));
            });
            this._managedAppPolicies = managedAppPoliciesArrValue;
        }
    };
    /**
     * Gets the managedAppRegistrations property value. The managed app registrations.
     * @returns a ManagedAppRegistrationInterface
     */
    public get managedAppRegistrations() {
        return this._managedAppRegistrations;
    };
    /**
     * Sets the managedAppRegistrations property value. The managed app registrations.
     * @param value Value to set for the managedAppRegistrations property.
     */
    public set managedAppRegistrations(value: ManagedAppRegistration[] | undefined) {
        if(value) {
            const managedAppRegistrationsArrValue: ManagedAppRegistrationImpl[] = [];
            this.managedAppRegistrations?.forEach(element => {
                managedAppRegistrationsArrValue.push((element instanceof ManagedAppRegistrationImpl? element:new ManagedAppRegistrationImpl(element)));
            });
            this._managedAppRegistrations = managedAppRegistrationsArrValue;
        }
    };
    /**
     * Gets the managedAppStatuses property value. The managed app statuses.
     * @returns a ManagedAppStatusInterface
     */
    public get managedAppStatuses() {
        return this._managedAppStatuses;
    };
    /**
     * Sets the managedAppStatuses property value. The managed app statuses.
     * @param value Value to set for the managedAppStatuses property.
     */
    public set managedAppStatuses(value: ManagedAppStatus[] | undefined) {
        if(value) {
            const managedAppStatusesArrValue: ManagedAppStatusImpl[] = [];
            this.managedAppStatuses?.forEach(element => {
                managedAppStatusesArrValue.push((element instanceof ManagedAppStatusImpl? element:new ManagedAppStatusImpl(element)));
            });
            this._managedAppStatuses = managedAppStatusesArrValue;
        }
    };
    /**
     * Gets the managedEBooks property value. The Managed eBook.
     * @returns a ManagedEBookInterface
     */
    public get managedEBooks() {
        return this._managedEBooks;
    };
    /**
     * Sets the managedEBooks property value. The Managed eBook.
     * @param value Value to set for the managedEBooks property.
     */
    public set managedEBooks(value: ManagedEBook[] | undefined) {
        if(value) {
            const managedEBooksArrValue: ManagedEBookImpl[] = [];
            this.managedEBooks?.forEach(element => {
                managedEBooksArrValue.push((element instanceof ManagedEBookImpl? element:new ManagedEBookImpl(element)));
            });
            this._managedEBooks = managedEBooksArrValue;
        }
    };
    /**
     * Gets the mdmWindowsInformationProtectionPolicies property value. Windows information protection for apps running on devices which are MDM enrolled.
     * @returns a MdmWindowsInformationProtectionPolicyInterface
     */
    public get mdmWindowsInformationProtectionPolicies() {
        return this._mdmWindowsInformationProtectionPolicies;
    };
    /**
     * Sets the mdmWindowsInformationProtectionPolicies property value. Windows information protection for apps running on devices which are MDM enrolled.
     * @param value Value to set for the mdmWindowsInformationProtectionPolicies property.
     */
    public set mdmWindowsInformationProtectionPolicies(value: MdmWindowsInformationProtectionPolicy[] | undefined) {
        if(value) {
            const mdmWindowsInformationProtectionPoliciesArrValue: MdmWindowsInformationProtectionPolicyImpl[] = [];
            this.mdmWindowsInformationProtectionPolicies?.forEach(element => {
                mdmWindowsInformationProtectionPoliciesArrValue.push((element instanceof MdmWindowsInformationProtectionPolicyImpl? element:new MdmWindowsInformationProtectionPolicyImpl(element)));
            });
            this._mdmWindowsInformationProtectionPolicies = mdmWindowsInformationProtectionPoliciesArrValue;
        }
    };
    /**
     * Gets the microsoftStoreForBusinessLanguage property value. The locale information used to sync applications from the Microsoft Store for Business. Cultures that are specific to a country/region. The names of these cultures follow RFC 4646 (Windows Vista and later). The format is <languagecode2>-<country/regioncode2>, where <languagecode2> is a lowercase two-letter code derived from ISO 639-1 and <country/regioncode2> is an uppercase two-letter code derived from ISO 3166. For example, en-US for English (United States) is a specific culture.
     * @returns a string
     */
    public get microsoftStoreForBusinessLanguage() {
        return this._microsoftStoreForBusinessLanguage;
    };
    /**
     * Sets the microsoftStoreForBusinessLanguage property value. The locale information used to sync applications from the Microsoft Store for Business. Cultures that are specific to a country/region. The names of these cultures follow RFC 4646 (Windows Vista and later). The format is <languagecode2>-<country/regioncode2>, where <languagecode2> is a lowercase two-letter code derived from ISO 639-1 and <country/regioncode2> is an uppercase two-letter code derived from ISO 3166. For example, en-US for English (United States) is a specific culture.
     * @param value Value to set for the microsoftStoreForBusinessLanguage property.
     */
    public set microsoftStoreForBusinessLanguage(value: string | undefined) {
        if(value) {
            this._microsoftStoreForBusinessLanguage = value;
        }
    };
    /**
     * Gets the microsoftStoreForBusinessLastCompletedApplicationSyncTime property value. The last time an application sync from the Microsoft Store for Business was completed.
     * @returns a Date
     */
    public get microsoftStoreForBusinessLastCompletedApplicationSyncTime() {
        return this._microsoftStoreForBusinessLastCompletedApplicationSyncTime;
    };
    /**
     * Sets the microsoftStoreForBusinessLastCompletedApplicationSyncTime property value. The last time an application sync from the Microsoft Store for Business was completed.
     * @param value Value to set for the microsoftStoreForBusinessLastCompletedApplicationSyncTime property.
     */
    public set microsoftStoreForBusinessLastCompletedApplicationSyncTime(value: Date | undefined) {
        if(value) {
            this._microsoftStoreForBusinessLastCompletedApplicationSyncTime = value;
        }
    };
    /**
     * Gets the microsoftStoreForBusinessLastSuccessfulSyncDateTime property value. The last time the apps from the Microsoft Store for Business were synced successfully for the account.
     * @returns a Date
     */
    public get microsoftStoreForBusinessLastSuccessfulSyncDateTime() {
        return this._microsoftStoreForBusinessLastSuccessfulSyncDateTime;
    };
    /**
     * Sets the microsoftStoreForBusinessLastSuccessfulSyncDateTime property value. The last time the apps from the Microsoft Store for Business were synced successfully for the account.
     * @param value Value to set for the microsoftStoreForBusinessLastSuccessfulSyncDateTime property.
     */
    public set microsoftStoreForBusinessLastSuccessfulSyncDateTime(value: Date | undefined) {
        if(value) {
            this._microsoftStoreForBusinessLastSuccessfulSyncDateTime = value;
        }
    };
    /**
     * Gets the mobileAppCategories property value. The mobile app categories.
     * @returns a MobileAppCategoryInterface
     */
    public get mobileAppCategories() {
        return this._mobileAppCategories;
    };
    /**
     * Sets the mobileAppCategories property value. The mobile app categories.
     * @param value Value to set for the mobileAppCategories property.
     */
    public set mobileAppCategories(value: MobileAppCategory[] | undefined) {
        if(value) {
            const mobileAppCategoriesArrValue: MobileAppCategoryImpl[] = [];
            this.mobileAppCategories?.forEach(element => {
                mobileAppCategoriesArrValue.push((element instanceof MobileAppCategoryImpl? element:new MobileAppCategoryImpl(element)));
            });
            this._mobileAppCategories = mobileAppCategoriesArrValue;
        }
    };
    /**
     * Gets the mobileAppConfigurations property value. The Managed Device Mobile Application Configurations.
     * @returns a ManagedDeviceMobileAppConfigurationInterface
     */
    public get mobileAppConfigurations() {
        return this._mobileAppConfigurations;
    };
    /**
     * Sets the mobileAppConfigurations property value. The Managed Device Mobile Application Configurations.
     * @param value Value to set for the mobileAppConfigurations property.
     */
    public set mobileAppConfigurations(value: ManagedDeviceMobileAppConfiguration[] | undefined) {
        if(value) {
            const mobileAppConfigurationsArrValue: ManagedDeviceMobileAppConfigurationImpl[] = [];
            this.mobileAppConfigurations?.forEach(element => {
                mobileAppConfigurationsArrValue.push((element instanceof ManagedDeviceMobileAppConfigurationImpl? element:new ManagedDeviceMobileAppConfigurationImpl(element)));
            });
            this._mobileAppConfigurations = mobileAppConfigurationsArrValue;
        }
    };
    /**
     * Gets the mobileApps property value. The mobile apps.
     * @returns a MobileAppInterface
     */
    public get mobileApps() {
        return this._mobileApps;
    };
    /**
     * Sets the mobileApps property value. The mobile apps.
     * @param value Value to set for the mobileApps property.
     */
    public set mobileApps(value: MobileApp[] | undefined) {
        if(value) {
            const mobileAppsArrValue: MobileAppImpl[] = [];
            this.mobileApps?.forEach(element => {
                mobileAppsArrValue.push((element instanceof MobileAppImpl? element:new MobileAppImpl(element)));
            });
            this._mobileApps = mobileAppsArrValue;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.androidManagedAppProtections && this.androidManagedAppProtections.length != 0){        const androidManagedAppProtectionsArrValue: AndroidManagedAppProtectionImpl[] = [];
        this.androidManagedAppProtections?.forEach(element => {
            androidManagedAppProtectionsArrValue.push((element instanceof AndroidManagedAppProtectionImpl? element:new AndroidManagedAppProtectionImpl(element)));
        });
            writer.writeCollectionOfObjectValues<AndroidManagedAppProtectionImpl>("androidManagedAppProtections", androidManagedAppProtectionsArrValue);
        }
        if(this.defaultManagedAppProtections && this.defaultManagedAppProtections.length != 0){        const defaultManagedAppProtectionsArrValue: DefaultManagedAppProtectionImpl[] = [];
        this.defaultManagedAppProtections?.forEach(element => {
            defaultManagedAppProtectionsArrValue.push((element instanceof DefaultManagedAppProtectionImpl? element:new DefaultManagedAppProtectionImpl(element)));
        });
            writer.writeCollectionOfObjectValues<DefaultManagedAppProtectionImpl>("defaultManagedAppProtections", defaultManagedAppProtectionsArrValue);
        }
        if(this.iosManagedAppProtections && this.iosManagedAppProtections.length != 0){        const iosManagedAppProtectionsArrValue: IosManagedAppProtectionImpl[] = [];
        this.iosManagedAppProtections?.forEach(element => {
            iosManagedAppProtectionsArrValue.push((element instanceof IosManagedAppProtectionImpl? element:new IosManagedAppProtectionImpl(element)));
        });
            writer.writeCollectionOfObjectValues<IosManagedAppProtectionImpl>("iosManagedAppProtections", iosManagedAppProtectionsArrValue);
        }
        if(this.isEnabledForMicrosoftStoreForBusiness){
            writer.writeBooleanValue("isEnabledForMicrosoftStoreForBusiness", this.isEnabledForMicrosoftStoreForBusiness);
        }
        if(this.managedAppPolicies && this.managedAppPolicies.length != 0){        const managedAppPoliciesArrValue: ManagedAppPolicyImpl[] = [];
        this.managedAppPolicies?.forEach(element => {
            managedAppPoliciesArrValue.push((element instanceof ManagedAppPolicyImpl? element:new ManagedAppPolicyImpl(element)));
        });
            writer.writeCollectionOfObjectValues<ManagedAppPolicyImpl>("managedAppPolicies", managedAppPoliciesArrValue);
        }
        if(this.managedAppRegistrations && this.managedAppRegistrations.length != 0){        const managedAppRegistrationsArrValue: ManagedAppRegistrationImpl[] = [];
        this.managedAppRegistrations?.forEach(element => {
            managedAppRegistrationsArrValue.push((element instanceof ManagedAppRegistrationImpl? element:new ManagedAppRegistrationImpl(element)));
        });
            writer.writeCollectionOfObjectValues<ManagedAppRegistrationImpl>("managedAppRegistrations", managedAppRegistrationsArrValue);
        }
        if(this.managedAppStatuses && this.managedAppStatuses.length != 0){        const managedAppStatusesArrValue: ManagedAppStatusImpl[] = [];
        this.managedAppStatuses?.forEach(element => {
            managedAppStatusesArrValue.push((element instanceof ManagedAppStatusImpl? element:new ManagedAppStatusImpl(element)));
        });
            writer.writeCollectionOfObjectValues<ManagedAppStatusImpl>("managedAppStatuses", managedAppStatusesArrValue);
        }
        if(this.managedEBooks && this.managedEBooks.length != 0){        const managedEBooksArrValue: ManagedEBookImpl[] = [];
        this.managedEBooks?.forEach(element => {
            managedEBooksArrValue.push((element instanceof ManagedEBookImpl? element:new ManagedEBookImpl(element)));
        });
            writer.writeCollectionOfObjectValues<ManagedEBookImpl>("managedEBooks", managedEBooksArrValue);
        }
        if(this.mdmWindowsInformationProtectionPolicies && this.mdmWindowsInformationProtectionPolicies.length != 0){        const mdmWindowsInformationProtectionPoliciesArrValue: MdmWindowsInformationProtectionPolicyImpl[] = [];
        this.mdmWindowsInformationProtectionPolicies?.forEach(element => {
            mdmWindowsInformationProtectionPoliciesArrValue.push((element instanceof MdmWindowsInformationProtectionPolicyImpl? element:new MdmWindowsInformationProtectionPolicyImpl(element)));
        });
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
        if(this.mobileAppCategories && this.mobileAppCategories.length != 0){        const mobileAppCategoriesArrValue: MobileAppCategoryImpl[] = [];
        this.mobileAppCategories?.forEach(element => {
            mobileAppCategoriesArrValue.push((element instanceof MobileAppCategoryImpl? element:new MobileAppCategoryImpl(element)));
        });
            writer.writeCollectionOfObjectValues<MobileAppCategoryImpl>("mobileAppCategories", mobileAppCategoriesArrValue);
        }
        if(this.mobileAppConfigurations && this.mobileAppConfigurations.length != 0){        const mobileAppConfigurationsArrValue: ManagedDeviceMobileAppConfigurationImpl[] = [];
        this.mobileAppConfigurations?.forEach(element => {
            mobileAppConfigurationsArrValue.push((element instanceof ManagedDeviceMobileAppConfigurationImpl? element:new ManagedDeviceMobileAppConfigurationImpl(element)));
        });
            writer.writeCollectionOfObjectValues<ManagedDeviceMobileAppConfigurationImpl>("mobileAppConfigurations", mobileAppConfigurationsArrValue);
        }
        if(this.mobileApps && this.mobileApps.length != 0){        const mobileAppsArrValue: MobileAppImpl[] = [];
        this.mobileApps?.forEach(element => {
            mobileAppsArrValue.push((element instanceof MobileAppImpl? element:new MobileAppImpl(element)));
        });
            writer.writeCollectionOfObjectValues<MobileAppImpl>("mobileApps", mobileAppsArrValue);
        }
        if(this.targetedManagedAppConfigurations && this.targetedManagedAppConfigurations.length != 0){        const targetedManagedAppConfigurationsArrValue: TargetedManagedAppConfigurationImpl[] = [];
        this.targetedManagedAppConfigurations?.forEach(element => {
            targetedManagedAppConfigurationsArrValue.push((element instanceof TargetedManagedAppConfigurationImpl? element:new TargetedManagedAppConfigurationImpl(element)));
        });
            writer.writeCollectionOfObjectValues<TargetedManagedAppConfigurationImpl>("targetedManagedAppConfigurations", targetedManagedAppConfigurationsArrValue);
        }
        if(this.vppTokens && this.vppTokens.length != 0){        const vppTokensArrValue: VppTokenImpl[] = [];
        this.vppTokens?.forEach(element => {
            vppTokensArrValue.push((element instanceof VppTokenImpl? element:new VppTokenImpl(element)));
        });
            writer.writeCollectionOfObjectValues<VppTokenImpl>("vppTokens", vppTokensArrValue);
        }
        if(this.windowsInformationProtectionPolicies && this.windowsInformationProtectionPolicies.length != 0){        const windowsInformationProtectionPoliciesArrValue: WindowsInformationProtectionPolicyImpl[] = [];
        this.windowsInformationProtectionPolicies?.forEach(element => {
            windowsInformationProtectionPoliciesArrValue.push((element instanceof WindowsInformationProtectionPolicyImpl? element:new WindowsInformationProtectionPolicyImpl(element)));
        });
            writer.writeCollectionOfObjectValues<WindowsInformationProtectionPolicyImpl>("windowsInformationProtectionPolicies", windowsInformationProtectionPoliciesArrValue);
        }
    };
    /**
     * Gets the targetedManagedAppConfigurations property value. Targeted managed app configurations.
     * @returns a TargetedManagedAppConfigurationInterface
     */
    public get targetedManagedAppConfigurations() {
        return this._targetedManagedAppConfigurations;
    };
    /**
     * Sets the targetedManagedAppConfigurations property value. Targeted managed app configurations.
     * @param value Value to set for the targetedManagedAppConfigurations property.
     */
    public set targetedManagedAppConfigurations(value: TargetedManagedAppConfiguration[] | undefined) {
        if(value) {
            const targetedManagedAppConfigurationsArrValue: TargetedManagedAppConfigurationImpl[] = [];
            this.targetedManagedAppConfigurations?.forEach(element => {
                targetedManagedAppConfigurationsArrValue.push((element instanceof TargetedManagedAppConfigurationImpl? element:new TargetedManagedAppConfigurationImpl(element)));
            });
            this._targetedManagedAppConfigurations = targetedManagedAppConfigurationsArrValue;
        }
    };
    /**
     * Gets the vppTokens property value. List of Vpp tokens for this organization.
     * @returns a VppTokenInterface
     */
    public get vppTokens() {
        return this._vppTokens;
    };
    /**
     * Sets the vppTokens property value. List of Vpp tokens for this organization.
     * @param value Value to set for the vppTokens property.
     */
    public set vppTokens(value: VppToken[] | undefined) {
        if(value) {
            const vppTokensArrValue: VppTokenImpl[] = [];
            this.vppTokens?.forEach(element => {
                vppTokensArrValue.push((element instanceof VppTokenImpl? element:new VppTokenImpl(element)));
            });
            this._vppTokens = vppTokensArrValue;
        }
    };
    /**
     * Gets the windowsInformationProtectionPolicies property value. Windows information protection for apps running on devices which are not MDM enrolled.
     * @returns a WindowsInformationProtectionPolicyInterface
     */
    public get windowsInformationProtectionPolicies() {
        return this._windowsInformationProtectionPolicies;
    };
    /**
     * Sets the windowsInformationProtectionPolicies property value. Windows information protection for apps running on devices which are not MDM enrolled.
     * @param value Value to set for the windowsInformationProtectionPolicies property.
     */
    public set windowsInformationProtectionPolicies(value: WindowsInformationProtectionPolicy[] | undefined) {
        if(value) {
            const windowsInformationProtectionPoliciesArrValue: WindowsInformationProtectionPolicyImpl[] = [];
            this.windowsInformationProtectionPolicies?.forEach(element => {
                windowsInformationProtectionPoliciesArrValue.push((element instanceof WindowsInformationProtectionPolicyImpl? element:new WindowsInformationProtectionPolicyImpl(element)));
            });
            this._windowsInformationProtectionPolicies = windowsInformationProtectionPoliciesArrValue;
        }
    };
}
