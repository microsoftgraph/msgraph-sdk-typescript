import {serializeBaseCollectionPaginationCountResponse} from '../serializeBaseCollectionPaginationCountResponse';
import {RetentionEvent} from './retentionEvent';
import {RetentionEventCollectionResponse} from './retentionEventCollectionResponse';
import {serializeRetentionEvent} from './serializeRetentionEvent';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRetentionEventCollectionResponse(writer: SerializationWriter, retentionEventCollectionResponse: RetentionEventCollectionResponse | undefined = {} as RetentionEventCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, retentionEventCollectionResponse)
        writer.writeCollectionOfObjectValues<RetentionEvent>("value", retentionEventCollectionResponse.value, serializeRetentionEvent);
}
