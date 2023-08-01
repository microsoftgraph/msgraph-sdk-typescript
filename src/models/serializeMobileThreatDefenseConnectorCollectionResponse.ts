import type {MobileThreatDefenseConnector} from './mobileThreatDefenseConnector';
import type {MobileThreatDefenseConnectorCollectionResponse} from './mobileThreatDefenseConnectorCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeMobileThreatDefenseConnector} from './serializeMobileThreatDefenseConnector';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMobileThreatDefenseConnectorCollectionResponse(writer: SerializationWriter, mobileThreatDefenseConnectorCollectionResponse: MobileThreatDefenseConnectorCollectionResponse | undefined = {} as MobileThreatDefenseConnectorCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, mobileThreatDefenseConnectorCollectionResponse)
        writer.writeCollectionOfObjectValues<MobileThreatDefenseConnector>("value", mobileThreatDefenseConnectorCollectionResponse.value, serializeMobileThreatDefenseConnector);
}
