import {TargetManagerImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTargetManagerFromDiscriminatorValue(parseNode: ParseNode | undefined) : TargetManagerImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TargetManagerImpl();
}
