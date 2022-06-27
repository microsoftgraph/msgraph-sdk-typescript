import {PropertyImpl} from './externalConnectors/';
import {createPropertyFromDiscriminatorValue} from './externalConnectors/createPropertyFromDiscriminatorValue';
import {Property} from './externalConnectors/property';
import {EntityImpl} from './index';
import {Schema} from './schema';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SchemaImpl extends EntityImpl implements Schema {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Must be set to microsoft.graph.externalItem. Required. */
    public baseType?: string | undefined;
    /** The properties defined for the items in the connection. The minimum number of properties is one, the maximum is 128. */
    public properties?: Property[] | undefined;
    /**
     * Instantiates a new Schema and sets the default values.
     * @param schemaParameterValue 
     */
    public constructor(schemaParameterValue?: Schema | undefined) {
        super(schemaParameterValue);
        this.additionalData = schemaParameterValue?.additionalData ? schemaParameterValue?.additionalData! : {};
        this.baseType = schemaParameterValue?.baseType;
        const propertiesArrValue: PropertyImpl[] = []; schemaParameterValue.properties?.forEach(element => {propertiesArrValue.push(element instanceof PropertyImpl? element : new PropertyImpl(element));});
        this.properties = propertiesArrValue;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "baseType": n => { this.baseType = n.getStringValue(); },
            "properties": n => { this.properties = n.getCollectionOfObjectValues<PropertyImpl>(createPropertyFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.baseType){
            writer.writeStringValue("baseType", this.baseType);
        }
        if(this.properties && this.properties.length != 0){        const propertiesArrValue: PropertyImpl[] = []; this.properties?.forEach(element => {propertiesArrValue.push(element instanceof PropertyImpl? element : new PropertyImpl(element));});
            writer.writeCollectionOfObjectValues<PropertyImpl>("properties", propertiesArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
