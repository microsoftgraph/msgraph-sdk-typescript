import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {createTeamworkUserIdentityFromDiscriminatorValue} from './createTeamworkUserIdentityFromDiscriminatorValue';
import {EventMessageDetail, IdentitySet, TeamworkUserIdentity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ConversationMemberRoleUpdatedEventMessageDetail extends EventMessageDetail implements Parsable {
    /** Roles for the coversation member user. */
    private _conversationMemberRoles?: string[] | undefined;
    /** Identity of the conversation member user. */
    private _conversationMemberUser?: TeamworkUserIdentity | undefined;
    /** Initiator of the event. */
    private _initiator?: IdentitySet | undefined;
    /**
     * Instantiates a new ConversationMemberRoleUpdatedEventMessageDetail and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the conversationMemberRoles property value. Roles for the coversation member user.
     * @returns a string
     */
    public get conversationMemberRoles() {
        return this._conversationMemberRoles;
    };
    /**
     * Sets the conversationMemberRoles property value. Roles for the coversation member user.
     * @param value Value to set for the conversationMemberRoles property.
     */
    public set conversationMemberRoles(value: string[] | undefined) {
        this._conversationMemberRoles = value;
    };
    /**
     * Gets the conversationMemberUser property value. Identity of the conversation member user.
     * @returns a teamworkUserIdentity
     */
    public get conversationMemberUser() {
        return this._conversationMemberUser;
    };
    /**
     * Sets the conversationMemberUser property value. Identity of the conversation member user.
     * @param value Value to set for the conversationMemberUser property.
     */
    public set conversationMemberUser(value: TeamworkUserIdentity | undefined) {
        this._conversationMemberUser = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "conversationMemberRoles": n => { this.conversationMemberRoles = n.getCollectionOfPrimitiveValues<string>(); },
            "conversationMemberUser": n => { this.conversationMemberUser = n.getObjectValue<TeamworkUserIdentity>(createTeamworkUserIdentityFromDiscriminatorValue); },
            "initiator": n => { this.initiator = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfPrimitiveValues<string>("conversationMemberRoles", this.conversationMemberRoles);
        writer.writeObjectValue<TeamworkUserIdentity>("conversationMemberUser", this.conversationMemberUser);
        writer.writeObjectValue<IdentitySet>("initiator", this.initiator);
    };
}
