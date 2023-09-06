import { deserializeIntoEntity } from '../deserializeIntoEntity';
import { type Artifact } from './artifact';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoArtifact(artifact: Artifact | undefined = {} as Artifact) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(artifact),
    }
}
