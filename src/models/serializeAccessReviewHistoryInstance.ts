import { type AccessReviewHistoryInstance } from './accessReviewHistoryInstance';
import { AccessReviewHistoryStatus } from './accessReviewHistoryStatus';
import { serializeEntity } from './serializeEntity';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeAccessReviewHistoryInstance(writer: SerializationWriter, accessReviewHistoryInstance: AccessReviewHistoryInstance | undefined = {} as AccessReviewHistoryInstance) : void {
        serializeEntity(writer, accessReviewHistoryInstance)
        writer.writeStringValue("downloadUri", accessReviewHistoryInstance.downloadUri);
        writer.writeDateValue("expirationDateTime", accessReviewHistoryInstance.expirationDateTime);
        writer.writeDateValue("fulfilledDateTime", accessReviewHistoryInstance.fulfilledDateTime);
        writer.writeDateValue("reviewHistoryPeriodEndDateTime", accessReviewHistoryInstance.reviewHistoryPeriodEndDateTime);
        writer.writeDateValue("reviewHistoryPeriodStartDateTime", accessReviewHistoryInstance.reviewHistoryPeriodStartDateTime);
        writer.writeDateValue("runDateTime", accessReviewHistoryInstance.runDateTime);
        writer.writeEnumValue<AccessReviewHistoryStatus>("status", accessReviewHistoryInstance.status);
}
