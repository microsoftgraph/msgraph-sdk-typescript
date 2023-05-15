import {serializeBaseCollectionPaginationCountResponse} from '../serializeBaseCollectionPaginationCountResponse';
import {serializeTerm} from './serializeTerm';
import {Term} from './term';
import {TermCollectionResponse} from './termCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTermCollectionResponse(writer: SerializationWriter, termCollectionResponse: TermCollectionResponse | undefined = {} as TermCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, termCollectionResponse)
        writer.writeCollectionOfObjectValues<Term>("value", termCollectionResponse.value, serializeTerm);
}
