import {OnenotePage} from './onenotePage';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOnenotePageFromDiscriminatorValue(parseNode: ParseNode | undefined) : OnenotePage {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new OnenotePage();
}
