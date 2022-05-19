import {ChecklistItemCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createChecklistItemCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ChecklistItemCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ChecklistItemCollectionResponse();
}
