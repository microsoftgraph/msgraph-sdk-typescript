import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {IdentitySet} from './index';
import {OnlineMeetingRole} from './onlineMeetingRole';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class MeetingParticipantInfo implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Record<string, unknown>;
    /** Identity information of the participant.  */
    private _identity?: IdentitySet | undefined;
    /** Specifies the participant's role in the meeting.  Possible values are attendee, presenter, producer, and unknownFutureValue.  */
    private _role?: OnlineMeetingRole | undefined;
    /** User principal name of the participant.  */
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
        this._additionalData = value;
    };
    /**
     * Instantiates a new meetingParticipantInfo and sets the default values.
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
            "identity": n => { this.identity = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
            "role": n => { this.role = n.getEnumValue<OnlineMeetingRole>(OnlineMeetingRole); },
            "upn": n => { this.upn = n.getStringValue(); },
        };
    };
    /**
     * Gets the identity property value. Identity information of the participant.
     * @returns a identitySet
     */
    public get identity() {
        return this._identity;
    };
    /**
     * Sets the identity property value. Identity information of the participant.
     * @param value Value to set for the identity property.
     */
    public set identity(value: IdentitySet | undefined) {
        this._identity = value;
    };
    /**
     * Gets the role property value. Specifies the participant's role in the meeting.  Possible values are attendee, presenter, producer, and unknownFutureValue.
     * @returns a onlineMeetingRole
     */
    public get role() {
        return this._role;
    };
    /**
     * Sets the role property value. Specifies the participant's role in the meeting.  Possible values are attendee, presenter, producer, and unknownFutureValue.
     * @param value Value to set for the role property.
     */
    public set role(value: OnlineMeetingRole | undefined) {
        this._role = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<IdentitySet>("identity", this.identity);
        writer.writeEnumValue<OnlineMeetingRole>("role", this.role);
        writer.writeStringValue("upn", this.upn);
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
        this._upn = value;
    };
}
