import {OpenTypeExtensionImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOpenTypeExtensionFromDiscriminatorValue(parseNode: ParseNode | undefined) : OpenTypeExtensionImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new OpenTypeExtensionImpl();
}
