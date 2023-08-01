import type {AccessPackageAssignmentRequestCallbackData} from './accessPackageAssignmentRequestCallbackData';
import {AccessPackageCustomExtensionStage} from './accessPackageCustomExtensionStage';
import {serializeCustomExtensionData} from './serializeCustomExtensionData';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAccessPackageAssignmentRequestCallbackData(writer: SerializationWriter, accessPackageAssignmentRequestCallbackData: AccessPackageAssignmentRequestCallbackData | undefined = {} as AccessPackageAssignmentRequestCallbackData) : void {
        serializeCustomExtensionData(writer, accessPackageAssignmentRequestCallbackData)
        writer.writeStringValue("customExtensionStageInstanceDetail", accessPackageAssignmentRequestCallbackData.customExtensionStageInstanceDetail);
        writer.writeStringValue("customExtensionStageInstanceId", accessPackageAssignmentRequestCallbackData.customExtensionStageInstanceId);
        writer.writeEnumValue<AccessPackageCustomExtensionStage>("stage", accessPackageAssignmentRequestCallbackData.stage);
        writer.writeStringValue("state", accessPackageAssignmentRequestCallbackData.state);
}
