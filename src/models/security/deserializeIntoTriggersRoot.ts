import { deserializeIntoEntity } from '../deserializeIntoEntity';
import { createRetentionEventFromDiscriminatorValue } from './createRetentionEventFromDiscriminatorValue';
import { type RetentionEvent } from './retentionEvent';
import { serializeRetentionEvent } from './serializeRetentionEvent';
import { type TriggersRoot } from './triggersRoot';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoTriggersRoot(triggersRoot: TriggersRoot | undefined = {} as TriggersRoot) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(triggersRoot),
        "retentionEvents": n => { triggersRoot.retentionEvents = n.getCollectionOfObjectValues<RetentionEvent>(createRetentionEventFromDiscriminatorValue); },
    }
}
