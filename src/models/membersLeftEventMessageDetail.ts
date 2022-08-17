import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {createTeamworkUserIdentityFromDiscriminatorValue} from './createTeamworkUserIdentityFromDiscriminatorValue';
import {EventMessageDetail, IdentitySet, TeamworkUserIdentity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class MembersLeftEventMessageDetail extends EventMessageDetail implements Parsable {
    /** Initiator of the event. */
    private _initiator?: IdentitySet | undefined;
    /** List of members who left the chat. */
    private _members?: TeamworkUserIdentity[] | undefined;
    /**
     * Instantiates a new MembersLeftEventMessageDetail and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.membersLeftEventMessageDetail";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "initiator": n => { this.initiator = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
            "members": n => { this.members = n.getCollectionOfObjectValues<TeamworkUserIdentity>(createTeamworkUserIdentityFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the initiator property value. Initiator of the event.
     * @returns a identitySet
     */
    public get initiator() {
        return this._initiator;
    };
    /**
     * Sets the initiator property value. Initiator of the event.
     * @param value Value to set for the initiator property.
     */
    public set initiator(value: IdentitySet | undefined) {
        this._initiator = value;
    };
    /**
     * Gets the members property value. List of members who left the chat.
     * @returns a teamworkUserIdentity
     */
    public get members() {
        return this._members;
    };
    /**
     * Sets the members property value. List of members who left the chat.
     * @param value Value to set for the members property.
     */
    public set members(value: TeamworkUserIdentity[] | undefined) {
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
        writer.writeCollectionOfObjectValues<TeamworkUserIdentity>("members", this.members);
    };
}
