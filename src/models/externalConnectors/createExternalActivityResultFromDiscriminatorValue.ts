import { deserializeIntoExternalActivityResult } from './deserializeIntoExternalActivityResult';
import { type ExternalActivityResult } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createExternalActivityResultFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoExternalActivityResult;
}
