import { deserializeIntoExternalSponsors } from './deserializeIntoExternalSponsors';
import { type ExternalSponsors } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createExternalSponsorsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoExternalSponsors;
}
