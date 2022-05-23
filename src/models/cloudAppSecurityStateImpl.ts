import {CloudAppSecurityState} from './cloudAppSecurityState';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class CloudAppSecurityStateImpl implements AdditionalDataHolder, CloudAppSecurityState, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Destination IP Address of the connection to the cloud application/service. */
    public destinationServiceIp?: string | undefined;
    /** Cloud application/service name (for example 'Salesforce', 'DropBox', etc.). */
    public destinationServiceName?: string | undefined;
    /** Provider-generated/calculated risk score of the Cloud Application/Service. Recommended value range of 0-1, which equates to a percentage. */
    public riskScore?: string | undefined;
    /**
     * Instantiates a new cloudAppSecurityState and sets the default values.
     * @param cloudAppSecurityStateParameterValue 
     */
    public constructor(cloudAppSecurityStateParameterValue?: CloudAppSecurityState | undefined) {
        this.additionalData = cloudAppSecurityStateParameterValue?.additionalData ? cloudAppSecurityStateParameterValue?.additionalData! : {}
        this.destinationServiceIp = cloudAppSecurityStateParameterValue?.destinationServiceIp ;
        this.destinationServiceName = cloudAppSecurityStateParameterValue?.destinationServiceName ;
        this.riskScore = cloudAppSecurityStateParameterValue?.riskScore ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "destinationServiceIp": n => { this.destinationServiceIp = n.getStringValue(); },
            "destinationServiceName": n => { this.destinationServiceName = n.getStringValue(); },
            "riskScore": n => { this.riskScore = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.destinationServiceIp){
        writer.writeStringValue("destinationServiceIp", this.destinationServiceIp);
        }
        if(this.destinationServiceName){
        writer.writeStringValue("destinationServiceName", this.destinationServiceName);
        }
        if(this.riskScore){
        writer.writeStringValue("riskScore", this.riskScore);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
