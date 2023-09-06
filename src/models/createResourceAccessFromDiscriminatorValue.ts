import { deserializeIntoResourceAccess } from './deserializeIntoResourceAccess';
import { type ResourceAccess } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createResourceAccessFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoResourceAccess;
}
