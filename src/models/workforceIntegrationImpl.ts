import {createWorkforceIntegrationEncryptionFromDiscriminatorValue} from './createWorkforceIntegrationEncryptionFromDiscriminatorValue';
import {ChangeTrackedEntityImpl, WorkforceIntegrationEncryptionImpl} from './index';
import {WorkforceIntegration} from './workforceIntegration';
import {WorkforceIntegrationEncryption} from './workforceIntegrationEncryption';
import {WorkforceIntegrationSupportedEntities} from './workforceIntegrationSupportedEntities';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class WorkforceIntegrationImpl extends ChangeTrackedEntityImpl implements WorkforceIntegration {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** API version for the call back URL. Start with 1. */
    public apiVersion?: number | undefined;
    /** Name of the workforce integration. */
    public displayName?: string | undefined;
    /** The workforce integration encryption resource. */
    public encryption?: WorkforceIntegrationEncryption | undefined;
    /** Indicates whether this workforce integration is currently active and available. */
    public isActive?: boolean | undefined;
    /** This property has replaced supports in v1.0. We recommend that you use this property instead of supports. The supports property is still supported in beta for the time being. The possible values are: none, shift, swapRequest, openshift, openShiftRequest, userShiftPreferences, offerShiftRequest, unknownFutureValue, timeCard, timeOffReason, timeOff, timeOffRequest. Note that you must use the Prefer: include-unknown-enum-members request header to get the following values in this evolvable enum: timeCard, timeOffReason, timeOff, timeOffRequest. If selecting more than one value, all values must start with the first letter in uppercase. */
    public supportedEntities?: WorkforceIntegrationSupportedEntities | undefined;
    /** Workforce Integration URL for callbacks from the Shifts service. */
    public url?: string | undefined;
    /**
     * Instantiates a new WorkforceIntegration and sets the default values.
     * @param workforceIntegrationParameterValue 
     */
    public constructor(workforceIntegrationParameterValue?: WorkforceIntegration | undefined) {
        super(workforceIntegrationParameterValue);
        this.additionalData = workforceIntegrationParameterValue?.additionalData ? workforceIntegrationParameterValue?.additionalData! : {};
        this.apiVersion = workforceIntegrationParameterValue?.apiVersion;
        this.displayName = workforceIntegrationParameterValue?.displayName;
        this.encryption = workforceIntegrationParameterValue?.encryption instanceof WorkforceIntegrationEncryptionImpl? workforceIntegrationParameterValue?.encryption:new WorkforceIntegrationEncryptionImpl(workforceIntegrationParameterValue?.encryption);
        this.isActive = workforceIntegrationParameterValue?.isActive;
        this.supportedEntities = workforceIntegrationParameterValue?.supportedEntities;
        this.url = workforceIntegrationParameterValue?.url;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "apiVersion": n => { this.apiVersion = n.getNumberValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "encryption": n => { this.encryption = n.getObjectValue<WorkforceIntegrationEncryptionImpl>(createWorkforceIntegrationEncryptionFromDiscriminatorValue); },
            "isActive": n => { this.isActive = n.getBooleanValue(); },
            "supportedEntities": n => { this.supportedEntities = n.getEnumValue<WorkforceIntegrationSupportedEntities>(WorkforceIntegrationSupportedEntities); },
            "url": n => { this.url = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.apiVersion){
            writer.writeNumberValue("apiVersion", this.apiVersion);
        }
        if(this.displayName){
            writer.writeStringValue("displayName", this.displayName);
        }
        if(this.encryption){
            writer.writeObjectValue<WorkforceIntegrationEncryptionImpl>("encryption", new WorkforceIntegrationEncryptionImpl(this.encryption));
        }
        if(this.isActive){
            writer.writeBooleanValue("isActive", this.isActive);
        }
        if(this.supportedEntities){
            writer.writeEnumValue<WorkforceIntegrationSupportedEntities>("supportedEntities", this.supportedEntities);
        }
        if(this.url){
            writer.writeStringValue("url", this.url);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
