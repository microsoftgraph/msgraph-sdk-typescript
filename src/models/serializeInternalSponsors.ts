import {InternalSponsors} from './internalSponsors';
import {serializeSubjectSet} from './serializeSubjectSet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeInternalSponsors(writer: SerializationWriter, internalSponsors: InternalSponsors | undefined = {} as InternalSponsors) : void {
        serializeSubjectSet(writer, internalSponsors)
}
