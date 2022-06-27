import {AppHostedMediaConfigImpl, MediaConfigImpl, ServiceHostedMediaConfigImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMediaConfigFromDiscriminatorValue(parseNode: ParseNode | undefined) : MediaConfigImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.appHostedMediaConfig":
                    return new AppHostedMediaConfigImpl();
                case "#microsoft.graph.serviceHostedMediaConfig":
                    return new ServiceHostedMediaConfigImpl();
            }
        }
    }
    return new MediaConfigImpl();
}
