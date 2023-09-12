import { deserializeIntoIosVppEBook } from './deserializeIntoIosVppEBook';
import { type IosVppEBook } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createIosVppEBookFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoIosVppEBook;
}
