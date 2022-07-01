import {createKeyValuePairFromDiscriminatorValue} from './createKeyValuePairFromDiscriminatorValue';
import {createManagedAppPolicyDeploymentSummaryFromDiscriminatorValue} from './createManagedAppPolicyDeploymentSummaryFromDiscriminatorValue';
import {createManagedMobileAppFromDiscriminatorValue} from './createManagedMobileAppFromDiscriminatorValue';
import {DefaultManagedAppProtection} from './defaultManagedAppProtection';
import {KeyValuePairImpl, ManagedAppPolicyDeploymentSummaryImpl, ManagedAppProtectionImpl, ManagedMobileAppImpl} from './index';
import {KeyValuePair} from './keyValuePair';
import {ManagedAppDataEncryptionType} from './managedAppDataEncryptionType';
import {ManagedAppPolicyDeploymentSummary} from './managedAppPolicyDeploymentSummary';
import {ManagedMobileApp} from './managedMobileApp';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DefaultManagedAppProtectionImpl extends ManagedAppProtectionImpl implements DefaultManagedAppProtection {
    /** Type of encryption which should be used for data in a managed app. (iOS Only). Possible values are: useDeviceSettings, afterDeviceRestart, whenDeviceLockedExceptOpenFiles, whenDeviceLocked. */
    private _appDataEncryptionType?: ManagedAppDataEncryptionType | undefined;
    /** List of apps to which the policy is deployed. */
    private _apps?: ManagedMobileApp[] | undefined;
    /** A set of string key and string value pairs to be sent to the affected users, unalterned by this service */
    private _customSettings?: KeyValuePair[] | undefined;
    /** Count of apps to which the current policy is deployed. */
    private _deployedAppCount?: number | undefined;
    /** Navigation property to deployment summary of the configuration. */
    private _deploymentSummary?: ManagedAppPolicyDeploymentSummary | undefined;
    /** When this setting is enabled, app level encryption is disabled if device level encryption is enabled. (Android only) */
    private _disableAppEncryptionIfDeviceEncryptionIsEnabled?: boolean | undefined;
    /** Indicates whether managed-app data should be encrypted. (Android only) */
    private _encryptAppData?: boolean | undefined;
    /** Indicates whether use of the FaceID is allowed in place of a pin if PinRequired is set to True. (iOS Only) */
    private _faceIdBlocked?: boolean | undefined;
    /** Define the oldest required Android security patch level a user can have to gain secure access to the app. (Android only) */
    private _minimumRequiredPatchVersion?: string | undefined;
    /** Versions less than the specified version will block the managed app from accessing company data. (iOS Only) */
    private _minimumRequiredSdkVersion?: string | undefined;
    /** Define the oldest recommended Android security patch level a user can have for secure access to the app. (Android only) */
    private _minimumWarningPatchVersion?: string | undefined;
    /** Indicates whether screen capture is blocked. (Android only) */
    private _screenCaptureBlocked?: boolean | undefined;
    /**
     * Gets the appDataEncryptionType property value. Type of encryption which should be used for data in a managed app. (iOS Only). Possible values are: useDeviceSettings, afterDeviceRestart, whenDeviceLockedExceptOpenFiles, whenDeviceLocked.
     * @returns a managedAppDataEncryptionType
     */
    public get appDataEncryptionType() {
        return this._appDataEncryptionType;
    };
    /**
     * Sets the appDataEncryptionType property value. Type of encryption which should be used for data in a managed app. (iOS Only). Possible values are: useDeviceSettings, afterDeviceRestart, whenDeviceLockedExceptOpenFiles, whenDeviceLocked.
     * @param value Value to set for the appDataEncryptionType property.
     */
    public set appDataEncryptionType(value: ManagedAppDataEncryptionType | undefined) {
        if(value) {
            this._appDataEncryptionType = value;
        }
    };
    /**
     * Gets the apps property value. List of apps to which the policy is deployed.
     * @returns a ManagedMobileAppInterface
     */
    public get apps() {
        return this._apps;
    };
    /**
     * Sets the apps property value. List of apps to which the policy is deployed.
     * @param value Value to set for the apps property.
     */
    public set apps(value: ManagedMobileApp[] | undefined) {
        if(value) {
            const appsArrValue: ManagedMobileAppImpl[] = [];
            this.apps?.forEach(element => {
                appsArrValue.push((element instanceof ManagedMobileAppImpl? element as ManagedMobileAppImpl:new ManagedMobileAppImpl(element)));
            });
            this._apps = appsArrValue;
        }
    };
    /**
     * Instantiates a new DefaultManagedAppProtection and sets the default values.
     * @param defaultManagedAppProtectionParameterValue 
     */
    public constructor(defaultManagedAppProtectionParameterValue?: DefaultManagedAppProtection | undefined) {
        super(defaultManagedAppProtectionParameterValue);
        this._appDataEncryptionType = defaultManagedAppProtectionParameterValue?.appDataEncryptionType;
        this._apps = defaultManagedAppProtectionParameterValue?.apps;
        this._customSettings = defaultManagedAppProtectionParameterValue?.customSettings;
        this._deployedAppCount = defaultManagedAppProtectionParameterValue?.deployedAppCount;
        this._deploymentSummary = defaultManagedAppProtectionParameterValue?.deploymentSummary;
        this._disableAppEncryptionIfDeviceEncryptionIsEnabled = defaultManagedAppProtectionParameterValue?.disableAppEncryptionIfDeviceEncryptionIsEnabled;
        this._encryptAppData = defaultManagedAppProtectionParameterValue?.encryptAppData;
        this._faceIdBlocked = defaultManagedAppProtectionParameterValue?.faceIdBlocked;
        this._minimumRequiredPatchVersion = defaultManagedAppProtectionParameterValue?.minimumRequiredPatchVersion;
        this._minimumRequiredSdkVersion = defaultManagedAppProtectionParameterValue?.minimumRequiredSdkVersion;
        this._minimumWarningPatchVersion = defaultManagedAppProtectionParameterValue?.minimumWarningPatchVersion;
        this._screenCaptureBlocked = defaultManagedAppProtectionParameterValue?.screenCaptureBlocked;
    };
    /**
     * Gets the customSettings property value. A set of string key and string value pairs to be sent to the affected users, unalterned by this service
     * @returns a KeyValuePairInterface
     */
    public get customSettings() {
        return this._customSettings;
    };
    /**
     * Sets the customSettings property value. A set of string key and string value pairs to be sent to the affected users, unalterned by this service
     * @param value Value to set for the customSettings property.
     */
    public set customSettings(value: KeyValuePair[] | undefined) {
        if(value) {
            const customSettingsArrValue: KeyValuePairImpl[] = [];
            this.customSettings?.forEach(element => {
                customSettingsArrValue.push((element instanceof KeyValuePairImpl? element as KeyValuePairImpl:new KeyValuePairImpl(element)));
            });
            this._customSettings = customSettingsArrValue;
        }
    };
    /**
     * Gets the deployedAppCount property value. Count of apps to which the current policy is deployed.
     * @returns a integer
     */
    public get deployedAppCount() {
        return this._deployedAppCount;
    };
    /**
     * Sets the deployedAppCount property value. Count of apps to which the current policy is deployed.
     * @param value Value to set for the deployedAppCount property.
     */
    public set deployedAppCount(value: number | undefined) {
        if(value) {
            this._deployedAppCount = value;
        }
    };
    /**
     * Gets the deploymentSummary property value. Navigation property to deployment summary of the configuration.
     * @returns a ManagedAppPolicyDeploymentSummaryInterface
     */
    public get deploymentSummary() {
        return this._deploymentSummary;
    };
    /**
     * Sets the deploymentSummary property value. Navigation property to deployment summary of the configuration.
     * @param value Value to set for the deploymentSummary property.
     */
    public set deploymentSummary(value: ManagedAppPolicyDeploymentSummary | undefined) {
        if(value) {
            this._deploymentSummary = value instanceof ManagedAppPolicyDeploymentSummaryImpl? value as ManagedAppPolicyDeploymentSummaryImpl: new ManagedAppPolicyDeploymentSummaryImpl(value);
        }
    };
    /**
     * Gets the disableAppEncryptionIfDeviceEncryptionIsEnabled property value. When this setting is enabled, app level encryption is disabled if device level encryption is enabled. (Android only)
     * @returns a boolean
     */
    public get disableAppEncryptionIfDeviceEncryptionIsEnabled() {
        return this._disableAppEncryptionIfDeviceEncryptionIsEnabled;
    };
    /**
     * Sets the disableAppEncryptionIfDeviceEncryptionIsEnabled property value. When this setting is enabled, app level encryption is disabled if device level encryption is enabled. (Android only)
     * @param value Value to set for the disableAppEncryptionIfDeviceEncryptionIsEnabled property.
     */
    public set disableAppEncryptionIfDeviceEncryptionIsEnabled(value: boolean | undefined) {
        if(value) {
            this._disableAppEncryptionIfDeviceEncryptionIsEnabled = value;
        }
    };
    /**
     * Gets the encryptAppData property value. Indicates whether managed-app data should be encrypted. (Android only)
     * @returns a boolean
     */
    public get encryptAppData() {
        return this._encryptAppData;
    };
    /**
     * Sets the encryptAppData property value. Indicates whether managed-app data should be encrypted. (Android only)
     * @param value Value to set for the encryptAppData property.
     */
    public set encryptAppData(value: boolean | undefined) {
        if(value) {
            this._encryptAppData = value;
        }
    };
    /**
     * Gets the faceIdBlocked property value. Indicates whether use of the FaceID is allowed in place of a pin if PinRequired is set to True. (iOS Only)
     * @returns a boolean
     */
    public get faceIdBlocked() {
        return this._faceIdBlocked;
    };
    /**
     * Sets the faceIdBlocked property value. Indicates whether use of the FaceID is allowed in place of a pin if PinRequired is set to True. (iOS Only)
     * @param value Value to set for the faceIdBlocked property.
     */
    public set faceIdBlocked(value: boolean | undefined) {
        if(value) {
            this._faceIdBlocked = value;
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "appDataEncryptionType": n => { this.appDataEncryptionType = n.getEnumValue<ManagedAppDataEncryptionType>(ManagedAppDataEncryptionType); },
            "apps": n => { this.apps = n.getCollectionOfObjectValues<ManagedMobileAppImpl>(createManagedMobileAppFromDiscriminatorValue); },
            "customSettings": n => { this.customSettings = n.getCollectionOfObjectValues<KeyValuePairImpl>(createKeyValuePairFromDiscriminatorValue); },
            "deployedAppCount": n => { this.deployedAppCount = n.getNumberValue(); },
            "deploymentSummary": n => { this.deploymentSummary = n.getObjectValue<ManagedAppPolicyDeploymentSummaryImpl>(createManagedAppPolicyDeploymentSummaryFromDiscriminatorValue); },
            "disableAppEncryptionIfDeviceEncryptionIsEnabled": n => { this.disableAppEncryptionIfDeviceEncryptionIsEnabled = n.getBooleanValue(); },
            "encryptAppData": n => { this.encryptAppData = n.getBooleanValue(); },
            "faceIdBlocked": n => { this.faceIdBlocked = n.getBooleanValue(); },
            "minimumRequiredPatchVersion": n => { this.minimumRequiredPatchVersion = n.getStringValue(); },
            "minimumRequiredSdkVersion": n => { this.minimumRequiredSdkVersion = n.getStringValue(); },
            "minimumWarningPatchVersion": n => { this.minimumWarningPatchVersion = n.getStringValue(); },
            "screenCaptureBlocked": n => { this.screenCaptureBlocked = n.getBooleanValue(); },
        };
    };
    /**
     * Gets the minimumRequiredPatchVersion property value. Define the oldest required Android security patch level a user can have to gain secure access to the app. (Android only)
     * @returns a string
     */
    public get minimumRequiredPatchVersion() {
        return this._minimumRequiredPatchVersion;
    };
    /**
     * Sets the minimumRequiredPatchVersion property value. Define the oldest required Android security patch level a user can have to gain secure access to the app. (Android only)
     * @param value Value to set for the minimumRequiredPatchVersion property.
     */
    public set minimumRequiredPatchVersion(value: string | undefined) {
        if(value) {
            this._minimumRequiredPatchVersion = value;
        }
    };
    /**
     * Gets the minimumRequiredSdkVersion property value. Versions less than the specified version will block the managed app from accessing company data. (iOS Only)
     * @returns a string
     */
    public get minimumRequiredSdkVersion() {
        return this._minimumRequiredSdkVersion;
    };
    /**
     * Sets the minimumRequiredSdkVersion property value. Versions less than the specified version will block the managed app from accessing company data. (iOS Only)
     * @param value Value to set for the minimumRequiredSdkVersion property.
     */
    public set minimumRequiredSdkVersion(value: string | undefined) {
        if(value) {
            this._minimumRequiredSdkVersion = value;
        }
    };
    /**
     * Gets the minimumWarningPatchVersion property value. Define the oldest recommended Android security patch level a user can have for secure access to the app. (Android only)
     * @returns a string
     */
    public get minimumWarningPatchVersion() {
        return this._minimumWarningPatchVersion;
    };
    /**
     * Sets the minimumWarningPatchVersion property value. Define the oldest recommended Android security patch level a user can have for secure access to the app. (Android only)
     * @param value Value to set for the minimumWarningPatchVersion property.
     */
    public set minimumWarningPatchVersion(value: string | undefined) {
        if(value) {
            this._minimumWarningPatchVersion = value;
        }
    };
    /**
     * Gets the screenCaptureBlocked property value. Indicates whether screen capture is blocked. (Android only)
     * @returns a boolean
     */
    public get screenCaptureBlocked() {
        return this._screenCaptureBlocked;
    };
    /**
     * Sets the screenCaptureBlocked property value. Indicates whether screen capture is blocked. (Android only)
     * @param value Value to set for the screenCaptureBlocked property.
     */
    public set screenCaptureBlocked(value: boolean | undefined) {
        if(value) {
            this._screenCaptureBlocked = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.appDataEncryptionType){
            writer.writeEnumValue<ManagedAppDataEncryptionType>("appDataEncryptionType", this.appDataEncryptionType);
        }
        if(this.apps && this.apps.length != 0){        const appsArrValue: ManagedMobileAppImpl[] = [];
        this.apps?.forEach(element => {
            appsArrValue.push((element instanceof ManagedMobileAppImpl? element as ManagedMobileAppImpl:new ManagedMobileAppImpl(element)));
        });
            writer.writeCollectionOfObjectValues<ManagedMobileAppImpl>("apps", appsArrValue);
        }
        if(this.customSettings && this.customSettings.length != 0){        const customSettingsArrValue: KeyValuePairImpl[] = [];
        this.customSettings?.forEach(element => {
            customSettingsArrValue.push((element instanceof KeyValuePairImpl? element as KeyValuePairImpl:new KeyValuePairImpl(element)));
        });
            writer.writeCollectionOfObjectValues<KeyValuePairImpl>("customSettings", customSettingsArrValue);
        }
        if(this.deployedAppCount){
            writer.writeNumberValue("deployedAppCount", this.deployedAppCount);
        }
        if(this.deploymentSummary){
            writer.writeObjectValue<ManagedAppPolicyDeploymentSummaryImpl>("deploymentSummary", (this.deploymentSummary instanceof ManagedAppPolicyDeploymentSummaryImpl? this.deploymentSummary as ManagedAppPolicyDeploymentSummaryImpl: new ManagedAppPolicyDeploymentSummaryImpl(this.deploymentSummary)));
        }
        if(this.disableAppEncryptionIfDeviceEncryptionIsEnabled){
            writer.writeBooleanValue("disableAppEncryptionIfDeviceEncryptionIsEnabled", this.disableAppEncryptionIfDeviceEncryptionIsEnabled);
        }
        if(this.encryptAppData){
            writer.writeBooleanValue("encryptAppData", this.encryptAppData);
        }
        if(this.faceIdBlocked){
            writer.writeBooleanValue("faceIdBlocked", this.faceIdBlocked);
        }
        if(this.minimumRequiredPatchVersion){
            writer.writeStringValue("minimumRequiredPatchVersion", this.minimumRequiredPatchVersion);
        }
        if(this.minimumRequiredSdkVersion){
            writer.writeStringValue("minimumRequiredSdkVersion", this.minimumRequiredSdkVersion);
        }
        if(this.minimumWarningPatchVersion){
            writer.writeStringValue("minimumWarningPatchVersion", this.minimumWarningPatchVersion);
        }
        if(this.screenCaptureBlocked){
            writer.writeBooleanValue("screenCaptureBlocked", this.screenCaptureBlocked);
        }
    };
}
