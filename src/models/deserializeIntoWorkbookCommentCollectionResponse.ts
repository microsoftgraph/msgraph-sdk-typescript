import {createWorkbookCommentFromDiscriminatorValue} from './createWorkbookCommentFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeWorkbookComment} from './serializeWorkbookComment';
import type {WorkbookComment} from './workbookComment';
import type {WorkbookCommentCollectionResponse} from './workbookCommentCollectionResponse';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookCommentCollectionResponse(workbookCommentCollectionResponse: WorkbookCommentCollectionResponse | undefined = {} as WorkbookCommentCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(workbookCommentCollectionResponse),
        "value": n => { workbookCommentCollectionResponse.value = n.getCollectionOfObjectValues<WorkbookComment>(createWorkbookCommentFromDiscriminatorValue); },
    }
}
