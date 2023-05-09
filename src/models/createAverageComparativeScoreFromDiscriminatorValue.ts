import {deserializeIntoAverageComparativeScore} from './deserializeIntoAverageComparativeScore';
import {AverageComparativeScore} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAverageComparativeScoreFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAverageComparativeScore;
}
