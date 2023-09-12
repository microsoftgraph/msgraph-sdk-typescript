import { type ColumnLink } from './columnLink';
import { serializeEntity } from './serializeEntity';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeColumnLink(writer: SerializationWriter, columnLink: ColumnLink | undefined = {} as ColumnLink) : void {
        serializeEntity(writer, columnLink)
        writer.writeStringValue("name", columnLink.name);
}
