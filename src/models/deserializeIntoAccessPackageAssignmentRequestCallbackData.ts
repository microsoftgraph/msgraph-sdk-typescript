import type {AccessPackageAssignmentRequestCallbackData} from './accessPackageAssignmentRequestCallbackData';
import {AccessPackageCustomExtensionStage} from './accessPackageCustomExtensionStage';
import {deserializeIntoCustomExtensionData} from './deserializeIntoCustomExtensionData';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAccessPackageAssignmentRequestCallbackData(accessPackageAssignmentRequestCallbackData: AccessPackageAssignmentRequestCallbackData | undefined = {} as AccessPackageAssignmentRequestCallbackData) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoCustomExtensionData(accessPackageAssignmentRequestCallbackData),
        "customExtensionStageInstanceDetail": n => { accessPackageAssignmentRequestCallbackData.customExtensionStageInstanceDetail = n.getStringValue(); },
        "customExtensionStageInstanceId": n => { accessPackageAssignmentRequestCallbackData.customExtensionStageInstanceId = n.getStringValue(); },
        "stage": n => { accessPackageAssignmentRequestCallbackData.stage = n.getEnumValue<AccessPackageCustomExtensionStage>(AccessPackageCustomExtensionStage); },
        "state": n => { accessPackageAssignmentRequestCallbackData.state = n.getStringValue(); },
    }
}
