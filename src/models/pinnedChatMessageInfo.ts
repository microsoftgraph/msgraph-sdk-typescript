import {createChatMessageFromDiscriminatorValue} from './createChatMessageFromDiscriminatorValue';
import {ChatMessage, Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of chat entities. */
export class PinnedChatMessageInfo extends Entity implements Parsable {
    /** The message property */
    private _message?: ChatMessage | undefined;
    /**
     * Instantiates a new pinnedChatMessageInfo and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.pinnedChatMessageInfo";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "message": n => { this.message = n.getObjectValue<ChatMessage>(createChatMessageFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the message property value. The message property
     * @returns a chatMessage
     */
    public get message() {
        return this._message;
    };
    /**
     * Sets the message property value. The message property
     * @param value Value to set for the message property.
     */
    public set message(value: ChatMessage | undefined) {
        this._message = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<ChatMessage>("message", this.message);
    };
}
