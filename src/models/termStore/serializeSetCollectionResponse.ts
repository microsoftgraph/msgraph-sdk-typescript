import { serializeBaseCollectionPaginationCountResponse } from '../serializeBaseCollectionPaginationCountResponse';
import { serializeSet } from './serializeSet';
import { type Set } from './set';
import { type SetCollectionResponse } from './setCollectionResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeSetCollectionResponse(writer: SerializationWriter, setCollectionResponse: SetCollectionResponse | undefined = {} as SetCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, setCollectionResponse)
        writer.writeCollectionOfObjectValues<Set>("value", setCollectionResponse.value, serializeSet);
}
