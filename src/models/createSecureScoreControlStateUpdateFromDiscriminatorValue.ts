import { deserializeIntoSecureScoreControlStateUpdate } from './deserializeIntoSecureScoreControlStateUpdate';
import { type SecureScoreControlStateUpdate } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSecureScoreControlStateUpdateFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSecureScoreControlStateUpdate;
}
