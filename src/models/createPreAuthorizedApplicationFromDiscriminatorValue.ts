import { deserializeIntoPreAuthorizedApplication } from './deserializeIntoPreAuthorizedApplication';
import { type PreAuthorizedApplication } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createPreAuthorizedApplicationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPreAuthorizedApplication;
}
