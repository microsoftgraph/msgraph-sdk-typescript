import { deserializeIntoUserActivity } from './deserializeIntoUserActivity';
import { type UserActivity } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createUserActivityFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserActivity;
}
