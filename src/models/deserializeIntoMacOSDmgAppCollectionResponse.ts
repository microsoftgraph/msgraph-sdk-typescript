import { createMacOSDmgAppFromDiscriminatorValue } from './createMacOSDmgAppFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { type MacOSDmgApp } from './macOSDmgApp';
import { type MacOSDmgAppCollectionResponse } from './macOSDmgAppCollectionResponse';
import { serializeMacOSDmgApp } from './serializeMacOSDmgApp';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoMacOSDmgAppCollectionResponse(macOSDmgAppCollectionResponse: MacOSDmgAppCollectionResponse | undefined = {} as MacOSDmgAppCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(macOSDmgAppCollectionResponse),
        "value": n => { macOSDmgAppCollectionResponse.value = n.getCollectionOfObjectValues<MacOSDmgApp>(createMacOSDmgAppFromDiscriminatorValue); },
    }
}
