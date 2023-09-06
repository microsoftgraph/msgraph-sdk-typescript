import { deserializeIntoDomain } from './deserializeIntoDomain';
import { type Domain } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createDomainFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDomain;
}
