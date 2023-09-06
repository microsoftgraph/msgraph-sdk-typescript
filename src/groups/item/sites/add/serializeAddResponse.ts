import { serializeBaseCollectionPaginationCountResponse } from '../../../../models/serializeBaseCollectionPaginationCountResponse';
import { serializeSite } from '../../../../models/serializeSite';
import { type Site } from '../../../../models/site';
import { type AddResponse } from './addResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeAddResponse(writer: SerializationWriter, addResponse: AddResponse | undefined = {} as AddResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, addResponse)
        writer.writeCollectionOfObjectValues<Site>("value", addResponse.value, serializeSite);
}
