import { deserializeIntoRequiredResourceAccess } from './deserializeIntoRequiredResourceAccess';
import { type RequiredResourceAccess } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createRequiredResourceAccessFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoRequiredResourceAccess;
}
