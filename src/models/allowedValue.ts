import {Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AllowedValue extends Entity implements Parsable {
    /** The isActive property */
    private _isActive?: boolean | undefined;
    /**
     * Instantiates a new AllowedValue and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "isActive": n => { this.isActive = n.getBooleanValue(); },
        };
    };
    /**
     * Gets the isActive property value. The isActive property
     * @returns a boolean
     */
    public get isActive() {
        return this._isActive;
    };
    /**
     * Sets the isActive property value. The isActive property
     * @param value Value to set for the isActive property.
     */
    public set isActive(value: boolean | undefined) {
        this._isActive = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeBooleanValue("isActive", this.isActive);
    };
}
