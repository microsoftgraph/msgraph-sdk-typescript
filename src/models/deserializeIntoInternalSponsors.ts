import { deserializeIntoSubjectSet } from './deserializeIntoSubjectSet';
import { type InternalSponsors } from './internalSponsors';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoInternalSponsors(internalSponsors: InternalSponsors | undefined = {} as InternalSponsors) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoSubjectSet(internalSponsors),
    }
}
