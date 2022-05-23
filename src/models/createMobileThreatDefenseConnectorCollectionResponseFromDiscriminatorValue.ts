import {MobileThreatDefenseConnectorCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMobileThreatDefenseConnectorCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : MobileThreatDefenseConnectorCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MobileThreatDefenseConnectorCollectionResponseImpl();
}
