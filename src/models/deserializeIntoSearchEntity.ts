import { deserializeIntoEntity } from './deserializeIntoEntity';
import { type SearchEntity } from './searchEntity';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoSearchEntity(searchEntity: SearchEntity | undefined = {} as SearchEntity) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(searchEntity),
    }
}
