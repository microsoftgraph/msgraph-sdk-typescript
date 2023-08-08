import {serializeBaseCollectionPaginationCountResponse} from '../../../../models/serializeBaseCollectionPaginationCountResponse';
import {serializeSite} from '../../../../models/serializeSite';
import type {Site} from '../../../../models/site';
import type {RemoveResponse} from './removeResponse';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRemoveResponse(writer: SerializationWriter, removeResponse: RemoveResponse | undefined = {} as RemoveResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, removeResponse)
        writer.writeCollectionOfObjectValues<Site>("value", removeResponse.value, serializeSite);
}
