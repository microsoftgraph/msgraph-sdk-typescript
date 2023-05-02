import {deserializeIntoControlScore} from './deserializeIntoControlScore';
import {ControlScore} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createControlScoreFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoControlScore;
}
