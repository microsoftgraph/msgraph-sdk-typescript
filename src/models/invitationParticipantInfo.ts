import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {IdentitySet} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class InvitationParticipantInfo implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Optional. Whether to hide the participant from the roster. */
    private _hidden?: boolean | undefined;
    private _identity?: IdentitySet | undefined;
    private _odataType?: string | undefined;
    /** Optional. The ID of the target participant. */
    private _participantId?: string | undefined;
    /** Optional. Whether to remove them from the main mixer. */
    private _removeFromDefaultAudioRoutingGroup?: boolean | undefined;
    /** Optional. The call which the target identity is currently a part of. For peer-to-peer case, the call will be dropped once the participant is added successfully. */
    private _replacesCallId?: string | undefined;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Record<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Record<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Instantiates a new invitationParticipantInfo and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "hidden": n => { this.hidden = n.getBooleanValue(); },
            "identity": n => { this.identity = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "participantId": n => { this.participantId = n.getStringValue(); },
            "removeFromDefaultAudioRoutingGroup": n => { this.removeFromDefaultAudioRoutingGroup = n.getBooleanValue(); },
            "replacesCallId": n => { this.replacesCallId = n.getStringValue(); },
        };
    };
    /**
     * Gets the hidden property value. Optional. Whether to hide the participant from the roster.
     * @returns a boolean
     */
    public get hidden() {
        return this._hidden;
    };
    /**
     * Sets the hidden property value. Optional. Whether to hide the participant from the roster.
     * @param value Value to set for the hidden property.
     */
    public set hidden(value: boolean | undefined) {
        this._hidden = value;
    };
    /**
     * Gets the identity property value. 
     * @returns a identitySet
     */
    public get identity() {
        return this._identity;
    };
    /**
     * Sets the identity property value. 
     * @param value Value to set for the identity property.
     */
    public set identity(value: IdentitySet | undefined) {
        this._identity = value;
    };
    /**
     * Gets the @odata.type property value. 
     * @returns a string
     */
    public get odataType() {
        return this._odataType;
    };
    /**
     * Sets the @odata.type property value. 
     * @param value Value to set for the OdataType property.
     */
    public set odataType(value: string | undefined) {
        this._odataType = value;
    };
    /**
     * Gets the participantId property value. Optional. The ID of the target participant.
     * @returns a string
     */
    public get participantId() {
        return this._participantId;
    };
    /**
     * Sets the participantId property value. Optional. The ID of the target participant.
     * @param value Value to set for the participantId property.
     */
    public set participantId(value: string | undefined) {
        this._participantId = value;
    };
    /**
     * Gets the removeFromDefaultAudioRoutingGroup property value. Optional. Whether to remove them from the main mixer.
     * @returns a boolean
     */
    public get removeFromDefaultAudioRoutingGroup() {
        return this._removeFromDefaultAudioRoutingGroup;
    };
    /**
     * Sets the removeFromDefaultAudioRoutingGroup property value. Optional. Whether to remove them from the main mixer.
     * @param value Value to set for the removeFromDefaultAudioRoutingGroup property.
     */
    public set removeFromDefaultAudioRoutingGroup(value: boolean | undefined) {
        this._removeFromDefaultAudioRoutingGroup = value;
    };
    /**
     * Gets the replacesCallId property value. Optional. The call which the target identity is currently a part of. For peer-to-peer case, the call will be dropped once the participant is added successfully.
     * @returns a string
     */
    public get replacesCallId() {
        return this._replacesCallId;
    };
    /**
     * Sets the replacesCallId property value. Optional. The call which the target identity is currently a part of. For peer-to-peer case, the call will be dropped once the participant is added successfully.
     * @param value Value to set for the replacesCallId property.
     */
    public set replacesCallId(value: string | undefined) {
        this._replacesCallId = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeBooleanValue("hidden", this.hidden);
        writer.writeObjectValue<IdentitySet>("identity", this.identity);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeStringValue("participantId", this.participantId);
        writer.writeBooleanValue("removeFromDefaultAudioRoutingGroup", this.removeFromDefaultAudioRoutingGroup);
        writer.writeStringValue("replacesCallId", this.replacesCallId);
        writer.writeAdditionalData(this.additionalData);
    };
}
