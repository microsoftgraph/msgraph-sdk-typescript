import { deserializeIntoSynchronizationSchema } from './deserializeIntoSynchronizationSchema';
import { type SynchronizationSchema } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSynchronizationSchemaFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSynchronizationSchema;
}
