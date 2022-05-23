import {PersonCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPersonCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : PersonCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PersonCollectionResponseImpl();
}
