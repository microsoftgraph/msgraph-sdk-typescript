import {deserializeIntoOnenotePage} from './deserializeIntoOnenotePage';
import {OnenotePage} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOnenotePageFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoOnenotePage;
}
