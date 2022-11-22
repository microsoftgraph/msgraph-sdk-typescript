import {createPublicErrorFromDiscriminatorValue} from './createPublicErrorFromDiscriminatorValue';
import {PublicError} from './index';
import {SubjectRightsRequestStage} from './subjectRightsRequestStage';
import {SubjectRightsRequestStageStatus} from './subjectRightsRequestStageStatus';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SubjectRightsRequestStageDetail implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Describes the error, if any, for the current stage. */
    private _error_escaped?: PublicError | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** The stage of the subject rights request. Possible values are: contentRetrieval, contentReview, generateReport, contentDeletion, caseResolved, unknownFutureValue. */
    private _stage?: SubjectRightsRequestStage | undefined;
    /** Status of the current stage. Possible values are: notStarted, current, completed, failed, unknownFutureValue. */
    private _status?: SubjectRightsRequestStageStatus | undefined;
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
        this._additionalData = value;
    };
    /**
     * Instantiates a new subjectRightsRequestStageDetail and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the error property value. Describes the error, if any, for the current stage.
     * @returns a publicError
     */
    public get error_escaped() {
        return this._error_escaped;
    };
    /**
     * Sets the error property value. Describes the error, if any, for the current stage.
     * @param value Value to set for the error_escaped property.
     */
    public set error_escaped(value: PublicError | undefined) {
        this._error_escaped = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "error": n => { this.error_escaped = n.getObjectValue<PublicError>(createPublicErrorFromDiscriminatorValue); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "stage": n => { this.stage = n.getEnumValue<SubjectRightsRequestStage>(SubjectRightsRequestStage); },
            "status": n => { this.status = n.getEnumValue<SubjectRightsRequestStageStatus>(SubjectRightsRequestStageStatus); },
        };
    };
    /**
     * Gets the @odata.type property value. The OdataType property
     * @returns a string
     */
    public get odataType() {
        return this._odataType;
    };
    /**
     * Sets the @odata.type property value. The OdataType property
     * @param value Value to set for the OdataType property.
     */
    public set odataType(value: string | undefined) {
        this._odataType = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<PublicError>("error", this.error_escaped);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeEnumValue<SubjectRightsRequestStage>("stage", this.stage);
        writer.writeEnumValue<SubjectRightsRequestStageStatus>("status", this.status);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the stage property value. The stage of the subject rights request. Possible values are: contentRetrieval, contentReview, generateReport, contentDeletion, caseResolved, unknownFutureValue.
     * @returns a subjectRightsRequestStage
     */
    public get stage() {
        return this._stage;
    };
    /**
     * Sets the stage property value. The stage of the subject rights request. Possible values are: contentRetrieval, contentReview, generateReport, contentDeletion, caseResolved, unknownFutureValue.
     * @param value Value to set for the stage property.
     */
    public set stage(value: SubjectRightsRequestStage | undefined) {
        this._stage = value;
    };
    /**
     * Gets the status property value. Status of the current stage. Possible values are: notStarted, current, completed, failed, unknownFutureValue.
     * @returns a subjectRightsRequestStageStatus
     */
    public get status() {
        return this._status;
    };
    /**
     * Sets the status property value. Status of the current stage. Possible values are: notStarted, current, completed, failed, unknownFutureValue.
     * @param value Value to set for the status property.
     */
    public set status(value: SubjectRightsRequestStageStatus | undefined) {
        this._status = value;
    };
}
