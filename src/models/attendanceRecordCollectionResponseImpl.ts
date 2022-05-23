import {AttendanceRecord} from './attendanceRecord';
import {AttendanceRecordCollectionResponse} from './attendanceRecordCollectionResponse';
import {createAttendanceRecordFromDiscriminatorValue} from './createAttendanceRecordFromDiscriminatorValue';
import {AttendanceRecordImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AttendanceRecordCollectionResponseImpl implements AdditionalDataHolder, AttendanceRecordCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: AttendanceRecord[] | undefined;
    /**
     * Instantiates a new AttendanceRecordCollectionResponse and sets the default values.
     * @param attendanceRecordCollectionResponseParameterValue 
     */
    public constructor(attendanceRecordCollectionResponseParameterValue?: AttendanceRecordCollectionResponse | undefined) {
        this.additionalData = attendanceRecordCollectionResponseParameterValue?.additionalData ? attendanceRecordCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = attendanceRecordCollectionResponseParameterValue?.nextLink ;
        this.value = attendanceRecordCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<AttendanceRecordImpl>(createAttendanceRecordFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: AttendanceRecordImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new AttendanceRecordImpl(element));});
        writer.writeCollectionOfObjectValues<AttendanceRecordImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
