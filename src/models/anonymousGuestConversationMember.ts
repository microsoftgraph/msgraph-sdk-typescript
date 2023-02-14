import {ConversationMember} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AnonymousGuestConversationMember extends ConversationMember implements Parsable {
    /** Unique ID that represents the user. Note: This ID can change if the user leaves and rejoins the meeting, or joins from a different device. */
    private _anonymousGuestId?: string | undefined;
    /**
     * Gets the anonymousGuestId property value. Unique ID that represents the user. Note: This ID can change if the user leaves and rejoins the meeting, or joins from a different device.
     * @returns a string
     */
    public get anonymousGuestId() {
        return this._anonymousGuestId;
    };
    /**
     * Sets the anonymousGuestId property value. Unique ID that represents the user. Note: This ID can change if the user leaves and rejoins the meeting, or joins from a different device.
     * @param value Value to set for the anonymousGuestId property.
     */
    public set anonymousGuestId(value: string | undefined) {
        this._anonymousGuestId = value;
    };
    /**
     * Instantiates a new AnonymousGuestConversationMember and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.anonymousGuestConversationMember";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "anonymousGuestId": n => { this.anonymousGuestId = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("anonymousGuestId", this.anonymousGuestId);
    };
}
