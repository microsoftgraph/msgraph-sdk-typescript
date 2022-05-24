import {ScheduleEntityImpl} from './index';
import {TimeOffItem} from './timeOffItem';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Casts the previous resource to group. */
export class TimeOffItemImpl extends ScheduleEntityImpl implements Parsable, TimeOffItem {
    /** ID of the timeOffReason for this timeOffItem. Required. */
    public timeOffReasonId?: string | undefined;
    /**
     * Instantiates a new timeOffItem and sets the default values.
     * @param timeOffItemParameterValue 
     */
    public constructor(timeOffItemParameterValue?: TimeOffItem | undefined) {
        super();
        this.timeOffReasonId = timeOffItemParameterValue?.timeOffReasonId ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "timeOffReasonId": n => { this.timeOffReasonId = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.timeOffReasonId){
        writer.writeStringValue("timeOffReasonId", this.timeOffReasonId);
        }
    };
}
