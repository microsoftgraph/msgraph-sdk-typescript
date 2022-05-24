import {AlternativeSecurityId} from './alternativeSecurityId';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AlternativeSecurityIdImpl implements AdditionalDataHolder, AlternativeSecurityId, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** For internal use only */
    public identityProvider?: string | undefined;
    /** For internal use only */
    public key?: string | undefined;
    /** For internal use only */
    public type?: number | undefined;
    /**
     * Instantiates a new alternativeSecurityId and sets the default values.
     * @param alternativeSecurityIdParameterValue 
     */
    public constructor(alternativeSecurityIdParameterValue?: AlternativeSecurityId | undefined) {
        this.additionalData = alternativeSecurityIdParameterValue?.additionalData ? alternativeSecurityIdParameterValue?.additionalData! : {}
        this.identityProvider = alternativeSecurityIdParameterValue?.identityProvider ;
        this.key = alternativeSecurityIdParameterValue?.key ;
        this.type = alternativeSecurityIdParameterValue?.type ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "identityProvider": n => { this.identityProvider = n.getStringValue(); },
            "key": n => { this.key = n.getStringValue(); },
            "type": n => { this.type = n.getNumberValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.identityProvider){
        writer.writeStringValue("identityProvider", this.identityProvider);
        }
        if(this.key){
        writer.writeStringValue("key", this.key);
        }
        if(this.type){
        writer.writeNumberValue("type", this.type);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
