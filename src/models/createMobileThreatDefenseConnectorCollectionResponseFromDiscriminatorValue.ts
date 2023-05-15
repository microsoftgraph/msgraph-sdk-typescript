import {deserializeIntoMobileThreatDefenseConnectorCollectionResponse} from './deserializeIntoMobileThreatDefenseConnectorCollectionResponse';
import {MobileThreatDefenseConnectorCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMobileThreatDefenseConnectorCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMobileThreatDefenseConnectorCollectionResponse;
}
