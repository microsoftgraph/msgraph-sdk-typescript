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
    public allowNewTimeProposals?: boolean | undefined;
    /** The meetingRequestType property */
    public meetingRequestType?: MeetingRequestType | undefined;
    /** If the meeting update changes the meeting end time, this property specifies the previous meeting end time. */
    public previousEndDateTime?: DateTimeTimeZone | undefined;
    /** If the meeting update changes the meeting location, this property specifies the previous meeting location. */
    public previousLocation?: Location | undefined;
    /** If the meeting update changes the meeting start time, this property specifies the previous meeting start time. */
    public previousStartDateTime?: DateTimeTimeZone | undefined;
    /** Set to true if the sender would like the invitee to send a response to the requested meeting. */
    public responseRequested?: boolean | undefined;
    /**
     * Instantiates a new EventMessageRequest and sets the default values.
     * @param eventMessageRequestParameterValue 
     */
    public constructor(eventMessageRequestParameterValue?: EventMessageRequest | undefined) {
        super(eventMessageRequestParameterValue);
        this.allowNewTimeProposals = eventMessageRequestParameterValue?.allowNewTimeProposals;
        this.meetingRequestType = eventMessageRequestParameterValue?.meetingRequestType;
        this.previousEndDateTime = eventMessageRequestParameterValue?.previousEndDateTime instanceof DateTimeTimeZoneImpl? eventMessageRequestParameterValue?.previousEndDateTime:new DateTimeTimeZoneImpl(eventMessageRequestParameterValue?.previousEndDateTime);
        this.previousLocation = eventMessageRequestParameterValue?.previousLocation instanceof LocationImpl? eventMessageRequestParameterValue?.previousLocation:new LocationImpl(eventMessageRequestParameterValue?.previousLocation);
        this.previousStartDateTime = eventMessageRequestParameterValue?.previousStartDateTime instanceof DateTimeTimeZoneImpl? eventMessageRequestParameterValue?.previousStartDateTime:new DateTimeTimeZoneImpl(eventMessageRequestParameterValue?.previousStartDateTime);
        this.responseRequested = eventMessageRequestParameterValue?.responseRequested;
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
            writer.writeObjectValue<DateTimeTimeZoneImpl>("previousEndDateTime", new DateTimeTimeZoneImpl(this.previousEndDateTime));
        }
        if(this.previousLocation){
            writer.writeObjectValue<LocationImpl>("previousLocation", new LocationImpl(this.previousLocation));
        }
        if(this.previousStartDateTime){
            writer.writeObjectValue<DateTimeTimeZoneImpl>("previousStartDateTime", new DateTimeTimeZoneImpl(this.previousStartDateTime));
        }
        if(this.responseRequested){
            writer.writeBooleanValue("responseRequested", this.responseRequested);
        }
    };
}
