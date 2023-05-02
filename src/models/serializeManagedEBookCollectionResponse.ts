import {ManagedEBook} from './managedEBook';
import {ManagedEBookCollectionResponse} from './managedEBookCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeManagedEBook} from './serializeManagedEBook';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeManagedEBookCollectionResponse(writer: SerializationWriter, managedEBookCollectionResponse: ManagedEBookCollectionResponse | undefined = {} as ManagedEBookCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, managedEBookCollectionResponse)
        writer.writeCollectionOfObjectValues<ManagedEBook>("value", managedEBookCollectionResponse.value, serializeManagedEBook);
}
