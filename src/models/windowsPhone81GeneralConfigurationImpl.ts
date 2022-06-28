import {AppListItem} from './appListItem';
import {AppListType} from './appListType';
import {createAppListItemFromDiscriminatorValue} from './createAppListItemFromDiscriminatorValue';
import {AppListItemImpl, DeviceConfigurationImpl} from './index';
import {RequiredPasswordType} from './requiredPasswordType';
import {WindowsPhone81GeneralConfiguration} from './windowsPhone81GeneralConfiguration';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class WindowsPhone81GeneralConfigurationImpl extends DeviceConfigurationImpl implements WindowsPhone81GeneralConfiguration {
    /** Value indicating whether this policy only applies to Windows Phone 8.1. This property is read-only. */
    public applyOnlyToWindowsPhone81?: boolean | undefined;
    /** Indicates whether or not to block copy paste. */
    public appsBlockCopyPaste?: boolean | undefined;
    /** Indicates whether or not to block bluetooth. */
    public bluetoothBlocked?: boolean | undefined;
    /** Indicates whether or not to block camera. */
    public cameraBlocked?: boolean | undefined;
    /** Indicates whether or not to block Wi-Fi tethering. Has no impact if Wi-Fi is blocked. */
    public cellularBlockWifiTethering?: boolean | undefined;
    /** List that is in the AppComplianceList. Possible values are: none, appsInListCompliant, appsNotInListCompliant. */
    public compliantAppListType?: AppListType | undefined;
    /** List of apps in the compliance (either allow list or block list, controlled by CompliantAppListType). This collection can contain a maximum of 10000 elements. */
    public compliantAppsList?: AppListItem[] | undefined;
    /** Indicates whether or not to block diagnostic data submission. */
    public diagnosticDataBlockSubmission?: boolean | undefined;
    /** Indicates whether or not to block custom email accounts. */
    public emailBlockAddingAccounts?: boolean | undefined;
    /** Indicates whether or not to block location services. */
    public locationServicesBlocked?: boolean | undefined;
    /** Indicates whether or not to block using a Microsoft Account. */
    public microsoftAccountBlocked?: boolean | undefined;
    /** Indicates whether or not to block Near-Field Communication. */
    public nfcBlocked?: boolean | undefined;
    /** Indicates whether or not to block syncing the calendar. */
    public passwordBlockSimple?: boolean | undefined;
    /** Number of days before the password expires. */
    public passwordExpirationDays?: number | undefined;
    /** Number of character sets a password must contain. */
    public passwordMinimumCharacterSetCount?: number | undefined;
    /** Minimum length of passwords. */
    public passwordMinimumLength?: number | undefined;
    /** Minutes of inactivity before screen timeout. */
    public passwordMinutesOfInactivityBeforeScreenTimeout?: number | undefined;
    /** Number of previous passwords to block. Valid values 0 to 24 */
    public passwordPreviousPasswordBlockCount?: number | undefined;
    /** Indicates whether or not to require a password. */
    public passwordRequired?: boolean | undefined;
    /** Password type that is required. Possible values are: deviceDefault, alphanumeric, numeric. */
    public passwordRequiredType?: RequiredPasswordType | undefined;
    /** Number of sign in failures allowed before factory reset. */
    public passwordSignInFailureCountBeforeFactoryReset?: number | undefined;
    /** Indicates whether or not to block screenshots. */
    public screenCaptureBlocked?: boolean | undefined;
    /** Indicates whether or not to block removable storage. */
    public storageBlockRemovableStorage?: boolean | undefined;
    /** Indicates whether or not to require encryption. */
    public storageRequireEncryption?: boolean | undefined;
    /** Indicates whether or not to block the web browser. */
    public webBrowserBlocked?: boolean | undefined;
    /** Indicates whether or not to block automatically connecting to Wi-Fi hotspots. Has no impact if Wi-Fi is blocked. */
    public wifiBlockAutomaticConnectHotspots?: boolean | undefined;
    /** Indicates whether or not to block Wi-Fi. */
    public wifiBlocked?: boolean | undefined;
    /** Indicates whether or not to block Wi-Fi hotspot reporting. Has no impact if Wi-Fi is blocked. */
    public wifiBlockHotspotReporting?: boolean | undefined;
    /** Indicates whether or not to block the Windows Store. */
    public windowsStoreBlocked?: boolean | undefined;
    /**
     * Instantiates a new WindowsPhone81GeneralConfiguration and sets the default values.
     * @param windowsPhone81GeneralConfigurationParameterValue 
     */
    public constructor(windowsPhone81GeneralConfigurationParameterValue?: WindowsPhone81GeneralConfiguration | undefined) {
        super(windowsPhone81GeneralConfigurationParameterValue);
        this.applyOnlyToWindowsPhone81 = windowsPhone81GeneralConfigurationParameterValue?.applyOnlyToWindowsPhone81;
        this.appsBlockCopyPaste = windowsPhone81GeneralConfigurationParameterValue?.appsBlockCopyPaste;
        this.bluetoothBlocked = windowsPhone81GeneralConfigurationParameterValue?.bluetoothBlocked;
        this.cameraBlocked = windowsPhone81GeneralConfigurationParameterValue?.cameraBlocked;
        this.cellularBlockWifiTethering = windowsPhone81GeneralConfigurationParameterValue?.cellularBlockWifiTethering;
        this.compliantAppListType = windowsPhone81GeneralConfigurationParameterValue?.compliantAppListType;
        this.compliantAppsList = windowsPhone81GeneralConfigurationParameterValue?.compliantAppsList;
        this.diagnosticDataBlockSubmission = windowsPhone81GeneralConfigurationParameterValue?.diagnosticDataBlockSubmission;
        this.emailBlockAddingAccounts = windowsPhone81GeneralConfigurationParameterValue?.emailBlockAddingAccounts;
        this.locationServicesBlocked = windowsPhone81GeneralConfigurationParameterValue?.locationServicesBlocked;
        this.microsoftAccountBlocked = windowsPhone81GeneralConfigurationParameterValue?.microsoftAccountBlocked;
        this.nfcBlocked = windowsPhone81GeneralConfigurationParameterValue?.nfcBlocked;
        this.passwordBlockSimple = windowsPhone81GeneralConfigurationParameterValue?.passwordBlockSimple;
        this.passwordExpirationDays = windowsPhone81GeneralConfigurationParameterValue?.passwordExpirationDays;
        this.passwordMinimumCharacterSetCount = windowsPhone81GeneralConfigurationParameterValue?.passwordMinimumCharacterSetCount;
        this.passwordMinimumLength = windowsPhone81GeneralConfigurationParameterValue?.passwordMinimumLength;
        this.passwordMinutesOfInactivityBeforeScreenTimeout = windowsPhone81GeneralConfigurationParameterValue?.passwordMinutesOfInactivityBeforeScreenTimeout;
        this.passwordPreviousPasswordBlockCount = windowsPhone81GeneralConfigurationParameterValue?.passwordPreviousPasswordBlockCount;
        this.passwordRequired = windowsPhone81GeneralConfigurationParameterValue?.passwordRequired;
        this.passwordRequiredType = windowsPhone81GeneralConfigurationParameterValue?.passwordRequiredType;
        this.passwordSignInFailureCountBeforeFactoryReset = windowsPhone81GeneralConfigurationParameterValue?.passwordSignInFailureCountBeforeFactoryReset;
        this.screenCaptureBlocked = windowsPhone81GeneralConfigurationParameterValue?.screenCaptureBlocked;
        this.storageBlockRemovableStorage = windowsPhone81GeneralConfigurationParameterValue?.storageBlockRemovableStorage;
        this.storageRequireEncryption = windowsPhone81GeneralConfigurationParameterValue?.storageRequireEncryption;
        this.webBrowserBlocked = windowsPhone81GeneralConfigurationParameterValue?.webBrowserBlocked;
        this.wifiBlockAutomaticConnectHotspots = windowsPhone81GeneralConfigurationParameterValue?.wifiBlockAutomaticConnectHotspots;
        this.wifiBlocked = windowsPhone81GeneralConfigurationParameterValue?.wifiBlocked;
        this.wifiBlockHotspotReporting = windowsPhone81GeneralConfigurationParameterValue?.wifiBlockHotspotReporting;
        this.windowsStoreBlocked = windowsPhone81GeneralConfigurationParameterValue?.windowsStoreBlocked;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "applyOnlyToWindowsPhone81": n => { this.applyOnlyToWindowsPhone81 = n.getBooleanValue(); },
            "appsBlockCopyPaste": n => { this.appsBlockCopyPaste = n.getBooleanValue(); },
            "bluetoothBlocked": n => { this.bluetoothBlocked = n.getBooleanValue(); },
            "cameraBlocked": n => { this.cameraBlocked = n.getBooleanValue(); },
            "cellularBlockWifiTethering": n => { this.cellularBlockWifiTethering = n.getBooleanValue(); },
            "compliantAppListType": n => { this.compliantAppListType = n.getEnumValue<AppListType>(AppListType); },
            "compliantAppsList": n => { this.compliantAppsList = n.getCollectionOfObjectValues<AppListItemImpl>(createAppListItemFromDiscriminatorValue); },
            "diagnosticDataBlockSubmission": n => { this.diagnosticDataBlockSubmission = n.getBooleanValue(); },
            "emailBlockAddingAccounts": n => { this.emailBlockAddingAccounts = n.getBooleanValue(); },
            "locationServicesBlocked": n => { this.locationServicesBlocked = n.getBooleanValue(); },
            "microsoftAccountBlocked": n => { this.microsoftAccountBlocked = n.getBooleanValue(); },
            "nfcBlocked": n => { this.nfcBlocked = n.getBooleanValue(); },
            "passwordBlockSimple": n => { this.passwordBlockSimple = n.getBooleanValue(); },
            "passwordExpirationDays": n => { this.passwordExpirationDays = n.getNumberValue(); },
            "passwordMinimumCharacterSetCount": n => { this.passwordMinimumCharacterSetCount = n.getNumberValue(); },
            "passwordMinimumLength": n => { this.passwordMinimumLength = n.getNumberValue(); },
            "passwordMinutesOfInactivityBeforeScreenTimeout": n => { this.passwordMinutesOfInactivityBeforeScreenTimeout = n.getNumberValue(); },
            "passwordPreviousPasswordBlockCount": n => { this.passwordPreviousPasswordBlockCount = n.getNumberValue(); },
            "passwordRequired": n => { this.passwordRequired = n.getBooleanValue(); },
            "passwordRequiredType": n => { this.passwordRequiredType = n.getEnumValue<RequiredPasswordType>(RequiredPasswordType); },
            "passwordSignInFailureCountBeforeFactoryReset": n => { this.passwordSignInFailureCountBeforeFactoryReset = n.getNumberValue(); },
            "screenCaptureBlocked": n => { this.screenCaptureBlocked = n.getBooleanValue(); },
            "storageBlockRemovableStorage": n => { this.storageBlockRemovableStorage = n.getBooleanValue(); },
            "storageRequireEncryption": n => { this.storageRequireEncryption = n.getBooleanValue(); },
            "webBrowserBlocked": n => { this.webBrowserBlocked = n.getBooleanValue(); },
            "wifiBlockAutomaticConnectHotspots": n => { this.wifiBlockAutomaticConnectHotspots = n.getBooleanValue(); },
            "wifiBlocked": n => { this.wifiBlocked = n.getBooleanValue(); },
            "wifiBlockHotspotReporting": n => { this.wifiBlockHotspotReporting = n.getBooleanValue(); },
            "windowsStoreBlocked": n => { this.windowsStoreBlocked = n.getBooleanValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.applyOnlyToWindowsPhone81){
            writer.writeBooleanValue("applyOnlyToWindowsPhone81", this.applyOnlyToWindowsPhone81);
        }
        if(this.appsBlockCopyPaste){
            writer.writeBooleanValue("appsBlockCopyPaste", this.appsBlockCopyPaste);
        }
        if(this.bluetoothBlocked){
            writer.writeBooleanValue("bluetoothBlocked", this.bluetoothBlocked);
        }
        if(this.cameraBlocked){
            writer.writeBooleanValue("cameraBlocked", this.cameraBlocked);
        }
        if(this.cellularBlockWifiTethering){
            writer.writeBooleanValue("cellularBlockWifiTethering", this.cellularBlockWifiTethering);
        }
        if(this.compliantAppListType){
            writer.writeEnumValue<AppListType>("compliantAppListType", this.compliantAppListType);
        }
        if(this.compliantAppsList && this.compliantAppsList.length != 0){        const compliantAppsListArrValue: AppListItemImpl[] = []; this.compliantAppsList?.forEach(element => {compliantAppsListArrValue.push(new AppListItemImpl(element));});
            writer.writeCollectionOfObjectValues<AppListItemImpl>("compliantAppsList", compliantAppsListArrValue);
        }
        if(this.diagnosticDataBlockSubmission){
            writer.writeBooleanValue("diagnosticDataBlockSubmission", this.diagnosticDataBlockSubmission);
        }
        if(this.emailBlockAddingAccounts){
            writer.writeBooleanValue("emailBlockAddingAccounts", this.emailBlockAddingAccounts);
        }
        if(this.locationServicesBlocked){
            writer.writeBooleanValue("locationServicesBlocked", this.locationServicesBlocked);
        }
        if(this.microsoftAccountBlocked){
            writer.writeBooleanValue("microsoftAccountBlocked", this.microsoftAccountBlocked);
        }
        if(this.nfcBlocked){
            writer.writeBooleanValue("nfcBlocked", this.nfcBlocked);
        }
        if(this.passwordBlockSimple){
            writer.writeBooleanValue("passwordBlockSimple", this.passwordBlockSimple);
        }
        if(this.passwordExpirationDays){
            writer.writeNumberValue("passwordExpirationDays", this.passwordExpirationDays);
        }
        if(this.passwordMinimumCharacterSetCount){
            writer.writeNumberValue("passwordMinimumCharacterSetCount", this.passwordMinimumCharacterSetCount);
        }
        if(this.passwordMinimumLength){
            writer.writeNumberValue("passwordMinimumLength", this.passwordMinimumLength);
        }
        if(this.passwordMinutesOfInactivityBeforeScreenTimeout){
            writer.writeNumberValue("passwordMinutesOfInactivityBeforeScreenTimeout", this.passwordMinutesOfInactivityBeforeScreenTimeout);
        }
        if(this.passwordPreviousPasswordBlockCount){
            writer.writeNumberValue("passwordPreviousPasswordBlockCount", this.passwordPreviousPasswordBlockCount);
        }
        if(this.passwordRequired){
            writer.writeBooleanValue("passwordRequired", this.passwordRequired);
        }
        if(this.passwordRequiredType){
            writer.writeEnumValue<RequiredPasswordType>("passwordRequiredType", this.passwordRequiredType);
        }
        if(this.passwordSignInFailureCountBeforeFactoryReset){
            writer.writeNumberValue("passwordSignInFailureCountBeforeFactoryReset", this.passwordSignInFailureCountBeforeFactoryReset);
        }
        if(this.screenCaptureBlocked){
            writer.writeBooleanValue("screenCaptureBlocked", this.screenCaptureBlocked);
        }
        if(this.storageBlockRemovableStorage){
            writer.writeBooleanValue("storageBlockRemovableStorage", this.storageBlockRemovableStorage);
        }
        if(this.storageRequireEncryption){
            writer.writeBooleanValue("storageRequireEncryption", this.storageRequireEncryption);
        }
        if(this.webBrowserBlocked){
            writer.writeBooleanValue("webBrowserBlocked", this.webBrowserBlocked);
        }
        if(this.wifiBlockAutomaticConnectHotspots){
            writer.writeBooleanValue("wifiBlockAutomaticConnectHotspots", this.wifiBlockAutomaticConnectHotspots);
        }
        if(this.wifiBlocked){
            writer.writeBooleanValue("wifiBlocked", this.wifiBlocked);
        }
        if(this.wifiBlockHotspotReporting){
            writer.writeBooleanValue("wifiBlockHotspotReporting", this.wifiBlockHotspotReporting);
        }
        if(this.windowsStoreBlocked){
            writer.writeBooleanValue("windowsStoreBlocked", this.windowsStoreBlocked);
        }
    };
}
