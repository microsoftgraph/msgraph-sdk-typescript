import {MobileThreatDefenseConnectorImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMobileThreatDefenseConnectorFromDiscriminatorValue(parseNode: ParseNode | undefined) : MobileThreatDefenseConnectorImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MobileThreatDefenseConnectorImpl();
}
