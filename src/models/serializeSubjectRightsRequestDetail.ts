import {KeyValuePair} from './keyValuePair';
import {serializeKeyValuePair} from './serializeKeyValuePair';
import {SubjectRightsRequestDetail} from './subjectRightsRequestDetail';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSubjectRightsRequestDetail(writer: SerializationWriter, subjectRightsRequestDetail: SubjectRightsRequestDetail | undefined = {} as SubjectRightsRequestDetail) : void {
        writer.writeNumberValue("excludedItemCount", subjectRightsRequestDetail.excludedItemCount);
        writer.writeCollectionOfObjectValues<KeyValuePair>("insightCounts", subjectRightsRequestDetail.insightCounts, serializeKeyValuePair);
        writer.writeNumberValue("itemCount", subjectRightsRequestDetail.itemCount);
        writer.writeNumberValue("itemNeedReview", subjectRightsRequestDetail.itemNeedReview);
        writer.writeStringValue("@odata.type", subjectRightsRequestDetail.odataType);
        writer.writeCollectionOfObjectValues<KeyValuePair>("productItemCounts", subjectRightsRequestDetail.productItemCounts, serializeKeyValuePair);
        writer.writeNumberValue("signedOffItemCount", subjectRightsRequestDetail.signedOffItemCount);
        writer.writeNumberValue("totalItemSize", subjectRightsRequestDetail.totalItemSize);
        writer.writeAdditionalData(subjectRightsRequestDetail.additionalData);
}
