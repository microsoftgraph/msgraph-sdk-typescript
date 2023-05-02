import {deserializeIntoInternalSponsors} from './deserializeIntoInternalSponsors';
import {InternalSponsors} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createInternalSponsorsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoInternalSponsors;
}
