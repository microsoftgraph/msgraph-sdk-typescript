import {ConfigurationManagerClientEnabledFeatures} from './configurationManagerClientEnabledFeatures';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** configuration Manager client enabled features */
export class ConfigurationManagerClientEnabledFeaturesImpl implements AdditionalDataHolder, ConfigurationManagerClientEnabledFeatures, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Whether compliance policy is managed by Intune */
    public compliancePolicy?: boolean | undefined;
    /** Whether device configuration is managed by Intune */
    public deviceConfiguration?: boolean | undefined;
    /** Whether inventory is managed by Intune */
    public inventory?: boolean | undefined;
    /** Whether modern application is managed by Intune */
    public modernApps?: boolean | undefined;
    /** Whether resource access is managed by Intune */
    public resourceAccess?: boolean | undefined;
    /** Whether Windows Update for Business is managed by Intune */
    public windowsUpdateForBusiness?: boolean | undefined;
    /**
     * Instantiates a new configurationManagerClientEnabledFeatures and sets the default values.
     * @param configurationManagerClientEnabledFeaturesParameterValue 
     */
    public constructor(configurationManagerClientEnabledFeaturesParameterValue?: ConfigurationManagerClientEnabledFeatures | undefined) {
        this.additionalData = configurationManagerClientEnabledFeaturesParameterValue?.additionalData ? configurationManagerClientEnabledFeaturesParameterValue?.additionalData! : {}
        this.compliancePolicy = configurationManagerClientEnabledFeaturesParameterValue?.compliancePolicy ;
        this.deviceConfiguration = configurationManagerClientEnabledFeaturesParameterValue?.deviceConfiguration ;
        this.inventory = configurationManagerClientEnabledFeaturesParameterValue?.inventory ;
        this.modernApps = configurationManagerClientEnabledFeaturesParameterValue?.modernApps ;
        this.resourceAccess = configurationManagerClientEnabledFeaturesParameterValue?.resourceAccess ;
        this.windowsUpdateForBusiness = configurationManagerClientEnabledFeaturesParameterValue?.windowsUpdateForBusiness ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "compliancePolicy": n => { this.compliancePolicy = n.getBooleanValue(); },
            "deviceConfiguration": n => { this.deviceConfiguration = n.getBooleanValue(); },
            "inventory": n => { this.inventory = n.getBooleanValue(); },
            "modernApps": n => { this.modernApps = n.getBooleanValue(); },
            "resourceAccess": n => { this.resourceAccess = n.getBooleanValue(); },
            "windowsUpdateForBusiness": n => { this.windowsUpdateForBusiness = n.getBooleanValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.compliancePolicy){
        writer.writeBooleanValue("compliancePolicy", this.compliancePolicy);
        }
        if(this.deviceConfiguration){
        writer.writeBooleanValue("deviceConfiguration", this.deviceConfiguration);
        }
        if(this.inventory){
        writer.writeBooleanValue("inventory", this.inventory);
        }
        if(this.modernApps){
        writer.writeBooleanValue("modernApps", this.modernApps);
        }
        if(this.resourceAccess){
        writer.writeBooleanValue("resourceAccess", this.resourceAccess);
        }
        if(this.windowsUpdateForBusiness){
        writer.writeBooleanValue("windowsUpdateForBusiness", this.windowsUpdateForBusiness);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
