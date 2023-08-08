import {createKeyValuePairFromDiscriminatorValue} from './createKeyValuePairFromDiscriminatorValue';
import type {KeyValuePair} from './keyValuePair';
import {serializeKeyValuePair} from './serializeKeyValuePair';
import type {SubjectRightsRequestDetail} from './subjectRightsRequestDetail';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSubjectRightsRequestDetail(subjectRightsRequestDetail: SubjectRightsRequestDetail | undefined = {} as SubjectRightsRequestDetail) : Record<string, (node: ParseNode) => void> {
    return {
        "excludedItemCount": n => { subjectRightsRequestDetail.excludedItemCount = n.getNumberValue(); },
        "insightCounts": n => { subjectRightsRequestDetail.insightCounts = n.getCollectionOfObjectValues<KeyValuePair>(createKeyValuePairFromDiscriminatorValue); },
        "itemCount": n => { subjectRightsRequestDetail.itemCount = n.getNumberValue(); },
        "itemNeedReview": n => { subjectRightsRequestDetail.itemNeedReview = n.getNumberValue(); },
        "@odata.type": n => { subjectRightsRequestDetail.odataType = n.getStringValue(); },
        "productItemCounts": n => { subjectRightsRequestDetail.productItemCounts = n.getCollectionOfObjectValues<KeyValuePair>(createKeyValuePairFromDiscriminatorValue); },
        "signedOffItemCount": n => { subjectRightsRequestDetail.signedOffItemCount = n.getNumberValue(); },
        "totalItemSize": n => { subjectRightsRequestDetail.totalItemSize = n.getNumberValue(); },
    }
}
