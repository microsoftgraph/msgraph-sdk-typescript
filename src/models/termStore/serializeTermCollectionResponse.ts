import { serializeBaseCollectionPaginationCountResponse } from '../serializeBaseCollectionPaginationCountResponse';
import { serializeTerm } from './serializeTerm';
import { type Term } from './term';
import { type TermCollectionResponse } from './termCollectionResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeTermCollectionResponse(writer: SerializationWriter, termCollectionResponse: TermCollectionResponse | undefined = {} as TermCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, termCollectionResponse)
        writer.writeCollectionOfObjectValues<Term>("value", termCollectionResponse.value, serializeTerm);
}
