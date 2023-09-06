import { deserializeIntoSubjectSet } from './deserializeIntoSubjectSet';
import { type ExternalSponsors } from './externalSponsors';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoExternalSponsors(externalSponsors: ExternalSponsors | undefined = {} as ExternalSponsors) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoSubjectSet(externalSponsors),
    }
}
