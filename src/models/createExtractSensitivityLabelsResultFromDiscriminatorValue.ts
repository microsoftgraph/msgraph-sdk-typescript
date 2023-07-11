import {deserializeIntoExtractSensitivityLabelsResult} from './deserializeIntoExtractSensitivityLabelsResult';
import {ExtractSensitivityLabelsResult} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createExtractSensitivityLabelsResultFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoExtractSensitivityLabelsResult;
}
