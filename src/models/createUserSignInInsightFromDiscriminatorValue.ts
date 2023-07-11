import {deserializeIntoUserSignInInsight} from './deserializeIntoUserSignInInsight';
import {UserSignInInsight} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUserSignInInsightFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserSignInInsight;
}
