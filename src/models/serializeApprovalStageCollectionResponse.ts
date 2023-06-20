import {ApprovalStage} from './approvalStage';
import {ApprovalStageCollectionResponse} from './approvalStageCollectionResponse';
import {serializeApprovalStage} from './serializeApprovalStage';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeApprovalStageCollectionResponse(approvalStageCollectionResponse: ApprovalStageCollectionResponse | undefined = {} as ApprovalStageCollectionResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, approvalStageCollectionResponse)
        writer.writeCollectionOfObjectValues<ApprovalStage>("value", approvalStageCollectionResponse.value, serializeApprovalStage);
}
