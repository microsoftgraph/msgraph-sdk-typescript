import { type SynchronizationJobRestartCriteria } from './synchronizationJobRestartCriteria';
import { SynchronizationJobRestartScope } from './synchronizationJobRestartScope';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoSynchronizationJobRestartCriteria(synchronizationJobRestartCriteria: SynchronizationJobRestartCriteria | undefined = {} as SynchronizationJobRestartCriteria) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { synchronizationJobRestartCriteria.odataType = n.getStringValue(); },
        "resetScope": n => { synchronizationJobRestartCriteria.resetScope = n.getCollectionOfEnumValues<SynchronizationJobRestartScope>(SynchronizationJobRestartScope); },
    }
}
