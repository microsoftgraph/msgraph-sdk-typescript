import { deserializeIntoFeatureTarget } from './deserializeIntoFeatureTarget';
import { type FeatureTarget } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createFeatureTargetFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoFeatureTarget;
}
