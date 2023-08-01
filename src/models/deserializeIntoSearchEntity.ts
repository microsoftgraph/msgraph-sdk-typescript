import {deserializeIntoEntity} from './deserializeIntoEntity';
import type {SearchEntity} from './searchEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSearchEntity(searchEntity: SearchEntity | undefined = {} as SearchEntity) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(searchEntity),
    }
}
