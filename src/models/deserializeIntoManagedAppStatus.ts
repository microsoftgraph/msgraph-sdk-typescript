import {deserializeIntoEntity} from './deserializeIntoEntity';
import {ManagedAppStatus} from './managedAppStatus';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoManagedAppStatus(managedAppStatus: ManagedAppStatus | undefined = {} as ManagedAppStatus) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(managedAppStatus),
        "displayName": n => { managedAppStatus.displayName = n.getStringValue(); },
        "version": n => { managedAppStatus.version = n.getStringValue(); },
    }
}
