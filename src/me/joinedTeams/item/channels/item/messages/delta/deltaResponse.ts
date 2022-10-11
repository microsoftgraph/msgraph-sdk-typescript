import {BaseDeltaFunctionResponse, ChatMessage} from '../../../../../../../models/';
import {createChatMessageFromDiscriminatorValue} from '../../../../../../../models/createChatMessageFromDiscriminatorValue';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the delta method. */
export class DeltaResponse extends BaseDeltaFunctionResponse implements Parsable {
    /** The value property */
    private _value?: ChatMessage[] | undefined;
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
            "value": n => { this.value = n.getCollectionOfObjectValues<ChatMessage>(createChatMessageFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<ChatMessage>("value", this.value);
    };
    /**
     * Gets the value property value. The value property
     * @returns a chatMessage
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. The value property
     * @param value Value to set for the value property.
     */
    public set value(value: ChatMessage[] | undefined) {
        this._value = value;
    };
}
