import { type ApprovalStage } from './approvalStage';
import { type ApprovalStageCollectionResponse } from './approvalStageCollectionResponse';
import { serializeApprovalStage } from './serializeApprovalStage';
import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeApprovalStageCollectionResponse(writer: SerializationWriter, approvalStageCollectionResponse: ApprovalStageCollectionResponse | undefined = {} as ApprovalStageCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, approvalStageCollectionResponse)
        writer.writeCollectionOfObjectValues<ApprovalStage>("value", approvalStageCollectionResponse.value, serializeApprovalStage);
}
