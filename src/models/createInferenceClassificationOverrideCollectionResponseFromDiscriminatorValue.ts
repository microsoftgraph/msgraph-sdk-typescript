import { deserializeIntoInferenceClassificationOverrideCollectionResponse } from './deserializeIntoInferenceClassificationOverrideCollectionResponse';
import { type InferenceClassificationOverrideCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createInferenceClassificationOverrideCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoInferenceClassificationOverrideCollectionResponse;
}
