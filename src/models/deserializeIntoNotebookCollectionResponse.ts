import {createNotebookFromDiscriminatorValue} from './createNotebookFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import type {Notebook} from './notebook';
import type {NotebookCollectionResponse} from './notebookCollectionResponse';
import {serializeNotebook} from './serializeNotebook';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoNotebookCollectionResponse(notebookCollectionResponse: NotebookCollectionResponse | undefined = {} as NotebookCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(notebookCollectionResponse),
        "value": n => { notebookCollectionResponse.value = n.getCollectionOfObjectValues<Notebook>(createNotebookFromDiscriminatorValue); },
    }
}
