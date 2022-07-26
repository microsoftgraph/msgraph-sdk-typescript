import {AppHostedMediaConfig} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAppHostedMediaConfigFromDiscriminatorValue(parseNode: ParseNode | undefined) : AppHostedMediaConfig {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AppHostedMediaConfig();
}
