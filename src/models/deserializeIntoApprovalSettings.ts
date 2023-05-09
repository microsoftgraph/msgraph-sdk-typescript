import {ApprovalSettings} from './approvalSettings';
import {createUnifiedApprovalStageFromDiscriminatorValue} from './createUnifiedApprovalStageFromDiscriminatorValue';
import {serializeUnifiedApprovalStage} from './serializeUnifiedApprovalStage';
import {UnifiedApprovalStage} from './unifiedApprovalStage';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

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
