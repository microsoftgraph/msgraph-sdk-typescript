import {createSensitivityLabelAssignmentFromDiscriminatorValue} from './createSensitivityLabelAssignmentFromDiscriminatorValue';
import {ExtractSensitivityLabelsResult} from './extractSensitivityLabelsResult';
import {SensitivityLabelAssignment} from './sensitivityLabelAssignment';
import {serializeSensitivityLabelAssignment} from './serializeSensitivityLabelAssignment';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoExtractSensitivityLabelsResult(extractSensitivityLabelsResult: ExtractSensitivityLabelsResult | undefined = {} as ExtractSensitivityLabelsResult) : Record<string, (node: ParseNode) => void> {
    return {
        "labels": n => { extractSensitivityLabelsResult.labels = n.getCollectionOfObjectValues<SensitivityLabelAssignment>(createSensitivityLabelAssignmentFromDiscriminatorValue); },
        "@odata.type": n => { extractSensitivityLabelsResult.odataType = n.getStringValue(); },
    }
}
