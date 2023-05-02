import {OnenoteResource} from './onenoteResource';
import {OnenoteResourceCollectionResponse} from './onenoteResourceCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeOnenoteResource} from './serializeOnenoteResource';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeOnenoteResourceCollectionResponse(writer: SerializationWriter, onenoteResourceCollectionResponse: OnenoteResourceCollectionResponse | undefined = {} as OnenoteResourceCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, onenoteResourceCollectionResponse)
        writer.writeCollectionOfObjectValues<OnenoteResource>("value", onenoteResourceCollectionResponse.value, serializeOnenoteResource);
}
