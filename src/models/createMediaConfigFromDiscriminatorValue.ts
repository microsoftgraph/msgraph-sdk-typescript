import {AppHostedMediaConfig, MediaConfig, ServiceHostedMediaConfig} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMediaConfigFromDiscriminatorValue(parseNode: ParseNode | undefined) : MediaConfig {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.appHostedMediaConfig":
                    return new AppHostedMediaConfig();
                case "#microsoft.graph.serviceHostedMediaConfig":
                    return new ServiceHostedMediaConfig();
            }
        }
    }
    return new MediaConfig();
}
