import {TeamworkNotificationRecipient} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TeamMembersNotificationRecipient extends TeamworkNotificationRecipient implements Parsable {
    /** The unique identifier for the team whose members should receive the notification. */
    private _teamId?: string | undefined;
    /**
     * Instantiates a new TeamMembersNotificationRecipient and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.teamMembersNotificationRecipient";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "teamId": n => { this.teamId = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("teamId", this.teamId);
    };
    /**
     * Gets the teamId property value. The unique identifier for the team whose members should receive the notification.
     * @returns a string
     */
    public get teamId() {
        return this._teamId;
    };
    /**
     * Sets the teamId property value. The unique identifier for the team whose members should receive the notification.
     * @param value Value to set for the teamId property.
     */
    public set teamId(value: string | undefined) {
        this._teamId = value;
    };
}
