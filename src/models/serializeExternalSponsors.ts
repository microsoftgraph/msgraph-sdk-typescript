import {ExternalSponsors} from './externalSponsors';
import {serializeSubjectSet} from './serializeSubjectSet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeExternalSponsors(writer: SerializationWriter, externalSponsors: ExternalSponsors | undefined = {} as ExternalSponsors) : void {
        serializeSubjectSet(writer, externalSponsors)
}
