import {deserializeIntoScoredEmailAddress} from './deserializeIntoScoredEmailAddress';
import {ScoredEmailAddress} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createScoredEmailAddressFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoScoredEmailAddress;
}
