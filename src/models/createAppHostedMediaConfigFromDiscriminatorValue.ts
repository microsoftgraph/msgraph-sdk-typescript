import {deserializeIntoAppHostedMediaConfig} from './deserializeIntoAppHostedMediaConfig';
import {AppHostedMediaConfig} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAppHostedMediaConfigFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAppHostedMediaConfig;
}
