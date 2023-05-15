import {OnenotePage} from './onenotePage';
import {OnenotePageCollectionResponse} from './onenotePageCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeOnenotePage} from './serializeOnenotePage';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeOnenotePageCollectionResponse(writer: SerializationWriter, onenotePageCollectionResponse: OnenotePageCollectionResponse | undefined = {} as OnenotePageCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, onenotePageCollectionResponse)
        writer.writeCollectionOfObjectValues<OnenotePage>("value", onenotePageCollectionResponse.value, serializeOnenotePage);
}
