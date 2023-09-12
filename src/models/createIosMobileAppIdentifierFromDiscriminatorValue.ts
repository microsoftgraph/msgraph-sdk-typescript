import { deserializeIntoIosMobileAppIdentifier } from './deserializeIntoIosMobileAppIdentifier';
import { type IosMobileAppIdentifier } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createIosMobileAppIdentifierFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoIosMobileAppIdentifier;
}
