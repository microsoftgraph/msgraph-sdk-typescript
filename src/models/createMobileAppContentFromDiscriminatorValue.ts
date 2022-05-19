import {MobileAppContent} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMobileAppContentFromDiscriminatorValue(parseNode: ParseNode | undefined) : MobileAppContent {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MobileAppContent();
}
