import {createTeamworkUserIdentityFromDiscriminatorValue} from './createTeamworkUserIdentityFromDiscriminatorValue';
import {TeamworkUserIdentityImpl} from './index';
import {TeamworkOnlineMeetingInfo} from './teamworkOnlineMeetingInfo';
import {TeamworkUserIdentity} from './teamworkUserIdentity';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TeamworkOnlineMeetingInfoImpl implements TeamworkOnlineMeetingInfo {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
    /** The identifier of the calendar event associated with the meeting. */
    private _calendarEventId?: string | undefined;
    /** The URL which can be clicked on to join or uniquely identify the meeting. */
    private _joinWebUrl?: string | undefined;
    /** The organizer of the meeting. */
    private _organizer?: TeamworkUserIdentity | undefined;
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
     * Gets the calendarEventId property value. The identifier of the calendar event associated with the meeting.
     * @returns a string
     */
    public get calendarEventId() {
        return this._calendarEventId;
    };
    /**
     * Sets the calendarEventId property value. The identifier of the calendar event associated with the meeting.
     * @param value Value to set for the calendarEventId property.
     */
    public set calendarEventId(value: string | undefined) {
        if(value) {
            this._calendarEventId = value;
        }
    };
    /**
     * Instantiates a new teamworkOnlineMeetingInfo and sets the default values.
     * @param teamworkOnlineMeetingInfoParameterValue 
     */
    public constructor(teamworkOnlineMeetingInfoParameterValue?: TeamworkOnlineMeetingInfo | undefined) {
        this._additionalData = teamworkOnlineMeetingInfoParameterValue?.additionalData ? teamworkOnlineMeetingInfoParameterValue?.additionalData! : {};
        this._calendarEventId = teamworkOnlineMeetingInfoParameterValue?.calendarEventId;
        this._joinWebUrl = teamworkOnlineMeetingInfoParameterValue?.joinWebUrl;
        this._organizer = teamworkOnlineMeetingInfoParameterValue?.organizer;
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
     * Gets the joinWebUrl property value. The URL which can be clicked on to join or uniquely identify the meeting.
     * @returns a string
     */
    public get joinWebUrl() {
        return this._joinWebUrl;
    };
    /**
     * Sets the joinWebUrl property value. The URL which can be clicked on to join or uniquely identify the meeting.
     * @param value Value to set for the joinWebUrl property.
     */
    public set joinWebUrl(value: string | undefined) {
        if(value) {
            this._joinWebUrl = value;
        }
    };
    /**
     * Gets the organizer property value. The organizer of the meeting.
     * @returns a TeamworkUserIdentityInterface
     */
    public get organizer() {
        return this._organizer;
    };
    /**
     * Sets the organizer property value. The organizer of the meeting.
     * @param value Value to set for the organizer property.
     */
    public set organizer(value: TeamworkUserIdentity | undefined) {
        if(value) {
            this._organizer = value instanceof TeamworkUserIdentityImpl? value as TeamworkUserIdentityImpl: new TeamworkUserIdentityImpl(value);
        }
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
            writer.writeObjectValue<TeamworkUserIdentityImpl>("organizer", (this.organizer instanceof TeamworkUserIdentityImpl? this.organizer as TeamworkUserIdentityImpl: new TeamworkUserIdentityImpl(this.organizer)));
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
