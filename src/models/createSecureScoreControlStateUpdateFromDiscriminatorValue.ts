import {SecureScoreControlStateUpdateImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSecureScoreControlStateUpdateFromDiscriminatorValue(parseNode: ParseNode | undefined) : SecureScoreControlStateUpdateImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SecureScoreControlStateUpdateImpl();
}
