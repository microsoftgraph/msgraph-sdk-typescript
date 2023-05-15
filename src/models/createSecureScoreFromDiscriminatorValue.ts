import {deserializeIntoSecureScore} from './deserializeIntoSecureScore';
import {SecureScore} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSecureScoreFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSecureScore;
}
