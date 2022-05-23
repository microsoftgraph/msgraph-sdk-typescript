import {OnenoteSectionImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOnenoteSectionFromDiscriminatorValue(parseNode: ParseNode | undefined) : OnenoteSectionImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new OnenoteSectionImpl();
}
