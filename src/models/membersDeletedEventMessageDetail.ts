import {AdminMember1, EventMessageDetail, IdentitySet, TeamworkUserIdentity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class MembersDeletedEventMessageDetail extends EventMessageDetail implements Parsable {
    /** Initiator of the event. */
    private _initiator?: IdentitySet | AdminMember1 | undefined;
    /** List of members deleted. */
    private _members?: TeamworkUserIdentity | AdminMember1[] | undefined;
    /**
     * Instantiates a new MembersDeletedEventMessageDetail and sets the default values.
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
            "initiator": n => { this.initiator = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
            "members": n => { this.members = n.getObjectValue<TeamworkUserIdentity>(createTeamworkUserIdentityFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the initiator property value. Initiator of the event.
     * @returns a admin
     */
    public get initiator() {
        return this._initiator;
    };
    /**
     * Sets the initiator property value. Initiator of the event.
     * @param value Value to set for the initiator property.
     */
    public set initiator(value: IdentitySet | AdminMember1 | undefined) {
        this._initiator = value;
    };
    /**
     * Gets the members property value. List of members deleted.
     * @returns a admin
     */
    public get members() {
        return this._members;
    };
    /**
     * Sets the members property value. List of members deleted.
     * @param value Value to set for the members property.
     */
    public set members(value: TeamworkUserIdentity | AdminMember1[] | undefined) {
        this._members = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<IdentitySet>("initiator", this.initiator);
        writer.writeObjectValue<TeamworkUserIdentity>("members", this.members);
    };
}
