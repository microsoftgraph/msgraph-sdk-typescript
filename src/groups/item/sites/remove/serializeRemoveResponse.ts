import {serializeBaseCollectionPaginationCountResponse} from '../../../../models/serializeBaseCollectionPaginationCountResponse';
import {serializeSite} from '../../../../models/serializeSite';
import {Site} from '../../../../models/site';
import {RemoveResponse} from './removeResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRemoveResponse(writer: SerializationWriter, removeResponse: RemoveResponse | undefined = {} as RemoveResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, removeResponse)
        writer.writeCollectionOfObjectValues<Site>("value", removeResponse.value, serializeSite);
}
