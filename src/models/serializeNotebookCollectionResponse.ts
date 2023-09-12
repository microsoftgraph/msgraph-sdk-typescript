import { type Notebook } from './notebook';
import { type NotebookCollectionResponse } from './notebookCollectionResponse';
import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeNotebook } from './serializeNotebook';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeNotebookCollectionResponse(writer: SerializationWriter, notebookCollectionResponse: NotebookCollectionResponse | undefined = {} as NotebookCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, notebookCollectionResponse)
        writer.writeCollectionOfObjectValues<Notebook>("value", notebookCollectionResponse.value, serializeNotebook);
}
