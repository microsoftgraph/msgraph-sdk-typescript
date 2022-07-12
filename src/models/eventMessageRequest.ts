import {createDateTimeTimeZoneFromDiscriminatorValue} from './createDateTimeTimeZoneFromDiscriminatorValue';
import {createLocationFromDiscriminatorValue} from './createLocationFromDiscriminatorValue';
import {DateTimeTimeZone, EventMessage, Location} from './index';
import {MeetingRequestType} from './meetingRequestType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class EventMessageRequest extends EventMessage implements Parsable {
    /** True if the meeting organizer allows invitees to propose a new time when responding, false otherwise. Optional. Default is true. */
    private _allowNewTimeProposals?: boolean | undefined;
    /** The meetingRequestType property */
    private _meetingRequestType?: MeetingRequestType | undefined;
    /** If the meeting update changes the meeting end time, this property specifies the previous meeting end time. */
    private _previousEndDateTime?: DateTimeTimeZone | undefined;
    /** If the meeting update changes the meeting location, this property specifies the previous meeting location. */
    private _previousLocation?: Location | undefined;
    /** If the meeting update changes the meeting start time, this property specifies the previous meeting start time. */
    private _previousStartDateTime?: DateTimeTimeZone | undefined;
    /** Set to true if the sender would like the invitee to send a response to the requested meeting. */
    private _responseRequested?: boolean | undefined;
    /**
     * Gets the allowNewTimeProposals property value. True if the meeting organizer allows invitees to propose a new time when responding, false otherwise. Optional. Default is true.
     * @returns a boolean
     */
    public get allowNewTimeProposals() {
        return this._allowNewTimeProposals;
    };
    /**
     * Sets the allowNewTimeProposals property value. True if the meeting organizer allows invitees to propose a new time when responding, false otherwise. Optional. Default is true.
     * @param value Value to set for the allowNewTimeProposals property.
     */
    public set allowNewTimeProposals(value: boolean | undefined) {
        this._allowNewTimeProposals = value;
    };
    /**
     * Instantiates a new EventMessageRequest and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "allowNewTimeProposals": n => { this.allowNewTimeProposals = n.getBooleanValue(); },
            "meetingRequestType": n => { this.meetingRequestType = n.getEnumValue<MeetingRequestType>(MeetingRequestType); },
            "previousEndDateTime": n => { this.previousEndDateTime = n.getObjectValue<DateTimeTimeZone>(createDateTimeTimeZoneFromDiscriminatorValue); },
            "previousLocation": n => { this.previousLocation = n.getObjectValue<Location>(createLocationFromDiscriminatorValue); },
            "previousStartDateTime": n => { this.previousStartDateTime = n.getObjectValue<DateTimeTimeZone>(createDateTimeTimeZoneFromDiscriminatorValue); },
            "responseRequested": n => { this.responseRequested = n.getBooleanValue(); },
        };
    };
    /**
     * Gets the meetingRequestType property value. The meetingRequestType property
     * @returns a meetingRequestType
     */
    public get meetingRequestType() {
        return this._meetingRequestType;
    };
    /**
     * Sets the meetingRequestType property value. The meetingRequestType property
     * @param value Value to set for the meetingRequestType property.
     */
    public set meetingRequestType(value: MeetingRequestType | undefined) {
        this._meetingRequestType = value;
    };
    /**
     * Gets the previousEndDateTime property value. If the meeting update changes the meeting end time, this property specifies the previous meeting end time.
     * @returns a dateTimeTimeZone
     */
    public get previousEndDateTime() {
        return this._previousEndDateTime;
    };
    /**
     * Sets the previousEndDateTime property value. If the meeting update changes the meeting end time, this property specifies the previous meeting end time.
     * @param value Value to set for the previousEndDateTime property.
     */
    public set previousEndDateTime(value: DateTimeTimeZone | undefined) {
        this._previousEndDateTime = value;
    };
    /**
     * Gets the previousLocation property value. If the meeting update changes the meeting location, this property specifies the previous meeting location.
     * @returns a location
     */
    public get previousLocation() {
        return this._previousLocation;
    };
    /**
     * Sets the previousLocation property value. If the meeting update changes the meeting location, this property specifies the previous meeting location.
     * @param value Value to set for the previousLocation property.
     */
    public set previousLocation(value: Location | undefined) {
        this._previousLocation = value;
    };
    /**
     * Gets the previousStartDateTime property value. If the meeting update changes the meeting start time, this property specifies the previous meeting start time.
     * @returns a dateTimeTimeZone
     */
    public get previousStartDateTime() {
        return this._previousStartDateTime;
    };
    /**
     * Sets the previousStartDateTime property value. If the meeting update changes the meeting start time, this property specifies the previous meeting start time.
     * @param value Value to set for the previousStartDateTime property.
     */
    public set previousStartDateTime(value: DateTimeTimeZone | undefined) {
        this._previousStartDateTime = value;
    };
    /**
     * Gets the responseRequested property value. Set to true if the sender would like the invitee to send a response to the requested meeting.
     * @returns a boolean
     */
    public get responseRequested() {
        return this._responseRequested;
    };
    /**
     * Sets the responseRequested property value. Set to true if the sender would like the invitee to send a response to the requested meeting.
     * @param value Value to set for the responseRequested property.
     */
    public set responseRequested(value: boolean | undefined) {
        this._responseRequested = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeBooleanValue("allowNewTimeProposals", this.allowNewTimeProposals);
        writer.writeEnumValue<MeetingRequestType>("meetingRequestType", this.meetingRequestType);
        writer.writeObjectValue<DateTimeTimeZone>("previousEndDateTime", this.previousEndDateTime);
        writer.writeObjectValue<Location>("previousLocation", this.previousLocation);
        writer.writeObjectValue<DateTimeTimeZone>("previousStartDateTime", this.previousStartDateTime);
        writer.writeBooleanValue("responseRequested", this.responseRequested);
    };
}
