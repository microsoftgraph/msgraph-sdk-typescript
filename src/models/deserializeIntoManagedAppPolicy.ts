import { deserializeIntoEntity } from './deserializeIntoEntity';
import { type ManagedAppPolicy } from './managedAppPolicy';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoManagedAppPolicy(managedAppPolicy: ManagedAppPolicy | undefined = {} as ManagedAppPolicy) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(managedAppPolicy),
        "createdDateTime": n => { managedAppPolicy.createdDateTime = n.getDateValue(); },
        "description": n => { managedAppPolicy.description = n.getStringValue(); },
        "displayName": n => { managedAppPolicy.displayName = n.getStringValue(); },
        "lastModifiedDateTime": n => { managedAppPolicy.lastModifiedDateTime = n.getDateValue(); },
        "version": n => { managedAppPolicy.version = n.getStringValue(); },
    }
}
