import { deserializeIntoAccessAction } from './deserializeIntoAccessAction';
import { type AccessAction } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAccessActionFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAccessAction;
}
