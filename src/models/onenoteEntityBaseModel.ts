import {Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class OnenoteEntityBaseModel extends Entity implements Parsable {
    /** The endpoint where you can get details about the page. Read-only.  */
    private _self?: string | undefined;
    /**
     * Instantiates a new onenoteEntityBaseModel and sets the default values.
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
            "self": n => { this.self = n.getStringValue(); },
        };
    };
    /**
     * Gets the self property value. The endpoint where you can get details about the page. Read-only.
     * @returns a string
     */
    public get self() {
        return this._self;
    };
    /**
     * Sets the self property value. The endpoint where you can get details about the page. Read-only.
     * @param value Value to set for the self property.
     */
    public set self(value: string | undefined) {
        this._self = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("self", this.self);
    };
}
