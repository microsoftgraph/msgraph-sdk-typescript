import { deserializeIntoTeamsAsyncOperation } from './deserializeIntoTeamsAsyncOperation';
import { type TeamsAsyncOperation } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createTeamsAsyncOperationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTeamsAsyncOperation;
}
