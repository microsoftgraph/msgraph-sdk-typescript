import {deserializeIntoSubjectSet} from './deserializeIntoSubjectSet';
import {ExternalSponsors} from './externalSponsors';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoExternalSponsors(externalSponsors: ExternalSponsors | undefined = {} as ExternalSponsors) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoSubjectSet(externalSponsors),
    }
}
