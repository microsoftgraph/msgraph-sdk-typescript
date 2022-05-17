import {AndroidManagedAppProtection} from './androidManagedAppProtection';
import {createManagedAppPolicyDeploymentSummaryFromDiscriminatorValue} from './createManagedAppPolicyDeploymentSummaryFromDiscriminatorValue';
import {createManagedMobileAppFromDiscriminatorValue} from './createManagedMobileAppFromDiscriminatorValue';
import {ManagedAppPolicyDeploymentSummaryImpl, ManagedMobileAppImpl, TargetedManagedAppProtectionImpl} from './index';
import {ManagedAppPolicyDeploymentSummary} from './managedAppPolicyDeploymentSummary';
import {ManagedMobileApp} from './managedMobileApp';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AndroidManagedAppProtectionImpl extends TargetedManagedAppProtectionImpl implements AndroidManagedAppProtection, Parsable {
    /** List of apps to which the policy is deployed. */
    apps?: ManagedMobileApp[] | undefined;
    /** Friendly name of the preferred custom browser to open weblink on Android. */
    customBrowserDisplayName?: string | undefined;
    /** Unique identifier of a custom browser to open weblink on Android. */
    customBrowserPackageId?: string | undefined;
    /** Count of apps to which the current policy is deployed. */
    deployedAppCount?: number | undefined;
    /** Navigation property to deployment summary of the configuration. */
    deploymentSummary?: ManagedAppPolicyDeploymentSummary | undefined;
    /** When this setting is enabled, app level encryption is disabled if device level encryption is enabled */
    disableAppEncryptionIfDeviceEncryptionIsEnabled?: boolean | undefined;
    /** Indicates whether application data for managed apps should be encrypted */
    encryptAppData?: boolean | undefined;
    /** Define the oldest required Android security patch level a user can have to gain secure access to the app. */
    minimumRequiredPatchVersion?: string | undefined;
    /** Define the oldest recommended Android security patch level a user can have for secure access to the app. */
    minimumWarningPatchVersion?: string | undefined;
    /** Indicates whether a managed user can take screen captures of managed apps */
    screenCaptureBlocked?: boolean | undefined;
    /**
     * Instantiates a new androidManagedAppProtection and sets the default values.
     * @param androidManagedAppProtectionParameterValue 
     */
    public constructor(androidManagedAppProtectionParameterValue?: AndroidManagedAppProtection | undefined) {
        super();
        this.apps = androidManagedAppProtectionParameterValue?.apps ;
        this.customBrowserDisplayName = androidManagedAppProtectionParameterValue?.customBrowserDisplayName ;
        this.customBrowserPackageId = androidManagedAppProtectionParameterValue?.customBrowserPackageId ;
        this.deployedAppCount = androidManagedAppProtectionParameterValue?.deployedAppCount ;
        this.deploymentSummary = androidManagedAppProtectionParameterValue?.deploymentSummary ;
        this.disableAppEncryptionIfDeviceEncryptionIsEnabled = androidManagedAppProtectionParameterValue?.disableAppEncryptionIfDeviceEncryptionIsEnabled ;
        this.encryptAppData = androidManagedAppProtectionParameterValue?.encryptAppData ;
        this.minimumRequiredPatchVersion = androidManagedAppProtectionParameterValue?.minimumRequiredPatchVersion ;
        this.minimumWarningPatchVersion = androidManagedAppProtectionParameterValue?.minimumWarningPatchVersion ;
        this.screenCaptureBlocked = androidManagedAppProtectionParameterValue?.screenCaptureBlocked ;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.apps){
        const appsArrValue: ManagedMobileAppImpl[] = []; this.apps?.forEach(element => {appsArrValue.push(new ManagedMobileAppImpl(element));});
        writer.writeCollectionOfObjectValues<ManagedMobileAppImpl>("apps", appsArrValue);
        }
        if(this.customBrowserDisplayName){
        if(this.customBrowserDisplayName)
        writer.writeStringValue("customBrowserDisplayName", this.customBrowserDisplayName);
        }
        if(this.customBrowserPackageId){
        if(this.customBrowserPackageId)
        writer.writeStringValue("customBrowserPackageId", this.customBrowserPackageId);
        }
        if(this.deployedAppCount){
        if(this.deployedAppCount)
        writer.writeNumberValue("deployedAppCount", this.deployedAppCount);
        }
        if(this.deploymentSummary){
        if(this.deploymentSummary)
        writer.writeObjectValue<ManagedAppPolicyDeploymentSummaryImpl>("deploymentSummary", new ManagedAppPolicyDeploymentSummaryImpl(this.deploymentSummary));
        }
        if(this.disableAppEncryptionIfDeviceEncryptionIsEnabled){
        if(this.disableAppEncryptionIfDeviceEncryptionIsEnabled)
        writer.writeBooleanValue("disableAppEncryptionIfDeviceEncryptionIsEnabled", this.disableAppEncryptionIfDeviceEncryptionIsEnabled);
        }
        if(this.encryptAppData){
        if(this.encryptAppData)
        writer.writeBooleanValue("encryptAppData", this.encryptAppData);
        }
        if(this.minimumRequiredPatchVersion){
        if(this.minimumRequiredPatchVersion)
        writer.writeStringValue("minimumRequiredPatchVersion", this.minimumRequiredPatchVersion);
        }
        if(this.minimumWarningPatchVersion){
        if(this.minimumWarningPatchVersion)
        writer.writeStringValue("minimumWarningPatchVersion", this.minimumWarningPatchVersion);
        }
        if(this.screenCaptureBlocked){
        if(this.screenCaptureBlocked)
        writer.writeBooleanValue("screenCaptureBlocked", this.screenCaptureBlocked);
        }
    };
}
