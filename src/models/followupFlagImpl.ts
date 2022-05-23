import {createDateTimeTimeZoneFromDiscriminatorValue} from './createDateTimeTimeZoneFromDiscriminatorValue';
import {DateTimeTimeZone} from './dateTimeTimeZone';
import {FollowupFlag} from './followupFlag';
import {FollowupFlagStatus} from './followupFlagStatus';
import {DateTimeTimeZoneImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class FollowupFlagImpl implements AdditionalDataHolder, FollowupFlag, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The date and time that the follow-up was finished. */
    public completedDateTime?: DateTimeTimeZone | undefined;
    /** The date and time that the follow up is to be finished. Note: To set the due date, you must also specify the startDateTime; otherwise, you will get a 400 Bad Request response. */
    public dueDateTime?: DateTimeTimeZone | undefined;
    /** The status for follow-up for an item. Possible values are notFlagged, complete, and flagged. */
    public flagStatus?: FollowupFlagStatus | undefined;
    /** The date and time that the follow-up is to begin. */
    public startDateTime?: DateTimeTimeZone | undefined;
    /**
     * Instantiates a new followupFlag and sets the default values.
     * @param followupFlagParameterValue 
     */
    public constructor(followupFlagParameterValue?: FollowupFlag | undefined) {
        this.additionalData = followupFlagParameterValue?.additionalData ? followupFlagParameterValue?.additionalData! : {}
        this.completedDateTime = followupFlagParameterValue?.completedDateTime ;
        this.dueDateTime = followupFlagParameterValue?.dueDateTime ;
        this.flagStatus = followupFlagParameterValue?.flagStatus ;
        this.startDateTime = followupFlagParameterValue?.startDateTime ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "completedDateTime": n => { this.completedDateTime = n.getObjectValue<DateTimeTimeZoneImpl>(createDateTimeTimeZoneFromDiscriminatorValue); },
            "dueDateTime": n => { this.dueDateTime = n.getObjectValue<DateTimeTimeZoneImpl>(createDateTimeTimeZoneFromDiscriminatorValue); },
            "flagStatus": n => { this.flagStatus = n.getEnumValue<FollowupFlagStatus>(FollowupFlagStatus); },
            "startDateTime": n => { this.startDateTime = n.getObjectValue<DateTimeTimeZoneImpl>(createDateTimeTimeZoneFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.completedDateTime){
        writer.writeObjectValue<DateTimeTimeZoneImpl>("completedDateTime", new DateTimeTimeZoneImpl(this.completedDateTime));
        }
        if(this.dueDateTime){
        writer.writeObjectValue<DateTimeTimeZoneImpl>("dueDateTime", new DateTimeTimeZoneImpl(this.dueDateTime));
        }
        if(this.flagStatus){
        writer.writeEnumValue<FollowupFlagStatus>("flagStatus", this.flagStatus);
        }
        if(this.startDateTime){
        writer.writeObjectValue<DateTimeTimeZoneImpl>("startDateTime", new DateTimeTimeZoneImpl(this.startDateTime));
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
