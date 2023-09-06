import { deserializeIntoInferenceClassificationOverride } from './deserializeIntoInferenceClassificationOverride';
import { type InferenceClassificationOverride } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createInferenceClassificationOverrideFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoInferenceClassificationOverride;
}
