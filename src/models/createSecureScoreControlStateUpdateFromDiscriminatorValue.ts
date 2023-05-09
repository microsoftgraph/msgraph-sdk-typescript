import {deserializeIntoSecureScoreControlStateUpdate} from './deserializeIntoSecureScoreControlStateUpdate';
import {SecureScoreControlStateUpdate} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSecureScoreControlStateUpdateFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSecureScoreControlStateUpdate;
}
