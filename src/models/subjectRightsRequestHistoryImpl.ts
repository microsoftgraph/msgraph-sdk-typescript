import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {IdentitySet} from './identitySet';
import {IdentitySetImpl} from './index';
import {SubjectRightsRequestHistory} from './subjectRightsRequestHistory';
import {SubjectRightsRequestStage} from './subjectRightsRequestStage';
import {SubjectRightsRequestStageStatus} from './subjectRightsRequestStageStatus';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SubjectRightsRequestHistoryImpl implements SubjectRightsRequestHistory {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Identity of the user who changed the  subject rights request. */
    private _changedBy?: IdentitySet | undefined;
    /** Data and time when the entity was changed. */
    private _eventDateTime?: Date | undefined;
    /** The stage when the entity was changed. Possible values are: contentRetrieval, contentReview, generateReport, contentDeletion, caseResolved, unknownFutureValue. */
    private _stage?: SubjectRightsRequestStage | undefined;
    /** The status of the stage when the entity was changed. Possible values are: notStarted, current, completed, failed, unknownFutureValue. */
    private _stageStatus?: SubjectRightsRequestStageStatus | undefined;
    /** Type of history. */
    private _type?: string | undefined;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Record<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Record<string, unknown>) {
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Gets the changedBy property value. Identity of the user who changed the  subject rights request.
     * @returns a IdentitySetInterface
     */
    public get changedBy() {
        return this._changedBy;
    };
    /**
     * Sets the changedBy property value. Identity of the user who changed the  subject rights request.
     * @param value Value to set for the changedBy property.
     */
    public set changedBy(value: IdentitySet | undefined) {
        if(value) {
            this._changedBy = value instanceof IdentitySetImpl? value : new IdentitySetImpl(value);
        }
    };
    /**
     * Instantiates a new subjectRightsRequestHistory and sets the default values.
     * @param subjectRightsRequestHistoryParameterValue 
     */
    public constructor(subjectRightsRequestHistoryParameterValue?: SubjectRightsRequestHistory | undefined) {
        this._additionalData = subjectRightsRequestHistoryParameterValue?.additionalData ? subjectRightsRequestHistoryParameterValue?.additionalData! : {};
        this._changedBy = subjectRightsRequestHistoryParameterValue?.changedBy;
        this._eventDateTime = subjectRightsRequestHistoryParameterValue?.eventDateTime;
        this._stage = subjectRightsRequestHistoryParameterValue?.stage;
        this._stageStatus = subjectRightsRequestHistoryParameterValue?.stageStatus;
        this._type = subjectRightsRequestHistoryParameterValue?.type;
    };
    /**
     * Gets the eventDateTime property value. Data and time when the entity was changed.
     * @returns a Date
     */
    public get eventDateTime() {
        return this._eventDateTime;
    };
    /**
     * Sets the eventDateTime property value. Data and time when the entity was changed.
     * @param value Value to set for the eventDateTime property.
     */
    public set eventDateTime(value: Date | undefined) {
        if(value) {
            this._eventDateTime = value;
        }
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
            writer.writeObjectValue<IdentitySetImpl>("changedBy", (!this.changedBy || this.changedBy instanceof IdentitySetImpl? this.changedBy : new IdentitySetImpl(this.changedBy)));
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
    /**
     * Gets the stage property value. The stage when the entity was changed. Possible values are: contentRetrieval, contentReview, generateReport, contentDeletion, caseResolved, unknownFutureValue.
     * @returns a subjectRightsRequestStage
     */
    public get stage() {
        return this._stage;
    };
    /**
     * Sets the stage property value. The stage when the entity was changed. Possible values are: contentRetrieval, contentReview, generateReport, contentDeletion, caseResolved, unknownFutureValue.
     * @param value Value to set for the stage property.
     */
    public set stage(value: SubjectRightsRequestStage | undefined) {
        if(value) {
            this._stage = value;
        }
    };
    /**
     * Gets the stageStatus property value. The status of the stage when the entity was changed. Possible values are: notStarted, current, completed, failed, unknownFutureValue.
     * @returns a subjectRightsRequestStageStatus
     */
    public get stageStatus() {
        return this._stageStatus;
    };
    /**
     * Sets the stageStatus property value. The status of the stage when the entity was changed. Possible values are: notStarted, current, completed, failed, unknownFutureValue.
     * @param value Value to set for the stageStatus property.
     */
    public set stageStatus(value: SubjectRightsRequestStageStatus | undefined) {
        if(value) {
            this._stageStatus = value;
        }
    };
    /**
     * Gets the type property value. Type of history.
     * @returns a string
     */
    public get type() {
        return this._type;
    };
    /**
     * Sets the type property value. Type of history.
     * @param value Value to set for the type property.
     */
    public set type(value: string | undefined) {
        if(value) {
            this._type = value;
        }
    };
}
