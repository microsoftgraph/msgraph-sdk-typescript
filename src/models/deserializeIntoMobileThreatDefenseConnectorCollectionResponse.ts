import {createMobileThreatDefenseConnectorFromDiscriminatorValue} from './createMobileThreatDefenseConnectorFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {MobileThreatDefenseConnector} from './mobileThreatDefenseConnector';
import {MobileThreatDefenseConnectorCollectionResponse} from './mobileThreatDefenseConnectorCollectionResponse';
import {serializeMobileThreatDefenseConnector} from './serializeMobileThreatDefenseConnector';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMobileThreatDefenseConnectorCollectionResponse(mobileThreatDefenseConnectorCollectionResponse: MobileThreatDefenseConnectorCollectionResponse | undefined = {} as MobileThreatDefenseConnectorCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(mobileThreatDefenseConnectorCollectionResponse),
        "value": n => { mobileThreatDefenseConnectorCollectionResponse.value = n.getCollectionOfObjectValues<MobileThreatDefenseConnector>(createMobileThreatDefenseConnectorFromDiscriminatorValue); },
    }
}
