import {DomainIdentitySource} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDomainIdentitySourceFromDiscriminatorValue(parseNode: ParseNode | undefined) : DomainIdentitySource {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DomainIdentitySource();
}
