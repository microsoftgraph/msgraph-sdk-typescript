import type {Group} from './group';
import type {GroupCollectionResponse} from './groupCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeGroup} from './serializeGroup';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGroupCollectionResponse(writer: SerializationWriter, groupCollectionResponse: GroupCollectionResponse | undefined = {} as GroupCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, groupCollectionResponse)
        writer.writeCollectionOfObjectValues<Group>("value", groupCollectionResponse.value, serializeGroup);
}
