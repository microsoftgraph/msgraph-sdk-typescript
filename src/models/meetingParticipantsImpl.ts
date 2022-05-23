import {createMeetingParticipantInfoFromDiscriminatorValue} from './createMeetingParticipantInfoFromDiscriminatorValue';
import {MeetingParticipantInfoImpl} from './index';
import {MeetingParticipantInfo} from './meetingParticipantInfo';
import {MeetingParticipants} from './meetingParticipants';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class MeetingParticipantsImpl implements AdditionalDataHolder, MeetingParticipants, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Information of the meeting attendees. */
    public attendees?: MeetingParticipantInfo[] | undefined;
    /** Information of the meeting organizer. */
    public organizer?: MeetingParticipantInfo | undefined;
    /**
     * Instantiates a new meetingParticipants and sets the default values.
     * @param meetingParticipantsParameterValue 
     */
    public constructor(meetingParticipantsParameterValue?: MeetingParticipants | undefined) {
        this.additionalData = meetingParticipantsParameterValue?.additionalData ? meetingParticipantsParameterValue?.additionalData! : {}
        this.attendees = meetingParticipantsParameterValue?.attendees ;
        this.organizer = meetingParticipantsParameterValue?.organizer ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "attendees": n => { this.attendees = n.getCollectionOfObjectValues<MeetingParticipantInfoImpl>(createMeetingParticipantInfoFromDiscriminatorValue); },
            "organizer": n => { this.organizer = n.getObjectValue<MeetingParticipantInfoImpl>(createMeetingParticipantInfoFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.attendees && this.attendees.length != 0){        const attendeesArrValue: MeetingParticipantInfoImpl[] = []; this.attendees?.forEach(element => {attendeesArrValue.push(new MeetingParticipantInfoImpl(element));});
        writer.writeCollectionOfObjectValues<MeetingParticipantInfoImpl>("attendees", attendeesArrValue);
        }
        if(this.organizer){
        writer.writeObjectValue<MeetingParticipantInfoImpl>("organizer", new MeetingParticipantInfoImpl(this.organizer));
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
