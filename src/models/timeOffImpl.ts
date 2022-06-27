import {createTimeOffItemFromDiscriminatorValue} from './createTimeOffItemFromDiscriminatorValue';
import {ChangeTrackedEntityImpl, TimeOffItemImpl} from './index';
import {TimeOff} from './timeOff';
import {TimeOffItem} from './timeOffItem';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TimeOffImpl extends ChangeTrackedEntityImpl implements TimeOff {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The draft version of this timeOff that is viewable by managers. Required. */
    public draftTimeOff?: TimeOffItem | undefined;
    /** The shared version of this timeOff that is viewable by both employees and managers. Required. */
    public sharedTimeOff?: TimeOffItem | undefined;
    /** ID of the user assigned to the timeOff. Required. */
    public userId?: string | undefined;
    /**
     * Instantiates a new TimeOff and sets the default values.
     * @param timeOffParameterValue 
     */
    public constructor(timeOffParameterValue?: TimeOff | undefined) {
        super(timeOffParameterValue);
        this.additionalData = timeOffParameterValue?.additionalData ? timeOffParameterValue?.additionalData! : {};
        this.draftTimeOff = timeOffParameterValue?.draftTimeOff instanceof TimeOffItemImpl? timeOffParameterValue?.draftTimeOff:new TimeOffItemImpl(timeOffParameterValue?.draftTimeOff);
        this.sharedTimeOff = timeOffParameterValue?.sharedTimeOff instanceof TimeOffItemImpl? timeOffParameterValue?.sharedTimeOff:new TimeOffItemImpl(timeOffParameterValue?.sharedTimeOff);
        this.userId = timeOffParameterValue?.userId;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "draftTimeOff": n => { this.draftTimeOff = n.getObjectValue<TimeOffItemImpl>(createTimeOffItemFromDiscriminatorValue); },
            "sharedTimeOff": n => { this.sharedTimeOff = n.getObjectValue<TimeOffItemImpl>(createTimeOffItemFromDiscriminatorValue); },
            "userId": n => { this.userId = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.draftTimeOff){
            writer.writeObjectValue<TimeOffItemImpl>("draftTimeOff", new TimeOffItemImpl(this.draftTimeOff));
        }
        if(this.sharedTimeOff){
            writer.writeObjectValue<TimeOffItemImpl>("sharedTimeOff", new TimeOffItemImpl(this.sharedTimeOff));
        }
        if(this.userId){
            writer.writeStringValue("userId", this.userId);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
