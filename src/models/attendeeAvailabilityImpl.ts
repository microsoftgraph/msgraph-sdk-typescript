import {AttendeeAvailability} from './attendeeAvailability';
import {AttendeeBase} from './attendeeBase';
import {createAttendeeBaseFromDiscriminatorValue} from './createAttendeeBaseFromDiscriminatorValue';
import {FreeBusyStatus} from './freeBusyStatus';
import {AttendeeBaseImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AttendeeAvailabilityImpl implements AdditionalDataHolder, AttendeeAvailability, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The email address and type of attendee - whether it's a person or a resource, and whether required or optional if it's a person. */
    public attendee?: AttendeeBase | undefined;
    /** The availability status of the attendee. Possible values are: free, tentative, busy, oof, workingElsewhere, unknown. */
    public availability?: FreeBusyStatus | undefined;
    /**
     * Instantiates a new attendeeAvailability and sets the default values.
     * @param attendeeAvailabilityParameterValue 
     */
    public constructor(attendeeAvailabilityParameterValue?: AttendeeAvailability | undefined) {
        this.additionalData = attendeeAvailabilityParameterValue?.additionalData ? attendeeAvailabilityParameterValue?.additionalData! : {}
        this.attendee = attendeeAvailabilityParameterValue?.attendee ;
        this.availability = attendeeAvailabilityParameterValue?.availability ;
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
        writer.writeObjectValue<AttendeeBaseImpl>("attendee", new AttendeeBaseImpl(this.attendee));
        }
        if(this.availability){
        writer.writeEnumValue<FreeBusyStatus>("availability", this.availability);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
