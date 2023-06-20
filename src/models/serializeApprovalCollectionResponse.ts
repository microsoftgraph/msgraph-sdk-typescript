import {Approval} from './approval';
import {ApprovalCollectionResponse} from './approvalCollectionResponse';
import {serializeApproval} from './serializeApproval';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeApprovalCollectionResponse(approvalCollectionResponse: ApprovalCollectionResponse | undefined = {} as ApprovalCollectionResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, approvalCollectionResponse)
        writer.writeCollectionOfObjectValues<Approval>("value", approvalCollectionResponse.value, serializeApproval);
}
