import {ScoredEmailAddress} from './scoredEmailAddress';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createScoredEmailAddressFromDiscriminatorValue(parseNode: ParseNode | undefined) : ScoredEmailAddress {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ScoredEmailAddress();
}
