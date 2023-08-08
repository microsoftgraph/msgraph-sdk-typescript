import type {ManagedEBook} from './managedEBook';
import type {ManagedEBookCollectionResponse} from './managedEBookCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeManagedEBook} from './serializeManagedEBook';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeManagedEBookCollectionResponse(writer: SerializationWriter, managedEBookCollectionResponse: ManagedEBookCollectionResponse | undefined = {} as ManagedEBookCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, managedEBookCollectionResponse)
        writer.writeCollectionOfObjectValues<ManagedEBook>("value", managedEBookCollectionResponse.value, serializeManagedEBook);
}
