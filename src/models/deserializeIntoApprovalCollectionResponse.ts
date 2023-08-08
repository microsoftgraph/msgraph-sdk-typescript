import type {Approval} from './approval';
import type {ApprovalCollectionResponse} from './approvalCollectionResponse';
import {createApprovalFromDiscriminatorValue} from './createApprovalFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeApproval} from './serializeApproval';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoApprovalCollectionResponse(approvalCollectionResponse: ApprovalCollectionResponse | undefined = {} as ApprovalCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(approvalCollectionResponse),
        "value": n => { approvalCollectionResponse.value = n.getCollectionOfObjectValues<Approval>(createApprovalFromDiscriminatorValue); },
    }
}
