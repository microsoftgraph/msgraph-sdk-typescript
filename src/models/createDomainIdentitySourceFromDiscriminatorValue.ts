import {deserializeIntoDomainIdentitySource} from './deserializeIntoDomainIdentitySource';
import {DomainIdentitySource} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDomainIdentitySourceFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDomainIdentitySource;
}
