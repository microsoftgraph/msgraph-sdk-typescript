import {deserializeIntoDomain} from './deserializeIntoDomain';
import {Domain} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDomainFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDomain;
}
