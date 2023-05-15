import {AccessPackageApprovalStage} from './accessPackageApprovalStage';
import {AccessPackageAssignmentApprovalSettings} from './accessPackageAssignmentApprovalSettings';
import {createAccessPackageApprovalStageFromDiscriminatorValue} from './createAccessPackageApprovalStageFromDiscriminatorValue';
import {serializeAccessPackageApprovalStage} from './serializeAccessPackageApprovalStage';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAccessPackageAssignmentApprovalSettings(accessPackageAssignmentApprovalSettings: AccessPackageAssignmentApprovalSettings | undefined = {} as AccessPackageAssignmentApprovalSettings) : Record<string, (node: ParseNode) => void> {
    return {
        "isApprovalRequiredForAdd": n => { accessPackageAssignmentApprovalSettings.isApprovalRequiredForAdd = n.getBooleanValue(); },
        "isApprovalRequiredForUpdate": n => { accessPackageAssignmentApprovalSettings.isApprovalRequiredForUpdate = n.getBooleanValue(); },
        "@odata.type": n => { accessPackageAssignmentApprovalSettings.odataType = n.getStringValue(); },
        "stages": n => { accessPackageAssignmentApprovalSettings.stages = n.getCollectionOfObjectValues<AccessPackageApprovalStage>(createAccessPackageApprovalStageFromDiscriminatorValue); },
    }
}
