import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeWindowsMobileMSI } from './serializeWindowsMobileMSI';
import { type WindowsMobileMSI } from './windowsMobileMSI';
import { type WindowsMobileMSICollectionResponse } from './windowsMobileMSICollectionResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeWindowsMobileMSICollectionResponse(writer: SerializationWriter, windowsMobileMSICollectionResponse: WindowsMobileMSICollectionResponse | undefined = {} as WindowsMobileMSICollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, windowsMobileMSICollectionResponse)
        writer.writeCollectionOfObjectValues<WindowsMobileMSI>("value", windowsMobileMSICollectionResponse.value, serializeWindowsMobileMSI);
}
