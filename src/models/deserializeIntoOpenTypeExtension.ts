import {deserializeIntoExtension} from './deserializeIntoExtension';
import {OpenTypeExtension} from './openTypeExtension';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOpenTypeExtension(openTypeExtension: OpenTypeExtension | undefined = {} as OpenTypeExtension) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoExtension(openTypeExtension),
        "extensionName": n => { openTypeExtension.extensionName = n.getStringValue(); },
    }
}
