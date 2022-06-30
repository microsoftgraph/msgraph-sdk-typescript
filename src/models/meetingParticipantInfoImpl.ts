import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {IdentitySet} from './identitySet';
import {IdentitySetImpl} from './index';
import {MeetingParticipantInfo} from './meetingParticipantInfo';
import {OnlineMeetingRole} from './onlineMeetingRole';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class MeetingParticipantInfoImpl implements MeetingParticipantInfo {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Identity information of the participant. */
    private _identity?: IdentitySet | undefined;
    /** Specifies the participant's role in the meeting. */
    private _role?: OnlineMeetingRole | undefined;
    /** User principal name of the participant. */
    private _upn?: string | undefined;
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
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Instantiates a new meetingParticipantInfo and sets the default values.
     * @param meetingParticipantInfoParameterValue 
     */
    public constructor(meetingParticipantInfoParameterValue?: MeetingParticipantInfo | undefined) {
        this._additionalData = meetingParticipantInfoParameterValue?.additionalData ? meetingParticipantInfoParameterValue?.additionalData! : {};
        this._identity = meetingParticipantInfoParameterValue?.identity;
        this._role = meetingParticipantInfoParameterValue?.role;
        this._upn = meetingParticipantInfoParameterValue?.upn;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "identity": n => { this.identity = n.getObjectValue<IdentitySetImpl>(createIdentitySetFromDiscriminatorValue); },
            "role": n => { this.role = n.getEnumValue<OnlineMeetingRole>(OnlineMeetingRole); },
            "upn": n => { this.upn = n.getStringValue(); },
        };
    };
    /**
     * Gets the identity property value. Identity information of the participant.
     * @returns a IdentitySetInterface
     */
    public get identity() {
        return this._identity;
    };
    /**
     * Sets the identity property value. Identity information of the participant.
     * @param value Value to set for the identity property.
     */
    public set identity(value: IdentitySet | undefined) {
        if(value) {
            this._identity = value instanceof IdentitySetImpl? value : new IdentitySetImpl(value);
        }
    };
    /**
     * Gets the role property value. Specifies the participant's role in the meeting.
     * @returns a onlineMeetingRole
     */
    public get role() {
        return this._role;
    };
    /**
     * Sets the role property value. Specifies the participant's role in the meeting.
     * @param value Value to set for the role property.
     */
    public set role(value: OnlineMeetingRole | undefined) {
        if(value) {
            this._role = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.identity){
            writer.writeObjectValue<IdentitySetImpl>("identity", (!this.identity || this.identity instanceof IdentitySetImpl? this.identity : new IdentitySetImpl(this.identity)));
        }
        if(this.role){
            writer.writeEnumValue<OnlineMeetingRole>("role", this.role);
        }
        if(this.upn){
            writer.writeStringValue("upn", this.upn);
        }
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the upn property value. User principal name of the participant.
     * @returns a string
     */
    public get upn() {
        return this._upn;
    };
    /**
     * Sets the upn property value. User principal name of the participant.
     * @param value Value to set for the upn property.
     */
    public set upn(value: string | undefined) {
        if(value) {
            this._upn = value;
        }
    };
}
