import {deserializeIntoMobileAppContentFile} from './deserializeIntoMobileAppContentFile';
import {MobileAppContentFile} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMobileAppContentFileFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMobileAppContentFile;
}
