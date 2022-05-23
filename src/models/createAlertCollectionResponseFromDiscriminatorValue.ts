import {AlertCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAlertCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : AlertCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AlertCollectionResponseImpl();
}
