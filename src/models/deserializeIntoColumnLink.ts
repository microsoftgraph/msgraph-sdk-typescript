import {ColumnLink} from './columnLink';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoColumnLink(columnLink: ColumnLink | undefined = {} as ColumnLink) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(columnLink),
        "name": n => { columnLink.name = n.getStringValue(); },
    }
}
