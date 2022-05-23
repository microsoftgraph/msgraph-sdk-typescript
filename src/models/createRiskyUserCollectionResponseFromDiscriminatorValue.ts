import {RiskyUserCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRiskyUserCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : RiskyUserCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RiskyUserCollectionResponseImpl();
}
