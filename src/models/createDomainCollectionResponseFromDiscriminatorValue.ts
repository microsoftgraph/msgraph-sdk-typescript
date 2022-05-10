import {DomainCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDomainCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : DomainCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DomainCollectionResponseImpl();
}
