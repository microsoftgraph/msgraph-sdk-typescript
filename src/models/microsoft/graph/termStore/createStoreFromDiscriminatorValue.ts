import {Store} from './store';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createStoreFromDiscriminatorValue(parseNode: ParseNode | undefined) : Store {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Store();
}
