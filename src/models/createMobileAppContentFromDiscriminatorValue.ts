import { deserializeIntoMobileAppContent } from './deserializeIntoMobileAppContent';
import { type MobileAppContent } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createMobileAppContentFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMobileAppContent;
}
