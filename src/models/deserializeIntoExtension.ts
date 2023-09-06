import { deserializeIntoEntity } from './deserializeIntoEntity';
import { type Extension } from './extension';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoExtension(extension: Extension | undefined = {} as Extension) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(extension),
    }
}
