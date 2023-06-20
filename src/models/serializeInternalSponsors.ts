import {InternalSponsors} from './internalSponsors';
import {serializeSubjectSet} from './serializeSubjectSet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeInternalSponsors(internalSponsors: InternalSponsors | undefined = {} as InternalSponsors, writer: SerializationWriter) : void {
        serializeSubjectSet(writer, internalSponsors)
}
