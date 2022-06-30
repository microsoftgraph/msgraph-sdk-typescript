import {createManagedAppPolicyDeploymentSummaryFromDiscriminatorValue} from './createManagedAppPolicyDeploymentSummaryFromDiscriminatorValue';
import {createManagedMobileAppFromDiscriminatorValue} from './createManagedMobileAppFromDiscriminatorValue';
import {ManagedAppPolicyDeploymentSummaryImpl, ManagedMobileAppImpl, TargetedManagedAppProtectionImpl} from './index';
import {IosManagedAppProtection} from './iosManagedAppProtection';
import {ManagedAppDataEncryptionType} from './managedAppDataEncryptionType';
import {ManagedAppPolicyDeploymentSummary} from './managedAppPolicyDeploymentSummary';
import {ManagedMobileApp} from './managedMobileApp';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class IosManagedAppProtectionImpl extends TargetedManagedAppProtectionImpl implements IosManagedAppProtection {
    /** Type of encryption which should be used for data in a managed app. Possible values are: useDeviceSettings, afterDeviceRestart, whenDeviceLockedExceptOpenFiles, whenDeviceLocked. */
    private _appDataEncryptionType?: ManagedAppDataEncryptionType | undefined;
    /** List of apps to which the policy is deployed. */
    private _apps?: ManagedMobileApp[] | undefined;
    /** A custom browser protocol to open weblink on iOS. */
    private _customBrowserProtocol?: string | undefined;
    /** Count of apps to which the current policy is deployed. */
    private _deployedAppCount?: number | undefined;
    /** Navigation property to deployment summary of the configuration. */
    private _deploymentSummary?: ManagedAppPolicyDeploymentSummary | undefined;
    /** Indicates whether use of the FaceID is allowed in place of a pin if PinRequired is set to True. */
    private _faceIdBlocked?: boolean | undefined;
    /** Versions less than the specified version will block the managed app from accessing company data. */
    private _minimumRequiredSdkVersion?: string | undefined;
    /**
     * Gets the appDataEncryptionType property value. Type of encryption which should be used for data in a managed app. Possible values are: useDeviceSettings, afterDeviceRestart, whenDeviceLockedExceptOpenFiles, whenDeviceLocked.
     * @returns a managedAppDataEncryptionType
     */
    public get appDataEncryptionType() {
        return this._appDataEncryptionType;
    };
    /**
     * Sets the appDataEncryptionType property value. Type of encryption which should be used for data in a managed app. Possible values are: useDeviceSettings, afterDeviceRestart, whenDeviceLockedExceptOpenFiles, whenDeviceLocked.
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
                appsArrValue.push((element instanceof ManagedMobileAppImpl? element:new ManagedMobileAppImpl(element)));
            });
            this._apps = appsArrValue;
        }
    };
    /**
     * Instantiates a new IosManagedAppProtection and sets the default values.
     * @param iosManagedAppProtectionParameterValue 
     */
    public constructor(iosManagedAppProtectionParameterValue?: IosManagedAppProtection | undefined) {
        super(iosManagedAppProtectionParameterValue);
        this._appDataEncryptionType = iosManagedAppProtectionParameterValue?.appDataEncryptionType;
        this._apps = iosManagedAppProtectionParameterValue?.apps;
        this._customBrowserProtocol = iosManagedAppProtectionParameterValue?.customBrowserProtocol;
        this._deployedAppCount = iosManagedAppProtectionParameterValue?.deployedAppCount;
        this._deploymentSummary = iosManagedAppProtectionParameterValue?.deploymentSummary;
        this._faceIdBlocked = iosManagedAppProtectionParameterValue?.faceIdBlocked;
        this._minimumRequiredSdkVersion = iosManagedAppProtectionParameterValue?.minimumRequiredSdkVersion;
    };
    /**
     * Gets the customBrowserProtocol property value. A custom browser protocol to open weblink on iOS.
     * @returns a string
     */
    public get customBrowserProtocol() {
        return this._customBrowserProtocol;
    };
    /**
     * Sets the customBrowserProtocol property value. A custom browser protocol to open weblink on iOS.
     * @param value Value to set for the customBrowserProtocol property.
     */
    public set customBrowserProtocol(value: string | undefined) {
        if(value) {
            this._customBrowserProtocol = value;
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
            this._deploymentSummary = value instanceof ManagedAppPolicyDeploymentSummaryImpl? value : new ManagedAppPolicyDeploymentSummaryImpl(value);
        }
    };
    /**
     * Gets the faceIdBlocked property value. Indicates whether use of the FaceID is allowed in place of a pin if PinRequired is set to True.
     * @returns a boolean
     */
    public get faceIdBlocked() {
        return this._faceIdBlocked;
    };
    /**
     * Sets the faceIdBlocked property value. Indicates whether use of the FaceID is allowed in place of a pin if PinRequired is set to True.
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
            "customBrowserProtocol": n => { this.customBrowserProtocol = n.getStringValue(); },
            "deployedAppCount": n => { this.deployedAppCount = n.getNumberValue(); },
            "deploymentSummary": n => { this.deploymentSummary = n.getObjectValue<ManagedAppPolicyDeploymentSummaryImpl>(createManagedAppPolicyDeploymentSummaryFromDiscriminatorValue); },
            "faceIdBlocked": n => { this.faceIdBlocked = n.getBooleanValue(); },
            "minimumRequiredSdkVersion": n => { this.minimumRequiredSdkVersion = n.getStringValue(); },
        };
    };
    /**
     * Gets the minimumRequiredSdkVersion property value. Versions less than the specified version will block the managed app from accessing company data.
     * @returns a string
     */
    public get minimumRequiredSdkVersion() {
        return this._minimumRequiredSdkVersion;
    };
    /**
     * Sets the minimumRequiredSdkVersion property value. Versions less than the specified version will block the managed app from accessing company data.
     * @param value Value to set for the minimumRequiredSdkVersion property.
     */
    public set minimumRequiredSdkVersion(value: string | undefined) {
        if(value) {
            this._minimumRequiredSdkVersion = value;
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
            appsArrValue.push((element instanceof ManagedMobileAppImpl? element:new ManagedMobileAppImpl(element)));
        });
            writer.writeCollectionOfObjectValues<ManagedMobileAppImpl>("apps", appsArrValue);
        }
        if(this.customBrowserProtocol){
            writer.writeStringValue("customBrowserProtocol", this.customBrowserProtocol);
        }
        if(this.deployedAppCount){
            writer.writeNumberValue("deployedAppCount", this.deployedAppCount);
        }
        if(this.deploymentSummary){
            writer.writeObjectValue<ManagedAppPolicyDeploymentSummaryImpl>("deploymentSummary", (!this.deploymentSummary || this.deploymentSummary instanceof ManagedAppPolicyDeploymentSummaryImpl? this.deploymentSummary : new ManagedAppPolicyDeploymentSummaryImpl(this.deploymentSummary)));
        }
        if(this.faceIdBlocked){
            writer.writeBooleanValue("faceIdBlocked", this.faceIdBlocked);
        }
        if(this.minimumRequiredSdkVersion){
            writer.writeStringValue("minimumRequiredSdkVersion", this.minimumRequiredSdkVersion);
        }
    };
}
