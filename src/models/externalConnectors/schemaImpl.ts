import {EntityImpl} from '../';
import {createPropertyFromDiscriminatorValue} from './createPropertyFromDiscriminatorValue';
import {PropertyImpl} from './index';
import {Property} from './property';
import {Schema} from './schema';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of externalConnection entities. */
export class SchemaImpl extends EntityImpl implements Schema {
    /** Must be set to microsoft.graph.externalItem. Required. */
    private _baseType?: string | undefined;
    /** The properties defined for the items in the connection. The minimum number of properties is one, the maximum is 128. */
    private _properties?: Property[] | undefined;
    /**
     * Gets the baseType property value. Must be set to microsoft.graph.externalItem. Required.
     * @returns a string
     */
    public get baseType() {
        return this._baseType;
    };
    /**
     * Sets the baseType property value. Must be set to microsoft.graph.externalItem. Required.
     * @param value Value to set for the baseType property.
     */
    public set baseType(value: string | undefined) {
        if(value) {
            this._baseType = value;
        }
    };
    /**
     * Instantiates a new schema and sets the default values.
     * @param schemaParameterValue 
     */
    public constructor(schemaParameterValue?: Schema | undefined) {
        super(schemaParameterValue);
        this._baseType = schemaParameterValue?.baseType;
        this._properties = schemaParameterValue?.properties;
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
     * Gets the properties property value. The properties defined for the items in the connection. The minimum number of properties is one, the maximum is 128.
     * @returns a PropertyInterface
     */
    public get properties() {
        return this._properties;
    };
    /**
     * Sets the properties property value. The properties defined for the items in the connection. The minimum number of properties is one, the maximum is 128.
     * @param value Value to set for the properties property.
     */
    public set properties(value: Property[] | undefined) {
        if(value) {
            const propertiesArrValue: PropertyImpl[] = [];
            this.properties?.forEach(element => {
                propertiesArrValue.push((element instanceof PropertyImpl? element:new PropertyImpl(element)));
            });
            this._properties = propertiesArrValue;
        }
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
        if(this.properties && this.properties.length != 0){        const propertiesArrValue: PropertyImpl[] = [];
        this.properties?.forEach(element => {
            propertiesArrValue.push((element instanceof PropertyImpl? element:new PropertyImpl(element)));
        });
            writer.writeCollectionOfObjectValues<PropertyImpl>("properties", propertiesArrValue);
        }
    };
}
