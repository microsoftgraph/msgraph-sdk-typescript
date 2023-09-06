import { deserializeIntoOnPremisesDirectorySynchronization } from './deserializeIntoOnPremisesDirectorySynchronization';
import { type OnPremisesDirectorySynchronization } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createOnPremisesDirectorySynchronizationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoOnPremisesDirectorySynchronization;
}
