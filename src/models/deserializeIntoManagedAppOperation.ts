import { deserializeIntoEntity } from './deserializeIntoEntity';
import { type ManagedAppOperation } from './managedAppOperation';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoManagedAppOperation(managedAppOperation: ManagedAppOperation | undefined = {} as ManagedAppOperation) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(managedAppOperation),
        "displayName": n => { managedAppOperation.displayName = n.getStringValue(); },
        "lastModifiedDateTime": n => { managedAppOperation.lastModifiedDateTime = n.getDateValue(); },
        "state": n => { managedAppOperation.state = n.getStringValue(); },
        "version": n => { managedAppOperation.version = n.getStringValue(); },
    }
}
