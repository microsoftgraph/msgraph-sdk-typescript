import {InvitationParticipantInfoImpl} from '../../../../../models/';
import {createInvitationParticipantInfoFromDiscriminatorValue} from '../../../../../models/createInvitationParticipantInfoFromDiscriminatorValue';
import {InvitationParticipantInfo} from '../../../../../models/invitationParticipantInfo';
import {InvitePostRequestBody} from './invitePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the invite method. */
export class InvitePostRequestBodyImpl implements InvitePostRequestBody {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
    /** The clientContext property */
    private _clientContext?: string | undefined;
    /** The participants property */
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
    public set additionalData(value: Record<string, unknown> | undefined) {
        if(value) {
            this._additionalData = value;
        }
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
        if(value) {
            this._clientContext = value;
        }
    };
    /**
     * Instantiates a new invitePostRequestBody and sets the default values.
     * @param invitePostRequestBodyParameterValue 
     */
    public constructor(invitePostRequestBodyParameterValue?: InvitePostRequestBody | undefined) {
        this._additionalData = invitePostRequestBodyParameterValue?.additionalData ? invitePostRequestBodyParameterValue?.additionalData! : {};
        this._clientContext = invitePostRequestBodyParameterValue?.clientContext;
        this._participants = invitePostRequestBodyParameterValue?.participants;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "clientContext": n => { this.clientContext = n.getStringValue(); },
            "participants": n => { this.participants = n.getCollectionOfObjectValues<InvitationParticipantInfoImpl>(createInvitationParticipantInfoFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the participants property value. The participants property
     * @returns a InvitationParticipantInfoInterface
     */
    public get participants() {
        return this._participants;
    };
    /**
     * Sets the participants property value. The participants property
     * @param value Value to set for the participants property.
     */
    public set participants(value: InvitationParticipantInfo[] | undefined) {
        if(value) {
            const participantsArrValue: InvitationParticipantInfoImpl[] = [];
            this.participants?.forEach(element => {
                participantsArrValue.push((element instanceof InvitationParticipantInfoImpl? element as InvitationParticipantInfoImpl:new InvitationParticipantInfoImpl(element)));
            });
            this._participants = participantsArrValue;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.clientContext){
            writer.writeStringValue("clientContext", this.clientContext);
        }
        if(this.participants && this.participants.length != 0){        const participantsArrValue: InvitationParticipantInfoImpl[] = [];
        this.participants?.forEach(element => {
            participantsArrValue.push((element instanceof InvitationParticipantInfoImpl? element as InvitationParticipantInfoImpl:new InvitationParticipantInfoImpl(element)));
        });
            writer.writeCollectionOfObjectValues<InvitationParticipantInfoImpl>("participants", participantsArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
