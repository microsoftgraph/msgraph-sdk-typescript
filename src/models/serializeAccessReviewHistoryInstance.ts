import {AccessReviewHistoryInstance} from './accessReviewHistoryInstance';
import {AccessReviewHistoryStatus} from './accessReviewHistoryStatus';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAccessReviewHistoryInstance(accessReviewHistoryInstance: AccessReviewHistoryInstance | undefined = {} as AccessReviewHistoryInstance, writer: SerializationWriter) : void {
        serializeEntity(writer, accessReviewHistoryInstance)
        writer.writeStringValue("downloadUri", accessReviewHistoryInstance.downloadUri);
        writer.writeDateValue("expirationDateTime", accessReviewHistoryInstance.expirationDateTime);
        writer.writeDateValue("fulfilledDateTime", accessReviewHistoryInstance.fulfilledDateTime);
        writer.writeDateValue("reviewHistoryPeriodEndDateTime", accessReviewHistoryInstance.reviewHistoryPeriodEndDateTime);
        writer.writeDateValue("reviewHistoryPeriodStartDateTime", accessReviewHistoryInstance.reviewHistoryPeriodStartDateTime);
        writer.writeDateValue("runDateTime", accessReviewHistoryInstance.runDateTime);
        writer.writeEnumValue<AccessReviewHistoryStatus>("status", accessReviewHistoryInstance.status);
}
