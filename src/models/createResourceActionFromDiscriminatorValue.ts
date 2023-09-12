import { deserializeIntoResourceAction } from './deserializeIntoResourceAction';
import { type ResourceAction } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createResourceActionFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoResourceAction;
}
