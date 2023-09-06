import { deserializeIntoDisplayNameLocalization } from './deserializeIntoDisplayNameLocalization';
import { type DisplayNameLocalization } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createDisplayNameLocalizationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDisplayNameLocalization;
}
