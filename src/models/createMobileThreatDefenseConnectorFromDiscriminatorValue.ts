import { deserializeIntoMobileThreatDefenseConnector } from './deserializeIntoMobileThreatDefenseConnector';
import { type MobileThreatDefenseConnector } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createMobileThreatDefenseConnectorFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMobileThreatDefenseConnector;
}
