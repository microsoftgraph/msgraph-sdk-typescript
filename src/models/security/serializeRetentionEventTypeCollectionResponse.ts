import {serializeBaseCollectionPaginationCountResponse} from '../serializeBaseCollectionPaginationCountResponse';
import type {RetentionEventType} from './retentionEventType';
import type {RetentionEventTypeCollectionResponse} from './retentionEventTypeCollectionResponse';
import {serializeRetentionEventType} from './serializeRetentionEventType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRetentionEventTypeCollectionResponse(writer: SerializationWriter, retentionEventTypeCollectionResponse: RetentionEventTypeCollectionResponse | undefined = {} as RetentionEventTypeCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, retentionEventTypeCollectionResponse)
        writer.writeCollectionOfObjectValues<RetentionEventType>("value", retentionEventTypeCollectionResponse.value, serializeRetentionEventType);
}
