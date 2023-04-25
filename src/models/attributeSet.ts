import {Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AttributeSet extends Entity implements Parsable {
    /** The description property */
    private _description?: string | undefined;
    /** The maxAttributesPerSet property */
    private _maxAttributesPerSet?: number | undefined;
    /**
     * Instantiates a new AttributeSet and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the description property value. The description property
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. The description property
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "description": n => { this.description = n.getStringValue(); },
            "maxAttributesPerSet": n => { this.maxAttributesPerSet = n.getNumberValue(); },
        };
    };
    /**
     * Gets the maxAttributesPerSet property value. The maxAttributesPerSet property
     * @returns a integer
     */
    public get maxAttributesPerSet() {
        return this._maxAttributesPerSet;
    };
    /**
     * Sets the maxAttributesPerSet property value. The maxAttributesPerSet property
     * @param value Value to set for the maxAttributesPerSet property.
     */
    public set maxAttributesPerSet(value: number | undefined) {
        this._maxAttributesPerSet = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("description", this.description);
        writer.writeNumberValue("maxAttributesPerSet", this.maxAttributesPerSet);
    };
}
