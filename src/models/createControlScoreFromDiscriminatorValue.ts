import { deserializeIntoControlScore } from './deserializeIntoControlScore';
import { type ControlScore } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createControlScoreFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoControlScore;
}
