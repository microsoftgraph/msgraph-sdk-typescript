import {TargetApplicationOwnersImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTargetApplicationOwnersFromDiscriminatorValue(parseNode: ParseNode | undefined) : TargetApplicationOwnersImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TargetApplicationOwnersImpl();
}
