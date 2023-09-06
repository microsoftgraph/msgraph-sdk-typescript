import { deserializeIntoAddGroupPostRequestBody } from './deserializeIntoAddGroupPostRequestBody';
import { type AddGroupPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAddGroupPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAddGroupPostRequestBody;
}
