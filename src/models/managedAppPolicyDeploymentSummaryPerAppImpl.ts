import {createMobileAppIdentifierFromDiscriminatorValue} from './createMobileAppIdentifierFromDiscriminatorValue';
import {MobileAppIdentifierImpl} from './index';
import {ManagedAppPolicyDeploymentSummaryPerApp} from './managedAppPolicyDeploymentSummaryPerApp';
import {MobileAppIdentifier} from './mobileAppIdentifier';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Represents policy deployment summary per app. */
export class ManagedAppPolicyDeploymentSummaryPerAppImpl implements AdditionalDataHolder, ManagedAppPolicyDeploymentSummaryPerApp, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Number of users the policy is applied. */
    public configurationAppliedUserCount?: number | undefined;
    /** Deployment of an app. */
    public mobileAppIdentifier?: MobileAppIdentifier | undefined;
    /**
     * Instantiates a new managedAppPolicyDeploymentSummaryPerApp and sets the default values.
     * @param managedAppPolicyDeploymentSummaryPerAppParameterValue 
     */
    public constructor(managedAppPolicyDeploymentSummaryPerAppParameterValue?: ManagedAppPolicyDeploymentSummaryPerApp | undefined) {
        this.additionalData = managedAppPolicyDeploymentSummaryPerAppParameterValue?.additionalData ? managedAppPolicyDeploymentSummaryPerAppParameterValue?.additionalData! : {}
        this.configurationAppliedUserCount = managedAppPolicyDeploymentSummaryPerAppParameterValue?.configurationAppliedUserCount ;
        this.mobileAppIdentifier = managedAppPolicyDeploymentSummaryPerAppParameterValue?.mobileAppIdentifier ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "configurationAppliedUserCount": n => { this.configurationAppliedUserCount = n.getNumberValue(); },
            "mobileAppIdentifier": n => { this.mobileAppIdentifier = n.getObjectValue<MobileAppIdentifierImpl>(createMobileAppIdentifierFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.configurationAppliedUserCount){
        writer.writeNumberValue("configurationAppliedUserCount", this.configurationAppliedUserCount);
        }
        if(this.mobileAppIdentifier){
        writer.writeObjectValue<MobileAppIdentifierImpl>("mobileAppIdentifier", new MobileAppIdentifierImpl(this.mobileAppIdentifier));
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
