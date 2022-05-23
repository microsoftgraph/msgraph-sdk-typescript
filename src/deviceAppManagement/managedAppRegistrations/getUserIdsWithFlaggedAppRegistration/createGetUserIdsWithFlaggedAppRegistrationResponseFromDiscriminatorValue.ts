import {GetUserIdsWithFlaggedAppRegistrationResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetUserIdsWithFlaggedAppRegistrationResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetUserIdsWithFlaggedAppRegistrationResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetUserIdsWithFlaggedAppRegistrationResponseImpl();
}
