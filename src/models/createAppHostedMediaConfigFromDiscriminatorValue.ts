import {AppHostedMediaConfigImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAppHostedMediaConfigFromDiscriminatorValue(parseNode: ParseNode | undefined) : AppHostedMediaConfigImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AppHostedMediaConfigImpl();
}
