import {deserializeIntoPrivacy} from './deserializeIntoPrivacy';
import {Privacy} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPrivacyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPrivacy;
}
