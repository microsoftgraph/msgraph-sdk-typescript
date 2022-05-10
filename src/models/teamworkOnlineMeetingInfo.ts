import {createTeamworkUserIdentityFromDiscriminatorValue} from './createTeamworkUserIdentityFromDiscriminatorValue';
import {TeamworkUserIdentity} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TeamworkOnlineMeetingInfo implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
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
    public set additionalData(value: Record<string, unknown>) {
        this._additionalData = value;
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
        this._calendarEventId = value;
    };
    /**
     * Instantiates a new teamworkOnlineMeetingInfo and sets the default values.
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
            "calendarEventId": n => { this.calendarEventId = n.getStringValue(); },
            "joinWebUrl": n => { this.joinWebUrl = n.getStringValue(); },
            "organizer": n => { this.organizer = n.getObjectValue<TeamworkUserIdentity>(createTeamworkUserIdentityFromDiscriminatorValue); },
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
        this._joinWebUrl = value;
    };
    /**
     * Gets the organizer property value. The organizer of the meeting.
     * @returns a teamworkUserIdentity
     */
    public get organizer() {
        return this._organizer;
    };
    /**
     * Sets the organizer property value. The organizer of the meeting.
     * @param value Value to set for the organizer property.
     */
    public set organizer(value: TeamworkUserIdentity | undefined) {
        this._organizer = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("calendarEventId", this.calendarEventId);
        writer.writeStringValue("joinWebUrl", this.joinWebUrl);
        writer.writeObjectValue<TeamworkUserIdentity>("organizer", this.organizer);
        writer.writeAdditionalData(this.additionalData);
    };
}
