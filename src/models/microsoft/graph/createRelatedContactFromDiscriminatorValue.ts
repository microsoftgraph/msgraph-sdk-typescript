import {RelatedContact} from './relatedContact';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRelatedContactFromDiscriminatorValue(parseNode: ParseNode | undefined) : RelatedContact {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RelatedContact();
}
