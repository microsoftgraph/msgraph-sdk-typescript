import { deserializeIntoServiceHostedMediaConfig } from './deserializeIntoServiceHostedMediaConfig';
import { type ServiceHostedMediaConfig } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createServiceHostedMediaConfigFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoServiceHostedMediaConfig;
}
