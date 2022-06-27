import {Identity} from './identity';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class IdentityImpl implements Identity {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The display name of the identity. This property is read-only. */
    public displayName?: string | undefined;
    /** The identifier of the identity. This property is read-only. */
    public id?: string | undefined;
    /**
     * Instantiates a new identity and sets the default values.
     * @param identityParameterValue 
     */
    public constructor(identityParameterValue?: Identity | undefined) {
        this.additionalData = identityParameterValue?.additionalData ? identityParameterValue?.additionalData! : {};
        this.displayName = identityParameterValue?.displayName;
        this.id = identityParameterValue?.id;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "displayName": n => { this.displayName = n.getStringValue(); },
            "id": n => { this.id = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.displayName){
            writer.writeStringValue("displayName", this.displayName);
        }
        if(this.id){
            writer.writeStringValue("id", this.id);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
