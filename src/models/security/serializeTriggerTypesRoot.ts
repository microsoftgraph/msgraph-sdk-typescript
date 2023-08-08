import {serializeEntity} from '../serializeEntity';
import type {RetentionEventType} from './retentionEventType';
import {serializeRetentionEventType} from './serializeRetentionEventType';
import type {TriggerTypesRoot} from './triggerTypesRoot';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTriggerTypesRoot(writer: SerializationWriter, triggerTypesRoot: TriggerTypesRoot | undefined = {} as TriggerTypesRoot) : void {
        serializeEntity(writer, triggerTypesRoot)
        writer.writeCollectionOfObjectValues<RetentionEventType>("retentionEventTypes", triggerTypesRoot.retentionEventTypes, serializeRetentionEventType);
}
