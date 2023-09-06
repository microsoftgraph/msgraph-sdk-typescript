import { serializeEntity } from '../serializeEntity';
import { type RetentionEvent } from './retentionEvent';
import { serializeRetentionEvent } from './serializeRetentionEvent';
import { type TriggersRoot } from './triggersRoot';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeTriggersRoot(writer: SerializationWriter, triggersRoot: TriggersRoot | undefined = {} as TriggersRoot) : void {
        serializeEntity(writer, triggersRoot)
        writer.writeCollectionOfObjectValues<RetentionEvent>("retentionEvents", triggersRoot.retentionEvents, serializeRetentionEvent);
}
