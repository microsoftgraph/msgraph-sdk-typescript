import type {Approval} from './approval';
import type {ApprovalCollectionResponse} from './approvalCollectionResponse';
import {serializeApproval} from './serializeApproval';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeApprovalCollectionResponse(writer: SerializationWriter, approvalCollectionResponse: ApprovalCollectionResponse | undefined = {} as ApprovalCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, approvalCollectionResponse)
        writer.writeCollectionOfObjectValues<Approval>("value", approvalCollectionResponse.value, serializeApproval);
}
