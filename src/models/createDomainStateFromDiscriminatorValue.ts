import {deserializeIntoDomainState} from './deserializeIntoDomainState';
import {DomainState} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDomainStateFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDomainState;
}
