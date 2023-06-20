import {ChecklistItem} from './checklistItem';
import {ChecklistItemCollectionResponse} from './checklistItemCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeChecklistItem} from './serializeChecklistItem';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeChecklistItemCollectionResponse(checklistItemCollectionResponse: ChecklistItemCollectionResponse | undefined = {} as ChecklistItemCollectionResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, checklistItemCollectionResponse)
        writer.writeCollectionOfObjectValues<ChecklistItem>("value", checklistItemCollectionResponse.value, serializeChecklistItem);
}
