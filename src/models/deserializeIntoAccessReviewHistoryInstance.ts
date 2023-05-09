import {AccessReviewHistoryInstance} from './accessReviewHistoryInstance';
import {AccessReviewHistoryStatus} from './accessReviewHistoryStatus';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAccessReviewHistoryInstance(accessReviewHistoryInstance: AccessReviewHistoryInstance | undefined = {} as AccessReviewHistoryInstance) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(accessReviewHistoryInstance),
        "downloadUri": n => { accessReviewHistoryInstance.downloadUri = n.getStringValue(); },
        "expirationDateTime": n => { accessReviewHistoryInstance.expirationDateTime = n.getDateValue(); },
        "fulfilledDateTime": n => { accessReviewHistoryInstance.fulfilledDateTime = n.getDateValue(); },
        "reviewHistoryPeriodEndDateTime": n => { accessReviewHistoryInstance.reviewHistoryPeriodEndDateTime = n.getDateValue(); },
        "reviewHistoryPeriodStartDateTime": n => { accessReviewHistoryInstance.reviewHistoryPeriodStartDateTime = n.getDateValue(); },
        "runDateTime": n => { accessReviewHistoryInstance.runDateTime = n.getDateValue(); },
        "status": n => { accessReviewHistoryInstance.status = n.getEnumValue<AccessReviewHistoryStatus>(AccessReviewHistoryStatus); },
    }
}
