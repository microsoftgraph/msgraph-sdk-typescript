import { deserializeIntoMobileAppContentFile } from './deserializeIntoMobileAppContentFile';
import { type MobileAppContentFile } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createMobileAppContentFileFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMobileAppContentFile;
}
