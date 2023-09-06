import { deserializeIntoSecureScore } from './deserializeIntoSecureScore';
import { type SecureScore } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSecureScoreFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSecureScore;
}
