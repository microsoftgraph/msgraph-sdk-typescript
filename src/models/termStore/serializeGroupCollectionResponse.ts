import {serializeBaseCollectionPaginationCountResponse} from '../serializeBaseCollectionPaginationCountResponse';
import {Group} from './group';
import {GroupCollectionResponse} from './groupCollectionResponse';
import {serializeGroup} from './serializeGroup';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGroupCollectionResponse(groupCollectionResponse: GroupCollectionResponse | undefined = {} as GroupCollectionResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, groupCollectionResponse)
        writer.writeCollectionOfObjectValues<Group>("value", groupCollectionResponse.value, serializeGroup);
}
