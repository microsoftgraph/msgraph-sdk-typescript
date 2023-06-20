import {serializeBaseCollectionPaginationCountResponse} from '../../models/serializeBaseCollectionPaginationCountResponse';
import {serializeSite} from '../../models/serializeSite';
import {Site} from '../../models/site';
import {AddResponse} from './addResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAddResponse(addResponse: AddResponse | undefined = {} as AddResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, addResponse)
        writer.writeCollectionOfObjectValues<Site>("value", addResponse.value, serializeSite);
}
