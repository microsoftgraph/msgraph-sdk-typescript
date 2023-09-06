import { type InsightIdentity } from './insightIdentity';
import { type ResourceReference } from './resourceReference';
import { serializeInsightIdentity } from './serializeInsightIdentity';
import { serializeResourceReference } from './serializeResourceReference';
import { type SharingDetail } from './sharingDetail';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeSharingDetail(writer: SerializationWriter, sharingDetail: SharingDetail | undefined = {} as SharingDetail) : void {
        writer.writeStringValue("@odata.type", sharingDetail.odataType);
        writer.writeObjectValue<InsightIdentity>("sharedBy", sharingDetail.sharedBy, serializeInsightIdentity);
        writer.writeDateValue("sharedDateTime", sharingDetail.sharedDateTime);
        writer.writeStringValue("sharingSubject", sharingDetail.sharingSubject);
        writer.writeStringValue("sharingType", sharingDetail.sharingType);
        writer.writeAdditionalData(sharingDetail.additionalData);
}
