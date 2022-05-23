import {PrintUsageByUserCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPrintUsageByUserCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : PrintUsageByUserCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PrintUsageByUserCollectionResponseImpl();
}
