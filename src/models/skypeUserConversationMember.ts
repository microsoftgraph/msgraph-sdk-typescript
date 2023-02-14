import {ConversationMember} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SkypeUserConversationMember extends ConversationMember implements Parsable {
    /** Skype ID of the user. */
    private _skypeId?: string | undefined;
    /**
     * Instantiates a new SkypeUserConversationMember and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.skypeUserConversationMember";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "skypeId": n => { this.skypeId = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("skypeId", this.skypeId);
    };
    /**
     * Gets the skypeId property value. Skype ID of the user.
     * @returns a string
     */
    public get skypeId() {
        return this._skypeId;
    };
    /**
     * Sets the skypeId property value. Skype ID of the user.
     * @param value Value to set for the skypeId property.
     */
    public set skypeId(value: string | undefined) {
        this._skypeId = value;
    };
}
