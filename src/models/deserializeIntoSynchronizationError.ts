import {SynchronizationError} from './synchronizationError';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSynchronizationError(synchronizationError: SynchronizationError | undefined = {} as SynchronizationError) : Record<string, (node: ParseNode) => void> {
    return {
        "code": n => { synchronizationError.code = n.getStringValue(); },
        "message": n => { synchronizationError.message = n.getStringValue(); },
        "@odata.type": n => { synchronizationError.odataType = n.getStringValue(); },
        "tenantActionable": n => { synchronizationError.tenantActionable = n.getBooleanValue(); },
    }
}
