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

/** Policy used to configure detailed management settings for a specified set of apps for all users not targeted by a TargetedManagedAppProtection Policy */
export class DefaultManagedAppProtectionImpl extends ManagedAppProtectionImpl implements DefaultManagedAppProtection, Parsable {
    /** Type of encryption which should be used for data in a managed app. (iOS Only). Possible values are: useDeviceSettings, afterDeviceRestart, whenDeviceLockedExceptOpenFiles, whenDeviceLocked. */
    public appDataEncryptionType?: ManagedAppDataEncryptionType | undefined;
    /** List of apps to which the policy is deployed. */
    public apps?: ManagedMobileApp[] | undefined;
    /** A set of string key and string value pairs to be sent to the affected users, unalterned by this service */
    public customSettings?: KeyValuePair[] | undefined;
    /** Count of apps to which the current policy is deployed. */
    public deployedAppCount?: number | undefined;
    /** Navigation property to deployment summary of the configuration. */
    public deploymentSummary?: ManagedAppPolicyDeploymentSummary | undefined;
    /** When this setting is enabled, app level encryption is disabled if device level encryption is enabled. (Android only) */
    public disableAppEncryptionIfDeviceEncryptionIsEnabled?: boolean | undefined;
    /** Indicates whether managed-app data should be encrypted. (Android only) */
    public encryptAppData?: boolean | undefined;
    /** Indicates whether use of the FaceID is allowed in place of a pin if PinRequired is set to True. (iOS Only) */
    public faceIdBlocked?: boolean | undefined;
    /** Define the oldest required Android security patch level a user can have to gain secure access to the app. (Android only) */
    public minimumRequiredPatchVersion?: string | undefined;
    /** Versions less than the specified version will block the managed app from accessing company data. (iOS Only) */
    public minimumRequiredSdkVersion?: string | undefined;
    /** Define the oldest recommended Android security patch level a user can have for secure access to the app. (Android only) */
    public minimumWarningPatchVersion?: string | undefined;
    /** Indicates whether screen capture is blocked. (Android only) */
    public screenCaptureBlocked?: boolean | undefined;
    /**
     * Instantiates a new defaultManagedAppProtection and sets the default values.
     * @param defaultManagedAppProtectionParameterValue 
     */
    public constructor(defaultManagedAppProtectionParameterValue?: DefaultManagedAppProtection | undefined) {
        super();
        this.appDataEncryptionType = defaultManagedAppProtectionParameterValue?.appDataEncryptionType ;
        this.apps = defaultManagedAppProtectionParameterValue?.apps ;
        this.customSettings = defaultManagedAppProtectionParameterValue?.customSettings ;
        this.deployedAppCount = defaultManagedAppProtectionParameterValue?.deployedAppCount ;
        this.deploymentSummary = defaultManagedAppProtectionParameterValue?.deploymentSummary ;
        this.disableAppEncryptionIfDeviceEncryptionIsEnabled = defaultManagedAppProtectionParameterValue?.disableAppEncryptionIfDeviceEncryptionIsEnabled ;
        this.encryptAppData = defaultManagedAppProtectionParameterValue?.encryptAppData ;
        this.faceIdBlocked = defaultManagedAppProtectionParameterValue?.faceIdBlocked ;
        this.minimumRequiredPatchVersion = defaultManagedAppProtectionParameterValue?.minimumRequiredPatchVersion ;
        this.minimumRequiredSdkVersion = defaultManagedAppProtectionParameterValue?.minimumRequiredSdkVersion ;
        this.minimumWarningPatchVersion = defaultManagedAppProtectionParameterValue?.minimumWarningPatchVersion ;
        this.screenCaptureBlocked = defaultManagedAppProtectionParameterValue?.screenCaptureBlocked ;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.appDataEncryptionType){
        writer.writeEnumValue<ManagedAppDataEncryptionType>("appDataEncryptionType", this.appDataEncryptionType);
        }
        if(this.apps && this.apps.length != 0){        const appsArrValue: ManagedMobileAppImpl[] = []; this.apps?.forEach(element => {appsArrValue.push(new ManagedMobileAppImpl(element));});
        writer.writeCollectionOfObjectValues<ManagedMobileAppImpl>("apps", appsArrValue);
        }
        if(this.customSettings && this.customSettings.length != 0){        const customSettingsArrValue: KeyValuePairImpl[] = []; this.customSettings?.forEach(element => {customSettingsArrValue.push(new KeyValuePairImpl(element));});
        writer.writeCollectionOfObjectValues<KeyValuePairImpl>("customSettings", customSettingsArrValue);
        }
        if(this.deployedAppCount){
        writer.writeNumberValue("deployedAppCount", this.deployedAppCount);
        }
        if(this.deploymentSummary){
        writer.writeObjectValue<ManagedAppPolicyDeploymentSummaryImpl>("deploymentSummary", new ManagedAppPolicyDeploymentSummaryImpl(this.deploymentSummary));
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
