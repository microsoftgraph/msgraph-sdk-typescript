import {createTeamworkUserIdentityFromDiscriminatorValue} from './createTeamworkUserIdentityFromDiscriminatorValue';
import {TeamworkUserIdentityImpl} from './index';
import {TeamworkOnlineMeetingInfo} from './teamworkOnlineMeetingInfo';
import {TeamworkUserIdentity} from './teamworkUserIdentity';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TeamworkOnlineMeetingInfoImpl implements AdditionalDataHolder, Parsable, TeamworkOnlineMeetingInfo {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The identifier of the calendar event associated with the meeting. */
    public calendarEventId?: string | undefined;
    /** The URL which can be clicked on to join or uniquely identify the meeting. */
    public joinWebUrl?: string | undefined;
    /** The organizer of the meeting. */
    public organizer?: TeamworkUserIdentity | undefined;
    /**
     * Instantiates a new teamworkOnlineMeetingInfo and sets the default values.
     * @param teamworkOnlineMeetingInfoParameterValue 
     */
    public constructor(teamworkOnlineMeetingInfoParameterValue?: TeamworkOnlineMeetingInfo | undefined) {
        this.additionalData = teamworkOnlineMeetingInfoParameterValue?.additionalData ? teamworkOnlineMeetingInfoParameterValue?.additionalData! : {}
        this.calendarEventId = teamworkOnlineMeetingInfoParameterValue?.calendarEventId ;
        this.joinWebUrl = teamworkOnlineMeetingInfoParameterValue?.joinWebUrl ;
        this.organizer = teamworkOnlineMeetingInfoParameterValue?.organizer ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "calendarEventId": n => { this.calendarEventId = n.getStringValue(); },
            "joinWebUrl": n => { this.joinWebUrl = n.getStringValue(); },
            "organizer": n => { this.organizer = n.getObjectValue<TeamworkUserIdentityImpl>(createTeamworkUserIdentityFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.calendarEventId){
        writer.writeStringValue("calendarEventId", this.calendarEventId);
        }
        if(this.joinWebUrl){
        writer.writeStringValue("joinWebUrl", this.joinWebUrl);
        }
        if(this.organizer){
        writer.writeObjectValue<TeamworkUserIdentityImpl>("organizer", new TeamworkUserIdentityImpl(this.organizer));
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
