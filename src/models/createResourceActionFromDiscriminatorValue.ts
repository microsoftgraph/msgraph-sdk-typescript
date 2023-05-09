import {deserializeIntoResourceAction} from './deserializeIntoResourceAction';
import {ResourceAction} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createResourceActionFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoResourceAction;
}
