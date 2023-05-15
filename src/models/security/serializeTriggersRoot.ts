import {serializeEntity} from '../serializeEntity';
import {RetentionEvent} from './retentionEvent';
import {serializeRetentionEvent} from './serializeRetentionEvent';
import {TriggersRoot} from './triggersRoot';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTriggersRoot(writer: SerializationWriter, triggersRoot: TriggersRoot | undefined = {} as TriggersRoot) : void {
        serializeEntity(writer, triggersRoot)
        writer.writeCollectionOfObjectValues<RetentionEvent>("retentionEvents", triggersRoot.retentionEvents, serializeRetentionEvent);
}
