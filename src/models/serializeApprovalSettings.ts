import { type ApprovalSettings } from './approvalSettings';
import { serializeUnifiedApprovalStage } from './serializeUnifiedApprovalStage';
import { type UnifiedApprovalStage } from './unifiedApprovalStage';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeApprovalSettings(writer: SerializationWriter, approvalSettings: ApprovalSettings | undefined = {} as ApprovalSettings) : void {
        writer.writeStringValue("approvalMode", approvalSettings.approvalMode);
        writer.writeCollectionOfObjectValues<UnifiedApprovalStage>("approvalStages", approvalSettings.approvalStages, serializeUnifiedApprovalStage);
        writer.writeBooleanValue("isApprovalRequired", approvalSettings.isApprovalRequired);
        writer.writeBooleanValue("isApprovalRequiredForExtension", approvalSettings.isApprovalRequiredForExtension);
        writer.writeBooleanValue("isRequestorJustificationRequired", approvalSettings.isRequestorJustificationRequired);
        writer.writeStringValue("@odata.type", approvalSettings.odataType);
        writer.writeAdditionalData(approvalSettings.additionalData);
}
