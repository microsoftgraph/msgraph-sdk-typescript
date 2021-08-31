import {Entity} from '../../entity';
import {SerializationWriter, ParseNode, Parsable} from '@microsoft/kiota-abstractions';

export class Schema extends Entity implements Parsable {
    private _baseType?: string | undefined;
    private _properties?: Property[] | undefined;
    /**
     * Instantiates a new Schema and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the baseType property value. 
     * @returns a string
     */
    public get baseType() {
        return this._baseType;
    };
    /**
     * Gets the properties property value. 
     * @returns a property
     */
    public get properties() {
        return this._properties;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["baseType", (o, n) => { (o as unknown as Schema).baseType = n.getStringValue(); }],
            ["properties", (o, n) => { (o as unknown as Schema).properties = n.getCollectionOfPrimitiveValues<property>(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("baseType", this.baseType);
        writer.writeCollectionOfPrimitiveValues<property>("properties", this.properties);
    };
    /**
     * Sets the baseType property value. 
     * @param value Value to set for the baseType property.
     */
    public set baseType(value: string | undefined) {
        this._baseType = value;
    };
    /**
     * Sets the properties property value. 
     * @param value Value to set for the properties property.
     */
    public set properties(value: Property[] | undefined) {
        this._properties = value;
    };
}
