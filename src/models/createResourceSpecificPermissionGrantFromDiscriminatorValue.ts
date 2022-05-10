import {ResourceSpecificPermissionGrantImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createResourceSpecificPermissionGrantFromDiscriminatorValue(parseNode: ParseNode | undefined) : ResourceSpecificPermissionGrantImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ResourceSpecificPermissionGrantImpl();
}
