import { type ApprovalSettings } from './approvalSettings';
import { createUnifiedApprovalStageFromDiscriminatorValue } from './createUnifiedApprovalStageFromDiscriminatorValue';
import { serializeUnifiedApprovalStage } from './serializeUnifiedApprovalStage';
import { type UnifiedApprovalStage } from './unifiedApprovalStage';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoApprovalSettings(approvalSettings: ApprovalSettings | undefined = {} as ApprovalSettings) : Record<string, (node: ParseNode) => void> {
    return {
        "approvalMode": n => { approvalSettings.approvalMode = n.getStringValue(); },
        "approvalStages": n => { approvalSettings.approvalStages = n.getCollectionOfObjectValues<UnifiedApprovalStage>(createUnifiedApprovalStageFromDiscriminatorValue); },
        "isApprovalRequired": n => { approvalSettings.isApprovalRequired = n.getBooleanValue(); },
        "isApprovalRequiredForExtension": n => { approvalSettings.isApprovalRequiredForExtension = n.getBooleanValue(); },
        "isRequestorJustificationRequired": n => { approvalSettings.isRequestorJustificationRequired = n.getBooleanValue(); },
        "@odata.type": n => { approvalSettings.odataType = n.getStringValue(); },
    }
}
