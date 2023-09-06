import { deserializeIntoInternalSponsors } from './deserializeIntoInternalSponsors';
import { type InternalSponsors } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createInternalSponsorsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoInternalSponsors;
}
