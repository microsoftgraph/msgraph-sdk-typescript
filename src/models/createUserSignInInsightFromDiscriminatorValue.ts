import { deserializeIntoUserSignInInsight } from './deserializeIntoUserSignInInsight';
import { type UserSignInInsight } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createUserSignInInsightFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserSignInInsight;
}
