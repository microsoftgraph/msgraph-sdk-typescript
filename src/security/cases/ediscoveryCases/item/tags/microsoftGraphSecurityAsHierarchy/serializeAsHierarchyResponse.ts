import {EdiscoveryReviewTag} from '../../../../../../models/security/ediscoveryReviewTag';
import {serializeEdiscoveryReviewTag} from '../../../../../../models/security/serializeEdiscoveryReviewTag';
import {serializeBaseCollectionPaginationCountResponse} from '../../../../../../models/serializeBaseCollectionPaginationCountResponse';
import {AsHierarchyResponse} from './asHierarchyResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAsHierarchyResponse(asHierarchyResponse: AsHierarchyResponse | undefined = {} as AsHierarchyResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, asHierarchyResponse)
        writer.writeCollectionOfObjectValues<EdiscoveryReviewTag>("value", asHierarchyResponse.value, serializeEdiscoveryReviewTag);
}
