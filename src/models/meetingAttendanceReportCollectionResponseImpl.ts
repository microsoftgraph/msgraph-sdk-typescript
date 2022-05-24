import {createMeetingAttendanceReportFromDiscriminatorValue} from './createMeetingAttendanceReportFromDiscriminatorValue';
import {MeetingAttendanceReportImpl} from './index';
import {MeetingAttendanceReport} from './meetingAttendanceReport';
import {MeetingAttendanceReportCollectionResponse} from './meetingAttendanceReportCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class MeetingAttendanceReportCollectionResponseImpl implements AdditionalDataHolder, MeetingAttendanceReportCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: MeetingAttendanceReport[] | undefined;
    /**
     * Instantiates a new MeetingAttendanceReportCollectionResponse and sets the default values.
     * @param meetingAttendanceReportCollectionResponseParameterValue 
     */
    public constructor(meetingAttendanceReportCollectionResponseParameterValue?: MeetingAttendanceReportCollectionResponse | undefined) {
        this.additionalData = meetingAttendanceReportCollectionResponseParameterValue?.additionalData ? meetingAttendanceReportCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = meetingAttendanceReportCollectionResponseParameterValue?.nextLink ;
        this.value = meetingAttendanceReportCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<MeetingAttendanceReportImpl>(createMeetingAttendanceReportFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.nextLink){
        writer.writeStringValue("@odata.nextLink", this.nextLink);
        }
        if(this.value && this.value.length != 0){        const valueArrValue: MeetingAttendanceReportImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new MeetingAttendanceReportImpl(element));});
        writer.writeCollectionOfObjectValues<MeetingAttendanceReportImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
