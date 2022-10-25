import {BaseDeltaFunctionResponse, Message} from '../../../../models/';
import {createMessageFromDiscriminatorValue} from '../../../../models/createMessageFromDiscriminatorValue';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the delta method. */
export class DeltaResponse extends BaseDeltaFunctionResponse implements Parsable {
    /** The value property */
    private _value?: Message[] | undefined;
    /**
     * Instantiates a new deltaResponse and sets the default values.
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
            "value": n => { this.value = n.getCollectionOfObjectValues<Message>(createMessageFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<Message>("value", this.value);
    };
    /**
     * Gets the value property value. The value property
     * @returns a message
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. The value property
     * @param value Value to set for the value property.
     */
    public set value(value: Message[] | undefined) {
        this._value = value;
    };
}
