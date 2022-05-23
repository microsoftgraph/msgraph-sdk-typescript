import {TargetResourceImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTargetResourceFromDiscriminatorValue(parseNode: ParseNode | undefined) : TargetResourceImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TargetResourceImpl();
}
