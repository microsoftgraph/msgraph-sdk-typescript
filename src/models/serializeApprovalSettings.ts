import {ApprovalSettings} from './approvalSettings';
import {serializeUnifiedApprovalStage} from './serializeUnifiedApprovalStage';
import {UnifiedApprovalStage} from './unifiedApprovalStage';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeApprovalSettings(writer: SerializationWriter, approvalSettings: ApprovalSettings | undefined = {} as ApprovalSettings) : void {
        writer.writeStringValue("approvalMode", approvalSettings.approvalMode);
        writer.writeCollectionOfObjectValues<UnifiedApprovalStage>("approvalStages", approvalSettings.approvalStages, serializeUnifiedApprovalStage);
        writer.writeBooleanValue("isApprovalRequired", approvalSettings.isApprovalRequired);
        writer.writeBooleanValue("isApprovalRequiredForExtension", approvalSettings.isApprovalRequiredForExtension);
        writer.writeBooleanValue("isRequestorJustificationRequired", approvalSettings.isRequestorJustificationRequired);
        writer.writeStringValue("@odata.type", approvalSettings.odataType);
        writer.writeAdditionalData(approvalSettings.additionalData);
}
