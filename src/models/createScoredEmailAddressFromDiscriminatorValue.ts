import {ScoredEmailAddressImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createScoredEmailAddressFromDiscriminatorValue(parseNode: ParseNode | undefined) : ScoredEmailAddressImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ScoredEmailAddressImpl();
}
