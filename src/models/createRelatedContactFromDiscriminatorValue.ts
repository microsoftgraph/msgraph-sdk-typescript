import {deserializeIntoRelatedContact} from './deserializeIntoRelatedContact';
import {RelatedContact} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRelatedContactFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoRelatedContact;
}
