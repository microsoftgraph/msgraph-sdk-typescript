import { deserializeIntoExtractSensitivityLabelsResult } from './deserializeIntoExtractSensitivityLabelsResult';
import { type ExtractSensitivityLabelsResult } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createExtractSensitivityLabelsResultFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoExtractSensitivityLabelsResult;
}
