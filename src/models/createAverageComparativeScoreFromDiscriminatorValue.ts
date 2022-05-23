import {AverageComparativeScoreImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAverageComparativeScoreFromDiscriminatorValue(parseNode: ParseNode | undefined) : AverageComparativeScoreImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AverageComparativeScoreImpl();
}
