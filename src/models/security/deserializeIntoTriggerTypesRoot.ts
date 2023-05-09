import {deserializeIntoEntity} from '../deserializeIntoEntity';
import {createRetentionEventTypeFromDiscriminatorValue} from './createRetentionEventTypeFromDiscriminatorValue';
import {RetentionEventType} from './retentionEventType';
import {serializeRetentionEventType} from './serializeRetentionEventType';
import {TriggerTypesRoot} from './triggerTypesRoot';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTriggerTypesRoot(triggerTypesRoot: TriggerTypesRoot | undefined = {} as TriggerTypesRoot) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(triggerTypesRoot),
        "retentionEventTypes": n => { triggerTypesRoot.retentionEventTypes = n.getCollectionOfObjectValues<RetentionEventType>(createRetentionEventTypeFromDiscriminatorValue); },
    }
}
