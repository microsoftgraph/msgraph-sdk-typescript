import {AccessReviewHistoryInstance} from './accessReviewHistoryInstance';
import {AccessReviewHistoryStatus} from './accessReviewHistoryStatus';
import {EntityImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the identityGovernance singleton. */
export class AccessReviewHistoryInstanceImpl extends EntityImpl implements AccessReviewHistoryInstance {
    /** Uri which can be used to retrieve review history data. This URI will be active for 24 hours after being generated. Required. */
    private _downloadUri?: string | undefined;
    /** Timestamp when this instance and associated data expires and the history is deleted. Required. */
    private _expirationDateTime?: Date | undefined;
    /** Timestamp when all of the available data for this instance was collected. This will be set after this instance's status is set to done. Required. */
    private _fulfilledDateTime?: Date | undefined;
    /** Timestamp, reviews ending on or before this date will be included in the fetched history data. */
    private _reviewHistoryPeriodEndDateTime?: Date | undefined;
    /** Timestamp, reviews starting on or after this date will be included in the fetched history data. */
    private _reviewHistoryPeriodStartDateTime?: Date | undefined;
    /** Timestamp when the instance's history data is scheduled to be generated. */
    private _runDateTime?: Date | undefined;
    /** Represents the status of the review history data collection. The possible values are: done, inProgress, error, requested, unknownFutureValue. Once the status has been marked as done, a link can be generated to retrieve the instance's data by calling generateDownloadUri method. */
    private _status?: AccessReviewHistoryStatus | undefined;
    /**
     * Instantiates a new accessReviewHistoryInstance and sets the default values.
     * @param accessReviewHistoryInstanceParameterValue 
     */
    public constructor(accessReviewHistoryInstanceParameterValue?: AccessReviewHistoryInstance | undefined) {
        super(accessReviewHistoryInstanceParameterValue);
        this._downloadUri = accessReviewHistoryInstanceParameterValue?.downloadUri;
        this._expirationDateTime = accessReviewHistoryInstanceParameterValue?.expirationDateTime;
        this._fulfilledDateTime = accessReviewHistoryInstanceParameterValue?.fulfilledDateTime;
        this._reviewHistoryPeriodEndDateTime = accessReviewHistoryInstanceParameterValue?.reviewHistoryPeriodEndDateTime;
        this._reviewHistoryPeriodStartDateTime = accessReviewHistoryInstanceParameterValue?.reviewHistoryPeriodStartDateTime;
        this._runDateTime = accessReviewHistoryInstanceParameterValue?.runDateTime;
        this._status = accessReviewHistoryInstanceParameterValue?.status;
    };
    /**
     * Gets the downloadUri property value. Uri which can be used to retrieve review history data. This URI will be active for 24 hours after being generated. Required.
     * @returns a string
     */
    public get downloadUri() {
        return this._downloadUri;
    };
    /**
     * Sets the downloadUri property value. Uri which can be used to retrieve review history data. This URI will be active for 24 hours after being generated. Required.
     * @param value Value to set for the downloadUri property.
     */
    public set downloadUri(value: string | undefined) {
        if(value) {
            this._downloadUri = value;
        }
    };
    /**
     * Gets the expirationDateTime property value. Timestamp when this instance and associated data expires and the history is deleted. Required.
     * @returns a Date
     */
    public get expirationDateTime() {
        return this._expirationDateTime;
    };
    /**
     * Sets the expirationDateTime property value. Timestamp when this instance and associated data expires and the history is deleted. Required.
     * @param value Value to set for the expirationDateTime property.
     */
    public set expirationDateTime(value: Date | undefined) {
        if(value) {
            this._expirationDateTime = value;
        }
    };
    /**
     * Gets the fulfilledDateTime property value. Timestamp when all of the available data for this instance was collected. This will be set after this instance's status is set to done. Required.
     * @returns a Date
     */
    public get fulfilledDateTime() {
        return this._fulfilledDateTime;
    };
    /**
     * Sets the fulfilledDateTime property value. Timestamp when all of the available data for this instance was collected. This will be set after this instance's status is set to done. Required.
     * @param value Value to set for the fulfilledDateTime property.
     */
    public set fulfilledDateTime(value: Date | undefined) {
        if(value) {
            this._fulfilledDateTime = value;
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "downloadUri": n => { this.downloadUri = n.getStringValue(); },
            "expirationDateTime": n => { this.expirationDateTime = n.getDateValue(); },
            "fulfilledDateTime": n => { this.fulfilledDateTime = n.getDateValue(); },
            "reviewHistoryPeriodEndDateTime": n => { this.reviewHistoryPeriodEndDateTime = n.getDateValue(); },
            "reviewHistoryPeriodStartDateTime": n => { this.reviewHistoryPeriodStartDateTime = n.getDateValue(); },
            "runDateTime": n => { this.runDateTime = n.getDateValue(); },
            "status": n => { this.status = n.getEnumValue<AccessReviewHistoryStatus>(AccessReviewHistoryStatus); },
        };
    };
    /**
     * Gets the reviewHistoryPeriodEndDateTime property value. Timestamp, reviews ending on or before this date will be included in the fetched history data.
     * @returns a Date
     */
    public get reviewHistoryPeriodEndDateTime() {
        return this._reviewHistoryPeriodEndDateTime;
    };
    /**
     * Sets the reviewHistoryPeriodEndDateTime property value. Timestamp, reviews ending on or before this date will be included in the fetched history data.
     * @param value Value to set for the reviewHistoryPeriodEndDateTime property.
     */
    public set reviewHistoryPeriodEndDateTime(value: Date | undefined) {
        if(value) {
            this._reviewHistoryPeriodEndDateTime = value;
        }
    };
    /**
     * Gets the reviewHistoryPeriodStartDateTime property value. Timestamp, reviews starting on or after this date will be included in the fetched history data.
     * @returns a Date
     */
    public get reviewHistoryPeriodStartDateTime() {
        return this._reviewHistoryPeriodStartDateTime;
    };
    /**
     * Sets the reviewHistoryPeriodStartDateTime property value. Timestamp, reviews starting on or after this date will be included in the fetched history data.
     * @param value Value to set for the reviewHistoryPeriodStartDateTime property.
     */
    public set reviewHistoryPeriodStartDateTime(value: Date | undefined) {
        if(value) {
            this._reviewHistoryPeriodStartDateTime = value;
        }
    };
    /**
     * Gets the runDateTime property value. Timestamp when the instance's history data is scheduled to be generated.
     * @returns a Date
     */
    public get runDateTime() {
        return this._runDateTime;
    };
    /**
     * Sets the runDateTime property value. Timestamp when the instance's history data is scheduled to be generated.
     * @param value Value to set for the runDateTime property.
     */
    public set runDateTime(value: Date | undefined) {
        if(value) {
            this._runDateTime = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.downloadUri){
            writer.writeStringValue("downloadUri", this.downloadUri);
        }
        if(this.expirationDateTime){
            writer.writeDateValue("expirationDateTime", this.expirationDateTime);
        }
        if(this.fulfilledDateTime){
            writer.writeDateValue("fulfilledDateTime", this.fulfilledDateTime);
        }
        if(this.reviewHistoryPeriodEndDateTime){
            writer.writeDateValue("reviewHistoryPeriodEndDateTime", this.reviewHistoryPeriodEndDateTime);
        }
        if(this.reviewHistoryPeriodStartDateTime){
            writer.writeDateValue("reviewHistoryPeriodStartDateTime", this.reviewHistoryPeriodStartDateTime);
        }
        if(this.runDateTime){
            writer.writeDateValue("runDateTime", this.runDateTime);
        }
        if(this.status){
            writer.writeEnumValue<AccessReviewHistoryStatus>("status", this.status);
        }
    };
    /**
     * Gets the status property value. Represents the status of the review history data collection. The possible values are: done, inProgress, error, requested, unknownFutureValue. Once the status has been marked as done, a link can be generated to retrieve the instance's data by calling generateDownloadUri method.
     * @returns a accessReviewHistoryStatus
     */
    public get status() {
        return this._status;
    };
    /**
     * Sets the status property value. Represents the status of the review history data collection. The possible values are: done, inProgress, error, requested, unknownFutureValue. Once the status has been marked as done, a link can be generated to retrieve the instance's data by calling generateDownloadUri method.
     * @param value Value to set for the status property.
     */
    public set status(value: AccessReviewHistoryStatus | undefined) {
        if(value) {
            this._status = value;
        }
    };
}
