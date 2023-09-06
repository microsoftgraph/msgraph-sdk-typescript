import { deserializeIntoEntity } from './deserializeIntoEntity';
import { type ManagedAppStatus } from './managedAppStatus';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoManagedAppStatus(managedAppStatus: ManagedAppStatus | undefined = {} as ManagedAppStatus) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(managedAppStatus),
        "displayName": n => { managedAppStatus.displayName = n.getStringValue(); },
        "version": n => { managedAppStatus.version = n.getStringValue(); },
    }
}
