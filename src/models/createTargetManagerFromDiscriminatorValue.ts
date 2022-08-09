import {TargetManager} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTargetManagerFromDiscriminatorValue(parseNode: ParseNode | undefined) : TargetManager {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TargetManager();
}
