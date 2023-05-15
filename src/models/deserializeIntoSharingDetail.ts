import {createInsightIdentityFromDiscriminatorValue} from './createInsightIdentityFromDiscriminatorValue';
import {createResourceReferenceFromDiscriminatorValue} from './createResourceReferenceFromDiscriminatorValue';
import {InsightIdentity} from './insightIdentity';
import {ResourceReference} from './resourceReference';
import {serializeInsightIdentity} from './serializeInsightIdentity';
import {serializeResourceReference} from './serializeResourceReference';
import {SharingDetail} from './sharingDetail';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSharingDetail(sharingDetail: SharingDetail | undefined = {} as SharingDetail) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { sharingDetail.odataType = n.getStringValue(); },
        "sharedBy": n => { sharingDetail.sharedBy = n.getObjectValue<InsightIdentity>(createInsightIdentityFromDiscriminatorValue); },
        "sharedDateTime": n => { sharingDetail.sharedDateTime = n.getDateValue(); },
        "sharingReference": n => { sharingDetail.sharingReference = n.getObjectValue<ResourceReference>(createResourceReferenceFromDiscriminatorValue); },
        "sharingSubject": n => { sharingDetail.sharingSubject = n.getStringValue(); },
        "sharingType": n => { sharingDetail.sharingType = n.getStringValue(); },
    }
}
