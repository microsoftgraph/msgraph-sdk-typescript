import {AttendeeAvailability} from './attendeeAvailability';
import {AttendeeBase} from './attendeeBase';
import {createAttendeeBaseFromDiscriminatorValue} from './createAttendeeBaseFromDiscriminatorValue';
import {FreeBusyStatus} from './freeBusyStatus';
import {AttendeeBaseImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AttendeeAvailabilityImpl implements AttendeeAvailability {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The email address and type of attendee - whether it's a person or a resource, and whether required or optional if it's a person. */
    private _attendee?: AttendeeBase | undefined;
    /** The availability status of the attendee. Possible values are: free, tentative, busy, oof, workingElsewhere, unknown. */
    private _availability?: FreeBusyStatus | undefined;
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
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Gets the attendee property value. The email address and type of attendee - whether it's a person or a resource, and whether required or optional if it's a person.
     * @returns a AttendeeBaseInterface
     */
    public get attendee() {
        return this._attendee;
    };
    /**
     * Sets the attendee property value. The email address and type of attendee - whether it's a person or a resource, and whether required or optional if it's a person.
     * @param value Value to set for the attendee property.
     */
    public set attendee(value: AttendeeBase | undefined) {
        if(value) {
            this._attendee = value instanceof AttendeeBaseImpl? value : new AttendeeBaseImpl(value);
        }
    };
    /**
     * Gets the availability property value. The availability status of the attendee. Possible values are: free, tentative, busy, oof, workingElsewhere, unknown.
     * @returns a freeBusyStatus
     */
    public get availability() {
        return this._availability;
    };
    /**
     * Sets the availability property value. The availability status of the attendee. Possible values are: free, tentative, busy, oof, workingElsewhere, unknown.
     * @param value Value to set for the availability property.
     */
    public set availability(value: FreeBusyStatus | undefined) {
        if(value) {
            this._availability = value;
        }
    };
    /**
     * Instantiates a new attendeeAvailability and sets the default values.
     * @param attendeeAvailabilityParameterValue 
     */
    public constructor(attendeeAvailabilityParameterValue?: AttendeeAvailability | undefined) {
        this._additionalData = attendeeAvailabilityParameterValue?.additionalData ? attendeeAvailabilityParameterValue?.additionalData! : {};
        this._attendee = attendeeAvailabilityParameterValue?.attendee;
        this._availability = attendeeAvailabilityParameterValue?.availability;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "attendee": n => { this.attendee = n.getObjectValue<AttendeeBaseImpl>(createAttendeeBaseFromDiscriminatorValue); },
            "availability": n => { this.availability = n.getEnumValue<FreeBusyStatus>(FreeBusyStatus); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.attendee){
            writer.writeObjectValue<AttendeeBaseImpl>("attendee", (!this.attendee || this.attendee instanceof AttendeeBaseImpl? this.attendee : new AttendeeBaseImpl(this.attendee)));
        }
        if(this.availability){
            writer.writeEnumValue<FreeBusyStatus>("availability", this.availability);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
