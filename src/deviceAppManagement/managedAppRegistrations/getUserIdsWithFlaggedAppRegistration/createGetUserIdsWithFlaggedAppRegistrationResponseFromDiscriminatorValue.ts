import {deserializeIntoGetUserIdsWithFlaggedAppRegistrationResponse} from './deserializeIntoGetUserIdsWithFlaggedAppRegistrationResponse';
import {GetUserIdsWithFlaggedAppRegistrationResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetUserIdsWithFlaggedAppRegistrationResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoGetUserIdsWithFlaggedAppRegistrationResponse;
}
