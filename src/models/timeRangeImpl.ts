import {TimeRange} from './timeRange';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter, TimeOnly} from '@microsoft/kiota-abstractions';

export class TimeRangeImpl implements AdditionalDataHolder, Parsable, TimeRange {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** End time for the time range. */
    public endTime?: TimeOnly | undefined;
    /** Start time for the time range. */
    public startTime?: TimeOnly | undefined;
    /**
     * Instantiates a new timeRange and sets the default values.
     * @param timeRangeParameterValue 
     */
    public constructor(timeRangeParameterValue?: TimeRange | undefined) {
        this.additionalData = timeRangeParameterValue?.additionalData ? timeRangeParameterValue?.additionalData! : {}
        this.endTime = timeRangeParameterValue?.endTime ;
        this.startTime = timeRangeParameterValue?.startTime ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "endTime": n => { this.endTime = n.getTimeOnlyValue(); },
            "startTime": n => { this.startTime = n.getTimeOnlyValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.endTime){
        writer.writeTimeOnlyValue("endTime", this.endTime);
        }
        if(this.startTime){
        writer.writeTimeOnlyValue("startTime", this.startTime);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
