import {createExpirationPatternFromDiscriminatorValue} from './createExpirationPatternFromDiscriminatorValue';
import {createPatternedRecurrenceFromDiscriminatorValue} from './createPatternedRecurrenceFromDiscriminatorValue';
import {ExpirationPattern} from './expirationPattern';
import {ExpirationPatternImpl, PatternedRecurrenceImpl} from './index';
import {PatternedRecurrence} from './patternedRecurrence';
import {RequestSchedule} from './requestSchedule';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class RequestScheduleImpl implements AdditionalDataHolder, Parsable, RequestSchedule {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** When the access should expire. */
    public expiration?: ExpirationPattern | undefined;
    /** For recurring access. Not used at present. */
    public recurrence?: PatternedRecurrence | undefined;
    /** The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. */
    public startDateTime?: Date | undefined;
    /**
     * Instantiates a new requestSchedule and sets the default values.
     * @param requestScheduleParameterValue 
     */
    public constructor(requestScheduleParameterValue?: RequestSchedule | undefined) {
        this.additionalData = requestScheduleParameterValue?.additionalData ? requestScheduleParameterValue?.additionalData! : {}
        this.expiration = requestScheduleParameterValue?.expiration ;
        this.recurrence = requestScheduleParameterValue?.recurrence ;
        this.startDateTime = requestScheduleParameterValue?.startDateTime ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "expiration": n => { this.expiration = n.getObjectValue<ExpirationPatternImpl>(createExpirationPatternFromDiscriminatorValue); },
            "recurrence": n => { this.recurrence = n.getObjectValue<PatternedRecurrenceImpl>(createPatternedRecurrenceFromDiscriminatorValue); },
            "startDateTime": n => { this.startDateTime = n.getDateValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.expiration){
        writer.writeObjectValue<ExpirationPatternImpl>("expiration", new ExpirationPatternImpl(this.expiration));
        }
        if(this.recurrence){
        writer.writeObjectValue<PatternedRecurrenceImpl>("recurrence", new PatternedRecurrenceImpl(this.recurrence));
        }
        if(this.startDateTime){
        writer.writeDateValue("startDateTime", this.startDateTime);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
