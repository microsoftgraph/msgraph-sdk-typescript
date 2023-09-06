import { deserializeIntoAverageComparativeScore } from './deserializeIntoAverageComparativeScore';
import { type AverageComparativeScore } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAverageComparativeScoreFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAverageComparativeScore;
}
