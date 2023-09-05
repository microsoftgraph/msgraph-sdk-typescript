import { deserializeIntoAzureAdPopTokenAuthentication } from './deserializeIntoAzureAdPopTokenAuthentication';
import { type AzureAdPopTokenAuthentication } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAzureAdPopTokenAuthenticationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAzureAdPopTokenAuthentication;
}
