import {ApprovalStage} from './approvalStage';
import {ApprovalStageCollectionResponse} from './approvalStageCollectionResponse';
import {createApprovalStageFromDiscriminatorValue} from './createApprovalStageFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeApprovalStage} from './serializeApprovalStage';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoApprovalStageCollectionResponse(approvalStageCollectionResponse: ApprovalStageCollectionResponse | undefined = {} as ApprovalStageCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(approvalStageCollectionResponse),
        "value": n => { approvalStageCollectionResponse.value = n.getCollectionOfObjectValues<ApprovalStage>(createApprovalStageFromDiscriminatorValue); },
    }
}
