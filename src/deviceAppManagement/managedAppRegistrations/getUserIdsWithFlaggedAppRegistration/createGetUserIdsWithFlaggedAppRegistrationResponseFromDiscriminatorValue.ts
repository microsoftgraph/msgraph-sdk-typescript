import { deserializeIntoGetUserIdsWithFlaggedAppRegistrationResponse } from './deserializeIntoGetUserIdsWithFlaggedAppRegistrationResponse';
import { type GetUserIdsWithFlaggedAppRegistrationResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createGetUserIdsWithFlaggedAppRegistrationResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoGetUserIdsWithFlaggedAppRegistrationResponse;
}
