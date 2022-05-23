import {createPublicErrorFromDiscriminatorValue} from './createPublicErrorFromDiscriminatorValue';
import {PublicErrorImpl} from './index';
import {PublicError} from './publicError';
import {SubjectRightsRequestStage} from './subjectRightsRequestStage';
import {SubjectRightsRequestStageDetail} from './subjectRightsRequestStageDetail';
import {SubjectRightsRequestStageStatus} from './subjectRightsRequestStageStatus';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SubjectRightsRequestStageDetailImpl implements AdditionalDataHolder, Parsable, SubjectRightsRequestStageDetail {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Describes the error, if any, for the current stage. */
    public error_escaped?: PublicError | undefined;
    /** The stage of the subject rights request. Possible values are: contentRetrieval, contentReview, generateReport, contentDeletion, caseResolved, unknownFutureValue. */
    public stage?: SubjectRightsRequestStage | undefined;
    /** Status of the current stage. Possible values are: notStarted, current, completed, failed, unknownFutureValue. */
    public status?: SubjectRightsRequestStageStatus | undefined;
    /**
     * Instantiates a new subjectRightsRequestStageDetail and sets the default values.
     * @param subjectRightsRequestStageDetailParameterValue 
     */
    public constructor(subjectRightsRequestStageDetailParameterValue?: SubjectRightsRequestStageDetail | undefined) {
        this.additionalData = subjectRightsRequestStageDetailParameterValue?.additionalData ? subjectRightsRequestStageDetailParameterValue?.additionalData! : {}
        this.error_escaped = subjectRightsRequestStageDetailParameterValue?.error_escaped ;
        this.stage = subjectRightsRequestStageDetailParameterValue?.stage ;
        this.status = subjectRightsRequestStageDetailParameterValue?.status ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "error": n => { this.error_escaped = n.getObjectValue<PublicErrorImpl>(createPublicErrorFromDiscriminatorValue); },
            "stage": n => { this.stage = n.getEnumValue<SubjectRightsRequestStage>(SubjectRightsRequestStage); },
            "status": n => { this.status = n.getEnumValue<SubjectRightsRequestStageStatus>(SubjectRightsRequestStageStatus); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.error_escaped){
        writer.writeObjectValue<PublicErrorImpl>("error", new PublicErrorImpl(this.error_escaped));
        }
        if(this.stage){
        writer.writeEnumValue<SubjectRightsRequestStage>("stage", this.stage);
        }
        if(this.status){
        writer.writeEnumValue<SubjectRightsRequestStageStatus>("status", this.status);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
