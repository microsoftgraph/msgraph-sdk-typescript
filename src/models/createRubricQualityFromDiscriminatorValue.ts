import { deserializeIntoRubricQuality } from './deserializeIntoRubricQuality';
import { type RubricQuality } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createRubricQualityFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoRubricQuality;
}
