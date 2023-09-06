import { deserializeIntoMobileThreatDefenseConnectorCollectionResponse } from './deserializeIntoMobileThreatDefenseConnectorCollectionResponse';
import { type MobileThreatDefenseConnectorCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createMobileThreatDefenseConnectorCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMobileThreatDefenseConnectorCollectionResponse;
}
