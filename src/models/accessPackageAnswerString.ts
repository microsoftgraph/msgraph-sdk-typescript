import {AccessPackageAnswer} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AccessPackageAnswerString extends AccessPackageAnswer implements Parsable {
    /** The value stored on the requestor's user profile, if this answer is configured to be stored as a specific attribute. */
    private _value?: string | undefined;
    /**
     * Instantiates a new AccessPackageAnswerString and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.accessPackageAnswerString";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "value": n => { this.value = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("value", this.value);
    };
    /**
     * Gets the value property value. The value stored on the requestor's user profile, if this answer is configured to be stored as a specific attribute.
     * @returns a string
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. The value stored on the requestor's user profile, if this answer is configured to be stored as a specific attribute.
     * @param value Value to set for the value property.
     */
    public set value(value: string | undefined) {
        this._value = value;
    };
}
