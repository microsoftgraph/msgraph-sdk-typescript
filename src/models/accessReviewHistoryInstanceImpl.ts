import {AccessReviewHistoryInstance} from './accessReviewHistoryInstance';
import {AccessReviewHistoryStatus} from './accessReviewHistoryStatus';
import {EntityImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AccessReviewHistoryInstanceImpl extends EntityImpl implements AccessReviewHistoryInstance, Parsable {
    /** Uri which can be used to retrieve review history data. This URI will be active for 24 hours after being generated. Required. */
    downloadUri?: string | undefined;
    /** Timestamp when this instance and associated data expires and the history is deleted. Required. */
    expirationDateTime?: Date | undefined;
    /** Timestamp when all of the available data for this instance was collected. This will be set after this instance's status is set to done. Required. */
    fulfilledDateTime?: Date | undefined;
    /** Timestamp, reviews ending on or before this date will be included in the fetched history data. */
    reviewHistoryPeriodEndDateTime?: Date | undefined;
    /** Timestamp, reviews starting on or after this date will be included in the fetched history data. */
    reviewHistoryPeriodStartDateTime?: Date | undefined;
    /** Timestamp when the instance's history data is scheduled to be generated. */
    runDateTime?: Date | undefined;
    /** Represents the status of the review history data collection. The possible values are: done, inProgress, error, requested, unknownFutureValue. Once the status has been marked as done, a link can be generated to retrieve the instance's data by calling generateDownloadUri method. */
    status?: AccessReviewHistoryStatus | undefined;
    /**
     * Instantiates a new accessReviewHistoryInstance and sets the default values.
     * @param accessReviewHistoryInstanceParameterValue 
     */
    public constructor(accessReviewHistoryInstanceParameterValue?: AccessReviewHistoryInstance | undefined) {
        super();
        this.downloadUri = accessReviewHistoryInstanceParameterValue?.downloadUri ;
        this.expirationDateTime = accessReviewHistoryInstanceParameterValue?.expirationDateTime ;
        this.fulfilledDateTime = accessReviewHistoryInstanceParameterValue?.fulfilledDateTime ;
        this.reviewHistoryPeriodEndDateTime = accessReviewHistoryInstanceParameterValue?.reviewHistoryPeriodEndDateTime ;
        this.reviewHistoryPeriodStartDateTime = accessReviewHistoryInstanceParameterValue?.reviewHistoryPeriodStartDateTime ;
        this.runDateTime = accessReviewHistoryInstanceParameterValue?.runDateTime ;
        this.status = accessReviewHistoryInstanceParameterValue?.status ;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.downloadUri){
        if(this.downloadUri)
        writer.writeStringValue("downloadUri", this.downloadUri);
        }
        if(this.expirationDateTime){
        if(this.expirationDateTime)
        writer.writeDateValue("expirationDateTime", this.expirationDateTime);
        }
        if(this.fulfilledDateTime){
        if(this.fulfilledDateTime)
        writer.writeDateValue("fulfilledDateTime", this.fulfilledDateTime);
        }
        if(this.reviewHistoryPeriodEndDateTime){
        if(this.reviewHistoryPeriodEndDateTime)
        writer.writeDateValue("reviewHistoryPeriodEndDateTime", this.reviewHistoryPeriodEndDateTime);
        }
        if(this.reviewHistoryPeriodStartDateTime){
        if(this.reviewHistoryPeriodStartDateTime)
        writer.writeDateValue("reviewHistoryPeriodStartDateTime", this.reviewHistoryPeriodStartDateTime);
        }
        if(this.runDateTime){
        if(this.runDateTime)
        writer.writeDateValue("runDateTime", this.runDateTime);
        }
        if(this.status){
        if(this.status)
        writer.writeEnumValue<AccessReviewHistoryStatus>("status", this.status);
        }
    };
}
