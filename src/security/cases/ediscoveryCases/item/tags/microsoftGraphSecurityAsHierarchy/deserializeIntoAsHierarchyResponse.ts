import {deserializeIntoBaseCollectionPaginationCountResponse} from '../../../../../../models/deserializeIntoBaseCollectionPaginationCountResponse';
import {createEdiscoveryReviewTagFromDiscriminatorValue} from '../../../../../../models/security/createEdiscoveryReviewTagFromDiscriminatorValue';
import type {EdiscoveryReviewTag} from '../../../../../../models/security/ediscoveryReviewTag';
import {serializeEdiscoveryReviewTag} from '../../../../../../models/security/serializeEdiscoveryReviewTag';
import type {AsHierarchyResponse} from './asHierarchyResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAsHierarchyResponse(asHierarchyResponse: AsHierarchyResponse | undefined = {} as AsHierarchyResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(asHierarchyResponse),
        "value": n => { asHierarchyResponse.value = n.getCollectionOfObjectValues<EdiscoveryReviewTag>(createEdiscoveryReviewTagFromDiscriminatorValue); },
    }
}
