import { type MacOSDmgApp } from './macOSDmgApp';
import { type MacOSDmgAppCollectionResponse } from './macOSDmgAppCollectionResponse';
import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeMacOSDmgApp } from './serializeMacOSDmgApp';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeMacOSDmgAppCollectionResponse(writer: SerializationWriter, macOSDmgAppCollectionResponse: MacOSDmgAppCollectionResponse | undefined = {} as MacOSDmgAppCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, macOSDmgAppCollectionResponse)
        writer.writeCollectionOfObjectValues<MacOSDmgApp>("value", macOSDmgAppCollectionResponse.value, serializeMacOSDmgApp);
}
