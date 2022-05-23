import {PersonType} from './personType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PersonTypeImpl implements AdditionalDataHolder, Parsable, PersonType {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The type of data source, such as Person. */
    public class_escaped?: string | undefined;
    /** The secondary type of data source, such as OrganizationUser. */
    public subclass?: string | undefined;
    /**
     * Instantiates a new personType and sets the default values.
     * @param personTypeParameterValue 
     */
    public constructor(personTypeParameterValue?: PersonType | undefined) {
        this.additionalData = personTypeParameterValue?.additionalData ? personTypeParameterValue?.additionalData! : {}
        this.class_escaped = personTypeParameterValue?.class_escaped ;
        this.subclass = personTypeParameterValue?.subclass ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "class": n => { this.class_escaped = n.getStringValue(); },
            "subclass": n => { this.subclass = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.class_escaped){
        writer.writeStringValue("class", this.class_escaped);
        }
        if(this.subclass){
        writer.writeStringValue("subclass", this.subclass);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
