import {ReferenceUpdateSchema} from './referenceUpdateSchema';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ReferenceUpdateSchemaImpl implements AdditionalDataHolder, Parsable, ReferenceUpdateSchema {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The id property */
    public id?: string | undefined;
    /** The type property */
    public type?: string | undefined;
    /**
     * Instantiates a new ReferenceUpdateSchema and sets the default values.
     * @param referenceUpdateSchemaParameterValue 
     */
    public constructor(referenceUpdateSchemaParameterValue?: ReferenceUpdateSchema | undefined) {
        this.additionalData = referenceUpdateSchemaParameterValue?.additionalData ? referenceUpdateSchemaParameterValue?.additionalData! : {}
        this.id = referenceUpdateSchemaParameterValue?.id ;
        this.type = referenceUpdateSchemaParameterValue?.type ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.id": n => { this.id = n.getStringValue(); },
            "@odata.type": n => { this.type = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.id){
        writer.writeStringValue("@odata.id", this.id);
        }
        if(this.type){
        writer.writeStringValue("@odata.type", this.type);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
