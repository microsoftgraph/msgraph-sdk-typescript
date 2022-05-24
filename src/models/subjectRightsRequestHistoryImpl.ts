import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {IdentitySet} from './identitySet';
import {IdentitySetImpl} from './index';
import {SubjectRightsRequestHistory} from './subjectRightsRequestHistory';
import {SubjectRightsRequestStage} from './subjectRightsRequestStage';
import {SubjectRightsRequestStageStatus} from './subjectRightsRequestStageStatus';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SubjectRightsRequestHistoryImpl implements AdditionalDataHolder, Parsable, SubjectRightsRequestHistory {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Identity of the user who changed the  subject rights request. */
    public changedBy?: IdentitySet | undefined;
    /** Data and time when the entity was changed. */
    public eventDateTime?: Date | undefined;
    /** The stage when the entity was changed. Possible values are: contentRetrieval, contentReview, generateReport, contentDeletion, caseResolved, unknownFutureValue. */
    public stage?: SubjectRightsRequestStage | undefined;
    /** The status of the stage when the entity was changed. Possible values are: notStarted, current, completed, failed, unknownFutureValue. */
    public stageStatus?: SubjectRightsRequestStageStatus | undefined;
    /** Type of history. */
    public type?: string | undefined;
    /**
     * Instantiates a new subjectRightsRequestHistory and sets the default values.
     * @param subjectRightsRequestHistoryParameterValue 
     */
    public constructor(subjectRightsRequestHistoryParameterValue?: SubjectRightsRequestHistory | undefined) {
        this.additionalData = subjectRightsRequestHistoryParameterValue?.additionalData ? subjectRightsRequestHistoryParameterValue?.additionalData! : {}
        this.changedBy = subjectRightsRequestHistoryParameterValue?.changedBy ;
        this.eventDateTime = subjectRightsRequestHistoryParameterValue?.eventDateTime ;
        this.stage = subjectRightsRequestHistoryParameterValue?.stage ;
        this.stageStatus = subjectRightsRequestHistoryParameterValue?.stageStatus ;
        this.type = subjectRightsRequestHistoryParameterValue?.type ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "changedBy": n => { this.changedBy = n.getObjectValue<IdentitySetImpl>(createIdentitySetFromDiscriminatorValue); },
            "eventDateTime": n => { this.eventDateTime = n.getDateValue(); },
            "stage": n => { this.stage = n.getEnumValue<SubjectRightsRequestStage>(SubjectRightsRequestStage); },
            "stageStatus": n => { this.stageStatus = n.getEnumValue<SubjectRightsRequestStageStatus>(SubjectRightsRequestStageStatus); },
            "type": n => { this.type = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.changedBy){
        writer.writeObjectValue<IdentitySetImpl>("changedBy", new IdentitySetImpl(this.changedBy));
        }
        if(this.eventDateTime){
        writer.writeDateValue("eventDateTime", this.eventDateTime);
        }
        if(this.stage){
        writer.writeEnumValue<SubjectRightsRequestStage>("stage", this.stage);
        }
        if(this.stageStatus){
        writer.writeEnumValue<SubjectRightsRequestStageStatus>("stageStatus", this.stageStatus);
        }
        if(this.type){
        writer.writeStringValue("type", this.type);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
