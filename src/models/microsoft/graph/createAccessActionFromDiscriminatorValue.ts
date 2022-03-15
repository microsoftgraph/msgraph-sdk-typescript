import {AccessAction} from './accessAction';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessActionFromDiscriminatorValue(parseNode: ParseNode | undefined) : AccessAction {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AccessAction();
}
