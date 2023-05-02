import {deserializeIntoAppHostedMediaConfig} from './deserializeIntoAppHostedMediaConfig';
import {deserializeIntoMediaConfig} from './deserializeIntoMediaConfig';
import {deserializeIntoServiceHostedMediaConfig} from './deserializeIntoServiceHostedMediaConfig';
import {AppHostedMediaConfig, MediaConfig, ServiceHostedMediaConfig} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMediaConfigFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.appHostedMediaConfig":
                    return deserializeIntoAppHostedMediaConfig;
                case "#microsoft.graph.serviceHostedMediaConfig":
                    return deserializeIntoServiceHostedMediaConfig;
            }
        }
    }
    return deserializeIntoMediaConfig;
}
