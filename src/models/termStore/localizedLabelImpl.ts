import {LocalizedLabel} from './localizedLabel';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class LocalizedLabelImpl implements AdditionalDataHolder, LocalizedLabel, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Indicates whether the label is the default label. */
    public isDefault?: boolean | undefined;
    /** The language tag for the label. */
    public languageTag?: string | undefined;
    /** The name of the label. */
    public name?: string | undefined;
    /**
     * Instantiates a new localizedLabel and sets the default values.
     * @param localizedLabelParameterValue 
     */
    public constructor(localizedLabelParameterValue?: LocalizedLabel | undefined) {
        this.additionalData = localizedLabelParameterValue?.additionalData ? localizedLabelParameterValue?.additionalData! : {}
        this.isDefault = localizedLabelParameterValue?.isDefault ;
        this.languageTag = localizedLabelParameterValue?.languageTag ;
        this.name = localizedLabelParameterValue?.name ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "isDefault": n => { this.isDefault = n.getBooleanValue(); },
            "languageTag": n => { this.languageTag = n.getStringValue(); },
            "name": n => { this.name = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.isDefault){
        writer.writeBooleanValue("isDefault", this.isDefault);
        }
        if(this.languageTag){
        writer.writeStringValue("languageTag", this.languageTag);
        }
        if(this.name){
        writer.writeStringValue("name", this.name);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
