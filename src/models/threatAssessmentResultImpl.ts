import {EntityImpl} from './index';
import {ThreatAssessmentResult} from './threatAssessmentResult';
import {ThreatAssessmentResultType} from './threatAssessmentResultType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the informationProtection singleton. */
export class ThreatAssessmentResultImpl extends EntityImpl implements Parsable, ThreatAssessmentResult {
    /** The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. */
    public createdDateTime?: Date | undefined;
    /** The result message for each threat assessment. */
    public message?: string | undefined;
    /** The threat assessment result type. Possible values are: checkPolicy (only for mail assessment), rescan. */
    public resultType?: ThreatAssessmentResultType | undefined;
    /**
     * Instantiates a new threatAssessmentResult and sets the default values.
     * @param threatAssessmentResultParameterValue 
     */
    public constructor(threatAssessmentResultParameterValue?: ThreatAssessmentResult | undefined) {
        super();
        this.createdDateTime = threatAssessmentResultParameterValue?.createdDateTime ;
        this.message = threatAssessmentResultParameterValue?.message ;
        this.resultType = threatAssessmentResultParameterValue?.resultType ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "createdDateTime": n => { this.createdDateTime = n.getDateValue(); },
            "message": n => { this.message = n.getStringValue(); },
            "resultType": n => { this.resultType = n.getEnumValue<ThreatAssessmentResultType>(ThreatAssessmentResultType); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.createdDateTime){
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        }
        if(this.message){
        writer.writeStringValue("message", this.message);
        }
        if(this.resultType){
        writer.writeEnumValue<ThreatAssessmentResultType>("resultType", this.resultType);
        }
    };
}
