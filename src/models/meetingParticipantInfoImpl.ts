import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {IdentitySet} from './identitySet';
import {IdentitySetImpl} from './index';
import {MeetingParticipantInfo} from './meetingParticipantInfo';
import {OnlineMeetingRole} from './onlineMeetingRole';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class MeetingParticipantInfoImpl implements AdditionalDataHolder, MeetingParticipantInfo, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Identity information of the participant. */
    public identity?: IdentitySet | undefined;
    /** Specifies the participant's role in the meeting. */
    public role?: OnlineMeetingRole | undefined;
    /** User principal name of the participant. */
    public upn?: string | undefined;
    /**
     * Instantiates a new meetingParticipantInfo and sets the default values.
     * @param meetingParticipantInfoParameterValue 
     */
    public constructor(meetingParticipantInfoParameterValue?: MeetingParticipantInfo | undefined) {
        this.additionalData = meetingParticipantInfoParameterValue?.additionalData ? meetingParticipantInfoParameterValue?.additionalData! : {}
        this.identity = meetingParticipantInfoParameterValue?.identity ;
        this.role = meetingParticipantInfoParameterValue?.role ;
        this.upn = meetingParticipantInfoParameterValue?.upn ;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.identity){
        writer.writeObjectValue<IdentitySetImpl>("identity", new IdentitySetImpl(this.identity));
        }
        if(this.role){
        writer.writeEnumValue<OnlineMeetingRole>("role", this.role);
        }
        if(this.upn){
        writer.writeStringValue("upn", this.upn);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
