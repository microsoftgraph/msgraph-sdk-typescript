import {IosVppEBook} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIosVppEBookFromDiscriminatorValue(parseNode: ParseNode | undefined) : IosVppEBook {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IosVppEBook();
}
