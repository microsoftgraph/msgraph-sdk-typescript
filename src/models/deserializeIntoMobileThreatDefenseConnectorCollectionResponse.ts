import { createMobileThreatDefenseConnectorFromDiscriminatorValue } from './createMobileThreatDefenseConnectorFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { type MobileThreatDefenseConnector } from './mobileThreatDefenseConnector';
import { type MobileThreatDefenseConnectorCollectionResponse } from './mobileThreatDefenseConnectorCollectionResponse';
import { serializeMobileThreatDefenseConnector } from './serializeMobileThreatDefenseConnector';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoMobileThreatDefenseConnectorCollectionResponse(mobileThreatDefenseConnectorCollectionResponse: MobileThreatDefenseConnectorCollectionResponse | undefined = {} as MobileThreatDefenseConnectorCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(mobileThreatDefenseConnectorCollectionResponse),
        "value": n => { mobileThreatDefenseConnectorCollectionResponse.value = n.getCollectionOfObjectValues<MobileThreatDefenseConnector>(createMobileThreatDefenseConnectorFromDiscriminatorValue); },
    }
}
