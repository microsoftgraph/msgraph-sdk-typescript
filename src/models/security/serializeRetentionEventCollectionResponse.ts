import {serializeBaseCollectionPaginationCountResponse} from '../serializeBaseCollectionPaginationCountResponse';
import type {RetentionEvent} from './retentionEvent';
import type {RetentionEventCollectionResponse} from './retentionEventCollectionResponse';
import {serializeRetentionEvent} from './serializeRetentionEvent';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRetentionEventCollectionResponse(writer: SerializationWriter, retentionEventCollectionResponse: RetentionEventCollectionResponse | undefined = {} as RetentionEventCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, retentionEventCollectionResponse)
        writer.writeCollectionOfObjectValues<RetentionEvent>("value", retentionEventCollectionResponse.value, serializeRetentionEvent);
}
