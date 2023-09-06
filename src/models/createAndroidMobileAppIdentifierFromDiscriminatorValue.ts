import { deserializeIntoAndroidMobileAppIdentifier } from './deserializeIntoAndroidMobileAppIdentifier';
import { type AndroidMobileAppIdentifier } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAndroidMobileAppIdentifierFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAndroidMobileAppIdentifier;
}
