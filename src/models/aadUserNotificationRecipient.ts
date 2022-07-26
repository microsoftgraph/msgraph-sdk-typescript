import {TeamworkNotificationRecipient} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AadUserNotificationRecipient extends TeamworkNotificationRecipient implements Parsable {
    /** Azure AD user identifier. Use the List users method to get this ID. */
    private _userId?: string | undefined;
    /**
     * Instantiates a new AadUserNotificationRecipient and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.aadUserNotificationRecipient";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "userId": n => { this.userId = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("userId", this.userId);
    };
    /**
     * Gets the userId property value. Azure AD user identifier. Use the List users method to get this ID.
     * @returns a string
     */
    public get userId() {
        return this._userId;
    };
    /**
     * Sets the userId property value. Azure AD user identifier. Use the List users method to get this ID.
     * @param value Value to set for the userId property.
     */
    public set userId(value: string | undefined) {
        this._userId = value;
    };
}
