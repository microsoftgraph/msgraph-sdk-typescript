import { deserializeIntoExtension } from './deserializeIntoExtension';
import { type OpenTypeExtension } from './openTypeExtension';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoOpenTypeExtension(openTypeExtension: OpenTypeExtension | undefined = {} as OpenTypeExtension) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoExtension(openTypeExtension),
        "extensionName": n => { openTypeExtension.extensionName = n.getStringValue(); },
    }
}
