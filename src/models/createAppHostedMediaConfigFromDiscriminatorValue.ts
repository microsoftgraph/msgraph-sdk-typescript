import { deserializeIntoAppHostedMediaConfig } from './deserializeIntoAppHostedMediaConfig';
import { type AppHostedMediaConfig } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAppHostedMediaConfigFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAppHostedMediaConfig;
}
