import {createManagedAppPolicyDeploymentSummaryFromDiscriminatorValue} from './createManagedAppPolicyDeploymentSummaryFromDiscriminatorValue';
import {createManagedMobileAppFromDiscriminatorValue} from './createManagedMobileAppFromDiscriminatorValue';
import {ManagedAppPolicyDeploymentSummaryImpl, ManagedMobileAppImpl, TargetedManagedAppProtectionImpl} from './index';
import {IosManagedAppProtection} from './iosManagedAppProtection';
import {ManagedAppDataEncryptionType} from './managedAppDataEncryptionType';
import {ManagedAppPolicyDeploymentSummary} from './managedAppPolicyDeploymentSummary';
import {ManagedMobileApp} from './managedMobileApp';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Policy used to configure detailed management settings targeted to specific security groups and for a specified set of apps on an iOS device */
export class IosManagedAppProtectionImpl extends TargetedManagedAppProtectionImpl implements IosManagedAppProtection, Parsable {
    /** Type of encryption which should be used for data in a managed app. Possible values are: useDeviceSettings, afterDeviceRestart, whenDeviceLockedExceptOpenFiles, whenDeviceLocked. */
    public appDataEncryptionType?: ManagedAppDataEncryptionType | undefined;
    /** List of apps to which the policy is deployed. */
    public apps?: ManagedMobileApp[] | undefined;
    /** A custom browser protocol to open weblink on iOS. */
    public customBrowserProtocol?: string | undefined;
    /** Count of apps to which the current policy is deployed. */
    public deployedAppCount?: number | undefined;
    /** Navigation property to deployment summary of the configuration. */
    public deploymentSummary?: ManagedAppPolicyDeploymentSummary | undefined;
    /** Indicates whether use of the FaceID is allowed in place of a pin if PinRequired is set to True. */
    public faceIdBlocked?: boolean | undefined;
    /** Versions less than the specified version will block the managed app from accessing company data. */
    public minimumRequiredSdkVersion?: string | undefined;
    /**
     * Instantiates a new iosManagedAppProtection and sets the default values.
     * @param iosManagedAppProtectionParameterValue 
     */
    public constructor(iosManagedAppProtectionParameterValue?: IosManagedAppProtection | undefined) {
        super();
        this.appDataEncryptionType = iosManagedAppProtectionParameterValue?.appDataEncryptionType ;
        this.apps = iosManagedAppProtectionParameterValue?.apps ;
        this.customBrowserProtocol = iosManagedAppProtectionParameterValue?.customBrowserProtocol ;
        this.deployedAppCount = iosManagedAppProtectionParameterValue?.deployedAppCount ;
        this.deploymentSummary = iosManagedAppProtectionParameterValue?.deploymentSummary ;
        this.faceIdBlocked = iosManagedAppProtectionParameterValue?.faceIdBlocked ;
        this.minimumRequiredSdkVersion = iosManagedAppProtectionParameterValue?.minimumRequiredSdkVersion ;
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
        if(this.customBrowserProtocol){
        writer.writeStringValue("customBrowserProtocol", this.customBrowserProtocol);
        }
        if(this.deployedAppCount){
        writer.writeNumberValue("deployedAppCount", this.deployedAppCount);
        }
        if(this.deploymentSummary){
        writer.writeObjectValue<ManagedAppPolicyDeploymentSummaryImpl>("deploymentSummary", new ManagedAppPolicyDeploymentSummaryImpl(this.deploymentSummary));
        }
        if(this.faceIdBlocked){
        writer.writeBooleanValue("faceIdBlocked", this.faceIdBlocked);
        }
        if(this.minimumRequiredSdkVersion){
        writer.writeStringValue("minimumRequiredSdkVersion", this.minimumRequiredSdkVersion);
        }
    };
}
