import {ControlScoreImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createControlScoreFromDiscriminatorValue(parseNode: ParseNode | undefined) : ControlScoreImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ControlScoreImpl();
}
