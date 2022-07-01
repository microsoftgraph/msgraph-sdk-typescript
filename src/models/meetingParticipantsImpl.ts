import {createMeetingParticipantInfoFromDiscriminatorValue} from './createMeetingParticipantInfoFromDiscriminatorValue';
import {MeetingParticipantInfoImpl} from './index';
import {MeetingParticipantInfo} from './meetingParticipantInfo';
import {MeetingParticipants} from './meetingParticipants';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class MeetingParticipantsImpl implements MeetingParticipants {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
    /** Information of the meeting attendees. */
    private _attendees?: MeetingParticipantInfo[] | undefined;
    /** Information of the meeting organizer. */
    private _organizer?: MeetingParticipantInfo | undefined;
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
     * Gets the attendees property value. Information of the meeting attendees.
     * @returns a MeetingParticipantInfoInterface
     */
    public get attendees() {
        return this._attendees;
    };
    /**
     * Sets the attendees property value. Information of the meeting attendees.
     * @param value Value to set for the attendees property.
     */
    public set attendees(value: MeetingParticipantInfo[] | undefined) {
        if(value) {
            const attendeesArrValue: MeetingParticipantInfoImpl[] = [];
            this.attendees?.forEach(element => {
                attendeesArrValue.push((element instanceof MeetingParticipantInfoImpl? element:new MeetingParticipantInfoImpl(element)));
            });
            this._attendees = attendeesArrValue;
        }
    };
    /**
     * Instantiates a new meetingParticipants and sets the default values.
     * @param meetingParticipantsParameterValue 
     */
    public constructor(meetingParticipantsParameterValue?: MeetingParticipants | undefined) {
        this._additionalData = meetingParticipantsParameterValue?.additionalData ? meetingParticipantsParameterValue?.additionalData! : {};
        this._attendees = meetingParticipantsParameterValue?.attendees;
        this._organizer = meetingParticipantsParameterValue?.organizer;
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
     * Gets the organizer property value. Information of the meeting organizer.
     * @returns a MeetingParticipantInfoInterface
     */
    public get organizer() {
        return this._organizer;
    };
    /**
     * Sets the organizer property value. Information of the meeting organizer.
     * @param value Value to set for the organizer property.
     */
    public set organizer(value: MeetingParticipantInfo | undefined) {
        if(value) {
            this._organizer = value instanceof MeetingParticipantInfoImpl? value : new MeetingParticipantInfoImpl(value);
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.attendees && this.attendees.length != 0){        const attendeesArrValue: MeetingParticipantInfoImpl[] = [];
        this.attendees?.forEach(element => {
            attendeesArrValue.push((element instanceof MeetingParticipantInfoImpl? element:new MeetingParticipantInfoImpl(element)));
        });
            writer.writeCollectionOfObjectValues<MeetingParticipantInfoImpl>("attendees", attendeesArrValue);
        }
        if(this.organizer){
            writer.writeObjectValue<MeetingParticipantInfoImpl>("organizer", (!this.organizer || this.organizer instanceof MeetingParticipantInfoImpl? this.organizer : new MeetingParticipantInfoImpl(this.organizer)));
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
