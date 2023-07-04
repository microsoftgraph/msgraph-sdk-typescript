import {deserializeIntoUserSummary} from './deserializeIntoUserSummary';
import {UserSummary} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUserSummaryFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserSummary;
}
