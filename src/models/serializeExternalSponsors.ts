import {ExternalSponsors} from './externalSponsors';
import {serializeSubjectSet} from './serializeSubjectSet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeExternalSponsors(externalSponsors: ExternalSponsors | undefined = {} as ExternalSponsors, writer: SerializationWriter) : void {
        serializeSubjectSet(writer, externalSponsors)
}
