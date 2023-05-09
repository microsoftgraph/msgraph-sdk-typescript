import {deserializeIntoDisplayNameLocalization} from './deserializeIntoDisplayNameLocalization';
import {DisplayNameLocalization} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDisplayNameLocalizationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDisplayNameLocalization;
}
