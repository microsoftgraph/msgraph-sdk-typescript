import {AndroidManagedAppProtection} from './androidManagedAppProtection';
import {createManagedAppPolicyDeploymentSummaryFromDiscriminatorValue} from './createManagedAppPolicyDeploymentSummaryFromDiscriminatorValue';
import {createManagedMobileAppFromDiscriminatorValue} from './createManagedMobileAppFromDiscriminatorValue';
import {ManagedAppPolicyDeploymentSummaryImpl, ManagedMobileAppImpl, TargetedManagedAppProtectionImpl} from './index';
import {ManagedAppPolicyDeploymentSummary} from './managedAppPolicyDeploymentSummary';
import {ManagedMobileApp} from './managedMobileApp';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AndroidManagedAppProtectionImpl extends TargetedManagedAppProtectionImpl implements AndroidManagedAppProtection {
    /** List of apps to which the policy is deployed. */
    private _apps?: ManagedMobileApp[] | undefined;
    /** Friendly name of the preferred custom browser to open weblink on Android. */
    private _customBrowserDisplayName?: string | undefined;
    /** Unique identifier of a custom browser to open weblink on Android. */
    private _customBrowserPackageId?: string | undefined;
    /** Count of apps to which the current policy is deployed. */
    private _deployedAppCount?: number | undefined;
    /** Navigation property to deployment summary of the configuration. */
    private _deploymentSummary?: ManagedAppPolicyDeploymentSummary | undefined;
    /** When this setting is enabled, app level encryption is disabled if device level encryption is enabled */
    private _disableAppEncryptionIfDeviceEncryptionIsEnabled?: boolean | undefined;
    /** Indicates whether application data for managed apps should be encrypted */
    private _encryptAppData?: boolean | undefined;
    /** Define the oldest required Android security patch level a user can have to gain secure access to the app. */
    private _minimumRequiredPatchVersion?: string | undefined;
    /** Define the oldest recommended Android security patch level a user can have for secure access to the app. */
    private _minimumWarningPatchVersion?: string | undefined;
    /** Indicates whether a managed user can take screen captures of managed apps */
    private _screenCaptureBlocked?: boolean | undefined;
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
     * Instantiates a new AndroidManagedAppProtection and sets the default values.
     * @param androidManagedAppProtectionParameterValue 
     */
    public constructor(androidManagedAppProtectionParameterValue?: AndroidManagedAppProtection | undefined) {
        super(androidManagedAppProtectionParameterValue);
        this._apps = androidManagedAppProtectionParameterValue?.apps;
        this._customBrowserDisplayName = androidManagedAppProtectionParameterValue?.customBrowserDisplayName;
        this._customBrowserPackageId = androidManagedAppProtectionParameterValue?.customBrowserPackageId;
        this._deployedAppCount = androidManagedAppProtectionParameterValue?.deployedAppCount;
        this._deploymentSummary = androidManagedAppProtectionParameterValue?.deploymentSummary;
        this._disableAppEncryptionIfDeviceEncryptionIsEnabled = androidManagedAppProtectionParameterValue?.disableAppEncryptionIfDeviceEncryptionIsEnabled;
        this._encryptAppData = androidManagedAppProtectionParameterValue?.encryptAppData;
        this._minimumRequiredPatchVersion = androidManagedAppProtectionParameterValue?.minimumRequiredPatchVersion;
        this._minimumWarningPatchVersion = androidManagedAppProtectionParameterValue?.minimumWarningPatchVersion;
        this._screenCaptureBlocked = androidManagedAppProtectionParameterValue?.screenCaptureBlocked;
    };
    /**
     * Gets the customBrowserDisplayName property value. Friendly name of the preferred custom browser to open weblink on Android.
     * @returns a string
     */
    public get customBrowserDisplayName() {
        return this._customBrowserDisplayName;
    };
    /**
     * Sets the customBrowserDisplayName property value. Friendly name of the preferred custom browser to open weblink on Android.
     * @param value Value to set for the customBrowserDisplayName property.
     */
    public set customBrowserDisplayName(value: string | undefined) {
        if(value) {
            this._customBrowserDisplayName = value;
        }
    };
    /**
     * Gets the customBrowserPackageId property value. Unique identifier of a custom browser to open weblink on Android.
     * @returns a string
     */
    public get customBrowserPackageId() {
        return this._customBrowserPackageId;
    };
    /**
     * Sets the customBrowserPackageId property value. Unique identifier of a custom browser to open weblink on Android.
     * @param value Value to set for the customBrowserPackageId property.
     */
    public set customBrowserPackageId(value: string | undefined) {
        if(value) {
            this._customBrowserPackageId = value;
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
     * Gets the disableAppEncryptionIfDeviceEncryptionIsEnabled property value. When this setting is enabled, app level encryption is disabled if device level encryption is enabled
     * @returns a boolean
     */
    public get disableAppEncryptionIfDeviceEncryptionIsEnabled() {
        return this._disableAppEncryptionIfDeviceEncryptionIsEnabled;
    };
    /**
     * Sets the disableAppEncryptionIfDeviceEncryptionIsEnabled property value. When this setting is enabled, app level encryption is disabled if device level encryption is enabled
     * @param value Value to set for the disableAppEncryptionIfDeviceEncryptionIsEnabled property.
     */
    public set disableAppEncryptionIfDeviceEncryptionIsEnabled(value: boolean | undefined) {
        if(value) {
            this._disableAppEncryptionIfDeviceEncryptionIsEnabled = value;
        }
    };
    /**
     * Gets the encryptAppData property value. Indicates whether application data for managed apps should be encrypted
     * @returns a boolean
     */
    public get encryptAppData() {
        return this._encryptAppData;
    };
    /**
     * Sets the encryptAppData property value. Indicates whether application data for managed apps should be encrypted
     * @param value Value to set for the encryptAppData property.
     */
    public set encryptAppData(value: boolean | undefined) {
        if(value) {
            this._encryptAppData = value;
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "apps": n => { this.apps = n.getCollectionOfObjectValues<ManagedMobileAppImpl>(createManagedMobileAppFromDiscriminatorValue); },
            "customBrowserDisplayName": n => { this.customBrowserDisplayName = n.getStringValue(); },
            "customBrowserPackageId": n => { this.customBrowserPackageId = n.getStringValue(); },
            "deployedAppCount": n => { this.deployedAppCount = n.getNumberValue(); },
            "deploymentSummary": n => { this.deploymentSummary = n.getObjectValue<ManagedAppPolicyDeploymentSummaryImpl>(createManagedAppPolicyDeploymentSummaryFromDiscriminatorValue); },
            "disableAppEncryptionIfDeviceEncryptionIsEnabled": n => { this.disableAppEncryptionIfDeviceEncryptionIsEnabled = n.getBooleanValue(); },
            "encryptAppData": n => { this.encryptAppData = n.getBooleanValue(); },
            "minimumRequiredPatchVersion": n => { this.minimumRequiredPatchVersion = n.getStringValue(); },
            "minimumWarningPatchVersion": n => { this.minimumWarningPatchVersion = n.getStringValue(); },
            "screenCaptureBlocked": n => { this.screenCaptureBlocked = n.getBooleanValue(); },
        };
    };
    /**
     * Gets the minimumRequiredPatchVersion property value. Define the oldest required Android security patch level a user can have to gain secure access to the app.
     * @returns a string
     */
    public get minimumRequiredPatchVersion() {
        return this._minimumRequiredPatchVersion;
    };
    /**
     * Sets the minimumRequiredPatchVersion property value. Define the oldest required Android security patch level a user can have to gain secure access to the app.
     * @param value Value to set for the minimumRequiredPatchVersion property.
     */
    public set minimumRequiredPatchVersion(value: string | undefined) {
        if(value) {
            this._minimumRequiredPatchVersion = value;
        }
    };
    /**
     * Gets the minimumWarningPatchVersion property value. Define the oldest recommended Android security patch level a user can have for secure access to the app.
     * @returns a string
     */
    public get minimumWarningPatchVersion() {
        return this._minimumWarningPatchVersion;
    };
    /**
     * Sets the minimumWarningPatchVersion property value. Define the oldest recommended Android security patch level a user can have for secure access to the app.
     * @param value Value to set for the minimumWarningPatchVersion property.
     */
    public set minimumWarningPatchVersion(value: string | undefined) {
        if(value) {
            this._minimumWarningPatchVersion = value;
        }
    };
    /**
     * Gets the screenCaptureBlocked property value. Indicates whether a managed user can take screen captures of managed apps
     * @returns a boolean
     */
    public get screenCaptureBlocked() {
        return this._screenCaptureBlocked;
    };
    /**
     * Sets the screenCaptureBlocked property value. Indicates whether a managed user can take screen captures of managed apps
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
        if(this.apps && this.apps.length != 0){        const appsArrValue: ManagedMobileAppImpl[] = [];
        this.apps?.forEach(element => {
            appsArrValue.push((element instanceof ManagedMobileAppImpl? element as ManagedMobileAppImpl:new ManagedMobileAppImpl(element)));
        });
            writer.writeCollectionOfObjectValues<ManagedMobileAppImpl>("apps", appsArrValue);
        }
        if(this.customBrowserDisplayName){
            writer.writeStringValue("customBrowserDisplayName", this.customBrowserDisplayName);
        }
        if(this.customBrowserPackageId){
            writer.writeStringValue("customBrowserPackageId", this.customBrowserPackageId);
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
        if(this.minimumRequiredPatchVersion){
            writer.writeStringValue("minimumRequiredPatchVersion", this.minimumRequiredPatchVersion);
        }
        if(this.minimumWarningPatchVersion){
            writer.writeStringValue("minimumWarningPatchVersion", this.minimumWarningPatchVersion);
        }
        if(this.screenCaptureBlocked){
            writer.writeBooleanValue("screenCaptureBlocked", this.screenCaptureBlocked);
        }
    };
}
