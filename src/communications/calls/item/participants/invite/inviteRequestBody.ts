import {InvitationParticipantInfo} from '../../../../../models/';
import {createInvitationParticipantInfoFromDiscriminatorValue} from '../../../../../models/createInvitationParticipantInfoFromDiscriminatorValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the invite method.  */
export class InviteRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Record<string, unknown>;
    /** The clientContext property  */
    private _clientContext?: string | undefined;
    /** The participants property  */
    private _participants?: InvitationParticipantInfo[] | undefined;
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
     * Gets the clientContext property value. The clientContext property
     * @returns a string
     */
    public get clientContext() {
        return this._clientContext;
    };
    /**
     * Sets the clientContext property value. The clientContext property
     * @param value Value to set for the clientContext property.
     */
    public set clientContext(value: string | undefined) {
        this._clientContext = value;
    };
    /**
     * Instantiates a new inviteRequestBody and sets the default values.
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
            "clientContext": n => { this.clientContext = n.getStringValue(); },
            "participants": n => { this.participants = n.getCollectionOfObjectValues<InvitationParticipantInfo>(createInvitationParticipantInfoFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the participants property value. The participants property
     * @returns a invitationParticipantInfo
     */
    public get participants() {
        return this._participants;
    };
    /**
     * Sets the participants property value. The participants property
     * @param value Value to set for the participants property.
     */
    public set participants(value: InvitationParticipantInfo[] | undefined) {
        this._participants = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("clientContext", this.clientContext);
        writer.writeCollectionOfObjectValues<InvitationParticipantInfo>("participants", this.participants);
        writer.writeAdditionalData(this.additionalData);
    };
}
