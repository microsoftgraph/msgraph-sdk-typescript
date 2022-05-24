import {createSchemaExtensionFromDiscriminatorValue} from './createSchemaExtensionFromDiscriminatorValue';
import {SchemaExtensionImpl} from './index';
import {SchemaExtension} from './schemaExtension';
import {SchemaExtensionCollectionResponse} from './schemaExtensionCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SchemaExtensionCollectionResponseImpl implements AdditionalDataHolder, Parsable, SchemaExtensionCollectionResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: SchemaExtension[] | undefined;
    /**
     * Instantiates a new SchemaExtensionCollectionResponse and sets the default values.
     * @param schemaExtensionCollectionResponseParameterValue 
     */
    public constructor(schemaExtensionCollectionResponseParameterValue?: SchemaExtensionCollectionResponse | undefined) {
        this.additionalData = schemaExtensionCollectionResponseParameterValue?.additionalData ? schemaExtensionCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = schemaExtensionCollectionResponseParameterValue?.nextLink ;
        this.value = schemaExtensionCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<SchemaExtensionImpl>(createSchemaExtensionFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.nextLink){
        writer.writeStringValue("@odata.nextLink", this.nextLink);
        }
        if(this.value && this.value.length != 0){        const valueArrValue: SchemaExtensionImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new SchemaExtensionImpl(element));});
        writer.writeCollectionOfObjectValues<SchemaExtensionImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
