import {Notebook} from './notebook';
import {NotebookCollectionResponse} from './notebookCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeNotebook} from './serializeNotebook';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeNotebookCollectionResponse(writer: SerializationWriter, notebookCollectionResponse: NotebookCollectionResponse | undefined = {} as NotebookCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, notebookCollectionResponse)
        writer.writeCollectionOfObjectValues<Notebook>("value", notebookCollectionResponse.value, serializeNotebook);
}
