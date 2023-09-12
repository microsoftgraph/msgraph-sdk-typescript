import { deserializeIntoPrivacy } from './deserializeIntoPrivacy';
import { type Privacy } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createPrivacyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPrivacy;
}
