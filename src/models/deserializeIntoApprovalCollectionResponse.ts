import {Approval} from './approval';
import {ApprovalCollectionResponse} from './approvalCollectionResponse';
import {createApprovalFromDiscriminatorValue} from './createApprovalFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeApproval} from './serializeApproval';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoApprovalCollectionResponse(approvalCollectionResponse: ApprovalCollectionResponse | undefined = {} as ApprovalCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(approvalCollectionResponse),
        "value": n => { approvalCollectionResponse.value = n.getCollectionOfObjectValues<Approval>(createApprovalFromDiscriminatorValue); },
    }
}
