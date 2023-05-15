import {deserializeIntoSubjectSet} from './deserializeIntoSubjectSet';
import {InternalSponsors} from './internalSponsors';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoInternalSponsors(internalSponsors: InternalSponsors | undefined = {} as InternalSponsors) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoSubjectSet(internalSponsors),
    }
}
