import type {SynchronizationJobRestartCriteria} from './synchronizationJobRestartCriteria';
import {SynchronizationJobRestartScope} from './synchronizationJobRestartScope';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSynchronizationJobRestartCriteria(synchronizationJobRestartCriteria: SynchronizationJobRestartCriteria | undefined = {} as SynchronizationJobRestartCriteria) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { synchronizationJobRestartCriteria.odataType = n.getStringValue(); },
        "resetScope": n => { synchronizationJobRestartCriteria.resetScope = n.getEnumValue<SynchronizationJobRestartScope>(SynchronizationJobRestartScope); },
    }
}
