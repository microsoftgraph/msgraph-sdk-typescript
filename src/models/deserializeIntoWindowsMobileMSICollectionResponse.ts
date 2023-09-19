import { createWindowsMobileMSIFromDiscriminatorValue } from './createWindowsMobileMSIFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { serializeWindowsMobileMSI } from './serializeWindowsMobileMSI';
import { type WindowsMobileMSI } from './windowsMobileMSI';
import { type WindowsMobileMSICollectionResponse } from './windowsMobileMSICollectionResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoWindowsMobileMSICollectionResponse(windowsMobileMSICollectionResponse: WindowsMobileMSICollectionResponse | undefined = {} as WindowsMobileMSICollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(windowsMobileMSICollectionResponse),
        "value": n => { windowsMobileMSICollectionResponse.value = n.getCollectionOfObjectValues<WindowsMobileMSI>(createWindowsMobileMSIFromDiscriminatorValue); },
    }
}
