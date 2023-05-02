import {ChecklistItem} from './checklistItem';
import {ChecklistItemCollectionResponse} from './checklistItemCollectionResponse';
import {createChecklistItemFromDiscriminatorValue} from './createChecklistItemFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeChecklistItem} from './serializeChecklistItem';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoChecklistItemCollectionResponse(checklistItemCollectionResponse: ChecklistItemCollectionResponse | undefined = {} as ChecklistItemCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(checklistItemCollectionResponse),
        "value": n => { checklistItemCollectionResponse.value = n.getCollectionOfObjectValues<ChecklistItem>(createChecklistItemFromDiscriminatorValue); },
    }
}
