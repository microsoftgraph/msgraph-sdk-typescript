import {createDateTimeTimeZoneFromDiscriminatorValue} from './createDateTimeTimeZoneFromDiscriminatorValue';
import {createLocationFromDiscriminatorValue} from './createLocationFromDiscriminatorValue';
import {DateTimeTimeZone} from './dateTimeTimeZone';
import {EventMessageRequest} from './eventMessageRequest';
import {DateTimeTimeZoneImpl, EventMessageImpl, LocationImpl} from './index';
import {Location} from './location';
import {MeetingRequestType} from './meetingRequestType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class EventMessageRequestImpl extends EventMessageImpl implements EventMessageRequest {
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
        if(value) {
            this._allowNewTimeProposals = value;
        }
    };
    /**
     * Instantiates a new EventMessageRequest and sets the default values.
     * @param eventMessageRequestParameterValue 
     */
    public constructor(eventMessageRequestParameterValue?: EventMessageRequest | undefined) {
        super(eventMessageRequestParameterValue);
        this._allowNewTimeProposals = eventMessageRequestParameterValue?.allowNewTimeProposals;
        this._meetingRequestType = eventMessageRequestParameterValue?.meetingRequestType;
        this._previousEndDateTime = eventMessageRequestParameterValue?.previousEndDateTime;
        this._previousLocation = eventMessageRequestParameterValue?.previousLocation;
        this._previousStartDateTime = eventMessageRequestParameterValue?.previousStartDateTime;
        this._responseRequested = eventMessageRequestParameterValue?.responseRequested;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "allowNewTimeProposals": n => { this.allowNewTimeProposals = n.getBooleanValue(); },
            "meetingRequestType": n => { this.meetingRequestType = n.getEnumValue<MeetingRequestType>(MeetingRequestType); },
            "previousEndDateTime": n => { this.previousEndDateTime = n.getObjectValue<DateTimeTimeZoneImpl>(createDateTimeTimeZoneFromDiscriminatorValue); },
            "previousLocation": n => { this.previousLocation = n.getObjectValue<LocationImpl>(createLocationFromDiscriminatorValue); },
            "previousStartDateTime": n => { this.previousStartDateTime = n.getObjectValue<DateTimeTimeZoneImpl>(createDateTimeTimeZoneFromDiscriminatorValue); },
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
        if(value) {
            this._meetingRequestType = value;
        }
    };
    /**
     * Gets the previousEndDateTime property value. If the meeting update changes the meeting end time, this property specifies the previous meeting end time.
     * @returns a DateTimeTimeZoneInterface
     */
    public get previousEndDateTime() {
        return this._previousEndDateTime;
    };
    /**
     * Sets the previousEndDateTime property value. If the meeting update changes the meeting end time, this property specifies the previous meeting end time.
     * @param value Value to set for the previousEndDateTime property.
     */
    public set previousEndDateTime(value: DateTimeTimeZone | undefined) {
        if(value) {
            this._previousEndDateTime = value instanceof DateTimeTimeZoneImpl? value : new DateTimeTimeZoneImpl(value);
        }
    };
    /**
     * Gets the previousLocation property value. If the meeting update changes the meeting location, this property specifies the previous meeting location.
     * @returns a LocationInterface
     */
    public get previousLocation() {
        return this._previousLocation;
    };
    /**
     * Sets the previousLocation property value. If the meeting update changes the meeting location, this property specifies the previous meeting location.
     * @param value Value to set for the previousLocation property.
     */
    public set previousLocation(value: Location | undefined) {
        if(value) {
            this._previousLocation = value instanceof LocationImpl? value : new LocationImpl(value);
        }
    };
    /**
     * Gets the previousStartDateTime property value. If the meeting update changes the meeting start time, this property specifies the previous meeting start time.
     * @returns a DateTimeTimeZoneInterface
     */
    public get previousStartDateTime() {
        return this._previousStartDateTime;
    };
    /**
     * Sets the previousStartDateTime property value. If the meeting update changes the meeting start time, this property specifies the previous meeting start time.
     * @param value Value to set for the previousStartDateTime property.
     */
    public set previousStartDateTime(value: DateTimeTimeZone | undefined) {
        if(value) {
            this._previousStartDateTime = value instanceof DateTimeTimeZoneImpl? value : new DateTimeTimeZoneImpl(value);
        }
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
        if(value) {
            this._responseRequested = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.allowNewTimeProposals){
            writer.writeBooleanValue("allowNewTimeProposals", this.allowNewTimeProposals);
        }
        if(this.meetingRequestType){
            writer.writeEnumValue<MeetingRequestType>("meetingRequestType", this.meetingRequestType);
        }
        if(this.previousEndDateTime){
            writer.writeObjectValue<DateTimeTimeZoneImpl>("previousEndDateTime", (!this.previousEndDateTime || this.previousEndDateTime instanceof DateTimeTimeZoneImpl? this.previousEndDateTime : new DateTimeTimeZoneImpl(this.previousEndDateTime)));
        }
        if(this.previousLocation){
            writer.writeObjectValue<LocationImpl>("previousLocation", (!this.previousLocation || this.previousLocation instanceof LocationImpl? this.previousLocation : new LocationImpl(this.previousLocation)));
        }
        if(this.previousStartDateTime){
            writer.writeObjectValue<DateTimeTimeZoneImpl>("previousStartDateTime", (!this.previousStartDateTime || this.previousStartDateTime instanceof DateTimeTimeZoneImpl? this.previousStartDateTime : new DateTimeTimeZoneImpl(this.previousStartDateTime)));
        }
        if(this.responseRequested){
            writer.writeBooleanValue("responseRequested", this.responseRequested);
        }
    };
}
