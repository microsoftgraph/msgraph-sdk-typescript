import {createSensitivityLabelAssignmentFromDiscriminatorValue} from './createSensitivityLabelAssignmentFromDiscriminatorValue';
import type {ExtractSensitivityLabelsResult} from './extractSensitivityLabelsResult';
import type {SensitivityLabelAssignment} from './sensitivityLabelAssignment';
import {serializeSensitivityLabelAssignment} from './serializeSensitivityLabelAssignment';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoExtractSensitivityLabelsResult(extractSensitivityLabelsResult: ExtractSensitivityLabelsResult | undefined = {} as ExtractSensitivityLabelsResult) : Record<string, (node: ParseNode) => void> {
    return {
        "labels": n => { extractSensitivityLabelsResult.labels = n.getCollectionOfObjectValues<SensitivityLabelAssignment>(createSensitivityLabelAssignmentFromDiscriminatorValue); },
        "@odata.type": n => { extractSensitivityLabelsResult.odataType = n.getStringValue(); },
    }
}
