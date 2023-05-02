import {deserializeIntoEntity} from '../deserializeIntoEntity';
import {createRetentionEventFromDiscriminatorValue} from './createRetentionEventFromDiscriminatorValue';
import {RetentionEvent} from './retentionEvent';
import {serializeRetentionEvent} from './serializeRetentionEvent';
import {TriggersRoot} from './triggersRoot';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTriggersRoot(triggersRoot: TriggersRoot | undefined = {} as TriggersRoot) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(triggersRoot),
        "retentionEvents": n => { triggersRoot.retentionEvents = n.getCollectionOfObjectValues<RetentionEvent>(createRetentionEventFromDiscriminatorValue); },
    }
}
