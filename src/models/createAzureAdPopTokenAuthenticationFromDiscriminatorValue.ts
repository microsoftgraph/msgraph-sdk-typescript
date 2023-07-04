import {deserializeIntoAzureAdPopTokenAuthentication} from './deserializeIntoAzureAdPopTokenAuthentication';
import {AzureAdPopTokenAuthentication} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAzureAdPopTokenAuthenticationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAzureAdPopTokenAuthentication;
}
