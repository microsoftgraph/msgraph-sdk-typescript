import {Entity, IdentitySet, ResultInfo} from '../';
import {CaseAction} from './caseAction';
import {CaseOperationStatus} from './caseOperationStatus';
import {AdminMember1} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class CaseOperation extends Entity implements Parsable {
    /** The type of action the operation represents. Possible values are: addToReviewSet,applyTags,contentExport,convertToPdf,estimateStatistics, purgeData */
    private _action?: CaseAction | AdminMember1 | undefined;
    /** The date and time the operation was completed. */
    private _completedDateTime?: Date | undefined;
    /** The user that created the operation. */
    private _createdBy?: IdentitySet | AdminMember1 | undefined;
    /** The date and time the operation was created. */
    private _createdDateTime?: Date | undefined;
    /** The progress of the operation. */
    private _percentProgress?: number | undefined;
    /** Contains success and failure-specific result information. */
    private _resultInfo?: ResultInfo | AdminMember1 | undefined;
    /** The status of the case operation. Possible values are: notStarted, submissionFailed, running, succeeded, partiallySucceeded, failed. */
    private _status?: CaseOperationStatus | AdminMember1 | undefined;
    /**
     * Gets the action property value. The type of action the operation represents. Possible values are: addToReviewSet,applyTags,contentExport,convertToPdf,estimateStatistics, purgeData
     * @returns a admin
     */
    public get action() {
        return this._action;
    };
    /**
     * Sets the action property value. The type of action the operation represents. Possible values are: addToReviewSet,applyTags,contentExport,convertToPdf,estimateStatistics, purgeData
     * @param value Value to set for the action property.
     */
    public set action(value: CaseAction | AdminMember1 | undefined) {
        this._action = value;
    };
    /**
     * Gets the completedDateTime property value. The date and time the operation was completed.
     * @returns a Date
     */
    public get completedDateTime() {
        return this._completedDateTime;
    };
    /**
     * Sets the completedDateTime property value. The date and time the operation was completed.
     * @param value Value to set for the completedDateTime property.
     */
    public set completedDateTime(value: Date | undefined) {
        this._completedDateTime = value;
    };
    /**
     * Instantiates a new caseOperation and sets the default values.
     */
    public constructor() {
        super();
        this.type = "#microsoft.graph.security.caseOperation";
    };
    /**
     * Gets the createdBy property value. The user that created the operation.
     * @returns a admin
     */
    public get createdBy() {
        return this._createdBy;
    };
    /**
     * Sets the createdBy property value. The user that created the operation.
     * @param value Value to set for the createdBy property.
     */
    public set createdBy(value: IdentitySet | AdminMember1 | undefined) {
        this._createdBy = value;
    };
    /**
     * Gets the createdDateTime property value. The date and time the operation was created.
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Sets the createdDateTime property value. The date and time the operation was created.
     * @param value Value to set for the createdDateTime property.
     */
    public set createdDateTime(value: Date | undefined) {
        this._createdDateTime = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "action": n => { this.action = n.getObjectValue<CaseAction>(createCaseActionFromDiscriminatorValue); },
            "completedDateTime": n => { this.completedDateTime = n.getDateValue(); },
            "createdBy": n => { this.createdBy = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
            "createdDateTime": n => { this.createdDateTime = n.getDateValue(); },
            "percentProgress": n => { this.percentProgress = n.getNumberValue(); },
            "resultInfo": n => { this.resultInfo = n.getObjectValue<ResultInfo>(createResultInfoFromDiscriminatorValue); },
            "status": n => { this.status = n.getObjectValue<CaseOperationStatus>(createCaseOperationStatusFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the percentProgress property value. The progress of the operation.
     * @returns a integer
     */
    public get percentProgress() {
        return this._percentProgress;
    };
    /**
     * Sets the percentProgress property value. The progress of the operation.
     * @param value Value to set for the percentProgress property.
     */
    public set percentProgress(value: number | undefined) {
        this._percentProgress = value;
    };
    /**
     * Gets the resultInfo property value. Contains success and failure-specific result information.
     * @returns a admin
     */
    public get resultInfo() {
        return this._resultInfo;
    };
    /**
     * Sets the resultInfo property value. Contains success and failure-specific result information.
     * @param value Value to set for the resultInfo property.
     */
    public set resultInfo(value: ResultInfo | AdminMember1 | undefined) {
        this._resultInfo = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<CaseAction>("action", this.action);
        writer.writeDateValue("completedDateTime", this.completedDateTime);
        writer.writeObjectValue<IdentitySet>("createdBy", this.createdBy);
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        writer.writeNumberValue("percentProgress", this.percentProgress);
        writer.writeObjectValue<ResultInfo>("resultInfo", this.resultInfo);
        writer.writeObjectValue<CaseOperationStatus>("status", this.status);
    };
    /**
     * Gets the status property value. The status of the case operation. Possible values are: notStarted, submissionFailed, running, succeeded, partiallySucceeded, failed.
     * @returns a admin
     */
    public get status() {
        return this._status;
    };
    /**
     * Sets the status property value. The status of the case operation. Possible values are: notStarted, submissionFailed, running, succeeded, partiallySucceeded, failed.
     * @param value Value to set for the status property.
     */
    public set status(value: CaseOperationStatus | AdminMember1 | undefined) {
        this._status = value;
    };
}
