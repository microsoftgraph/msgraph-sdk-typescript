import {createJsonFromDiscriminatorValue} from './createJsonFromDiscriminatorValue';
import {Entity, Json} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class WorkbookFunctionResult extends Entity implements Parsable {
    /** The error property */
    private _errorEscaped?: string | undefined;
    /** The value property */
    private _value?: Json | undefined;
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
    public get errorEscaped() {
        return this._errorEscaped;
    };
    /**
     * Sets the error property value. The error property
     * @param value Value to set for the errorEscaped property.
     */
    public set errorEscaped(value: string | undefined) {
        this._errorEscaped = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "error": n => { this.errorEscaped = n.getStringValue(); },
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
        writer.writeStringValue("error", this.errorEscaped);
        writer.writeObjectValue<Json>("value", this.value);
    };
    /**
     * Gets the value property value. The value property
     * @returns a Json
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. The value property
     * @param value Value to set for the value property.
     */
    public set value(value: Json | undefined) {
        this._value = value;
    };
}
