import {SecureScoreImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSecureScoreFromDiscriminatorValue(parseNode: ParseNode | undefined) : SecureScoreImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SecureScoreImpl();
}
