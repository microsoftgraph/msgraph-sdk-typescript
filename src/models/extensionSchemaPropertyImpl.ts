import {ExtensionSchemaProperty} from './extensionSchemaProperty';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ExtensionSchemaPropertyImpl implements AdditionalDataHolder, ExtensionSchemaProperty, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The name of the strongly typed property defined as part of a schema extension. */
    public name?: string | undefined;
    /** The type of the property that is defined as part of a schema extension.  Allowed values are Binary, Boolean, DateTime, Integer or String.  See the table below for more details. */
    public type?: string | undefined;
    /**
     * Instantiates a new extensionSchemaProperty and sets the default values.
     * @param extensionSchemaPropertyParameterValue 
     */
    public constructor(extensionSchemaPropertyParameterValue?: ExtensionSchemaProperty | undefined) {
        this.additionalData = extensionSchemaPropertyParameterValue?.additionalData ? extensionSchemaPropertyParameterValue?.additionalData! : {}
        this.name = extensionSchemaPropertyParameterValue?.name ;
        this.type = extensionSchemaPropertyParameterValue?.type ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "name": n => { this.name = n.getStringValue(); },
            "type": n => { this.type = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.name){
        writer.writeStringValue("name", this.name);
        }
        if(this.type){
        writer.writeStringValue("type", this.type);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
