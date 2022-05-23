import {ManagedAppPolicyImpl} from './index';
import {ManagedAppClipboardSharingLevel} from './managedAppClipboardSharingLevel';
import {ManagedAppDataTransferLevel} from './managedAppDataTransferLevel';
import {ManagedAppPinCharacterSet} from './managedAppPinCharacterSet';
import {ManagedAppProtection} from './managedAppProtection';
import {ManagedBrowserType} from './managedBrowserType';
import {Duration, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Policy used to configure detailed management settings for a specified set of apps */
export class ManagedAppProtectionImpl extends ManagedAppPolicyImpl implements ManagedAppProtection, Parsable {
    /** Data storage locations where a user may store managed data. */
    public allowedDataStorageLocations?: string[] | undefined;
    /** Sources from which data is allowed to be transferred. Possible values are: allApps, managedApps, none. */
    public allowedInboundDataTransferSources?: ManagedAppDataTransferLevel | undefined;
    /** The level to which the clipboard may be shared between apps on the managed device. Possible values are: allApps, managedAppsWithPasteIn, managedApps, blocked. */
    public allowedOutboundClipboardSharingLevel?: ManagedAppClipboardSharingLevel | undefined;
    /** Destinations to which data is allowed to be transferred. Possible values are: allApps, managedApps, none. */
    public allowedOutboundDataTransferDestinations?: ManagedAppDataTransferLevel | undefined;
    /** Indicates whether contacts can be synced to the user's device. */
    public contactSyncBlocked?: boolean | undefined;
    /** Indicates whether the backup of a managed app's data is blocked. */
    public dataBackupBlocked?: boolean | undefined;
    /** Indicates whether device compliance is required. */
    public deviceComplianceRequired?: boolean | undefined;
    /** Indicates whether use of the app pin is required if the device pin is set. */
    public disableAppPinIfDevicePinIsSet?: boolean | undefined;
    /** Indicates whether use of the fingerprint reader is allowed in place of a pin if PinRequired is set to True. */
    public fingerprintBlocked?: boolean | undefined;
    /** Indicates in which managed browser(s) that internet links should be opened. When this property is configured, ManagedBrowserToOpenLinksRequired should be true. Possible values are: notConfigured, microsoftEdge. */
    public managedBrowser?: ManagedBrowserType | undefined;
    /** Indicates whether internet links should be opened in the managed browser app, or any custom browser specified by CustomBrowserProtocol (for iOS) or CustomBrowserPackageId/CustomBrowserDisplayName (for Android) */
    public managedBrowserToOpenLinksRequired?: boolean | undefined;
    /** Maximum number of incorrect pin retry attempts before the managed app is either blocked or wiped. */
    public maximumPinRetries?: number | undefined;
    /** Minimum pin length required for an app-level pin if PinRequired is set to True */
    public minimumPinLength?: number | undefined;
    /** Versions less than the specified version will block the managed app from accessing company data. */
    public minimumRequiredAppVersion?: string | undefined;
    /** Versions less than the specified version will block the managed app from accessing company data. */
    public minimumRequiredOsVersion?: string | undefined;
    /** Versions less than the specified version will result in warning message on the managed app. */
    public minimumWarningAppVersion?: string | undefined;
    /** Versions less than the specified version will result in warning message on the managed app from accessing company data. */
    public minimumWarningOsVersion?: string | undefined;
    /** Indicates whether organizational credentials are required for app use. */
    public organizationalCredentialsRequired?: boolean | undefined;
    /** TimePeriod before the all-level pin must be reset if PinRequired is set to True. */
    public periodBeforePinReset?: Duration | undefined;
    /** The period after which access is checked when the device is not connected to the internet. */
    public periodOfflineBeforeAccessCheck?: Duration | undefined;
    /** The amount of time an app is allowed to remain disconnected from the internet before all managed data it is wiped. */
    public periodOfflineBeforeWipeIsEnforced?: Duration | undefined;
    /** The period after which access is checked when the device is connected to the internet. */
    public periodOnlineBeforeAccessCheck?: Duration | undefined;
    /** Character set which may be used for an app-level pin if PinRequired is set to True. Possible values are: numeric, alphanumericAndSymbol. */
    public pinCharacterSet?: ManagedAppPinCharacterSet | undefined;
    /** Indicates whether an app-level pin is required. */
    public pinRequired?: boolean | undefined;
    /** Indicates whether printing is allowed from managed apps. */
    public printBlocked?: boolean | undefined;
    /** Indicates whether users may use the 'Save As' menu item to save a copy of protected files. */
    public saveAsBlocked?: boolean | undefined;
    /** Indicates whether simplePin is blocked. */
    public simplePinBlocked?: boolean | undefined;
    /**
     * Instantiates a new managedAppProtection and sets the default values.
     * @param managedAppProtectionParameterValue 
     */
    public constructor(managedAppProtectionParameterValue?: ManagedAppProtection | undefined) {
        super();
        this.allowedDataStorageLocations = managedAppProtectionParameterValue?.allowedDataStorageLocations ;
        this.allowedInboundDataTransferSources = managedAppProtectionParameterValue?.allowedInboundDataTransferSources ;
        this.allowedOutboundClipboardSharingLevel = managedAppProtectionParameterValue?.allowedOutboundClipboardSharingLevel ;
        this.allowedOutboundDataTransferDestinations = managedAppProtectionParameterValue?.allowedOutboundDataTransferDestinations ;
        this.contactSyncBlocked = managedAppProtectionParameterValue?.contactSyncBlocked ;
        this.dataBackupBlocked = managedAppProtectionParameterValue?.dataBackupBlocked ;
        this.deviceComplianceRequired = managedAppProtectionParameterValue?.deviceComplianceRequired ;
        this.disableAppPinIfDevicePinIsSet = managedAppProtectionParameterValue?.disableAppPinIfDevicePinIsSet ;
        this.fingerprintBlocked = managedAppProtectionParameterValue?.fingerprintBlocked ;
        this.managedBrowser = managedAppProtectionParameterValue?.managedBrowser ;
        this.managedBrowserToOpenLinksRequired = managedAppProtectionParameterValue?.managedBrowserToOpenLinksRequired ;
        this.maximumPinRetries = managedAppProtectionParameterValue?.maximumPinRetries ;
        this.minimumPinLength = managedAppProtectionParameterValue?.minimumPinLength ;
        this.minimumRequiredAppVersion = managedAppProtectionParameterValue?.minimumRequiredAppVersion ;
        this.minimumRequiredOsVersion = managedAppProtectionParameterValue?.minimumRequiredOsVersion ;
        this.minimumWarningAppVersion = managedAppProtectionParameterValue?.minimumWarningAppVersion ;
        this.minimumWarningOsVersion = managedAppProtectionParameterValue?.minimumWarningOsVersion ;
        this.organizationalCredentialsRequired = managedAppProtectionParameterValue?.organizationalCredentialsRequired ;
        this.periodBeforePinReset = managedAppProtectionParameterValue?.periodBeforePinReset ;
        this.periodOfflineBeforeAccessCheck = managedAppProtectionParameterValue?.periodOfflineBeforeAccessCheck ;
        this.periodOfflineBeforeWipeIsEnforced = managedAppProtectionParameterValue?.periodOfflineBeforeWipeIsEnforced ;
        this.periodOnlineBeforeAccessCheck = managedAppProtectionParameterValue?.periodOnlineBeforeAccessCheck ;
        this.pinCharacterSet = managedAppProtectionParameterValue?.pinCharacterSet ;
        this.pinRequired = managedAppProtectionParameterValue?.pinRequired ;
        this.printBlocked = managedAppProtectionParameterValue?.printBlocked ;
        this.saveAsBlocked = managedAppProtectionParameterValue?.saveAsBlocked ;
        this.simplePinBlocked = managedAppProtectionParameterValue?.simplePinBlocked ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "allowedDataStorageLocations": n => { this.allowedDataStorageLocations = n.getCollectionOfPrimitiveValues<string>(); },
            "allowedInboundDataTransferSources": n => { this.allowedInboundDataTransferSources = n.getEnumValue<ManagedAppDataTransferLevel>(ManagedAppDataTransferLevel); },
            "allowedOutboundClipboardSharingLevel": n => { this.allowedOutboundClipboardSharingLevel = n.getEnumValue<ManagedAppClipboardSharingLevel>(ManagedAppClipboardSharingLevel); },
            "allowedOutboundDataTransferDestinations": n => { this.allowedOutboundDataTransferDestinations = n.getEnumValue<ManagedAppDataTransferLevel>(ManagedAppDataTransferLevel); },
            "contactSyncBlocked": n => { this.contactSyncBlocked = n.getBooleanValue(); },
            "dataBackupBlocked": n => { this.dataBackupBlocked = n.getBooleanValue(); },
            "deviceComplianceRequired": n => { this.deviceComplianceRequired = n.getBooleanValue(); },
            "disableAppPinIfDevicePinIsSet": n => { this.disableAppPinIfDevicePinIsSet = n.getBooleanValue(); },
            "fingerprintBlocked": n => { this.fingerprintBlocked = n.getBooleanValue(); },
            "managedBrowser": n => { this.managedBrowser = n.getEnumValue<ManagedBrowserType>(ManagedBrowserType); },
            "managedBrowserToOpenLinksRequired": n => { this.managedBrowserToOpenLinksRequired = n.getBooleanValue(); },
            "maximumPinRetries": n => { this.maximumPinRetries = n.getNumberValue(); },
            "minimumPinLength": n => { this.minimumPinLength = n.getNumberValue(); },
            "minimumRequiredAppVersion": n => { this.minimumRequiredAppVersion = n.getStringValue(); },
            "minimumRequiredOsVersion": n => { this.minimumRequiredOsVersion = n.getStringValue(); },
            "minimumWarningAppVersion": n => { this.minimumWarningAppVersion = n.getStringValue(); },
            "minimumWarningOsVersion": n => { this.minimumWarningOsVersion = n.getStringValue(); },
            "organizationalCredentialsRequired": n => { this.organizationalCredentialsRequired = n.getBooleanValue(); },
            "periodBeforePinReset": n => { this.periodBeforePinReset = n.getDurationValue(); },
            "periodOfflineBeforeAccessCheck": n => { this.periodOfflineBeforeAccessCheck = n.getDurationValue(); },
            "periodOfflineBeforeWipeIsEnforced": n => { this.periodOfflineBeforeWipeIsEnforced = n.getDurationValue(); },
            "periodOnlineBeforeAccessCheck": n => { this.periodOnlineBeforeAccessCheck = n.getDurationValue(); },
            "pinCharacterSet": n => { this.pinCharacterSet = n.getEnumValue<ManagedAppPinCharacterSet>(ManagedAppPinCharacterSet); },
            "pinRequired": n => { this.pinRequired = n.getBooleanValue(); },
            "printBlocked": n => { this.printBlocked = n.getBooleanValue(); },
            "saveAsBlocked": n => { this.saveAsBlocked = n.getBooleanValue(); },
            "simplePinBlocked": n => { this.simplePinBlocked = n.getBooleanValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.allowedDataStorageLocations){
        writer.writeCollectionOfPrimitiveValues<string>("allowedDataStorageLocations", this.allowedDataStorageLocations);
        }
        if(this.allowedInboundDataTransferSources){
        writer.writeEnumValue<ManagedAppDataTransferLevel>("allowedInboundDataTransferSources", this.allowedInboundDataTransferSources);
        }
        if(this.allowedOutboundClipboardSharingLevel){
        writer.writeEnumValue<ManagedAppClipboardSharingLevel>("allowedOutboundClipboardSharingLevel", this.allowedOutboundClipboardSharingLevel);
        }
        if(this.allowedOutboundDataTransferDestinations){
        writer.writeEnumValue<ManagedAppDataTransferLevel>("allowedOutboundDataTransferDestinations", this.allowedOutboundDataTransferDestinations);
        }
        if(this.contactSyncBlocked){
        writer.writeBooleanValue("contactSyncBlocked", this.contactSyncBlocked);
        }
        if(this.dataBackupBlocked){
        writer.writeBooleanValue("dataBackupBlocked", this.dataBackupBlocked);
        }
        if(this.deviceComplianceRequired){
        writer.writeBooleanValue("deviceComplianceRequired", this.deviceComplianceRequired);
        }
        if(this.disableAppPinIfDevicePinIsSet){
        writer.writeBooleanValue("disableAppPinIfDevicePinIsSet", this.disableAppPinIfDevicePinIsSet);
        }
        if(this.fingerprintBlocked){
        writer.writeBooleanValue("fingerprintBlocked", this.fingerprintBlocked);
        }
        if(this.managedBrowser){
        writer.writeEnumValue<ManagedBrowserType>("managedBrowser", this.managedBrowser);
        }
        if(this.managedBrowserToOpenLinksRequired){
        writer.writeBooleanValue("managedBrowserToOpenLinksRequired", this.managedBrowserToOpenLinksRequired);
        }
        if(this.maximumPinRetries){
        writer.writeNumberValue("maximumPinRetries", this.maximumPinRetries);
        }
        if(this.minimumPinLength){
        writer.writeNumberValue("minimumPinLength", this.minimumPinLength);
        }
        if(this.minimumRequiredAppVersion){
        writer.writeStringValue("minimumRequiredAppVersion", this.minimumRequiredAppVersion);
        }
        if(this.minimumRequiredOsVersion){
        writer.writeStringValue("minimumRequiredOsVersion", this.minimumRequiredOsVersion);
        }
        if(this.minimumWarningAppVersion){
        writer.writeStringValue("minimumWarningAppVersion", this.minimumWarningAppVersion);
        }
        if(this.minimumWarningOsVersion){
        writer.writeStringValue("minimumWarningOsVersion", this.minimumWarningOsVersion);
        }
        if(this.organizationalCredentialsRequired){
        writer.writeBooleanValue("organizationalCredentialsRequired", this.organizationalCredentialsRequired);
        }
        if(this.periodBeforePinReset){
        writer.writeDurationValue("periodBeforePinReset", this.periodBeforePinReset);
        }
        if(this.periodOfflineBeforeAccessCheck){
        writer.writeDurationValue("periodOfflineBeforeAccessCheck", this.periodOfflineBeforeAccessCheck);
        }
        if(this.periodOfflineBeforeWipeIsEnforced){
        writer.writeDurationValue("periodOfflineBeforeWipeIsEnforced", this.periodOfflineBeforeWipeIsEnforced);
        }
        if(this.periodOnlineBeforeAccessCheck){
        writer.writeDurationValue("periodOnlineBeforeAccessCheck", this.periodOnlineBeforeAccessCheck);
        }
        if(this.pinCharacterSet){
        writer.writeEnumValue<ManagedAppPinCharacterSet>("pinCharacterSet", this.pinCharacterSet);
        }
        if(this.pinRequired){
        writer.writeBooleanValue("pinRequired", this.pinRequired);
        }
        if(this.printBlocked){
        writer.writeBooleanValue("printBlocked", this.printBlocked);
        }
        if(this.saveAsBlocked){
        writer.writeBooleanValue("saveAsBlocked", this.saveAsBlocked);
        }
        if(this.simplePinBlocked){
        writer.writeBooleanValue("simplePinBlocked", this.simplePinBlocked);
        }
    };
}
