import {AdminMember1, Entity, Json} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class WorkbookFunctionResult extends Entity implements Parsable {
    /** The error property */
    private _error_escaped?: string | undefined;
    /** The value property */
    private _value?: Json | AdminMember1 | undefined;
    /**
     * Instantiates a new WorkbookFunctionResult and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the error property value. The error property
     * @returns a string
     */
    public get error_escaped() {
        return this._error_escaped;
    };
    /**
     * Sets the error property value. The error property
     * @param value Value to set for the error_escaped property.
     */
    public set error_escaped(value: string | undefined) {
        this._error_escaped = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "error": n => { this.error_escaped = n.getStringValue(); },
            "value": n => { this.value = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("error", this.error_escaped);
        writer.writeObjectValue<Json>("value", this.value);
    };
    /**
     * Gets the value property value. The value property
     * @returns a admin
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. The value property
     * @param value Value to set for the value property.
     */
    public set value(value: Json | AdminMember1 | undefined) {
        this._value = value;
    };
}
