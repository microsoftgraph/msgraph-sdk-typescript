import type {EdiscoveryReviewTag} from '../../../../../../models/security/ediscoveryReviewTag';
import {serializeEdiscoveryReviewTag} from '../../../../../../models/security/serializeEdiscoveryReviewTag';
import {serializeBaseCollectionPaginationCountResponse} from '../../../../../../models/serializeBaseCollectionPaginationCountResponse';
import type {AsHierarchyResponse} from './asHierarchyResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAsHierarchyResponse(writer: SerializationWriter, asHierarchyResponse: AsHierarchyResponse | undefined = {} as AsHierarchyResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, asHierarchyResponse)
        writer.writeCollectionOfObjectValues<EdiscoveryReviewTag>("value", asHierarchyResponse.value, serializeEdiscoveryReviewTag);
}
