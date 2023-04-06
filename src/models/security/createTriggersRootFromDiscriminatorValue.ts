import {TriggersRoot} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTriggersRootFromDiscriminatorValue(parseNode: ParseNode | undefined) : TriggersRoot {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TriggersRoot();
}
