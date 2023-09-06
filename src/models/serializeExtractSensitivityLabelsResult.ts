import { type ExtractSensitivityLabelsResult } from './extractSensitivityLabelsResult';
import { type SensitivityLabelAssignment } from './sensitivityLabelAssignment';
import { serializeSensitivityLabelAssignment } from './serializeSensitivityLabelAssignment';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeExtractSensitivityLabelsResult(writer: SerializationWriter, extractSensitivityLabelsResult: ExtractSensitivityLabelsResult | undefined = {} as ExtractSensitivityLabelsResult) : void {
        writer.writeCollectionOfObjectValues<SensitivityLabelAssignment>("labels", extractSensitivityLabelsResult.labels, serializeSensitivityLabelAssignment);
        writer.writeStringValue("@odata.type", extractSensitivityLabelsResult.odataType);
        writer.writeAdditionalData(extractSensitivityLabelsResult.additionalData);
}
