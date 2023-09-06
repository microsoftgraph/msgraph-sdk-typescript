import { type OnenotePage } from './onenotePage';
import { type OnenotePageCollectionResponse } from './onenotePageCollectionResponse';
import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeOnenotePage } from './serializeOnenotePage';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeOnenotePageCollectionResponse(writer: SerializationWriter, onenotePageCollectionResponse: OnenotePageCollectionResponse | undefined = {} as OnenotePageCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, onenotePageCollectionResponse)
        writer.writeCollectionOfObjectValues<OnenotePage>("value", onenotePageCollectionResponse.value, serializeOnenotePage);
}
