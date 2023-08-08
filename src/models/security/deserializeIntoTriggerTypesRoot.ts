import {deserializeIntoEntity} from '../deserializeIntoEntity';
import {createRetentionEventTypeFromDiscriminatorValue} from './createRetentionEventTypeFromDiscriminatorValue';
import type {RetentionEventType} from './retentionEventType';
import {serializeRetentionEventType} from './serializeRetentionEventType';
import type {TriggerTypesRoot} from './triggerTypesRoot';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTriggerTypesRoot(triggerTypesRoot: TriggerTypesRoot | undefined = {} as TriggerTypesRoot) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(triggerTypesRoot),
        "retentionEventTypes": n => { triggerTypesRoot.retentionEventTypes = n.getCollectionOfObjectValues<RetentionEventType>(createRetentionEventTypeFromDiscriminatorValue); },
    }
}
