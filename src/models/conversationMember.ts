import {Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ConversationMember extends Entity implements Parsable {
    /** The display name of the user.  */
    private _displayName?: string | undefined;
    /** The roles for that user.  */
    private _roles?: string[] | undefined;
    /** The timestamp denoting how far back a conversation's history is shared with the conversation member. This property is settable only for members of a chat.  */
    private _visibleHistoryStartDateTime?: Date | undefined;
    /**
     * Instantiates a new conversationMember and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the displayName property value. The display name of the user.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. The display name of the user.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "displayName": (o, n) => { (o as unknown as ConversationMember).displayName = n.getStringValue(); },
            "roles": (o, n) => { (o as unknown as ConversationMember).roles = n.getCollectionOfPrimitiveValues<string>(); },
            "visibleHistoryStartDateTime": (o, n) => { (o as unknown as ConversationMember).visibleHistoryStartDateTime = n.getDateValue(); },
        };
    };
    /**
     * Gets the roles property value. The roles for that user.
     * @returns a string
     */
    public get roles() {
        return this._roles;
    };
    /**
     * Sets the roles property value. The roles for that user.
     * @param value Value to set for the roles property.
     */
    public set roles(value: string[] | undefined) {
        this._roles = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeCollectionOfPrimitiveValues<string>("roles", this.roles);
        writer.writeDateValue("visibleHistoryStartDateTime", this.visibleHistoryStartDateTime);
    };
    /**
     * Gets the visibleHistoryStartDateTime property value. The timestamp denoting how far back a conversation's history is shared with the conversation member. This property is settable only for members of a chat.
     * @returns a Date
     */
    public get visibleHistoryStartDateTime() {
        return this._visibleHistoryStartDateTime;
    };
    /**
     * Sets the visibleHistoryStartDateTime property value. The timestamp denoting how far back a conversation's history is shared with the conversation member. This property is settable only for members of a chat.
     * @param value Value to set for the visibleHistoryStartDateTime property.
     */
    public set visibleHistoryStartDateTime(value: Date | undefined) {
        this._visibleHistoryStartDateTime = value;
    };
}
