import { type SynchronizationError } from './synchronizationError';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoSynchronizationError(synchronizationError: SynchronizationError | undefined = {} as SynchronizationError) : Record<string, (node: ParseNode) => void> {
    return {
        "code": n => { synchronizationError.code = n.getStringValue(); },
        "message": n => { synchronizationError.message = n.getStringValue(); },
        "@odata.type": n => { synchronizationError.odataType = n.getStringValue(); },
        "tenantActionable": n => { synchronizationError.tenantActionable = n.getBooleanValue(); },
    }
}
