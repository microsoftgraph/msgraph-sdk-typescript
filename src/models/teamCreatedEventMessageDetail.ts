import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {EventMessageDetail, IdentitySet} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TeamCreatedEventMessageDetail extends EventMessageDetail implements Parsable {
    /** Initiator of the event. */
    private _initiator?: IdentitySet | undefined;
    /** Description for the team. */
    private _teamDescription?: string | undefined;
    /** Display name of the team. */
    private _teamDisplayName?: string | undefined;
    /** Unique identifier of the team. */
    private _teamId?: string | undefined;
    /**
     * Instantiates a new TeamCreatedEventMessageDetail and sets the default values.
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
            "teamDescription": n => { this.teamDescription = n.getStringValue(); },
            "teamDisplayName": n => { this.teamDisplayName = n.getStringValue(); },
            "teamId": n => { this.teamId = n.getStringValue(); },
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
        writer.writeObjectValue<IdentitySet>("initiator", this.initiator);
        writer.writeStringValue("teamDescription", this.teamDescription);
        writer.writeStringValue("teamDisplayName", this.teamDisplayName);
        writer.writeStringValue("teamId", this.teamId);
    };
    /**
     * Gets the teamDescription property value. Description for the team.
     * @returns a string
     */
    public get teamDescription() {
        return this._teamDescription;
    };
    /**
     * Sets the teamDescription property value. Description for the team.
     * @param value Value to set for the teamDescription property.
     */
    public set teamDescription(value: string | undefined) {
        this._teamDescription = value;
    };
    /**
     * Gets the teamDisplayName property value. Display name of the team.
     * @returns a string
     */
    public get teamDisplayName() {
        return this._teamDisplayName;
    };
    /**
     * Sets the teamDisplayName property value. Display name of the team.
     * @param value Value to set for the teamDisplayName property.
     */
    public set teamDisplayName(value: string | undefined) {
        this._teamDisplayName = value;
    };
    /**
     * Gets the teamId property value. Unique identifier of the team.
     * @returns a string
     */
    public get teamId() {
        return this._teamId;
    };
    /**
     * Sets the teamId property value. Unique identifier of the team.
     * @param value Value to set for the teamId property.
     */
    public set teamId(value: string | undefined) {
        this._teamId = value;
    };
}
