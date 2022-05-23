import {MediaConfigImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMediaConfigFromDiscriminatorValue(parseNode: ParseNode | undefined) : MediaConfigImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MediaConfigImpl();
}
